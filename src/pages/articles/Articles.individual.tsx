import React, { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';

import { Article } from '../../types';
import { fetchIndividualArticlesResponse } from '../../api/articles';
import { SingleArticle } from '../../components/SingleArticle';

export function ArticlesIndividualPage() {
  // const articleId = '1'; // use useParams https://reactrouter.com/en/main/hooks/use-params
  // const [article, setArticle] = useState<Article | null>(null);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     const data = await fetchIndividualArticlesResponse(articleId);
  //     if (data) {
  //       setArticle(data);
  //     }
  //   };

  //   fetchData();
  // }, []);

  // if (!article) {
  //   return <p>loading ...</p>
  // }

  const article = {
    id: 1,
    createdAt: new Date(Date.now()),
    updatedAt: new Date(Date.now()),
    thumbnail: null,
    title: 'test',
    excerpt: 'testtesttest',
    content: '- hadaewaff4fwfgrwagreagteagteagwFegreagreafewafrteagedzfrasfsafdsafdsaaewaeraesaeafeafewaeaesaesaesafesdfsaeaeagedzfrasfsafdsafdsaaewaeraesaeafeafewaeaesaesaesafesdfsaeeagedzfrasfsafdsafdsaaewaeraesaeafeafewaeaesaesaesafesdfsaeeagedzfrasfsafdsafdsaaewaeraesaeafeafewaeaesaesaesafesdfsaeeagedzfrasfsafdsafdsaaewaeraesaeafeafewaeaesaesaesafesdfs',
    articleId: '1'
  };

  return (
    <SingleArticle articleInfo={article}>
      <ReactMarkdown className="text-break">{article.content ?? ''}</ReactMarkdown>    
    </SingleArticle>
  );
}
