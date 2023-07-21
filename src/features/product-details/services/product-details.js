import { getProduct, AddProductToCart } from '../../../http/https';
import { getData, storeData } from '../../../local-storage/local-storage';

export const getProductsDetails = function (productId){
    return new Promise((resolve, reject) => {
        var products = getProduct(productId);
        resolve(products);
    })
    .catch((err) => {    
        return null
    });
}

export async function getProductFromServer(productId) {
    return await getProductsDetails(productId)
        .then((productData) => {                        
              let product = productData;
              const date = new Date();
              date.setHours(date.getHours() + 1);
              let dataToStore = {
                expiryDateTime: date.getTime(),
                product: product
              }
              storeData(productId, dataToStore)              
              return product;
          })
        .catch((err) => {
            console.log(err)
            throw err
        });
}

export const getProductData = function (productId){
    return new Promise(async (resolve, reject) => {
        var data = await getData(productId);
        if(data.product == null) { 
            data = await getProductFromServer(productId)                 
            resolve(data);
        }
        else {
            var now = new Date();
            if(now.getTime() > data.expiryDateTime) {            
                data = await getProductFromServer(productId)                     
                resolve(data);
            }
            else {            
                resolve(data.product);
            }
        }
    })
};

export const addProduct = function (productId, productColor, productStorage){
    return new Promise((resolve, reject) => {
        var count = AddProductToCart({
            id: productId,
            colorCode: productColor,
            storageCode: productStorage
        });
        resolve(count);
    })
    .catch((err) => {    
        return null
    });
}