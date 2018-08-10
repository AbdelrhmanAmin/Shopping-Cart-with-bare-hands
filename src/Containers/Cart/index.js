import React , { Component } from 'react';
import Shop from '../Shop';
import './style.css';
class Cart extends Component {


  render(){
    const listName = this.props.item.map(name => {
      return (
        <li>
        {name}
        <button onClick={this.props.delItem}>X</button>
        </li>
      )
    })
    return(
      <div className='cart'>
        <h1>Cart:</h1>
          <ul>
            {listName}
          </ul>
      </div>
    );
  }
}
export default Cart;
