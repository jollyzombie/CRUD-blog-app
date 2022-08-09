import { useState } from 'react';
import { Button, Col, Row, Form } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addPost } from '../../../redux/postsRedux';

const AddPostForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [publishedDate, setPublishedDate] = useState('');
  const [shortDescription, setShortDescription] = useState('');
  const [content, setContent] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addPost({ title, author, publishedDate, shortDescription, content }));
    navigate('/');
  };

  return (
    <Row>
      <Col md={{ span: 6, offset: 3 }}>
        <h1>Add post</h1>
        <Form>
          <Form.Group className='mb-3 w-75'>
            <Form.Label className='mt-3'>Title</Form.Label>
            <Form.Control
              value={title}
              type='text'
              placeholder='Enter title'
              onChange={(e) => setTitle(e.target.value)}
            />

            <Form.Label className='mt-3'>Author</Form.Label>
            <Form.Control
              type='text'
              placeholder='Enter author'
              value={author}
              onChange={(e) => setAuthor(e.target.value)}
            />

            <Form.Label className='mt-3' value={publishedDate}>
              Published
            </Form.Label>
            <Form.Control
              type='text'
              placeholder='dd-mm-yyyy'
              value={publishedDate}
              onChange={(e) => setPublishedDate(e.target.value)}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Short description</Form.Label>

            <Form.Control
              as='textarea'
              placeholder='Leave a comment here'
              value={shortDescription}
              onChange={(e) => setShortDescription(e.target.value)}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label className='mt-3'>Main content</Form.Label>

            <Form.Control
              as='textarea'
              placeholder='Leave a comment here'
              value={content}
              onChange={(e) => setContent(e.target.value)}
            />
          </Form.Group>
          <Button variant='primary' type='submit' className='mt-3' onClick={handleSubmit}>
            Submit
          </Button>
        </Form>
      </Col>
    </Row>
  );
};

export default AddPostForm;
