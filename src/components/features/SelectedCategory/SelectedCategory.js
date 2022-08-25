import { Row } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getPostByCategory } from '../../../redux/postsRedux';
import Post from '../Post/Post';

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
      {posts.map((post) =>
        <Post key={post.id} post={post} />
      )}
    </Row>
  );
};

export default SelectedCategory;
