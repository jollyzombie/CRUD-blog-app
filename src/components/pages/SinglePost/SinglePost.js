import { useParams } from 'react-router';
import { useSelector } from 'react-redux';
import { Navigate, Link } from 'react-router-dom';
import { getPostById } from '../../../redux/postsRedux';
import { Container, Row, Col, Button } from 'react-bootstrap';

const SinglePost = () => {
  const { postId } = useParams();

  const postData = useSelector((state) => getPostById(state, postId));

  if (!postData) return <Navigate to='/' />;
  else
    return (
      <Container>
        <Row className='justify-content-center'>
          <Col md={6}>
            <article className=''>
              <h2 className='mb-4'>{postData.title}</h2>
              <p className='mb-0'>
                <strong>Author:</strong> {postData.author}
              </p>
              <p>
                <strong>Published:</strong> {postData.publishedDate}
              </p>
              <p>{postData.content}</p>
            </article>
          </Col>

          <Col md={4} align='right' className='mx-2'>
            <Link to={'/post/edit/' + postId}>
              <Button variant='outline-info' className='mx-1'>Edit</Button>
            </Link>
            <Link to={'/'}>
              <Button variant='outline-danger' className='mx-1'>Delete</Button>
            </Link>
          </Col>
        </Row>
      </Container>
    );
};

export default SinglePost;
