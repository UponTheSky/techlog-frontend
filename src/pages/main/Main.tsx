import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import { MainResponse } from '../../types';
import { MAIN_ARTICLES_PER_ROW } from '../../consts';
import { fetchMainResponse } from '../../api/main';

import { LoadingPage } from '../Loading';
import { ArticleCard } from '../../components/ArticleCard';

import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';
import Stack from 'react-bootstrap/Stack';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


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
    <Stack gap={5} className="col-md-5 mx-auto align-items-center pt-5 pb-5">
      
      <Image src={mainUrls.picture} roundedCircle={true} />

      <p className="pt-3 pb-3">{mainUrls.shortIntro}</p>

      <Link to={'me'}>
        <Button 
          variant="primary" 
          size="lg" 
        >About Me</Button>
      </Link>

      <h2>Recent Articles</h2>
      
      <Row xs={1} md={MAIN_ARTICLES_PER_ROW} className="g-4">
        {articles.map(({ articleId, thumbnail, title, excerpt, updatedAt }) => (
          <Col>
            <ArticleCard 
              key={articleId}
              thumbnail={thumbnail}
              title={title}
              excerpt={excerpt}
              updatedAt={updatedAt}
            />
          </Col>
        ))}
      </Row>

      <Link to={'articles'}>
        <Button
          variant="secondary"
          size="lg"
        >See More Articles
        </Button>
      </Link>

    </Stack>
  );
}
