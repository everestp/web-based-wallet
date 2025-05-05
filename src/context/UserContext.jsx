import React, { createContext, useState, useContext, useEffect } from "react";
import { loggedinUser } from "../assets/service/UserService";
import { toast } from "react-toastify";


// Create Context
export const UserContext = createContext();

// Create Provider Component
export const UserContextProvider = ({ children }) => {
  const [token, setToken] = useState(""); // Fixed typo
  const [userData, setUserData] = useState({});
   const [balance ,setBalance] = useState("")
  const contextValue = {
    token,
    setToken,
    userData,
    setUserData,
    balance,
    setBalance
  };

  useEffect(() => {
    setToken(localStorage.getItem('token')) // Fixed data assignment
    const signinUser = async () => {
      try {
        const response = await loggedinUser(token);
        setUserData(response.data);
        toast.success("Welcome " + response.data.name);
      } catch (error) {
        toast.error("Error fetching User data");
        console.log("DEBUG: Error fetching user data",error);
      }
    };
    
    if (token) signinUser();
    // Prevent API call unless token exists
  }, [token,balance]); 


  return (
    <UserContext.Provider value={contextValue}>
      {children}
    </UserContext.Provider>
  );
};

// Custom Hook for easier use
export const useUser = () => useContext(UserContext);