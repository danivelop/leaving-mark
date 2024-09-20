// @ts-nocheck
import { Lightbulb } from 'lucide-react';
import Image from 'next/image';
import { MDXRemote } from 'next-mdx-remote/rsc';
import rehypeExternalLinks from 'rehype-external-links';
import rehypePrismPlus from 'rehype-prism-plus';
import rehypeSlug from 'rehype-slug';
import remarkGfm from 'remark-gfm';

interface MDXParserProps {
  source: string;
}

function H1({ children, ...props }) {
  return (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <h1 className="scroll-mt-20" {...props}>
      {children}
    </h1>
  );
}

function H2({ children, ...props }) {
  return (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <h2 className="scroll-mt-20" {...props}>
      {children}
    </h2>
  );
}

function H3({ children, ...props }) {
  return (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <h3 className="scroll-mt-20" {...props}>
      {children}
    </h3>
  );
}

function H4({ children, ...props }) {
  return (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <h4 className="scroll-mt-20" {...props}>
      {children}
    </h4>
  );
}

function H5({ children, ...props }) {
  return (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <h5 className="scroll-mt-20" {...props}>
      {children}
    </h5>
  );
}

function H6({ children, ...props }) {
  return (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <h6 className="scroll-mt-20" {...props}>
      {children}
    </h6>
  );
}

function Img({ ...props }) {
  return (
    // eslint-disable-next-line jsx-a11y/alt-text
    <Image
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...props}
      width={props.width ?? '640'}
      height={props.width ?? '320'}
      className="w-full xs:w-4/5 md:w-3/4"
    />
  );
}

function Table({ children }) {
  return (
    <div className="w-full overflow-x-auto">
      <table>{children}</table>
    </div>
  );
}

function Blockquote({ children }) {
  return (
    <blockquote className="flex gap-2 xs:gap-4">
      <div className="w-5 xs:w-6 text-amber-500 pt-6 xs:pt-7">
        <Lightbulb className="size-5 xs:size-6" />
      </div>
      <div className="grow overflow-hidden">{children}</div>
    </blockquote>
  );
}

function MDXFullParser({ source }: MDXParserProps) {
  return (
    <MDXRemote
      source={source}
      options={{
        mdxOptions: {
          remarkPlugins: [remarkGfm],
          rehypePlugins: [
            [
              rehypeExternalLinks,
              { target: '_blank', rel: ['noopener', 'noreferrer'] },
            ],
            rehypeSlug,
            [
              rehypePrismPlus,
              {
                ignoreMissing: true,
                showLineNumbers: true,
                defaultLanguage: 'javascript',
              },
            ],
          ],
          format: 'mdx',
        },
      }}
      components={{
        h1: H1,
        h2: H2,
        h3: H3,
        h4: H4,
        h5: H5,
        h6: H6,
        img: Img,
        blockquote: Blockquote,
        table: Table,
      }}
    />
  );
}

export default MDXFullParser;
