import React, { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import { useParams } from 'react-router-dom';

import { Article } from '../../types';
import { fetchIndividualArticlesResponse } from '../../api/articles';

import { LoadingPage } from '../Loading';
import { SingleArticle } from '../../components/SingleArticle';

export function ArticlesIndividualPage() {
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
    <SingleArticle articleInfo={article}>
      <ReactMarkdown className="text-break">{article.content ?? ''}</ReactMarkdown>    
    </SingleArticle>
  );
}
