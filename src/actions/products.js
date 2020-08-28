import { SHOW_ALL_PRODUCTS, ADD_PRODUCT_TO_LIST,DELETE_PRODUCT } from "./actionTypes";

// Fetch the List of Products
export function getAllProducts(){
    return(dispatch)=>{
        const url = "https://my-json-server.typicode.com/bhaveshv2/Ecomm_React_App/products";
        fetch(url)
            .then(response=>response.json())
            .then(data=>{
                console.log('Data of fetch',data);
                dispatch(showAllProducts(data));
            })
    }
}

export function showAllProducts(products){
    return{
        type:SHOW_ALL_PRODUCTS,
        products
    }
}

//Add new Product to the list
export function addProductToList(product){
    return(dispatch)=>{
        const url = "https://my-json-server.typicode.com/bhaveshv2/Ecomm_React_App/products";
        fetch(url,{
            method:"POST",
            headers:{
                'Content-Type':'application/json;charset=utf-8'
            },
            body:JSON.stringify(product)
        })
        .then(response=>response.json())
        .then(data=>{
            console.log('Data of addToList', data);
            dispatch(addProductToStore(data));
        })
    }
}

export function addProductToStore(product){
    return{
        type:ADD_PRODUCT_TO_LIST,
        product
    }
}

//Delete the product
export function deleteProduct(id){
    return(dispatch)=>{
        const url = `https://my-json-server.typicode.com/bhaveshv2/Ecomm_React_App/products/${id}`;
        fetch(url,{
            method:'DELETE'
        })
        .then(response=>response.json())
        .then(data=>{
            dispatch(deleteProductFromStore(id));
        })
    }
}

export function deleteProductFromStore(productId){
    return{
        type:DELETE_PRODUCT,
        productId
    }
}