import fs from 'fs';
import path from 'path';

import { getPostDir } from '@/entities/post';

export function getPostFileNames() {
  const postDir = getPostDir();
  const posts = fs
    .readdirSync(postDir)
    .filter((post) => path.extname(post) === '.mdx');

  return posts.map((post) => path.basename(post, path.extname(post)));
}
