import Home from './Component/Home'
import CartPage from './Component/Cart'
import { Routes, Route } from 'react-router-dom'
import Navbar from './Component/Navbar'
import {useState,useEffect} from 'react'
import axios from 'axios'


export default function App() {
  const [products, setProducts] = useState([])
  const [isError,setIsError]= useState('')

  const fetchData = async () => {
    try{
      setIsError('')
      const response = await axios.get('https://dummyjson.com/products')
      const allproducts = response.data.products
      setProducts(allproducts)
      console.log(allproducts);
      console.log(products)

    }catch(error){
      setIsError(error.message)
      setProducts([])
    }

    
}

useEffect(() => {
  fetchData()
}, [])
  return <>
    {/* <Home /> */}

  <Navbar/>
    <Routes>
      <Route path='/' element={<Home products={products} iserror={isError}/>} />
      <Route path='/cart' element={<CartPage />} />

    </Routes>

  </>
}