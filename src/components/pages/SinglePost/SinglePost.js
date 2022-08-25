import { useParams } from 'react-router';
import { useSelector, useDispatch } from 'react-redux';
import { useState } from 'react';
import { Navigate, Link } from 'react-router-dom';
import { getCategoryById, getPostById, removePost } from '../../../redux/postsRedux';
import { Container, Row, Col, Button, Modal } from 'react-bootstrap';
import { dateToStr } from '../../../utils/dateToStr';

const SinglePost = () => {
  const { postId } = useParams();
  const postData = useSelector((state) => getPostById(state, postId));
  const category = useSelector((state) => getCategoryById(state, postData?.categoryId));

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const dispatch = useDispatch();

  const handleRemove = (e) => {
    e.preventDefault();
    dispatch(removePost(postData.id));
  };

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
              <p className='mb-0'>
                <strong>Published:</strong> {dateToStr(postData.publishedDate)}
              </p>
              <p className='mb-5'>
                <strong>Category:</strong> {category.name}
              </p>
              <p dangerouslySetInnerHTML={{ __html: postData.content }} />
            </article>
          </Col>

          <Col md={4} align='right' className='mx-2'>
            <Link to={`/post/${postId}/edit`}>
              <Button variant='outline-info' className='mx-1'>
                Edit
              </Button>
            </Link>

            <Button variant='outline-danger' className='mx-1' onClick={handleShow}>
              Delete
            </Button>
          </Col>
        </Row>

        <Modal show={show} onHide={handleClose} animation={false}>
          <Modal.Header closeButton>
            <Modal.Title>Are you sure?</Modal.Title>
          </Modal.Header>
          <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
          <Modal.Footer>
            <Button variant='secondary' onClick={handleClose}>
              Cancel
            </Button>
            <Button variant='danger' onClick={handleRemove}>
              Remove
            </Button>
          </Modal.Footer>
        </Modal>
      </Container>
    );
};

export default SinglePost;
