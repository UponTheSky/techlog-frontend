import React from 'react';
import { Article } from '../types';
import Card from 'react-bootstrap/Card';
import { DEFAULT_THUMBNAIL, EXCERPT_LIMIT_SIZE } from '../consts';

type ArticleCardProps = Pick<
  Article, 'thumbnail' | 'title' | 'excerpt' | 'updatedAt'
>;

export function ArticleCard({
  thumbnail,
  title,
  excerpt,
  updatedAt
}: ArticleCardProps) {
  return (
    <Card style={{ width: '18rem' }} onClick={() => {}}> {/* link to the individual article page for reading */}
      <Card.Img variant="top" src={thumbnail ?? DEFAULT_THUMBNAIL} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{excerpt ? excerpt.slice(EXCERPT_LIMIT_SIZE) + '...' : null}</Card.Text>
        <Card.Footer>
          <small className="text-muted">updated at {updatedAt.toLocaleDateString()}</small>
        </Card.Footer>
      </Card.Body>
    </Card>
  );
}
