import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { Article, CurrentPageArticlesResponse } from '../../types';
import { fetchCurrentPageArticlesResponse } from '../../api/articles';

import { LoadingPage } from '../Loading';
import { ArticleList } from '../../components/ArticleList';
import { CustomPagination } from '../../components/CustomPagination';

import Stack from 'react-bootstrap/Stack';

export function ArticlesMainPage() {
  const { currentPage } = useParams();

  const [pageInfo, setPageInfo] = useState<CurrentPageArticlesResponse['info'] | null>(null);
  const [articles, setArticles] = useState<Article[]>([]);

  useEffect(() => {
    const fetchData = async (currentPage: number) => {
      const data = await fetchCurrentPageArticlesResponse(currentPage);
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
    })
  };

  if (!(pageInfo && articles)) {
    return <LoadingPage />;
  }

  return (
    <Stack gap={5} className="col-md-5 mx-auto pt-5">
      <ArticleList articles={articles} page="articles" />
      <CustomPagination 
        totalPagesCount={pageInfo.totalPagesCount} 
        currentPage={pageInfo.currentPage} 
        handleSetCurrentPage={handleSetCurrentPage}
      />
    </Stack>
  );
}
