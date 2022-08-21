import { Container, Col } from 'react-bootstrap';

import CategoryList from '../../features/CategoryList/CategoryList';

const Categories = () => {

  return (
    <Container>
      <Col>
        <h1>All categories</h1>
        <CategoryList />
      </Col>
    </Container>
  );
};

export default Categories;