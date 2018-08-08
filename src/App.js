import React, { Component } from 'react';
import './App.css';
import ShopList from './Containers/Shop';
import Cart from './Containers/Cart';
import data from './Data/products';

class App extends Component {
  render() {
    return (
      <div className="container">
        <div className='jumbotron'>
          <h1 className="text-center">Shopping-Cart</h1>
          <div className="cont">
          <ShopList products={data.products} className='shop'/>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
