import { getProducts, getProduct } from '../../../http/https';

export const getProductsList = new Promise(async (resolve, reject) => {
    var products = await getProducts();
    resolve(products);
});

export const getProductsDetails = function (productId){
    new Promise(async (resolve, reject) => {
        var products = await getProduct(productId);
        resolve(products);
    });
} 

/*export async function getProductsList() {
    console.log("Initializing request")
    var products = await getProducts();
    console.log('Products Are: ', products);
    return products;
}

export async function getProductsDetails(productId) {
    console.log("Initializing request")
    var product = await getProduct(productId);
    console.log('Products Are: ', products);
    return product;
}*/