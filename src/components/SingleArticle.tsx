import React from 'react';

import { Article } from '../types';
import { DEFAULT_THUMBNAIL } from '../consts';

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
        <Image src={articleInfo.thumbnail ?? DEFAULT_THUMBNAIL} />
        <h2>{articleInfo.title}</h2>
        <span className="pb-5">Created at: {articleInfo.createdAt.toLocaleDateString()} Updated at: {articleInfo.updatedAt.toLocaleDateString()}</span>
        {children}
      </Stack>
    </Container>
  );
}
