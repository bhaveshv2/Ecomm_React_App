import React, { Component } from 'react';
import PropTypes from 'prop-types';
// import { Rating } from '@material-ui/lab';

class ProductCard extends Component {
    render() {
        const { product } = this.props;
        return (
            <div className="product-card" id={product.id}>
                <div className="product-img">
                    <img src={product.img} alt="Not found!"/>
                </div>
                <div className="product-info-container">
                    <div className="product-info">
                        <div className="product-name">{product.name}</div>
                        <div className="product-rating">{product.rating}</div>
                        {/* <Rating name="product-rating" value={product.rating} size="small" precision={0.1} /> */}
                    </div>
                    <div className="product-function">
                        {/* <img src="https://image.flaticon.com/icons/svg/2919/2919592.svg" alt="edit-pencil"/> */}
                        <img src="https://image.flaticon.com/icons/svg/1214/1214428.svg" alt="delete-button"/>
                    </div>
                </div>
                <div className="product-description">
                    <p>{product.description}</p>
                </div>
            </div>
        )
    }
}

ProductCard.propTypes = {
    product:PropTypes.object.isRequired,
}

export default ProductCard;