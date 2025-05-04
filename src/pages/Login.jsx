import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { login } from "../assets/service/AuthService";
import { toast } from "react-toastify";
import { useUser } from "../context/UserContext";

const Login = () => {

    const {setToken} = useUser();
    // Define state variables
    const [data, setData] = useState({
        phone: "",
        password: ""
    });

    const navigate = useNavigate();

    // Handle input changes dynamically
    const handleChange = (event) => {
        const { name, value } = event.target;
        setData((prev) => ({ ...prev, [name]: value }));
    };

    // Handle form submission
    const onSubmit = async (event) => {
        event.preventDefault();
        console.log("Login attempt:", data);

        try {
          const response = await login(data)

            if (response.status === 200) {
                localStorage.setItem("token", response.data.token);
                setToken(response.data.token)
                toast.success("Login Successful!");
                navigate("/dashboard"); // Redirect user
            }
        } catch (error) {
          console.log("Error while logging", error)
            toast.error("Unable to Login! Please check credentials.");
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <form onSubmit={onSubmit} className="bg-white p-6 rounded-lg shadow-md w-80">
                <h2 className="text-2xl font-bold mb-4 text-center">Log in</h2>

                <label className="block text-gray-700 mb-1" htmlFor="phone">Phone Number</label>
                <input
                    type="text"
                    id="phone"
                    name="phone"
                    value={data.phone}
                    onChange={handleChange}
                    placeholder="+977 981234567"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 mb-4"
                    required
                />

                <label className="block text-gray-700 mb-1" htmlFor="password">Password</label>
                <input
                    type="password"
                    id="password"
                    name="password"
                    value={data.password}
                    onChange={handleChange}
                    placeholder="Enter Your Password"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 mb-4"
                    required
                />

                <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition">
                    Login
                </button>
            </form>
        </div>
    );
};

export default Login;