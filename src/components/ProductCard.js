import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Rating } from '@material-ui/lab';
import { deleteProduct } from '../actions/products';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class ProductCard extends Component {

    handelDeleteProduct=()=>{
        const id = this.props.product.id;
        console.log("id",id);
        this.props.dispatch(deleteProduct(id));
    }

    render() {
        const { product } = this.props;
        return (
            <div className="product-card" id={product.id}>
                <div className="product-img">
                    <img src={product.img} alt="Not found!"/>
                </div>
                <div className="product-info-container">
                    <div className="product-info">
                        <Link to={`/product-details/${product.id}`}>
                            <div className="product-name">{product.name}</div>
                        </Link>
                        <div className="product-rating">{product.rating}<Rating name="product-rating" value={product.rating} size="small" precision={0.1} /></div>
                    </div>
                    <div className="product-function">
                        {/* <Link to="/product-details">
                            <img src="https://image.flaticon.com/icons/svg/2919/2919592.svg" alt="edit-pencil"/>
                        </Link> */}
                        <div className="delete-button" onClick={this.handelDeleteProduct}><img src="https://image.flaticon.com/icons/svg/1214/1214428.svg" alt="delete-button"/></div>
                    </div>
                </div>
                <div className="product-price-category-container">
                    <div className="product-price">${product.price}</div> 
                    <div className="product-category">Electronics and Appliances</div>
                </div>
            </div>
        )
    }
}

ProductCard.propTypes = {
    product:PropTypes.object.isRequired,
}

function mapStateToProps(state){
    return{
        products:state.products
    }
}

export default connect(mapStateToProps)(ProductCard);