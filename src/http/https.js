import axios from 'axios';

const URL = "https://itx-frontend-test.onrender.com/api";

export async function getProducts() {      
    return await axios
         .get(URL + '/product')
         .then((response) => {            
            return response.data;
         })
         .catch((err) => {                        
            throw err
         });
}

export async function getProduct(productId) {   
    return await axios
         .get(URL + '/product/' + productId)
         .then((response) => {            
            return response.data;
         })
         .catch((err) => {            
            throw err
         });
}

export async function AddProductToCart(product) {   
    return await axios
         .post(URL + '/cart/', product)
         .then((response) => {
            return response.data;
         })
         .catch((err) => {            
            throw err
         });
}