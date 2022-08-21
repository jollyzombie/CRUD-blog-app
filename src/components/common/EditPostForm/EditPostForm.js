import { useDispatch, useSelector } from 'react-redux';
import { Navigate, useNavigate, useParams } from 'react-router-dom';
import { editPost, getPostById } from '../../../redux/postsRedux';

import PostForm from '../../features/PostForm/PostForm';

const EditPostForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { postId } = useParams();
  const postData = useSelector(state => getPostById(state, postId));

  const handleSubmit = (post) => {
    dispatch(editPost({ ...post, postId }));
    navigate('/');
  };
  if (!postData) return <Navigate to='/' />;
  return (
    <PostForm
      action={handleSubmit}
      actionText='Edit post'
      title={postData.title}
      author={postData.author}
      publishedDate={postData.publishedDate}
      category={postData.category}
      shortDescription={postData.shortDescription}
      content={postData.content}
      id={postId}
    />
  );
};

export default EditPostForm;
