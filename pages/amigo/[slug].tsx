import type { GetStaticPaths, GetStaticProps } from 'next';
import FriendPage, { type Props } from '@/components/FriendPage';
import { LANG } from '@/lib/env';

export const getStaticPaths: GetStaticPaths = async () => {
  if (LANG === `en`) return { paths: [], fallback: false };
  return {
    paths: [{ params: { slug: `daniel-wheeler` } }],
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<Props> = async () => {
  return { props: { name: `Daniel Wheeler`, born: 1771 } };
};

export default FriendPage;
