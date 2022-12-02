import React from 'react';
import ReactMarkdown from 'react-markdown';

import { SingleArticle } from '../../components/SingleArticle';

import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';


export function AdminArticlesEditPage() {
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
    <div>
      <SingleArticle articleInfo={article}>
        <Form className="py-3">
          <Form.Group controlId="Admin.articles.edit">
            <Form.Label>Edit your article</Form.Label>
            <Form.Control as='textarea' placeholder={article.content ?? 'Edit your article'} rows={10} cols={100}/>
          </Form.Group>
        </Form>
        <Container>
          <Row className="justify-content-md-center">
            <Col xs lg="2">
              <Button variant="secondary" className="w-75" onClick={() => {}}>Cancel</Button>
            </Col>
            <Col xs lg="2">
              <Button variant="success" className="w-75" onClick={() => {}}>Edit</Button>
            </Col>
          </Row>
        </Container>
      </SingleArticle>
    </div>
  );
}