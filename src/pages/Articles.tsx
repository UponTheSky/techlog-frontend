import React, { useEffect, useState } from 'react';
import { Article, CurrentPageArticlesResponse } from '../types';

import { fetchCurrentPageArticlesResponse } from '../api/articles';
import { ArticleList } from '../components/ArticleList';

import Stack from 'react-bootstrap/Stack';
import Pagination from 'react-bootstrap/Pagination';


export function Articles() {
  const [pageInfo, setPageInfo] = useState<CurrentPageArticlesResponse['info']>({
    totalArticlesCount: 0, totalPagesCount: 0, currentPage: 0
  });
  const [articles, setArticles] = useState<Article[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchCurrentPageArticlesResponse(pageInfo.currentPage);
      if (data) {
        setPageInfo(data.info);
        setArticles(data.articles);
      }
    };

    fetchData();
  }, [pageInfo]);

  const handleSetCurrentPage = (currentPage: number) => () => {
    setPageInfo(prev => ({ ...prev, currentPage }));
  }

  return (
    <Stack gap={2} className="col-md-5 mx-auto">
      <ArticleList articles={articles} page="articles" />
      <Pagination size="lg">
        <Pagination.Prev />
        {Array(pageInfo.totalPagesCount).fill(1).map((number, idx) => (
          <Pagination.Item 
            key={number} 
            active={number + idx === pageInfo.currentPage} 
            onClick={handleSetCurrentPage(number + idx - 1)}
          > {/* wrap with <Link>*/}
            {number + idx}
          </Pagination.Item>
        ))}
        <Pagination.Next />
      </Pagination>
    </Stack>
  );
}
