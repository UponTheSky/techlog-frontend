import React, { useEffect, useState } from 'react';
import { Article, CurrentPageArticlesResponse } from '../../types';

import { fetchCurrentPageArticlesResponse } from '../../api/articles';
import { ArticleList } from '../../components/ArticleList';
import { CustomPagination } from '../../components/CustomPagination';

import Stack from 'react-bootstrap/Stack';
import Pagination from 'react-bootstrap/Pagination';


export function ArticlesMainPage() {
  // const [pageInfo, setPageInfo] = useState<CurrentPageArticlesResponse['info']>({
  //   totalArticlesCount: 0, totalPagesCount: 0, currentPage: 0
  // });
  // const [articles, setArticles] = useState<Article[]>([]);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     const data = await fetchCurrentPageArticlesResponse(pageInfo.currentPage);
  //     if (data) {
  //       setPageInfo(data.info);
  //       setArticles(data.articles);
  //     }
  //   };

  //   fetchData();
  // }, [pageInfo]);

  // const handleSetCurrentPage = (currentPage: number) => () => {
  //   setPageInfo(prev => ({ ...prev, currentPage }));
  // }

  const pageInfo = {
    totalArticlesCount: 1,
    totalPagesCount: 1,
    currentPage: 0
  }
  
  const articles = [
    {
      id: 1,
      createdAt: new Date(Date.now()),
      updatedAt: new Date(Date.now()),
      thumbnail: null,
      title: 'test',
      excerpt: 'testtesttest',
      content: 'hey',
      articleId: '1'
    }
  ]

  return (
    <Stack gap={5} className="col-md-5 mx-auto pt-5">
      <ArticleList articles={articles} page="articles" />
      <CustomPagination 
        totalPagesCount={pageInfo.totalPagesCount} 
        currentPage={pageInfo.currentPage} 
      />
    </Stack>
  );
}
