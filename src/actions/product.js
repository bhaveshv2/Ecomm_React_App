import { FETCH_SPECIFIC_PRODUCT, UPDATE_PRODUCT  } from "./actionTypes";

//fetching specific product
export function fetchProduct(productId){
    return(dispatch)=>{
        const url = `https://my-json-server.typicode.com/bhaveshv2/Ecomm_React_App/products/${productId}`;
        fetch(url)
        .then(response=>response.json())
        .then(data=>{
            console.log('Fetched specific Product');
            dispatch(fetchProductFromStore(data));
        });
    }
}

export function fetchProductFromStore(product){
    return{
        type:FETCH_SPECIFIC_PRODUCT,
        product
    }
}

//update the fetched product
export function updateProduct(productId,product){
    return(dispatch)=>{
        const url = `https://my-json-server.typicode.com/bhaveshv2/Ecomm_React_App/products/${productId}`;
        fetch(url,{
            method:'PUT',
            headers:{
                'Content-Type':'application/json;charset=utf-8'
            },
            body:JSON.stringify(product)
        })
        .then(response=>response.json())
        .then(data=>{
            console.log(data);
            dispatch(updateProductInStore(data));
        })
    }
}

export function updateProductInStore(product){
    return{
        type:UPDATE_PRODUCT,
        product
    }
}