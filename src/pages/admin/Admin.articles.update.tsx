import React, { useState, useEffect, ChangeEventHandler } from 'react';
import { useParams } from 'react-router-dom';

import { Article } from '../../types';
import { jwtTokenProvider } from './jwtTokenProvider';
import { fetchIndividualArticlesResponse, updateArticle } from '../../api/admin';

import { LoadingPage } from '../Loading';
import { PreviousNavbar } from '../../components/previousNavbar';

import Form from 'react-bootstrap/Form';
import Stack from 'react-bootstrap/Stack';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';


export function AdminArticlesUpdatePage() {
  const { articleId } = useParams();
  const [title, setTitle] = useState<string>('');
  const [excerpt, setExcerpt] = useState<string>('');
  const [content, setContent] = useState<string>('');
  const [originalArticle, setOriginalArticle] = useState<Article | null>(null);

  const token = jwtTokenProvider.value();

  useEffect(() => {
    const fetchData = async (articleId: Article['articleId']) => {
      const data = token && await fetchIndividualArticlesResponse(articleId, token);
      if (data) {
        setOriginalArticle(data);
        setTitle(data.title);
        setExcerpt(data.excerpt ?? '');
        setContent(data.content ?? '');
      }
    };

    articleId && fetchData(articleId);
  }, []);

  const handleCancel = () => { 
    if (token && window.confirm("Do you really want to cancel the current works?")) {
      if (originalArticle) {
        setTitle(originalArticle.title);
        setExcerpt(originalArticle.excerpt ?? '');
        setContent(originalArticle.content ?? '');
      }
    }
  };

  const handleUpdate = async () => {
    if (token && originalArticle) {
      const updatedArticle = await updateArticle(originalArticle.articleId, { 
        title, excerpt, content 
      }, token);

      if (updatedArticle) {
        setOriginalArticle(updatedArticle);
        setTitle(updatedArticle.title);
        setExcerpt(updatedArticle.excerpt ?? '');
        setContent(updatedArticle.content ?? '');
        alert("Updating the current article has been successful");
      }
    }
  };

  const handleTitleOnChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    setTitle(event.target.value);
  };

  const handleExcerptOnChange: ChangeEventHandler<HTMLTextAreaElement> = (event) => {
    setExcerpt(event.target.value);
  }

  const handleContentOnChange: ChangeEventHandler<HTMLTextAreaElement> = (event) => {
    setContent(event.target.value);
  };

  if (!(token && originalArticle)) {
    return <LoadingPage />;
  }

  return (
    <Container className="pt-2 pb-5">
      <PreviousNavbar />
      <Stack gap={3} className="col-md-8 mx-auto pt-5 align-items-center">
        {/*TODO: add thumbnail */}
        <Form className="py-3">
          <Form.Group controlId="Admin.articles.update.title">
            <Form.Label>Title:</Form.Label>
            <Form.Control placeholder={title} onChange={handleTitleOnChange} />
          </Form.Group>
          <Form.Group controlId="Admin.articles.update.excerpt">
            <Form.Label>Excerpt</Form.Label>
            <Form.Control 
              as='textarea' 
              rows={5} 
              cols={100}
              onChange={handleExcerptOnChange}
              value={excerpt}
            />
          </Form.Group>
          <Form.Group controlId="Admin.articles.update.content">
            <Form.Label>Content:</Form.Label>
            <Form.Control 
              as='textarea' 
              rows={10} 
              cols={100}
              onChange={handleContentOnChange}
              value={content}
            />
          </Form.Group>
        </Form>
        <Container>
          <Row className="justify-content-md-center">
            <Col xs lg="2">
              <Button variant="secondary" className="w-75" onClick={handleCancel}>Cancel</Button>
            </Col>
            <Col xs lg="2">
              <Button variant="success" className="w-75" onClick={handleUpdate}>Update</Button>
            </Col>
          </Row>
        </Container>
      </Stack>
    </Container>
  );
}
