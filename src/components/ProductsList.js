import React, { Component } from 'react';
import { ProductCard } from './index';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { addProductToCart, removeProductFromCart } from '../actions/cart';

class ProductsList extends Component {
    constructor(props){
        super(props);
        this.state={
            sortEnabled:false,
            sortedProducts:[],
        }
    }

    sortProducts=(e)=>{
        if(this.state.sortEnabled){
            this.setState({sortEnabled:false});
        }else{
            const {products} = this.props;
            let sortingData = [...products];
            sortingData.sort((a,b)=>a.price - b.price);
            this.setState({
                sortEnabled:true,
                sortedProducts:sortingData
            })
        }
    }

    handelAddToCart = (e) =>{
        const productId = e.target.id;
        console.log(this.props.status);
        if(e.target.src === "https://image.flaticon.com/icons/svg/1417/1417434.svg"){
            this.props.dispatch(addProductToCart(productId));
            if(this.props.status === 'success'){
                e.target.src = 'https://image.flaticon.com/icons/svg/1828/1828901.svg';
            }
        }else{
            this.props.dispatch(removeProductFromCart(productId));
            if(this.props.status === 'success'){
                e.target.src = 'https://image.flaticon.com/icons/svg/1417/1417434.svg';
            }
        }
    }

    render() {
        const products = this.state.sortEnabled ? this.state.sortedProducts:this.props.products;
        const cart = this.props.cart;
        // console.log("cart",cart);
        return (
            <div className="products-list">
                <div className="add-product-container">
                    <Link to="/add-product" className="add-product-button">
                        <button>+CREATE PRODUCT</button>
                    </Link>
                </div>
                <div className="sort-products">
                    <div onClick={this.sortProducts} className="sort-btn">
                        <img src="https://image.flaticon.com/icons/svg/25/25612.svg" alt=""/>
                    </div>
                </div>
                <div className="product-list-container">
                    {products.map(product=>
                        <ProductCard product={product} src={cart.includes(product.id.toString()) ? "https://image.flaticon.com/icons/svg/1828/1828901.svg":"https://image.flaticon.com/icons/svg/1417/1417434.svg"} handelAddToCart={this.handelAddToCart} key={product.id}/>
                    )}
                </div>
            </div>
        )
    }
}

ProductsList.propTypes ={
    products:PropTypes.object.isRequired,
}

function mapStateToProps(state){
    return{
        products:state.products,
        cart:state.cart,
        status:state.status
    }
}

export default connect(mapStateToProps)(ProductsList);
