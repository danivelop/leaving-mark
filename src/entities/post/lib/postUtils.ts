import fs from 'fs';
import path from 'path';

type Metadata = {
  image?: string;
  publishedAt: string;
  summary: string;
  title: string;
};

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
    value = value.replace(/^['"](.*)['"]$/, '$1'); // Remove quotes
    metadata[key.trim() as keyof Metadata] = value;
  });

  return { metadata: metadata as Metadata, content };
}

function getPostDir() {
  return path.join(process.cwd(), 'src', 'posts');
}

export function getPost(fileName: string) {
  const postDir = getPostDir();
  const postPath = path.join(postDir, `${fileName}.mdx`);
  const rawContent = fs.readFileSync(postPath, 'utf-8');
  const { metadata, content } = parseFrontmatter(rawContent);

  return {
    metadata,
    content,
    slug: fileName,
  };
}

export function getPosts() {
  const postDir = getPostDir();
  const posts = fs
    .readdirSync(postDir)
    .filter((post) => path.extname(post) === '.mdx');

  return posts.map((post) => {
    return getPost(path.basename(post, path.extname(post)));
  });
}
