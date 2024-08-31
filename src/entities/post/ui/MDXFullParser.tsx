// @ts-nocheck
import { MDXRemote } from 'next-mdx-remote/rsc';
import remarkGfm from 'remark-gfm';

interface MDXParserProps {
  source: string;
}

function MDXFullParser({ source }: MDXParserProps) {
  return (
    <MDXRemote
      source={source}
      options={{
        mdxOptions: {
          remarkPlugins: [remarkGfm],
          rehypePlugins: [],
          format: 'md',
        },
      }}
    />
  );
}

export default MDXFullParser;
