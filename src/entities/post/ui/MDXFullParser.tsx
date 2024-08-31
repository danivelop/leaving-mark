// @ts-nocheck
import { ExclamationTriangleIcon } from '@heroicons/react/24/solid';
import Image from 'next/image';
import { MDXRemote } from 'next-mdx-remote/rsc';
import remarkGfm from 'remark-gfm';

import { replaceSpacesWithDash } from '@/shared/lib';

interface MDXParserProps {
  source: string;
}

function H1({ children }) {
  return <h1 id={replaceSpacesWithDash(children)}>{children}</h1>;
}

function H2({ children }) {
  return <h2 id={replaceSpacesWithDash(children)}>{children}</h2>;
}

function H3({ children }) {
  return <h3 id={replaceSpacesWithDash(children)}>{children}</h3>;
}

function H4({ children }) {
  return <h4 id={replaceSpacesWithDash(children)}>{children}</h4>;
}

function H5({ children }) {
  return <h5 id={replaceSpacesWithDash(children)}>{children}</h5>;
}

function H6({ children }) {
  return <h6 id={replaceSpacesWithDash(children)}>{children}</h6>;
}

function Anchor({ children, ...props }) {
  const isFragment = props.href.startsWith('#');
  return (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <a {...props} target={isFragment ? '_self' : '_blank'}>
      {children}
    </a>
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
        <ExclamationTriangleIcon className="size-5 xs:size-6" />
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
          rehypePlugins: [],
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
        a: Anchor,
        img: Img,
        blockquote: Blockquote,
        table: Table,
      }}
    />
  );
}

export default MDXFullParser;
