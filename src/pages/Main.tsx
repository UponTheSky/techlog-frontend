import React, { useState, useEffect } from 'react';
import { ArticleList } from '../components/ArticleList';
import { MainResponse } from '../types';
import { fetchMainResponse } from '../api/main';

import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';
import Stack from 'react-bootstrap/Stack';
import { BACKEND_URL } from '../consts';

export function Main() {
  const [mainUrls, setMainUrl] = useState<MainResponse['mainUrls']>({
    picture: 'http://localhost:3000/src/mock/logo.png', shortIntro: 'http://localhost:3000/src/mock/shortIntro.txt'
  });
  const [articles, setArticles] = useState<MainResponse['articles']>([]);
  const [menuUrls, setMenuUrls] = useState<MainResponse['menuUrls']>({
    me: '', articles: ''
  });

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchMainResponse();
      if (data) {
        setMainUrl(data.mainUrls);
        setArticles(data.articles);
        setMenuUrls(data.menuUrls);
      }
    };

    fetchData();
  }, []);

  return (
    <Stack gap={2} className="col-md-5 mx-auto">
      <Image src={mainUrls.picture} roundedCircle={true} />
      <p>{mainUrls.shortIntro}</p>
      <p>testtesttest</p>
      <Button 
        variant="primary" 
        size="lg"
      >About Me</Button> {/* wrap this with <Link> later */}
      <ArticleList articles={articles} page='main' />
      <Button
        variant="secondary"
        size="lg"
      >See More Articles
      </Button>
    </Stack>
  );
}
