import React, { ChangeEventHandler, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { createArticle } from '../../api/admin';
import { jwtTokenProvider } from './jwtTokenProvider';

import { LoadingPage } from '../Loading';
import { PreviousNavbar } from '../../components/previousNavbar';

import Container from 'react-bootstrap/Container';
import Stack from 'react-bootstrap/Stack';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';


export function AdminArticlesCreatePage() {  
  const [title, setTitle] = useState<string>('');
  const [excerpt, setExcerpt] = useState<string>('');
  const [content, setContent] = useState<string>('');
  
  const navigate = useNavigate();
  const token = jwtTokenProvider.value();

  const handleCreate = async () => {
    const newArticle = token && await createArticle({ title, excerpt, content }, token);
    if (newArticle) {
      alert(`A new article with title: <${title}> has been successfully created!`);
      navigate('/admin/articles');
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

  if (!token) {
    return <LoadingPage />;
  }

  return (
    <Container className="pt-2 pb-5">
      <PreviousNavbar />
      <Stack gap={3} className="col-md-8 mx-auto pt-5 align-items-center">
        {/*TODO: add thumbnail */}
        <Form className="py-3">
          <Form.Group controlId="Admin.articles.create.title">
            <Form.Label>Title:</Form.Label>
            <Form.Control placeholder={title} onChange={handleTitleOnChange} />
          </Form.Group>
          <Form.Group controlId="Admin.articles.create.excerpt">
            <Form.Label>Excerpt</Form.Label>
            <Form.Control 
              as='textarea' 
              rows={5} 
              cols={100}
              onChange={handleExcerptOnChange}
              value={excerpt}
            />
          </Form.Group>
          <Form.Group controlId="Admin.articles.create.content">
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
        <Button variant="success" onClick={handleCreate}>Create a new article</Button>
      </Stack>
    </Container>
  );
}
