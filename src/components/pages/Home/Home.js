import { Button, Col } from 'react-bootstrap';
import Posts from '../../features/Posts/Posts';

const Home = () => {
  return (
    <section>
      <Col className='d-flex justify-content-end mb-3'>
        <Button variant='outline-primary' href={'/post/add'}>
          Add post
        </Button>
      </Col>

      <Posts />
    </section>
  );
};

export default Home;
