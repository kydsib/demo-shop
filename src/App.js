import {Route, Routes} from 'react-router-dom'

import Home from './Pages/Home/Home'
import ProductList from './Layouts/ProductList/ProductList'
import Cart from './components/Cart/Cart';
import ProductPage from './Pages/ProductPage/ProductPage';
import PageNotFound from './Pages/404/PageNotFound';

import './App.css';

function App() {
  return (

    <Routes>
      <Route  path="/" element={<Home />}/>
      {/* pass down prop for category */}
      <Route  path='/collections/shoes' element={<ProductList categoryName='Shoes' />}/>
      <Route  path='/collections/accessories' element={<ProductList categoryName='Accessories' />}/>
      <Route  path='/collections/jackets' element={<ProductList categoryName='Jackets' />}/>
      <Route  path='/collections/bags' element={<ProductList categoryName='Bags' />}/>
      <Route  path='/cart' element={<Cart />}/>
      <Route path={`/products/:id/:name`} element={<ProductPage  />} />
      <Route path="*" element={<PageNotFound />} />

    </Routes>


  );
}

export default App;
