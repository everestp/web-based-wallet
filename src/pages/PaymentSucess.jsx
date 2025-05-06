import React from "react";
import { useUser } from "../context/UserContext";
import { useNavigate } from "react-router-dom";

export default function PaymentSuccess() {
const {sendUserdata , amount} = useUser()
const navigate = useNavigate()
    function getFormattedDateTime() {
        const now = new Date();
      
        const day = now.getDate().toString().padStart(2, '0');
        const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
                            "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
        const month = monthNames[now.getMonth()];
        const year = now.getFullYear();
      
        const hours = now.getHours().toString().padStart(2, '0');
        const minutes = now.getMinutes().toString().padStart(2, '0');
        const seconds = now.getSeconds().toString().padStart(2, '0');
      
        return `${day}-${month}-${year} - ${hours}:${minutes}:${seconds}`;
      }
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-4">
      <div className="bg-white shadow-md rounded-md p-6 sm:p-8 w-full max-w-2xl">
        <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-3 mb-4 text-center sm:text-left">
          <div className="text-green-500 text-3xl">✔️</div>
          <h2 className="text-2xl font-semibold text-green-600 mt-2 sm:mt-0">
            Payment Successful
          </h2>
        </div>
        <p className="text-gray-600 mb-6 text-center sm:text-left">
          Your payment has been processed! Details of transactions are included below
        </p>

        <div className="border-t border-gray-200 pt-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-gray-700">
            <div>
              <p className="font-medium">Amount</p>
              <p>Rs <span className="text-orange-600 font-bold">{amount}</span> </p>
            </div>
            <div>
              <p className="font-medium">Phone Number</p>
              <p className="font-bold">{sendUserdata.name}</p>
            </div>
            <div>
              <p className="font-medium">Name</p>
              <p className="font-semibold">{sendUserdata.name}</p>
            </div>
            <div>
              <p className="font-medium">Transaction Time</p>
              <p>{getFormattedDateTime()}</p>
            </div>
          </div>
        </div>

        <div className="mt-8 flex flex-col sm:flex-row sm:space-x-4 space-y-4 sm:space-y-0 items-center justify-center">
          <button className="w-full sm:w-auto px-4 py-2 border border-gray-300 rounded hover:bg-gray-100">
            Print Receipt
          </button>
          <button className="w-full sm:w-auto px-4 py-2 bg-orange-500 text-white rounded hover:bg-orange-600" onClick={navigate("/dashboard")}>
         Back
          </button>
        </div>
      </div>
    </div>
  );
}
