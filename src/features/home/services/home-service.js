import { getProducts, getProduct } from '../../../http/https';

export const getProductsList = new Promise(async (resolve, reject) => {
    var products = await getProducts();
    resolve(products);
});

export const filterProducts = (products, filterString) => {
    console.log("Tiene que filtrar productos")
    products.map((product) => {
        if((product.brand).includes(filterString) || (product.model).includes(filterString)) {
            return product;
        }
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