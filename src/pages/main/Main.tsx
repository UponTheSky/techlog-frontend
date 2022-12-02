import React, { useState, useEffect } from 'react';

import { MainResponse } from '../../types';
import { fetchMainResponse } from '../../api/main';

import { LoadingPage } from '../Loading';
import { ArticleList } from '../../components/ArticleList';

import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';
import Stack from 'react-bootstrap/Stack';


export function Main() {
  const [mainUrls, setMainUrl] = useState<MainResponse['mainUrls'] | null>(null);
  const [articles, setArticles] = useState<MainResponse['articles']>([]);
  const [menuUrls, setMenuUrls] = useState<MainResponse['menuUrls'] | null>(null);

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

  if (!(mainUrls && articles && menuUrls)) {
    return <LoadingPage />;
  }

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
