import MDXThumbParser from './MDXThumbParser';

interface ThumbMarkdownProps {
  content: string;
}

function ThumbMarkdown({ content }: ThumbMarkdownProps) {
  return (
    <div>
      <MDXThumbParser source={content} />
    </div>
  );
}

export default ThumbMarkdown;
