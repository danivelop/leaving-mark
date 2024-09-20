import { Space } from '@/shared/ui';

import TagList from './TagList';

import type { Post } from '@/entities/markdown';

interface TagFilterProps {
  label?: 'posts' | 'projects';
  markdowns: Post[];
  selectedTag?: string;
}

function TagFilter({
  label = 'posts',
  markdowns,
  selectedTag,
}: TagFilterProps) {
  const tags = Array.from(
    markdowns.reduce((acc, cur) => {
      cur.metadata.tags?.forEach((tag) => acc.add(tag));
      return acc;
    }, new Set<string>()),
  );
  const tagsWithAll = ['All', ...tags];
  const matchedPostCount = selectedTag
    ? markdowns.filter((markdown) =>
        markdown.metadata.tags?.includes(selectedTag),
      ).length
    : markdowns.length;

  return (
    <div className="layout-width flex flex-col items-center">
      <h1 className="text-3xl font-bold text-zinc-900 dark:text-zinc-100">
        {selectedTag ?? 'All'}
      </h1>
      <Space className="h-2" />
      <p className="text-zinc-500 dark:text-zinc-400">
        {matchedPostCount} {label}
      </p>
      <Space className="h-8" />
      <TagList tags={tagsWithAll} selectedTag={selectedTag} />
    </div>
  );
}

export default TagFilter;
