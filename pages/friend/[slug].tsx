import type { GetStaticPaths, GetStaticProps } from 'next';
import FriendPage, { type Props } from '@/components/FriendPage';

export const getStaticPaths: GetStaticPaths = async () => {
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
