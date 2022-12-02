import React from 'react';
import ReactMarkdown from 'react-markdown';

import Card from 'react-bootstrap/Card';

interface InfoPieceProps {
  content: string;
}

export function InfoPiece({ content }: InfoPieceProps) {
  return (
    <Card>
      <Card.Body>
        <ReactMarkdown>{content}</ReactMarkdown>
      </Card.Body>
    </Card>
  )
}
