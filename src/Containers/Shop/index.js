import React , { Component } from 'react';
import './style.css';
import Cart from '../Cart';
class ShopList extends Component {
 state ={
    item: []
  }
  onAdd = (product) =>{
    let arr = [];
    arr.push(product.name)
this.setState({
item: [...this.state.item, arr]
})
console.log(this.state)
}
  render(){
  return <div className='container'>
      <h1>Shop:</h1>
    {
      this.props.products.map( product =>
        (<div  className='wrapper x'>
        <h3>{product.name}</h3>
          <img
            height={100}
            title={product.name}
            src={`/products/${product.image}`} alt='img'
            />
            <p>${product.price}</p>
            <button onClick={ () => this.onAdd(product) }>Add</button>
            </div>)
      )
    }
    <Cart item={this.state.item} className='cart'/>
  </div>
}}
export default ShopList;
