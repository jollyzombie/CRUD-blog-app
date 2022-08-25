import { Card, Button, Col } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getCategoryById } from '../../../redux/postsRedux';
import { dateToStr } from '../../../utils/dateToStr'

const Post = ({ post }) => {
  const category = useSelector((state) => getCategoryById(state, post.categoryId));

  return (
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
          <Card.Text>
            <b>Category:</b> {category.name}
          </Card.Text>
          <Card.Text>{post.shortDescription}</Card.Text>
          <Button as={Link} to={'/post/' + post.id}>
            Read more
          </Button>
        </Card.Body>
      </Card>
    </Col>
  );
}

export default Post;