import { Container, Col, Row } from 'react-bootstrap';
import EditPostForm from '../../common/EditPostForm/EditPostForm';

const PostEdit = () => {
  return (
    <Container>
      <Col md={{ span: 8, offset: 2 }}>
        <h1>Edit post</h1>
        <EditPostForm />
      </Col>
    </Container>
  );
};

export default PostEdit;
