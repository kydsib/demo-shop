import {Route, Routes} from 'react-router-dom'
import { useState, useEffect } from "react";
import { useDispatch } from 'react-redux';

import Home from './Pages/Home/Home'
import ProductList from './Layouts/ProductList/ProductList'
import Cart from './components/Cart/Cart';
import ProductPage from './Pages/ProductPage/ProductPage';
import PageNotFound from './Pages/404/PageNotFound';

import useGetCountries from './utils/useGetCountires';

import './App.css';



function App() {
 
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(true)
  const [countries] = useGetCountries()
  // const [shopData, setShopData] = useState([])


  useEffect(() => {
    console.info(countries)
    // kodel cia turiu ne pilna lista
  }, [countries])



useEffect(() => {
  // can I add aditional ckeck for LS?
  fetch('https://api.escuelajs.co/api/v1/products')
  .then((response) => {
    if(response.ok) {
      return response.json();
    } else {
      throw response
    }
  })
  .then((data) => {
      const filteredData = [...data]?.filter(item => item.category.id !== 5)
      dispatch({
        type: 'SET_STORE_ITEMS',
        payload: filteredData
      })
  })
    .catch(error => {
      console.error('Error while fetching ', error)
    })
    .finally(() => {
      setIsLoading(false)
    })
  }, [dispatch])

  async function getCountries() {
    try {
      const response = await fetch('https://restcountries.com/v3.1/all')
    } catch(error) {
      console.error('We encountered error while fetching data ', error)
    }  
  }

  
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
