import { getTableOfContents } from '@/features/table-of-contents/lib';
import { Space } from '@/shared/ui';

import Contents from './Contents';

interface TableOfContentsProps {
  className?: string;
  content: string;
}

function TableOfContents({ className, content }: TableOfContentsProps) {
  const tableOfContents = getTableOfContents(content);

  if (!tableOfContents.length) {
    return null;
  }

  return (
    <div className={`w-fit ${className}`}>
      <p className="text-zinc-900 dark:text-zinc-100 text-base font-bold whitespace-nowrap">
        On This Page
      </p>
      <Space className="h-4" />
      <Contents tableOfContents={tableOfContents} />
    </div>
  );
}

export default TableOfContents;
