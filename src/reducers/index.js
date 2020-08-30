import { SHOW_ALL_PRODUCTS, ADD_PRODUCT_TO_LIST, DELETE_PRODUCT, FETCH_SPECIFIC_PRODUCT, UPDATE_PRODUCT  } from "../actions/actionTypes";

const initialProductState = {
    products:[],
    success:'',
    message:'',
    product:{}
}

export default function products(state=initialProductState,action){
    switch(action.type){
        case SHOW_ALL_PRODUCTS:
            return {
                ...state,
                products:action.products,
                status:'success',
                message:'Product fetched Successfully',
            };
        
        case ADD_PRODUCT_TO_LIST:
            // const productExist = state.cart.some(product=> product.id === action.product.id);
            // if(productExist){
            //     return{
            //         ...state,
            //         status:'failure',
            //         message:'Product already exist in the list',
            //     }
            // }
            return{
                ...state,
                products:[action.product, ...state.products],
                status:'success',
                message:'Product added to the list Successfully'
            }

        case DELETE_PRODUCT:
            const filteredList = state.products.filter(product => product.id !== action.productId);
            return{
                products:filteredList,
                status:'success',
                message:'Product deleted Successfully!'
            }

        case FETCH_SPECIFIC_PRODUCT:
            return {
                ...state,
                product:action.product,
                status:'success',
                message:'Product Fetched!',
            }

        case UPDATE_PRODUCT:
            // const updatedProduct = state.products.map(product=>product.id === action.product.id ? action.product:product);
            return{
                ...state,
                product:action.product,
                status:'success',
                message:'Product Updated!'
            }
        default:
            return state;
    }
}