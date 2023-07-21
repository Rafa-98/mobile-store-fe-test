import { getProducts, getProduct } from '../../../http/https';
import { getData, storeData } from '../../../local-storage/local-storage';

export const getProductsList = new Promise(async (resolve, reject) => {
    var products = await getProducts();
    resolve(products);
});

export const filterProducts = (products, filterString) => {    
    products.map((product) => {
        if((product.brand).includes(filterString) || (product.model).includes(filterString)) {
            return product;
        }
    });
}

async function getProductsListFromServer() {
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
        .catch((err) => console.log(err));
}

export const getProductsData = new Promise(async (resolve, reject) => {
    var data = await getData('productsList');    
    console.log("La data que devuelve el storage: ", data)
    if(data.products == null || data.products.length == 0) { 
        console.log("A llamar al servidor")
        data = await getProductsListFromServer()                 
        resolve(data);
    }
    else {
        var now = new Date();        
        console.log("Tiempo de ahora: ", now.getTime())
        console.log("Tiempo de expiracion: ", data.expiryDateTime)
        console.log("Ahora es mayor que el expiry: ", now.getTime() > data.expiryDateTime)
        if(now.getTime() > data.expiryDateTime) {  
            console.log("Se excedio el tiempo maximo de vida del localStorage")          
            data = await getProductsListFromServer()                     
            resolve(data);
        }
        else { 
            console.log("Responde desde el localstorage: ", data)           
            resolve(data.products);
        }
    }
});