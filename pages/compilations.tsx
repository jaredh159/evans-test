import type { GetStaticProps } from 'next';
import FriendPage, { type Props } from '@/components/FriendPage';
import { LANG } from '@/lib/env';

export const getStaticProps: GetStaticProps<Props> = async () => {
  if (LANG === `es`) return { notFound: true };
  return { props: { name: `Compilations`, born: 9999 } };
};

export default FriendPage;
