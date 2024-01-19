import axios from "axios";
const CART_URL = "http://localhost:8080/api/carts";
export const getCart = async (username)=> {
    try {
        return await axios.get(CART_URL+`?username=${username}`);
    } catch (e) {
        return undefined;
    }
}

export const updateProductInCart = async (cart)=> {
    try{
        return await axios.patch(CART_URL,cart);
    } catch (e) {
        return undefined;
    }
}

export const addToCart = async (cart)=> {
    try {
        return await axios.post(CART_URL,cart);
    } catch (e) {
        return undefined;
    }
}

export const deleteProductInCart = async (id)=> {
    try {
        return await axios.delete(CART_URL+`/${id}`);
    } catch (e) {
        return undefined;
    }
}