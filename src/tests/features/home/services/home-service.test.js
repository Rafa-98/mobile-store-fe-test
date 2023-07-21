import { afterEach, describe, expect, it, vi } from 'vitest'
import { filterProducts, getProductsList, getProductsListFromServer } from '../../../../features/home/services/home-service';
import { mockProductsListData } from './mockData';
import { getProducts } from '../../../../http/https';
import { getData, storeData } from '../../../../local-storage/local-storage';

vi.mock('../../../../http/https', () => {
    const mockProductsList = [
        {
            id: "ZmGrkLRPXOTpxsU4jjAcv",
            brand: "Acer",
            model: "Iconia Talk S",
            price: "170",
            imgUrl: "https://itx-frontend-test.onrender.com/images/ZmGrkLRPXOTpxsU4jjAcv.jpg"
        },
        {
            id: "cGjFJlmqNPIwU59AOcY8H",
            brand: "Haisd",
            model: "Liquid Z6 Plus",
            price: "250",
            imgUrl: "https://itx-frontend-test.onrender.com/images/cGjFJlmqNPIwU59AOcY8H.jpg"
        },
        {
            id: "8hKbH2UHPM_944nRHYN1n",
            brand: "Acer",
            model: "Liquid Z6",
            price: "120",
            imgUrl: "https://itx-frontend-test.onrender.com/images/8hKbH2UHPM_944nRHYN1n.jpg"
        }
    ]
    const getProducts = vi.fn()
    getProducts.mockResolvedValue(mockProductsList);
    return {
        getProducts
    }
})

vi.mock('../../../../local-storage/local-storage', () => {    
    const mockProductsList = [
        {
            id: "ZmGrkLRPXOTpxsU4jjAcv",
            brand: "Acer",
            model: "Iconia Talk S",
            price: "170",
            imgUrl: "https://itx-frontend-test.onrender.com/images/ZmGrkLRPXOTpxsU4jjAcv.jpg"
        },
        {
            id: "cGjFJlmqNPIwU59AOcY8H",
            brand: "Haisd",
            model: "Liquid Z6 Plus",
            price: "250",
            imgUrl: "https://itx-frontend-test.onrender.com/images/cGjFJlmqNPIwU59AOcY8H.jpg"
        },
        {
            id: "8hKbH2UHPM_944nRHYN1n",
            brand: "Acer",
            model: "Liquid Z6",
            price: "120",
            imgUrl: "https://itx-frontend-test.onrender.com/images/8hKbH2UHPM_944nRHYN1n.jpg"
        }
    ]
    const storeData = vi.fn()
    const getData = vi.fn()
    storeData.mockResolvedValue("Success");
    getData.mockResolvedValue(mockProductsList);
    return {
        storeData,
        getData
    }
})


describe('Test for Home Service', () => {
    afterEach(() => {
        vi.restoreAllMocks()
    })

    it('It should return the products filtered', () => {
        // Execute
        var result = filterProducts(mockProductsListData, "Acer");

        // Assert
        expect(result).toEqual([
            {
                id: "ZmGrkLRPXOTpxsU4jjAcv",
                brand: "Acer",
                model: "Iconia Talk S",
                price: "170",
                imgUrl: "https://itx-frontend-test.onrender.com/images/ZmGrkLRPXOTpxsU4jjAcv.jpg"
            },
            {
                id: "8hKbH2UHPM_944nRHYN1n",
                brand: "Acer",
                model: "Liquid Z6",
                price: "120",
                imgUrl: "https://itx-frontend-test.onrender.com/images/8hKbH2UHPM_944nRHYN1n.jpg"
            }
        ]);
    });

    it('Should return the list of products by calling getProductsList', async () => {        
        var result = await getProductsList
                            .then((productsList) => {                                  
                                return productsList
                              })
                            .catch((err) => console.log(err));        
        expect(result).toEqual(mockProductsListData)        
    })

    it('Should return the mocked data from server', async() => {
        var result = await getProductsListFromServer()

        expect(result).toEqual(mockProductsListData)
    })

    
});