import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { Article, CurrentPageArticlesResponse } from '../../types';
import { ARTICLES_ARTICLES_PER_ROW } from '../../consts';
import { fetchCurrentPageArticlesResponse } from '../../api/articles';

import { LoadingPage } from '../Loading';
import { PreviousNavbar } from '../../components/previousNavbar';
import { CustomPagination } from '../../components/CustomPagination';
import { ArticleCard } from '../../components/ArticleCard';

import Stack from 'react-bootstrap/Stack';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export function ArticlesMainPage() {
  const { currentPageParams } = useParams();
  let currentPage = Number(currentPageParams ?? 0); 

  const [pageInfo, setPageInfo] = useState<CurrentPageArticlesResponse['info'] | null>(null);
  const [articles, setArticles] = useState<Article[]>([]);

  useEffect(() => {
    currentPage = pageInfo ? pageInfo.currentPage : currentPage;
    const fetchData = async (currentPage: number) => {
      const data = await fetchCurrentPageArticlesResponse(currentPage);
      if (data) {
        setPageInfo(data.info);
        setArticles(data.articles);
      }
    };
    fetchData(currentPage);
  }, [pageInfo?.currentPage]);

  const handleSetCurrentPage = (pageNumber: number) => () => {
    setPageInfo(prev => {
      if (prev) {
        return { ...prev, currentPage: pageNumber };
      }
      return null;
    })
  };

  if (!(pageInfo && articles)) {
    return (
      <div>
        <PreviousNavbar />
        <LoadingPage />;
      </div>
    );
  }

  return (
    <div className="col-md-8 mx-auto pt-5 pb-5">
      <PreviousNavbar />
      <Stack gap={5}>
        <Row xs={1} md={ARTICLES_ARTICLES_PER_ROW} className="g-4">
          
          {articles.map(({ articleId, thumbnail, title, excerpt, updatedAt }) => (
            <Col key={articleId}>
              <ArticleCard 
                articleId={articleId}
                thumbnail={thumbnail}
                title={title}
                excerpt={excerpt}
                updatedAt={updatedAt}
              />
            </Col>
          ))}
          
        </Row>
        <CustomPagination 
          totalPagesCount={pageInfo.totalPagesCount} 
          currentPage={pageInfo.currentPage} 
          handleSetCurrentPage={handleSetCurrentPage}
        />
      </Stack>
    </div>
  );
}
