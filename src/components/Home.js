import React, { Component } from 'react';
import { ProductsList } from './index';

class Home extends Component {
  render() {
    const {products} = this.props;
    return (
      <div className="home-container">
          <ProductsList products={products}/>
      </div>
    )
  }
}

export default Home;
