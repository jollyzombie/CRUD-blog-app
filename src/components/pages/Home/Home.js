import { Button, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Posts from '../../features/Posts/Posts';

const Home = () => {
  return (
    <section>
      <Col className='d-flex justify-content-end mb-3'>
        <Button variant='outline-info' as={Link} to='/post/add'>
          Add post
        </Button>
      </Col>

      <Posts />
    </section>
  );
};

export default Home;
