import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ethers } from 'ethers';
import axios from "axios";
import { register } from "../assets/service/AuthService";

const Signup = () => {

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [privateKey, setPrivateKey] = useState("");
  const [seedPhrase, setSeedPhrase] = useState("");
  const [publicKey, setPublicKey] = useState("");
  const [address, setAddress] = useState("");
  const [formdata ,setFormdata] =useState({})
  
const data = {
  name: name,
  phone: phone,
  password: password,
  privateKey:privateKey,
  seedPhrase: seedPhrase,
  publicKey:publicKey,
  address:address

}



   

    const generateSeedPhrase = () => {
        const mnemonic = ethers.Mnemonic.entropyToPhrase(ethers.randomBytes(16));
       setSeedPhrase(mnemonic)
        return mnemonic; // ✅ Returns the generated mnemonic
    };

    const createWalletForUser =  async (seedPhrase) => {
        if (!seedPhrase) return;

        // Generate wallet
        const hdWallet = ethers.HDNodeWallet.fromPhrase(seedPhrase);

        // Debugging logs
        console.log("Generated Public Key:", hdWallet.publicKey);
        console.log("Generated Address:", hdWallet.address);

        // Encrypt private key before storing it
      setPrivateKey(hdWallet.privateKey)
        
        setPublicKey(hdWallet.publicKey);
       setAddress(hdWallet.address)
     
console.log(data)
 try {
  const  response  =  await register(data)
console.log("This is the response ", response)
 } catch (error) {
  console.log("Erroro",error)
 }


        return hdWallet.address; // ✅ Corrected return
    };

    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        alert(`Phone number submitted: ${phone}`);
        console.log(phone);

        const seedPhrase = generateSeedPhrase(); // ✅ Capture the returned seed phrase
        console.log("Generated Seed Phrase:", seedPhrase);

        createWalletForUser(seedPhrase); // ✅ Use the correctly returned seed phrase
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