import { Space } from '@/shared/ui';

import TagList from './TagList';

interface TagFilterProps {
  matchedPostCount: number;
  selectedTag?: string;
  tags: string[];
}

function TagFilter({ tags, selectedTag, matchedPostCount }: TagFilterProps) {
  const tagsWithAll = ['All', ...tags];

  return (
    <div className="layout-width flex flex-col items-center">
      <h1 className="text-3xl font-bold text-zinc-900 dark:text-zinc-100">
        {selectedTag ?? 'All'}
      </h1>
      <Space className="h-2" />
      <p className="text-zinc-500 dark:text-zinc-400">
        {matchedPostCount} posts
      </p>
      <Space className="h-8" />
      <TagList tags={tagsWithAll} selectedTag={selectedTag} />
    </div>
  );
}

export default TagFilter;
