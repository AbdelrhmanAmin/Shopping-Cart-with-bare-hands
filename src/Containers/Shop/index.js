import React , { Component } from 'react';
import './style.css';
class ShopList extends Component {
  stats ={
    item: null
  }
  onAdd = (e) =>{
    this.setState({
      item: e.target.value
    })
    console.log(this.state)
  }
  render(){
  return <div>
      <h1>Shop:</h1>
    {
      this.props.products.map( product =>
        (<div  className='wrapper x'>
        <h3>{product.name}</h3>
          <img
            height={100}
            title={product.name}
            src={`/products/${product.image}`}
            />
            <p>${product.price}</p>
            <button onClick={this.onAdd.bind(this.state ,product)}>Add</button>
            </div>)
      )
    }
  </div>
}}
export default ShopList;
