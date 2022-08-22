import { useState } from 'react';
import { Button, Row, Form } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { useSelector } from 'react-redux';
import { getAllCategories } from '../../../redux/categoriesRedux';

import ReactQuill from 'react-quill';
import DatePicker from 'react-datepicker';

import 'react-quill/dist/quill.snow.css';
import 'react-datepicker/dist/react-datepicker.css';

const PostForm = ({ id, action, actionText, ...props }) => {
  const [title, setTitle] = useState(props.title || '');
  const [author, setAuthor] = useState(props.author || '');
  const [publishedDate, setPublishedDate] = useState(props.publishedDate || '');
  const [shortDescription, setShortDescription] = useState(props.shortDescription || '');
  const [content, setContent] = useState(props.content || '');
  const [category, setCategory] = useState(props.category || '');

  const [contentError, setContentError] = useState(false);
  const [dateError, setDateError] = useState(false);

  const categories = useSelector((state) => getAllCategories(state));

  const {
    register,
    handleSubmit: validate,
    formState: { errors },
  } = useForm();

  const handleSubmit = () => {
    setContentError(!content);
    setDateError(!publishedDate);
    if (content && publishedDate) {
      action({ title, author, publishedDate, shortDescription, content, id, category });
    }
  };

  return (
    <Row>
      <Form onSubmit={validate(handleSubmit)}>
        <Form.Group className='w-75'>
          <Form.Label className='mt-3'>Title</Form.Label>
          <Form.Control
            {...register('title', { required: true, minLength: 3 })}
            value={title}
            type='text'
            placeholder='Enter post title'
            onChange={(e) => setTitle(e.target.value)}
          />
          {errors.title && (
            <small className='d-block form-text text-danger mt-2'>Title is too short (min. 3 characters)</small>
          )}
        </Form.Group>

        <Form.Group className='w-75'>
          <Form.Label className='mt-3'>Author</Form.Label>
          <Form.Control
            {...register('author', { required: true, minLength: 3 })}
            type='text'
            placeholder={'Enter post author' || props.title}
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
          />
          {errors.author && (
            <small className='d-block form-text text-danger mt-2'>Author is too short (min. 3 characters)</small>
          )}
        </Form.Group>

        <Form.Group>
          <Form.Label className='mt-3'>Published</Form.Label>
          <DatePicker selected={publishedDate} onChange={(date) => setPublishedDate(date)} />
          {dateError && <small className='d-block form-text text-danger mt-2'>This field is required</small>}
        </Form.Group>

        <Form.Group>
          <Form.Label>Category</Form.Label>
          <Form.Select
            {...register('category', { required: true })}
            aria-label='Select category'
            onChange={(e) => setCategory(e.target.value)}
          >
            <option>Select category...</option>
            {categories.map((category) => (
              <option value={props.category} key={category.id}>
                {category.name}
              </option>
            ))}
          </Form.Select>
          {errors.category && <small className='d-block form-text text-danger mt-2'>Please select category</small>}
        </Form.Group>

        <Form.Group>
          <Form.Label className='mt-3'>Short description</Form.Label>
          <Form.Control
            {...register('shortDescription', { required: true, minLength: 20 })}
            as='textarea'
            placeholder='Add short description here'
            value={shortDescription}
            onChange={(e) => setShortDescription(e.target.value)}
          />
          {errors.shortDescription && (
            <small className='d-block form-text text-danger mt-2'>
              Short description is too short (min. 20 characters)
            </small>
          )}
        </Form.Group>

        <Form.Group>
          <Form.Label className='mt-3'>Main content</Form.Label>

          <ReactQuill
            theme='snow'
            type='text'
            placeholder='Add main content here'
            value={content}
            onChange={setContent}
          />
          {contentError && <small className='d-block form-text text-danger mt-2'>Content can't be empty</small>}
        </Form.Group>

        <Button variant='primary' type='submit' className='mt-3'>
          {actionText}
        </Button>
      </Form>
    </Row>
  );
};

export default PostForm;
