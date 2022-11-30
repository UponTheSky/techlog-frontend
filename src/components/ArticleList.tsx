import React from 'react';
import { Article, Page } from '../types';
import { ArticleRow } from './ArticleRow';
import { ArticleCard } from './ArticleCard';
import { MAIN_ARTICLES_PER_ROW, ARTICLES_ARTICLES_PER_ROW } from '../consts';
import Row from 'react-bootstrap/Row';

interface ArticleListProps {
  articles: Article[];
  page: Page;
}

export function ArticleList({ articles, page }: ArticleListProps) {
  if (page === 'articles' || page === 'main') {
    return (
      <Row 
        xs={1} 
        md={
          page === 
          'articles' 
            ? ARTICLES_ARTICLES_PER_ROW 
            : MAIN_ARTICLES_PER_ROW
          } 
        className="g-4"
      >
        {articles.map(({ articleId, thumbnail, title, excerpt, updatedAt }) => (
          <ArticleCard 
            key={articleId}
            thumbnail={thumbnail}
            title={title}
            excerpt={excerpt}
            updatedAt={updatedAt}
          />
        ))}
      </Row>
    );
  } 

  if (page === 'admin') {
    return (
      <ul>
        {articles.map(({articleId, title, createdAt, updatedAt}) => (
          <ArticleRow 
            key={articleId} 
            articleId={articleId}
            title={title}
            createdAt={createdAt}
            updatedAt={updatedAt}
          />
        ))}
      </ul>
    );
  }

  return <div></div>
}
