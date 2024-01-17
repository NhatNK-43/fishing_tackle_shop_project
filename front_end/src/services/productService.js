import axios from "axios";
const PRODUCT_URL = "http://localhost:8080/api/products"
export const getPageProduct = async (page, productTypeName, gtePrice, ltePrice, keyword) => {
    return  await axios.get(PRODUCT_URL+`?page=${page}&productTypeName=${productTypeName}&gtePrice=${gtePrice}&ltePrice=${ltePrice}&keyword=${keyword}`)
}
export const getProductByProductCode = async (productCode) => {
    console.log("ok")
    return  await axios.get(PRODUCT_URL+`/details?productCode=${productCode}`)
}
export const getListProductType = async ()=>{
    return await axios.get(PRODUCT_URL+`/product-types`)
}