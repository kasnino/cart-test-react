import { useState } from 'react'
import { Header } from './components/Header';
import { ProductList } from './components/ProductList';
import './App.css'

function App() {
  const [count, setCount] = useState(0)
	const [allProducts, setAllProducts] = useState([]);
	const [total, setTotal] = useState(0);
  const [countProducts, setCountProducts] = useState(0);
  
  return (
   <>
    <Header
    allProducts={allProducts}
    setAllProducts={setAllProducts}
    total={total}
    setTotal={setTotal}
    countProducts={countProducts}
    setCountProducts={setCountProducts}
    />
     <ProductList
     allProducts={allProducts}
     setAllProducts={setAllProducts}
     total={total}
     setTotal={setTotal}
     countProducts={countProducts}
     setCountProducts={setCountProducts}
     />
   </>
  )
}

export default App
