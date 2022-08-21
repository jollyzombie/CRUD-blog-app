import { ListGroup } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getAllCategories } from '../../../redux/categoriesRedux';

const CategoryList = () => {
  const categories = useSelector((state) => getAllCategories(state));

  return (
    <ListGroup className='mt-5 mb-5'>
      {categories.map((category) => (
        <ListGroup.Item className='w-50' key={category.id}>
          <Link key={category.id} to={'/categories/' + category.name}>
            <p>{category.name}</p>
          </Link>
        </ListGroup.Item>
      ))}
    </ListGroup>
  );
};

export default CategoryList;
