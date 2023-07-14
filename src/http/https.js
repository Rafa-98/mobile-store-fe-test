import axios from 'axios';

const URL = "https://itx-frontend-test.onrender.com/api";

export async function getProducts() {    
    return axios
         .get(URL + '/product')
         .then((response) => {
            console.log("Response: ", response)
            return response.data;
         })
         .catch((err) => {
            console.log(err);
         });
}

export async function getProduct(productId) {
    return axios
         .get(URL + '/product/' + productId)
         .then((response) => {
            console.log("Response: ", response)
            return response.data;
         })
         .catch((err) => {
            console.log(err);
         });
}

function AddProductToCart(product) {
    axios
         .post(URL + '/cart/', product)
         .then((response) => {
            return response;
         })
         .catch((err) => {
            console.log(err);
         });
}