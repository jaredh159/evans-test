import matter from 'gray-matter';
import { MDXRemote } from 'next-mdx-remote';
import { serialize } from 'next-mdx-remote/serialize';
import { type MDXRemoteSerializeResult } from 'next-mdx-remote';

import type { GetStaticPaths, GetStaticProps } from 'next';
import { LANG } from '@/lib/env';
import * as mdx from '@/lib/mdx';

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: mdx
      .fileData()
      .filter((file) => file.lang === LANG)
      .map(({ slug }) => ({ params: { static: slug } })),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<Props> = async (context) => {
  // @ts-ignore
  const source = mdx.source(context.params.static ?? ``, LANG);
  const { content, data: frontmatter } = matter(source);
  const mdxSource = await serialize(content, { scope: frontmatter });
  return { props: { source: mdxSource, frontmatter } };
};

interface Props {
  source: MDXRemoteSerializeResult;
  frontmatter: Record<string, unknown>;
}

const components = {
  Lead: (props: any) => <div {...props} style={{ color: `blue` }} />,
};

const StaticPage: React.FC<Props> = ({ source, frontmatter }) => {
  return (
    <div>
      <h1>Title: {frontmatter.title as string}</h1>
      <main>
        <MDXRemote {...source} components={components} />
      </main>
    </div>
  );
};

export default StaticPage;
