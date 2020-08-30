import React, { Component } from 'react'
import { connect } from 'react-redux';
import { fetchProduct, updateProduct } from '../actions/product';
import { Rating } from '@material-ui/lab';

class EditDetailsProduct extends Component {
    constructor(props){
        super(props);
        this.state={
            edittable:false,
            name:'',
            // category:'',
            rating:'',
            price:0,
            description:'',
        }
    }

    componentDidMount(){
        const {match} = this.props;

        if(match.params.productId){
            this.props.dispatch(fetchProduct(match.params.productId));
        }
    }

    componentDidUpdate(prevProps){
        
        const {
            match:{params:prevParams},
        } = prevProps;
        
        const {
            match:{params:currParams},
        }=this.props;

        if(prevParams && currParams && prevParams.productId !== currParams.productId){
            this.props.dispatch(fetchProduct(currParams.productId));
        }
    }
    
    handelEditing=()=>{
        this.setState({
            edittable:true,
            name:this.props.product.name,
            rating:this.props.product.rating,
            price:this.props.product.price,
            description:this.props.product.description
        })
    }

    handelUpdate=()=>{
        const id = this.props.product.id;
        const img = this.props.product.img;
        let product = {
            name:this.state.name,
            description:this.state.description,
            rating:this.state.rating,
            price:this.state.price,
            // category:this.state.category
            edittable:false,
            img
        }
        this.props.dispatch(updateProduct(id,product));
    }

    render() {
        const {product} = this.props;        
        console.log('state:',this.state);
        // console.log('props',this.props);
        const {edittable,name,rating,price,description} = this.state;
        return (
            <div className="edit-details-container">
                <div className="edit-function">
                    {!edittable && <div className="edit-button" onClick={this.handelEditing}>
                        <img src="https://image.flaticon.com/icons/svg/2919/2919592.svg" alt="edit-pencil"/>
                    </div>}
                </div>
                <div className="details-container">
                    <div className="product-image">
                        <img src={product.img} alt="Not Found!"/>
                    </div>
                    
                    <div className="details-info-container">
                        <div className="product-edit">
                            <label htmlFor="name" className="product-label">Name :</label> 
                            {edittable?<input type="text" name="name" value={name} onChange={e=>this.setState({name:e.target.value})}/>:<div className="product-name-edit product-in">{product.name}</div>}
                        </div>
                        <div className="product-edit">
                            <label htmlFor="category" className="product-label">Category :</label>
                            {/* {edittable ? <input type="text" name="category" value={} onChange={e=>this.setState({category:e.target.value})}/>:<div className="product-category-edit product-in">sdfgsdfgsh</div>} */}
                        </div>
                        <div className="product-edit">
                            <label htmlFor="rating" className="product-label">Rating :</label> 
                            {edittable?<input type="text" name="rating" value={rating} onChange={e=>this.setState({rating:e.target.value})}/>:<div className="product-rating-edit product-in">{product.rating}<Rating name="product-rating" value={product.rating} size="small" precision={0.1} /></div>}
                        </div>
                        <div className="product-edit">
                            <label htmlFor="price" className="product-label">Price :</label>  
                            {edittable?<input type="number" name="price" value={price} onChange={e=>this.setState({price:e.target.value})}/>:<div className="product-price-edit product-in">${product.price}</div>}
                        </div>
                        <div className="product-edit">
                            <label htmlFor="description" className="product-label">Description:</label>
                            {edittable?<textarea rows="10" cols="100" name="description" value={description} onChange={e=>this.setState({description:e.target.value})}/>:<div className="product-description-edit product-in">{product.description}</div>}
                        </div>
                        {edittable && 
                            <div className="update-btn">
                                <button className="btn" onClick={this.handelUpdate}>UPDATE PRODUCT</button>
                                <button className="btn" onClick={()=>this.setState({edittable:false})}>GO BACK</button>
                            </div>
                        }
                    </div>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state){
    return{
        product:state.product
    }
}

export default connect(mapStateToProps)(EditDetailsProduct);
