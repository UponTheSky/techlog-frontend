import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

import { Article, CurrentPageArticlesResponse } from '../../types';
import { fetchCurrentPageArticlesResponse, deleteArticle } from '../../api/admin';
import { jwtTokenProvider } from './jwtTokenProvider';

import { LoadingPage } from '../Loading';
import { ArticleRow } from '../../components/ArticleRow';
import { CustomPagination } from '../../components/CustomPagination';

import Container from 'react-bootstrap/Container';
import Stack from 'react-bootstrap/Stack';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';


export function AdminArticlesPage() {
  const { currentPageParams } = useParams();
  let currentPage = Number(currentPageParams ?? 0);
  const [pageInfo, setPageInfo] = useState<CurrentPageArticlesResponse['info'] | null>(null);
  const [articles, setArticles] = useState<Article[]>([]);

  const token = jwtTokenProvider.value();
  const navigate = useNavigate();

  useEffect(() => {
    currentPage = pageInfo ? pageInfo.currentPage : currentPage;
    const fetchData = async (currentPage: number) => {
      const data = token && await fetchCurrentPageArticlesResponse(currentPage, token);
      if (data) {
        setPageInfo(data.info);
        setArticles(data.articles);
      }
    };
    fetchData(currentPage);
  }, [pageInfo?.currentPage, pageInfo?.totalArticlesCount]);

  const handleSetCurrentPage = (pageNumber: number) => () => {
    setPageInfo(prev => {
      if (prev) {
        return { ...prev, currentPage: pageNumber };
      } 
      return null;
    });
  };

  const handleUpdate = (articleId: Article['articleId']) => () => {
    navigate(`/admin/articles/update/${articleId}`);
  };

  const handleDelete = (articleId: Article['articleId']) => async () => {
    if (token && window.confirm("Do you really want to delete the article? You can't recover the data afterward")) {
      const deletedArticle = await deleteArticle(articleId, token);
      deletedArticle && alert(`The article ${deletedArticle.articleId}: ${deletedArticle.title} has been successfully deleted`);
      setPageInfo(prev => { 
        if (prev) {
          return {
            ...prev, 
            totalArticlesCount: prev.totalArticlesCount - 1 
          }
        }
        return null;
      })
    }
  };

  const handleCreateButton = () => {
    navigate('/admin/articles/create');
  };

  if (!token) {
    return <LoadingPage />;
  }

  return (
    <Stack gap={5} className="col-md-10 mx-auto pt-5 align-items-center">
      <h2>Recent Articles List</h2>
      <Container className="justify-content-md-center pb-5">
        <Row className="pb-3">
          <Col xs lg="2">Article ID</Col>
          <Col xs lg="2">Title</Col>
          <Col xs lg="2">Created At</Col>
          <Col xs lg="2">Updated At</Col>
          <Col xs lg="2">Edit</Col>
          <Col xs lg="2">Delete</Col>
        </Row>
        {articles.map(({articleId, title, createdAt, updatedAt}) => (
          <ArticleRow 
            key={articleId} 
            articleId={articleId}
            title={title}
            createdAt={createdAt}
            updatedAt={updatedAt}
            handleUpdate={handleUpdate(articleId)}
            handleDelete={handleDelete(articleId)}
          />
        ))}
      </Container>
      <Button variant="success" onClick={handleCreateButton}>Create an Article</Button>
      <CustomPagination 
        totalPagesCount={pageInfo ? pageInfo.totalPagesCount : 0} 
        currentPage={pageInfo ? pageInfo.currentPage : 0} 
        handleSetCurrentPage={handleSetCurrentPage}
      />
    </Stack>
  );
}
