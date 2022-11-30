import React from 'react';
import { Article } from '../types';

export type ArticleAdminProps = Pick<
  Article, 
  'articleId'| 'title' | 'createdAt' | 'updatedAt'
>;

export function ArticleRow({
  articleId, 
  title,
  createdAt,
  updatedAt
}: ArticleAdminProps) {
  return <li onClick={() => {}}> {/* link to individual article edit page */}
    {articleId} {title} {createdAt.toLocaleDateString()} {updatedAt.toLocaleDateString()}
  </li>;
}
