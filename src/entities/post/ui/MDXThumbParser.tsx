// @ts-nocheck
import { MDXRemote } from 'next-mdx-remote/rsc';

interface MDXParserProps {
  source: string;
}

function H1({ children }) {
  return (
    <h1 className="inline">
      {children}
      <br />
    </h1>
  );
}

function H2({ children }) {
  return (
    <h2 className="inline">
      {children}
      <br />
    </h2>
  );
}

function H3({ children }) {
  return (
    <h3 className="inline">
      {children}
      <br />
    </h3>
  );
}

function H4({ children }) {
  return (
    <h4 className="inline">
      {children}
      <br />
    </h4>
  );
}

function H5({ children }) {
  return (
    <h5 className="inline">
      {children}
      <br />
    </h5>
  );
}

function H6({ children }) {
  return (
    <h6 className="inline">
      {children}
      <br />
    </h6>
  );
}

function P({ children }) {
  return (
    <p className="inline">
      {children}
      <br />
    </p>
  );
}

function Ul({ children }) {
  return <ul className="inline">{children}</ul>;
}

function Ol({ children }) {
  return <ol className="inline">{children}</ol>;
}

function Li({ children }) {
  return (
    <li className="inline">
      • {children}
      <br />
    </li>
  );
}

function Anchor({ children }) {
  return <span>{children}</span>;
}

function Image() {
  return null;
}

function Blockquote({ children }) {
  return <blockquote className="inline">{children}</blockquote>;
}

function Pre({ children }) {
  return children;
}

function Code({ children }) {
  return (
    <code className="inline">
      {children}
      <br />
    </code>
  );
}

function MDXFullParser({ source }: MDXParserProps) {
  return (
    <MDXRemote
      source={source}
      components={{
        h1: H1,
        h2: H2,
        h3: H3,
        h4: H4,
        h5: H5,
        h6: H6,
        p: P,
        ul: Ul,
        ol: Ol,
        li: Li,
        a: Anchor,
        img: Image,
        blockquote: Blockquote,
        pre: Pre,
        code: Code,
      }}
    />
  );
}

export default MDXFullParser;
