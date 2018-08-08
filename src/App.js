import React, { Component } from 'react';
import './App.css';
import ShopList from './Containers/Shop';
import data from './Data/products';

class App extends Component {
  render() {
    return (
      <div className="container">
        <div className='jumbotron'>
          <h1 className="text-center">Shopping-Cart</h1>
          <ShopList products={data.products}/>
        </div>
      </div>
    );
  }
}

export default App;
