// @ts-nocheck
/* eslint-disable */
import { MDXRemote } from 'next-mdx-remote/rsc';
import Image from 'next/image';
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
    <a {...props} target={isFragment ? '_self' : '_blank'}>
      {children}
    </a>
  );
}

function Img({ children, ...props }) {
  return (
    <Image
      {...props}
      width={props.width ?? '640'}
      height={props.width ?? '320'}
      className="w-full xs:w-4/5 md:w-3/4"
    />
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
      }}
    />
  );
}

export default MDXFullParser;
