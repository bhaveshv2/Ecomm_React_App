import { SHOW_ALL_PRODUCTS, ADD_PRODUCT_TO_LIST } from "../actions/actionTypes";

const initialProductState = {
    products:[],
    success:'',
    message:'',
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
            const productExist = state.cart.some(product=> product.id === action.product.id);
            if(productExist){
                return{
                    ...state,
                    status:'failure',
                    message:'Product already exist in the list',
                }
            }
            return{
                ...state,
                products:[action.product,...state.products],
                status:'success',
                message:'Product added to the list Successfully'
            }
        default:
            return state;
    }
}