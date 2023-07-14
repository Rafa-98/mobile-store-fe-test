import { getProducts, getProduct } from '../../../http/https';

export async function getProductsList() {
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
}