import React from 'react';
import { connect } from 'react-redux';
import { addProductToList } from '../actions/products';

class AddProduct extends React.Component{
    constructor(props){
        super(props);
        this.state={
            name:'',
            description:'',
            price:0,
            rating:'',
            img:'',
            category:'',
        }
    }

    addProduct=(e)=>{
        e.preventDefault();
        let product={
            name:this.state.name,
            description:this.state.description,
            price:this.state.price,
            rating:this.state.rating,
            img:this.state.img,
            category:this.state.category
        }

        this.props.dispatch(addProductToList(product));
        console.log('status',this.props);
        if(this.props.status === 'success'){
            this.resetForm();
        }
    }

    resetForm=()=>{
        document.getElementById('add-product-page-container').reset();
    }

    render(){
        const {message} = this.props;
        return(
            <form id="add-product-page-container">
                <h1>ADD PRODUCT</h1>
                <div className="message-container">{message && <div id="message">{message}</div>}</div>
                <div className="input-group">
                    <label htmlFor="name">Name:</label>
                    <input type="text" name="name" onChange={e=>this.setState({name:e.target.value})} required/>
                </div>
                <div className="input-group">
                    <label htmlFor="description">Description:</label>
                    <textarea rows="3" cols="30" name="description" onChange={e=>this.setState({description:e.target.value})} required/>
                </div>
                <div className="input-group">
                    <label htmlFor="price">Price:</label>
                    <input type="number" name="price" onChange={e=>this.setState({price:e.target.value})} required/>
                </div>
                <div className="input-group">
                    <label htmlFor="rating">Rating:</label>
                    <input id="rating" type="range" name="ratingValue" min="0" max="5" step="0.1" onChange={e=>this.setState({rating:e.target.value})} required/>
                    <span>{this.state.rating}</span>
                </div>
                <div className="input-group">
                    <label htmlFor="img">Image URL:</label>
                    <input type="url" name="imageUrl" onChange={e=>this.setState({img:e.target.value})} required/>
                </div>
                <div className="input-group">
                    <label htmlFor="category">Category:</label>
                    <input type="text" name="category" onChange={e=>this.setState({category:e.target.value})} required/>
                </div>
                <div className="form-buttons">
                    <button className="btn-success" onClick={this.addProduct}>SUBMIT</button>
                    <button className="btn-danger" onClick={this.resetForm}>RESET</button>
                </div>
            </form>
        );
    }
};

function mapStateToProps(state){
    return{
        products:state.products,
        status:state.status,
        message:state.message
    }
}

export default connect(mapStateToProps)(AddProduct);
