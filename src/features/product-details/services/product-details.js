import { getProduct } from '../../../http/https';

export async function getProductsDetails(productId) {
    console.log("Initializing request")
    var product = await getProduct(productId);
    console.log('Products Are: ', products);
    return product;
}