import React from 'react';

import { Article } from '../types';
import { parseTimestamp } from '../utils';

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
    <Row className="pb-1">
      <Col xs lg="2">{articleId.slice(0, 10) + '...'}</Col>
      <Col xs lg="2">{title}</Col>
      <Col xs lg="2">{parseTimestamp(createdAt)}</Col>
      <Col xs lg="2">{parseTimestamp(updatedAt)}</Col>
      <Col xs lg="2">
        <Button variant="warning" size="sm" onClick={handleUpdate}>Edit</Button>
      </Col>
      <Col xs lg="2">
        <Button variant="danger" size="sm" onClick={handleDelete}>Delete</Button>
      </Col>
    </Row>
  );
}
