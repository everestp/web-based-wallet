import React from 'react';
import { useUser } from '../context/UserContext';
import { data, useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const  {userData,token,setToken} = useUser();
   const navigate = useNavigate();

  const logout = () => {
    // Clear token from localStorage or sessionStorage
    localStorage.removeItem("token");
  setToken("")
    // Clear user data
  navigate("/")
  
    // Redirect user to login page
   
  };
  return (
    <div className="bg-gradient-to-br from-blue-50 to-white min-h-screen p-6">
      
     

      {/* Header */}
      <div className="mb-8 flex justify-between items-center">
        <div>
      
          <h1 className="text-3xl font-bold text-gray-800">Welcome,{userData.name} 👋</h1>
          <p className="text-gray-600 text-lg mt-1">How are you today? </p>
        </div>
        
        {/* Profile & Logout */}
        <div className="flex items-center gap-4">
          <div className="flex items-center bg-white p-3 rounded-xl shadow-md cursor-pointer hover:bg-blue-100 transition">
            <span className="ml-3 font-medium text-gray-700">{userData.name}</span>
          </div>

          <button
            className="bg-red-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-red-600 transition"
            onClick={logout} // Replace with actual logout logic
          >
            Logout
          </button>
        </div>
      </div>

      {/* Balance Card */}
      <div className="bg-white rounded-2xl shadow-lg p-6 mb-8">
        <h2 className="text-sm text-gray-500">Available Balance</h2>
        <p className="text-4xl font-bold text-gray-900 mt-2">Rs 25,000</p>
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mb-8">
        {[
          { label: 'Send', icon: '📤' },
          { label: 'Receive', icon: '📥' },
          { label: 'Scan QR', icon: '📷' },
          { label: 'Pay Bills', icon: '💡' },
        ].map((action) => (
          <div
            key={action.label}
            className="flex flex-col items-center justify-center bg-white p-5 rounded-xl shadow-md hover:bg-blue-100 transition-all cursor-pointer"
          >
            <div className="text-3xl">{action.icon}</div>
            <span className="text-sm mt-3 font-medium text-gray-700">{action.label}</span>
          </div>
        ))}
      </div>

      {/* Recent Transactions */}
      <div className="bg-white rounded-2xl shadow-md p-6">
        <h3 className="text-xl font-semibold text-gray-800 mb-4">Recent Transactions</h3>
        {[
          { name: 'Momo Restaurant', amount: '-₹450', time: 'Today 10:30 AM' },
          { name: 'Received from Sita', amount: '+₹2,000', time: 'Yesterday 4:15 PM' },
          { name: 'Electricity Bill', amount: '-₹1,200', time: '2 days ago' },
        ].map((txn, index) => (
          <div
            key={index}
            className="flex justify-between items-center py-3 border-b border-gray-100 last:border-none"
          >
            <div>
              <p className="text-gray-800 font-medium">{txn.name}</p>
              <p className="text-sm text-gray-500">{txn.time}</p>
            </div>
            <p
              className={`text-base font-semibold ${
                txn.amount.startsWith('+') ? 'text-green-600' : 'text-red-500'
              }`}
            >
              {txn.amount}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;