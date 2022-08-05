import { Container, Button, Col } from 'react-bootstrap';
import Posts from '../../features/Posts/Posts';

const Home = () => {
  return (
    <Container>
      <Col className='d-flex justify-content-end mb-3'>
        <Button variant='outline-primary' href={'/post/add'}>
          Add post
        </Button>
      </Col>

      <Posts />
    </Container>
  );
};

export default Home;
