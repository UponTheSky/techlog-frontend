import React from 'react';

import { Article } from '../types';

import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export type ArticleAdminProps = Pick<
  Article, 
  'articleId'| 'title' | 'createdAt' | 'updatedAt'
> & {
  handleUpdate: () => void,
  handleDelete: () => Promise<void>
};

export function ArticleRow({
  articleId, 
  title,
  createdAt,
  updatedAt,
  handleUpdate,
  handleDelete
}: ArticleAdminProps) {

  return (
    <Row >
      <Col xs lg="3">{articleId}</Col>
      <Col xs lg="3">{title}</Col>
      <Col xs lg="3">{createdAt.toLocaleDateString()}</Col>
      <Col xs lg="3">{updatedAt.toLocaleDateString()}</Col>
      <Col xs lg="3">
        <Button variant="warning" size="sm" onClick={handleUpdate}>Edit</Button>
      </Col>
      <Col xs lg="3">
        <Button variant="danger" size="sm" onClick={handleDelete}>Delete</Button>
      </Col>
    </Row>
  );
}
