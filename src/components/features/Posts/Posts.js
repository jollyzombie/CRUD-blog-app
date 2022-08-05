import { Card, Row, Button, Col } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { getAllPosts } from '../../../redux/postsRedux';

const Posts = () => {
  const postsData = useSelector(getAllPosts);

  return (
    <section>
      <Row className='justify-content-md-center'>
        {postsData.map((post) => (
          <Col key={post.id}>
            <Card className='rounded' style={{ width: '25rem' }}>
              <Card.Body>
                <Card.Title>{post.title}</Card.Title>
                <Card.Text>
                  <b>Author:</b> {post.author}
                </Card.Text>
                <Card.Text>
                  <b>Published:</b> {post.publishedDate}
                </Card.Text>
                <Card.Text>{post.shortDescription}</Card.Text>
                <Card.Link href={'/post/' + post.id} as={Button}>
                  Read more
                </Card.Link>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </section>
  );
};

export default Posts;
