export interface TableOfContent {
  tag: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  value: string;
}

export function getTableOfContents(content: string) {
  const headings: TableOfContent[] = [];
  const lines = content.split('\n');
  let inCodeBlock = false;

  const codeBlockRegex = /^```/;
  const headingRegex = /^(#{1,6})\s+(.*)$/;

  for (let i = 0; i < lines.length; i += 1) {
    const line = lines[i];

    if (codeBlockRegex.test(line.trim())) {
      inCodeBlock = !inCodeBlock;
    } else if (!inCodeBlock) {
      const match = headingRegex.exec(line.trim());
      if (match) {
        const hashes = match[1];
        const text = match[2].trim();
        const tag = `h${hashes.length}` as TableOfContent['tag'];
        headings.push({ tag, value: text });
      }
    }
  }

  return headings;
}

export function getIndentationStyle(tag: TableOfContent['tag']) {
  switch (tag) {
    case 'h1':
      return 'pl-0';
    case 'h2':
      return 'pl-2';
    case 'h3':
      return 'pl-4';
    case 'h4':
      return 'pl-6';
    case 'h5':
      return 'pl-8';
    case 'h6':
      return 'pl-10';
    default:
      return 0;
  }
}

export function getHeadingIdentity(value: string) {
  return value.toLowerCase().replace(/\s+/g, '-');
}
