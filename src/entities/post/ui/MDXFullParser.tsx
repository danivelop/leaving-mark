import { MDXRemote } from 'next-mdx-remote/rsc';

interface MDXParserProps {
  source: string;
}

function MDXFullParser({ source }: MDXParserProps) {
  return <MDXRemote source={source} />;
}

export default MDXFullParser;
