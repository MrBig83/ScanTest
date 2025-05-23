// import { useState } from 'react'

import './App.css'
import Header from './assets/components/Header/Header'
import SearchForm from './assets/components/SearchForm/SearchForm'
import Products from './assets/components/Products/Products'
import ProductContextProvider from './assets/context/ProductContext'

function App() {


  return (
    <>
      
      <ProductContextProvider>
        <Header />
        <SearchForm />
        <Products />
      </ProductContextProvider>
      
      {/* <ProductCard /> */}
      {/* <ProductForm /> */}
      {/* <ProductList /> */}
      {/* <ProductTable /> */}
      {/* <ProductDetails /> */}
      {/* <ProductEdit /> */}
    </>
  )
}

export default App
