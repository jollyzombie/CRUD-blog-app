import { Row, Col, Card } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getPostByCategory } from '../../../redux/postsRedux';
import { dateToStr } from '../../../utils/dateToStr';

const SelectedCategory = () => {
  const { categoryId } = useParams();
  const posts = useSelector((state) => getPostByCategory(state, categoryId));

  if (posts.length === 0)
    return (
      <div>
        <h1>Category: {categoryId}</h1>
        <p>No posts in this category</p>
      </div>
    );
    return (
      <Row>
        {posts.map((post) => {
          console.log(post);
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
                    <b>Category:</b> {post.category}
                  </Card.Text>
                  <Card.Text>{post.shortDescription}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          );
        })}
      </Row>
    );
};

export default SelectedCategory;
