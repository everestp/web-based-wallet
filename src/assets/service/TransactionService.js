import axios from "axios";
import { AP_URL } from "./baseUrl";

const BASE_URL = `${AP_URL}/api`;

export const receiverUserData = async (data) => {
 
    try {
        console.log("Does aservice recievicing form data",data)
      const response = await axios.post(`${BASE_URL}/send`, data);
      console.log("Does servicing returning response",response.data)
      return response.data;
    } catch (error) {
      throw error;
    }
  };
  