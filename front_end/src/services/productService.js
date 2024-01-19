import axios from "axios";

const PRODUCT_URL = "http://localhost:8080/api/products"
export const getPageProduct = async (page, productTypeName, gtePrice, ltePrice, keyword) => {
    try {
        return await axios.get(PRODUCT_URL + `?page=${page}&productTypeName=${productTypeName}&gtePrice=${gtePrice}&ltePrice=${ltePrice}&keyword=${keyword}`)
    } catch (e) {
        return undefined;
    }
}
export const getProductByProductCode = async (productCode) => {
    try {
        const res = await axios.get(PRODUCT_URL + `/details?productCode=${productCode}`);
        return res.data;
    } catch (e) {
        return undefined;
    }
}
export const getListProductType = async () => {
    try {
        return await axios.get(PRODUCT_URL + `/product-types`);
    } catch (e){
        return undefined;
    }
}