import React , { Component } from 'react';
import Shop from '../Shop';
import './style.css';
class Cart extends Component {
  constructor( props ) {
    super( props );
    this.keyCount = 0;
    this.getKey = this.getKey.bind(this);
}
getKey(){
    return this.keyCount++;
}


  render(){
    const listName = this.props.item.map(name => {
      return (
        <li key={this.getKey()}>{name}</li>
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
