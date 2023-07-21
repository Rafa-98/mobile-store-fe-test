import { getProducts } from '../../../http/https';
import { getData, storeData } from '../../../local-storage/local-storage';

export const getProductsList = new Promise((resolve, reject) => {
    var products = getProducts();
    resolve(products);
    
}).catch((err) => {    
    return null
})

export const filterProducts = (products, filterString) => {       
    return products.filter(function (product) {
        return ((product.brand.toUpperCase()).includes(filterString.toUpperCase()) || (product.model.toUpperCase()).includes(filterString.toUpperCase()))
    })
}

export async function getProductsListFromServer() {
    return await getProductsList
        .then((productsList) => {                        
              let products = productsList;
              const date = new Date();
              date.setHours(date.getHours() + 1);
              let dataToStore = {
                expiryDateTime: date.getTime(),
                products: products
              }              
              storeData('productsList', dataToStore)              
              return products;
          })
        .catch((err) => {
            console.log(err)
            throw err
        });
}

export const getProductsData = new Promise(async (resolve, reject) => {
    var data = await getData('productsList');        
    if(data.products == null || data.products.length == 0) {         
        data = await getProductsListFromServer()                 
        resolve(data);
    }
    else {
        var now = new Date();                
        if(now.getTime() > data.expiryDateTime) {              
            data = await getProductsListFromServer()                     
            resolve(data);
        }
        else {             
            resolve(data.products);
        }
    }
});