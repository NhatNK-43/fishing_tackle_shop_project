import axios from "axios";
const AUTH_URL = "http://localhost:8080/api/auth"
export const login = async (account)=> {
    return await axios.post(AUTH_URL+`/signin`, account);
}