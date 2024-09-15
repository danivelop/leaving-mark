'use client';

import Link from 'next/link';
import { usePathname, useSearchParams } from 'next/navigation';

import { addQueryParam, removeQueryparam } from '@/shared/lib/navigationUtils';

interface TagListProps {
  selectedTag?: string;
  tags: string[];
}

function TagList({ tags, selectedTag }: TagListProps) {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const getHref = (tag: string) => {
    if (tag === 'All') {
      return removeQueryparam(pathname, searchParams, 'tag');
    }
    return addQueryParam(pathname, searchParams, 'tag', tag);
  };

  return (
    <ul className="flex justify-center gap-2 w-full overflow-x-auto mb-12 hide-scrollbar">
      {tags.map((tag) => (
        <li key={tag}>
          <Link
            href={getHref(tag)}
            replace
            className={`text-sm font-medium px-3 py-1 rounded-full transition-colors focus:outline-none hover:bg-lime-700 hover:text-zinc-100 ${
              (!selectedTag && tag === 'All') || tag === selectedTag
                ? 'bg-lime-700 text-zinc-100'
                : 'bg-zinc-100 text-zinc-700 dark:bg-zinc-800 dark:text-zinc-300'
            }`}
          >
            {tag}
          </Link>
        </li>
      ))}
    </ul>
  );
}

export default TagList;
