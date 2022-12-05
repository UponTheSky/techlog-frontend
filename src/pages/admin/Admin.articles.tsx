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


export function AdminArticlesPage() {
  const { currentPage } = useParams();
  const [pageInfo, setPageInfo] = useState<CurrentPageArticlesResponse['info'] | null>(null);
  const [articles, setArticles] = useState<Article[]>([]);

  const token = jwtTokenProvider.value();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async (currentPage: number) => {
      const data = token && await fetchCurrentPageArticlesResponse(currentPage, token);
      if (data) {
        setPageInfo(data.info);
        setArticles(data.articles);
      }
    };

    currentPage && fetchData(Number(currentPage));
  }, [pageInfo]);

  const handleSetCurrentPage = (pageNumber: number) => () => {
    setPageInfo(prev => {
      if (prev) {
        return { ...prev, currentPage: pageNumber };
      } 
      return null;
    });
  };

  const handleUpdate = (articleId: Article['articleId']) => () => {
    navigate(`articles/:${articleId}`);
  };

  const handleDelete = (articleId: Article['articleId']) => async () => {
    if (token && window.confirm("Do you really want to delete the article? You can't recover the data afterward")) {
      const deletedArticle = await deleteArticle(articleId, token);
      deletedArticle && alert(`The article ${deletedArticle.articleId}: ${deletedArticle.title} has been successfully deleted`);
    }
  };

  if (!(token && pageInfo && articles)) {
    {console.log(token)}
    return <LoadingPage />;
  }

  return (
    <Stack gap={5} className="col-md-10 mx-auto pt-5 align-items-center">
      <h2>Recent Articles List</h2>
      <Container className="justify-content-md-center pb-5">
        <Row className="pb-3">
          <Col xs lg="1">Article ID</Col>
          <Col xs lg="1">Title</Col>
          <Col xs lg="1">Created At</Col>
          <Col xs lg="1">Updated At</Col>
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
      <CustomPagination 
        totalPagesCount={pageInfo.totalPagesCount} 
        currentPage={pageInfo.currentPage} 
        handleSetCurrentPage={handleSetCurrentPage}
      />
    </Stack>
  );
}
