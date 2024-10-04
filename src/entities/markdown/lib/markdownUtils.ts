import fs from 'fs';
import path from 'path';

type PostMetadata = {
  description?: string;
  image?: string;
  publishedAt: string;
  tags?: string[];
  title: string;
};

type ProjectMetadata = PostMetadata & {
  demo?: string;
  endedAt?: string;
  github?: string;
  startedAt?: string;
};

export type Post = {
  content: string;
  metadata: PostMetadata;
  slug: string;
};

export type Project = {
  content: string;
  metadata: ProjectMetadata;
  slug: string;
};

type Metadata = PostMetadata | ProjectMetadata;

const frontmatterRegex = /---\s*([\s\S]*?)\s*---/;

function parseMetadata(fileContent: string) {
  const match = frontmatterRegex.exec(fileContent);
  const frontMatterBlock = match![1];
  const frontMatterLines = frontMatterBlock.trim().split('\n');
  const metadata: Partial<Metadata> = {};

  frontMatterLines.forEach((line) => {
    const [key, ...valueArr] = line.split(': ');
    let value = valueArr.join(': ').trim();
    value = value.replace(/^['"](.*)['"]$/, '$1');
    if (key.trim() === 'tags') {
      metadata.tags = value.split(', ').map((tag) => tag.trim());
    } else {
      metadata[key.trim() as keyof Omit<Metadata, 'tags'>] = value;
    }
  });

  return metadata as Metadata;
}

function parseFrontmatter(fileContent: string) {
  const metadata = parseMetadata(fileContent);
  const content = fileContent.replace(frontmatterRegex, '').trim();

  return { metadata, content };
}

function getMarkdownDir(directoryName: string) {
  return path.join(process.cwd(), directoryName);
}

export function getMetadata(
  fileName: string,
  directoryName: 'posts',
): PostMetadata;
export function getMetadata(
  fileName: string,
  directoryName: 'projects',
): ProjectMetadata;
export function getMetadata(
  fileName: string,
  directoryName: 'posts' | 'projects',
) {
  const markdownDir = getMarkdownDir(directoryName);
  const markdownPath = path.join(markdownDir, `${fileName}.mdx`);
  const rawContent = fs.readFileSync(markdownPath, 'utf-8');
  const metadata = parseMetadata(rawContent);

  return metadata;
}

export function getMarkdown(fileName: string, directoryName: 'posts'): Post;
export function getMarkdown(
  fileName: string,
  directoryName: 'projects',
): Project;
export function getMarkdown(
  fileName: string,
  directoryName: 'posts' | 'projects',
) {
  const markdownDir = getMarkdownDir(directoryName);
  const markdownPath = path.join(markdownDir, `${fileName}.mdx`);
  const rawContent = fs.readFileSync(markdownPath, 'utf-8');
  const { metadata, content } = parseFrontmatter(rawContent);

  return {
    metadata,
    content,
    slug: fileName,
  };
}

export function getMarkdowns(directoryName: 'posts'): Post[];
export function getMarkdowns(directoryName: 'projects'): Project[];
export function getMarkdowns(directoryName: 'posts' | 'projects') {
  const markdownDir = getMarkdownDir(directoryName);
  const markdowns = fs
    .readdirSync(markdownDir)
    .filter((markdown) => path.extname(markdown) === '.mdx');

  if (directoryName === 'posts') {
    return markdowns.map((markdown) =>
      getMarkdown(path.basename(markdown, path.extname(markdown)), 'posts'),
    );
  }
  return markdowns.map((markdown) =>
    getMarkdown(path.basename(markdown, path.extname(markdown)), 'projects'),
  );
}
