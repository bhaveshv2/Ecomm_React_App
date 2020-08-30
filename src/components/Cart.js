import React, { Component } from 'react'
import { connect } from 'react-redux'
import {ProductCard} from './index';
import { removeProductFromCart } from '../actions/cart';

class Cart extends Component {
    handelAddToCart=(e)=>{
        // console.log(e.target);
        const productId = e.target.id;
        this.props.dispatch(removeProductFromCart(productId));
    }

    cartTotal=()=>{
        const {products,cart} = this.props;
        let total=0;
        products.map(product=>(
            cart.includes(product.id.toString()) ? total+=product.price : total+=0
        ));
        return total;
    }

    render() {
        const {products,cart} = this.props;
        // console.log(this.props);
        return (
            <div className="cart-container">
                <div className="cart-items-container">
                    {products.map(product=>(
                        cart.includes(product.id.toString()) ? 
                            <ProductCard product={product} key={product.id} handelAddToCart={this.handelAddToCart} src="https://image.flaticon.com/icons/svg/1828/1828901.svg" /> 
                            :
                            null
                    ))}
                </div>
                <div className="total-container">
                    <div className="rates">
                        {products.map(product=>(
                            cart.includes(product.id.toString()) ? 
                                <div className="cart-items-rate-card">
                                    <div className="item-name">
                                        {product.name}
                                    </div>
                                    <div className="item-price">
                                        &#8377; {product.price}
                                    </div>
                                </div>
                                :
                                null
                        ))}
                    </div>
                    <div className="total">
                        <label>Total</label>
                        <div>&#8377; {this.cartTotal()}</div>
                    </div>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state){
    return{
        products:state.products,
        cart:state.cart
    }
}

export default connect(mapStateToProps)(Cart);
