import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { Article } from '../../types';
import { fetchIndividualArticlesResponse } from '../../api/admin';

import { LoadingPage } from '../Loading';
import { SingleArticle } from '../../components/SingleArticle';

import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';


export function AdminArticlesEditPage() {
  const { articleId } = useParams();
  const [article, setArticle] = useState<Article | null>(null);

  useEffect(() => {
    const fetchData = async (articleId: Article['articleId']) => {
      const data = await fetchIndividualArticlesResponse(articleId);
      if (data) {
        setArticle(data);
      }
    };

    articleId && fetchData(articleId);
  }, []);

  if (!article) {
    return <LoadingPage />;
  }

  return (
    <div>
      <SingleArticle articleInfo={article}>
        <Form className="py-3">
          <Form.Group controlId="Admin.articles.edit">
            <Form.Label>Edit your article</Form.Label>
            <Form.Control as='textarea' rows={10} cols={100}>{article.content ?? 'Edit your article'}</Form.Control>
          </Form.Group>
        </Form>
        <Container>
          <Row className="justify-content-md-center">
            <Col xs lg="2">
              <Button variant="secondary" className="w-75" onClick={() => {}}>Cancel</Button>
            </Col>
            <Col xs lg="2">
              <Button variant="success" className="w-75" onClick={() => {}}>Edit</Button>
            </Col>
          </Row>
        </Container>
      </SingleArticle>
    </div>
  );
}
