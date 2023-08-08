import type { GetStaticProps } from 'next';
import FriendPage, { type Props } from '@/components/FriendPage';
import { LANG } from '@/lib/env';

export const getStaticProps: GetStaticProps<Props> = async () => {
  if (LANG === `en`) return { notFound: true };
  return { props: { name: `Compilaciones`, born: 9999 } };
};

export default FriendPage;
