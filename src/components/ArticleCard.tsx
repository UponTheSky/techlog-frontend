import React from 'react';
import { useNavigate } from 'react-router-dom';

import { Article } from '../types';
import { EXCERPT_LIMIT_SIZE } from '../consts';
import { parseTimestamp } from '../utils';

import Card from 'react-bootstrap/Card';

type ArticleCardProps = Pick<
  Article, 'articleId' | 'thumbnail' | 'title' | 'excerpt' | 'updatedAt'
>;

export function ArticleCard({
  articleId,
  thumbnail,
  title,
  excerpt,
  updatedAt
}: ArticleCardProps) {
  const navigate = useNavigate();

  const handleCardOnClick = () => {
    navigate(`/articles/${articleId}`);
  }

  return (
    <Card style={{ width: '18rem' }} onClick={handleCardOnClick}> 
      <Card.Img variant="top" src={thumbnail ?? undefined}  />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{excerpt ? excerpt.slice(EXCERPT_LIMIT_SIZE) + '...' : null}</Card.Text>
        <Card.Footer>
          <small className="text-muted">updated at {parseTimestamp(updatedAt)}</small>
        </Card.Footer>
      </Card.Body>
    </Card>
  );
}
