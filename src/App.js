import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Home from './pages/home p/Home';
import About from './pages/about/About';
import Contact from './pages/contact/Contact';
import ProductsPage from './pages/product/ProductsPage';
import Cart from './pages/cart/Cart';
import SingleProduct from './pages/single page/SingleProduct';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import GoToUp from './components/go-upside/GoToUp';
import Error from './pages/page not found/Error';

function App() {
  return (
    <div className='app'>
      <ToastContainer />
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/products' element={<ProductsPage />} />
          <Route path='/product/:id' element={<SingleProduct />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='*' element={<Error />} />
        </Routes>
        <GoToUp />
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
