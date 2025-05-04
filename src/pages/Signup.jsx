import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Signup = () => {


  const [data, setData] = useState({
    name: "",
    phone: "",
    pass: "",
  });

  const onChangeHandler = (event) => {
    const { name, value } = event.target;
   setData((prev)=>({
   ...prev,
   [name]:value
   }))
  };
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Phone number submitted: ${data.phone}`);
   console.log(data)
   
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded-lg shadow-md w-80"
      >
        <h2 className="text-2xl font-bold mb-4 text-center">Sign Up</h2>
        <label className="block text-gray-700 mb-1" htmlFor="phone">
          Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={data.name}
          onChange={onChangeHandler}
          placeholder="+977 981234567"
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
          value={data.phone}
          onChange={onChangeHandler}
          placeholder="+977 981234567"
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 mb-4"
          required
        />
        <label className="block text-gray-700 mb-1" htmlFor="phone">
          Phone Number
        </label>
        <input
          type="password"
          id="text"
          name="pass"
          value={data.pass}
          onChange={onChangeHandler}
          placeholder="Password"
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
