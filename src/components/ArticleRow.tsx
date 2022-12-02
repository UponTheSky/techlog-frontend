import React from 'react';
import { Article } from '../types';

import Button from 'react-bootstrap/Button';

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
  return <div> {/* link to individual article edit page */}
    <span>{articleId} {title} {createdAt.toLocaleDateString()} {updatedAt.toLocaleDateString()} {" "}</span>
    <Button variant="primary" size="sm" onClick={() => {}}>Edit</Button>
  </div>;
}
