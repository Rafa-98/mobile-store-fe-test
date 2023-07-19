import { getProduct } from '../../../http/https';

export const getProductsDetails = function (productId){
    return new Promise(async (resolve, reject) => {
        var products = await getProduct(productId);
        resolve(products);
    });
} 

/*export async function getProductsDetails(productId) {
    console.log("Initializing request")
    var product = await getProduct(productId);
    console.log('Products Are: ', products);
    return product;
}*/