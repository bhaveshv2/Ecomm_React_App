import React, { Component } from 'react';
import { ProductCard } from './index';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class ProductsList extends Component {

    render() {
        const {products} = this.props.products;
        return (
            <div className="products-list">
                <div className="add-product-container">
                    <Link to="/add-product" className="add-product-button">
                        <button>+ ADD PRODUCT</button>
                    </Link>
                </div>
                <div className="product-list-container">
                    {products.map(product=>
                        <ProductCard product={product} key={product.id}/>
                    )}
                </div>
            </div>
        )
    }
}

ProductsList.propTypes ={
    products:PropTypes.object.isRequired,
}

export default ProductsList;
