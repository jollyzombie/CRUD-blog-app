import AddPostForm from "../../common/AddPostForm/AddPostForm";
import { Container, Col } from 'react-bootstrap';

const PostAdd = () => {

  return (
    <Container>
      <Col md={{ span: 8, offset: 2 }}>
        <h1>Add post</h1>
      <AddPostForm />
      </Col>
    </Container>
  );
};

export default PostAdd;