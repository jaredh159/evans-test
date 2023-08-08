import type { GetStaticPaths, GetStaticProps } from 'next';
import FriendPage, { type Props } from '@/components/FriendPage';
import { LANG } from '@/lib/env';

export const getStaticPaths: GetStaticPaths = async () => {
  if (LANG === `es`) return { paths: [], fallback: false };
  return {
    paths: [{ params: { slug: `daniel-wheeler` } }, { params: { slug: `ann-branson` } }],
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<Props> = async (context) => {
  if (context.params?.slug === `daniel-wheeler`) {
    return { props: { name: `Daniel Wheeler`, born: 1771 } };
  } else {
    return { props: { name: `Ann Branson`, born: 1808 } };
  }
};

export default FriendPage;
