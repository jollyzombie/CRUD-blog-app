import Header from './components/views/Header/Header';
import Footer from './components/views/Footer/Footer';
import Home from './components/pages/Home/Home';
import About from './components/pages/About/About';
import SinglePost from './components/pages/SinglePost/SinglePost';
import PostAdd from './components/pages/PostAdd/PostAdd';
import PageNotFound from './components/pages/PageNotFound/PageNotFound';
import PostEdit from './components/pages/PostEdit/PostEdit';
import Categories from './components/pages/Categories/Categories';

import { Routes, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import SelectedCategory from './components/features/SelectedCategory/SelectedCategory';


const App = () => {
  return (
    <main>
      <Container>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/post/add' element={<PostAdd />} />
          <Route path='/post/:postId' element={<SinglePost />} />
          <Route path='/post/:postId/edit' element={<PostEdit />} />
          <Route path='/about' element={<About />} />
          <Route path='/categories' element={<Categories />} />
          <Route path='/categories/:name' element={<SelectedCategory />} />
          <Route path='*' element={<PageNotFound />} />
        </Routes>
        <Footer />
      </Container>
    </main>
  );
};

export default App;
