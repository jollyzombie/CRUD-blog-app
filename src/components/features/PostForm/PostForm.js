import { useState } from 'react';
import { Button, Row, Form } from 'react-bootstrap';

const PostForm = ({ id, action, actionText, ...props }) => {
  const [title, setTitle] = useState(props.title || '');
  const [author, setAuthor] = useState(props.author || '');
  const [publishedDate, setPublishedDate] = useState(props.publishedDate || '');
  const [shortDescription, setShortDescription] = useState(props.shortDescription || '');
  const [content, setContent] = useState(props.content || '');

  const handleSubmit = (e) => {
    e.preventDefault();
    action({ title, author, publishedDate, shortDescription, content, id });
  };

  return (
    <Row>
      <Form onSubmit={handleSubmit}>
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
            placeholder={'Enter author' || props.title}
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
        <Button variant='primary' type='submit' className='mt-3'>
          {actionText}
        </Button>
      </Form>
    </Row>
  );
};

export default PostForm;
