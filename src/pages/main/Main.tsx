import React, { useState, useEffect } from 'react';
import { ArticleList } from '../../components/ArticleList';
import { MainResponse } from '../../types';
import { fetchMainResponse } from '../../api/main';

import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';
import Stack from 'react-bootstrap/Stack';
import { BACKEND_URL } from '../../consts';

export function Main() {
  // const [mainUrls, setMainUrl] = useState<MainResponse['mainUrls']>({
  //   picture: 'http://localhost:3000/src/mock/logo.png', shortIntro: 'http://localhost:3000/src/mock/shortIntro.txt'
  // });
  // const [articles, setArticles] = useState<MainResponse['articles']>([]);
  // const [menuUrls, setMenuUrls] = useState<MainResponse['menuUrls']>({
  //   me: '', articles: ''
  // });

  // useEffect(() => {
  //   const fetchData = async () => {
  //     const data = await fetchMainResponse();
  //     if (data) {
  //       setMainUrl(data.mainUrls);
  //       setArticles(data.articles);
  //       setMenuUrls(data.menuUrls);
  //     }
  //   };

  //   fetchData();
  // }, []);
  const mainUrls = {
    picture: "https://www.looper.com/img/gallery/disneys-moana-almost-had-a-completely-different-main-character/intro-1663976926.webp",
    shortIntro: "hey ya"
  };
  
  const articles = [
    {
      id: 1,
      createdAt: new Date(Date.now()),
      updatedAt: new Date(Date.now()),
      thumbnail: null,
      title: 'test',
      excerpt: 'fdsafdearaea',
      content: 'hey',
      articleId: '1'
    }
  ]

  return (
    <Stack gap={5} className="col-md-5 mx-auto pt-5 pb-5">
      <Image src={mainUrls.picture} roundedCircle={true} />
      <p className="pt-3 pb-3">{mainUrls.shortIntro}</p>
      <Button 
        variant="primary" 
        size="lg" 
        className="col-md-5 mx-auto"
      >About Me</Button> {/* wrap this with <Link> later */}
      <h2>Recent Articles</h2>
      <ArticleList articles={articles} page='main' />
      <Button
        variant="secondary"
        size="lg"
        className="col-md-5 mx-auto"
      >See More Articles
      </Button>
    </Stack>
  );
}
