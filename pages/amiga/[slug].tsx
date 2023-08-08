import type { GetStaticPaths, GetStaticProps } from 'next';
import FriendPage, { type Props } from '@/components/FriendPage';
import { LANG } from '@/lib/env';

export const getStaticPaths: GetStaticPaths = async () => {
  if (LANG === `en`) return { paths: [], fallback: false };
  return {
    paths: [{ params: { slug: `ann-branson` } }],
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<Props> = async () => {
  return { props: { name: `Ann Branson`, born: 1808 } };
};

export default FriendPage;
