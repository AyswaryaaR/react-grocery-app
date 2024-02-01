import React from 'react';
import logo from './logo.svg';
import './App.css';
import Products, { products } from './products/Products';
// import { IProduct } from './interfaces/IProduct';

const App = () =>
{
  return (
    <>
    <div> <h3>Happy Shopping!</h3></div>
    <Products products={products} />
    </>
  )
}

export default App;
