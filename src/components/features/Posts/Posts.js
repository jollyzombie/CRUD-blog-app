import { Card, Row, Button, Col } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { getAllPosts } from '../../../redux/postsRedux';
import { Link } from 'react-router-dom';
import { dateToStr } from '../../../utils/dateToStr';

const Posts = () => {
  const postsData = useSelector(getAllPosts);

  return (
    <Row>
      {postsData.map((post) => {console.log(post); return (
        <Col key={post.id}>
          <Card className='rounded mb-4' style={{ width: '26rem' }}>
            <Card.Body>
              <Card.Title>{post.title}</Card.Title>
              <Card.Text>
                <b>Author:</b> {post.author}
              </Card.Text>
              <Card.Text>
                <b>Published:</b> {dateToStr(post.publishedDate)}
              </Card.Text>
              <Card.Text>{post.shortDescription}</Card.Text>
              <Button as={Link} to={'/post/' + post.id}>
                Read more
              </Button>
            </Card.Body>
          </Card>
        </Col>
      )})}
    </Row>
  );
};

export default Posts;
