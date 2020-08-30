import React, { Component } from 'react';
import { ProductCard } from './index';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

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

    render() {
        const products = this.state.sortEnabled ? this.state.sortedProducts:this.props.products;
        return (
            <div className="products-list">
                <div className="add-product-container">
                    <Link to="/add-product" className="add-product-button">
                        <button>+ ADD PRODUCT</button>
                    </Link>
                </div>
                <div className="sort-products">
                    <div onClick={this.sortProducts} className="sort-btn">
                        <img src="https://image.flaticon.com/icons/svg/25/25612.svg" alt=""/>
                    </div>
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

function mapStateToProps(state){
    return{
        products:state.products
    }
}

export default connect(mapStateToProps)(ProductsList);
