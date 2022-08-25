import { Row } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { getAllPosts } from '../../../redux/postsRedux';
import Post from '../Post/Post';

const Posts = () => {
  const postsData = useSelector(getAllPosts);

  return (
    <Row>
      {postsData.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </Row>
  );
};

export default Posts;
