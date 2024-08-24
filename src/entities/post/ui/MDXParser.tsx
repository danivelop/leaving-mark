import { MDXRemote } from 'next-mdx-remote/rsc';

interface MDXParserProps {
  source: string;
}

function MDXParser({ source }: MDXParserProps) {
  return <MDXRemote source={source} />;
}

export default MDXParser;
