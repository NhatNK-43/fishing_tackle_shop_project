import axios from "axios";
const PRODUCT_URL = "http://localhost:8080/api/products"
export const getPageProduct = async (page, productTypeName, gtePrice, ltePrice, keyword) => {
    return  await axios.get(PRODUCT_URL+`?page=${page}&productTypeName=${productTypeName}&gtePrice=${gtePrice}&ltePrice=${ltePrice}&keyword=${keyword}`)
}