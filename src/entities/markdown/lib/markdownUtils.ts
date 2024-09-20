import fs from 'fs';
import path from 'path';

type PostMetadata = {
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

function parseFrontmatter(fileContent: string) {
  const frontmatterRegex = /---\s*([\s\S]*?)\s*---/;
  const match = frontmatterRegex.exec(fileContent);
  const frontMatterBlock = match![1];
  const content = fileContent.replace(frontmatterRegex, '').trim();
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

  return { metadata: metadata as Metadata, content };
}

function getMarkdownDir(directoryName: string) {
  return path.join(process.cwd(), directoryName);
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
