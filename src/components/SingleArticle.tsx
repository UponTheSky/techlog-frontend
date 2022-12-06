import React from 'react';

import { Article } from '../types';
import { parseTimestamp } from '../utils';

import { PreviousNavbar } from './previousNavbar';

import Stack from 'react-bootstrap/Stack';
import Image from 'react-bootstrap/Image';
import Container from 'react-bootstrap/Container';

interface SingleArticleProps extends React.PropsWithChildren {
  articleInfo: Omit<Article, 'id' | 'excerpt' | 'content'>;
}

export function SingleArticle({ articleInfo, children }: SingleArticleProps ) {
  return (
    <Container className="pt-2 pb-5">
      <PreviousNavbar />
      <Stack gap={3} className="col-md-8 mx-auto pt-5 align-items-center">
        <Image src={articleInfo.thumbnail ?? undefined} />
        <h2>{articleInfo.title}</h2>
        <span className="pb-5">Created at: {parseTimestamp(articleInfo.createdAt)} Updated at: {parseTimestamp(articleInfo.updatedAt)}</span>
        {children}
      </Stack>
    </Container>
  );
}
