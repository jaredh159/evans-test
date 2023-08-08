import React from 'react';
import type { GetStaticPaths, GetStaticProps } from 'next';

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [
      { params: { friend_slug: `daniel-wheeler`, doc_slug: `journal` } },
      { params: { friend_slug: `ann-branson`, doc_slug: `journal` } },
    ],
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<Props> = async (context) => {
  if (context.params?.friend_slug === `daniel-wheeler`) {
    return {
      props: {
        friendName: `Daniel Wheeler`,
        bookName: `Journal of Daniel Wheeler`,
        edition: `modernized`,
      },
    };
  } else {
    return {
      props: {
        friendName: `Ann Branson`,
        bookName: `Journal of Ann Branson`,
        edition: `original`,
      },
    };
  }
};

interface Props {
  friendName: string;
  bookName: string;
  edition: 'original' | 'modernized';
}

const DocumentPage: React.FC<Props> = ({ friendName, bookName, edition }) => {
  return (
    <ul>
      <li>Author: {friendName}</li>
      <li>Book: {bookName}</li>
      <li>Edition: {edition}</li>
    </ul>
  );
};

export default DocumentPage;
