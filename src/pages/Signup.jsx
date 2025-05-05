import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Keypair } from "@solana/web3.js";
import { Buffer } from "buffer";
import { register } from "../assets/service/AuthService";
import { toast } from "react-toastify";

const Signup = () => {
    // Define state variables
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [password, setPassword] = useState("");
    const [privateKey, setPrivateKey] = useState("");
    const [publicKey, setPublicKey] = useState("");

    const navigate = useNavigate();

    // Convert Uint8Array private key to hex format
    const uint8ArrayToHex = (uintArray) => {
        return Buffer.from(uintArray).toString("hex");
    };

    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();

        // Generate new Solana keypair
        const keypair = Keypair.generate();

        // Convert private key to hex format
        const hexPrivateKey = uint8ArrayToHex(keypair.secretKey);

        // Update state variables
        setPrivateKey(hexPrivateKey);
        setPublicKey(keypair.publicKey.toString());

        // Create user data object
        const userData = {
            name,
            phone,
            password,
            privateKey: hexPrivateKey,
            publicKey: keypair.publicKey.toString(),
        };
console.log(userData)
        console.log("User Data:", userData);

        // Send data to the backend
        try {
            const response = await register(userData);
            if (response.status === 201) {
                toast.success("Registration successful!");
                navigate("/dashboard"); // Redirect after success
            }
        } catch (error) {
            console.error("Error while registering:", error);
            toast.error("Registration failed!");
        }
    };

    // Use effect to log updates to private/public key
    useEffect(() => {
        console.log("Updated Private Key:", privateKey);
        console.log("Updated Public Key:", publicKey);
    }, [privateKey, publicKey]);

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md w-80">
                <h2 className="text-2xl font-bold mb-4 text-center">Sign Up</h2>

                <label className="block text-gray-700 mb-1" htmlFor="name">Name</label>
                <input
                    type="text"
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 mb-4"
                    required
                />

                <label className="block text-gray-700 mb-1" htmlFor="phone">Phone Number</label>
                <input
                    type="tel"
                    id="phone"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 mb-4"
                    required
                />

                <label className="block text-gray-700 mb-1" htmlFor="password">Password</label>
                <input
                    type="password"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 mb-4"
                    required
                />

                <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition">
                    Sign Up
                </button>
            </form>
        </div>
    );
};

export default Signup;