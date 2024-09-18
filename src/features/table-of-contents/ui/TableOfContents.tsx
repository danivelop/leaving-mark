import { getTableOfContents } from '@/features/table-of-contents/lib';
import { Space } from '@/shared/ui';

import Contents from './Contents';

interface TableOfContentsProps {
  content: string;
}

function TableOfContents({ content }: TableOfContentsProps) {
  const tableOfContents = getTableOfContents(content);

  return (
    <div className="w-fit">
      <p className="text-zinc-900 dark:text-zinc-100 text-base font-bold">
        On This Page
      </p>
      <Space className="h-4" />
      <Contents tableOfContents={tableOfContents} />
    </div>
  );
}

export default TableOfContents;
