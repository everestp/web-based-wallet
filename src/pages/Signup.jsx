import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ethers } from 'ethers';
import axios from "axios";
import { register } from "../assets/service/AuthService";
import {Keypair} from "@solana/web3.js";
import { Buffer } from "buffer";
const Signup = () => {

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [privateKey, setPrivateKey] = useState("");
  
  const [publicKey, setPublicKey] = useState("");

  
const data = {
  name: name,
  phone: phone,
  password: password,
  privateKey:privateKey,
  
  publicKey:publicKey,
 

}

//convert to hex to store in db
const uint8ArrayToHex = (uintArray) => {
  return Buffer.from(uintArray).toString("hex");
};



  

;

    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        alert(`Phone number submitted: ${phone}`);
        console.log(phone);
        const keypair =Keypair.generate()
        console.log("This is the keypair ",keypair.secretKey)
        // console.log("this is the solana keypait",keypair.secretKey)

      const keypair1 =   Keypair.fromSecretKey(keypair.secretKey);
      console.log("This is the keypair 1",keypair1.secretKey)
      console.log("Wallet Address:", keypair.publicKey);
      console.log("Private Key:", keypair1.secretKey);
        console.log("Wallet Address by toString ,methof :", (keypair.publicKey).toString());
        console.log("Private Key bu uin  convert:", uint8ArrayToHex(keypair1.secretKey));
        setPrivateKey(uint8ArrayToHex(keypair1.secretKey))
        setPublicKey(keypair1.publicKey.toString())
console.log("This is the  console log value form handle submit",data)
     try {
        
     } catch (error) {
        
     }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <form
                onSubmit={handleSubmit}
                className="bg-white p-6 rounded-lg shadow-md w-80"
            >
                <h2 className="text-2xl font-bold mb-4 text-center">Sign Up</h2>
                <label className="block text-gray-700 mb-1" htmlFor="name">
                    Name
                </label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Enter your name"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 mb-4"
                    required
                />
                <label className="block text-gray-700 mb-1" htmlFor="phone">
                    Phone Number
                </label>
                <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="+977 981234567"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 mb-4"
                    required
                />
                <label className="block text-gray-700 mb-1" htmlFor="password">
                    Password
                </label>
                <input
                    type="password"
                    id="password"
                    name="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Enter your password"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 mb-4"
                    required
                />
                <button
                    type="submit"
                    className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition"
                >
                    Sign Up
                </button>
            </form>
        </div>
    );
};

export default Signup;