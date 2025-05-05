import axios from "axios";
import { AP_URL } from "./baseUrl";

const BASE_URL = `${AP_URL}/api`;

export const  loggedinUser = async (token) => {
    try {
        const response = await axios.get(`${BASE_URL}/user`,{
            headers :{Authorization :`Bearer ${token}`}
        });
      
                return response;
    } catch (error) {
        console.log("DEBUG: Unable to register with error", error);
        throw error;
    }
};