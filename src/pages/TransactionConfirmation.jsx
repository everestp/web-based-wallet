import React, { useContext } from "react";
import { useUser } from "../context/UserContext";
import "./TransactionConfirmation.css";
import { transferSOL } from "../assets/service/trasnferSol";
import { Buffer } from "buffer";
import { toast } from "react-toastify";
import { getSolPriceInNpr } from "../assets/service/solService";
import { useNavigate } from "react-router-dom";

const TransactionConfirmation = () => {
  const { sendUserdata, amount, userData, setAmount ,balance,setSendUserData} = useUser();
  const navigate = useNavigate()
const transferCancle = ()=>{
  setSendUserData({})
  navigate("/dashboard")
}
  const handleConfirm = async (publicKey, amountInSol, privateKey) => {
    try {
      const response = await transferSOL(publicKey, amountInSol, privateKey);
      toast.success(`Transaction Successful: Sent ${amountInSol} SOL`);
      navigate("/dashboard")
      // Optionally reset amount or redirect after success
      setAmount("");
    } catch (error) {
      console.error("Transaction failed:", error);
      toast.error("Transaction failed!");
    }
  };

  const NprToSol = async (amount) => {
    const oneSolInNpr = await getSolPriceInNpr();
    const amountInSol = Number(amount) / oneSolInNpr;
    const fixed = Number(amountInSol.toFixed(6));
    return fixed < 0.001 ? 0.001 : fixed; // minimum 0.001 SOL
  };

  const hexToUint8Array = (hexString) => {
    return new Uint8Array(Buffer.from(hexString, "hex"));
  };


  

  return (
    <div className="min-h-screen bg-gray-900 text-white p-4">
    <div className="max-w-md mx-auto space-y-4">

      {/* Balance Card */}
      <div className="bg-[#121212] rounded-xl px-4 py-3 flex justify-between items-center shadow-inner">
        <div className="text-sm">
          <div className="text-gray-300">NPR</div>
          <div className="text-xl font-bold">{balance}</div>
          <div className="text-gray-400 text-xs">Available Balance</div>
        </div>

        <div className="w-15 h-5 bg-red-500 rounded-md  text-center align-center text-white cursor-pointer" onClick={transferCancle}>
    Cancel
  </div>

      </div>

      {/* Warning Box */}
      <div className="bg-blue-900 text-blue-100 p-3 rounded-md text-sm">
        <p className="font-medium">
          Please send money to only trusted contacts after verifying properly.
        </p>
        <p className="mt-1 text-blue-300 italic">
          Call to confirm before sending money to any person in the system.
        </p>
      </div>

      {/* Payment Box */}
      <div className="bg-[#121212] rounded-xl p-4 text-center space-y-1">
        <div className="text-sm text-gray-400">You are paying</div>
        <div className="text-2xl font-bold text-green-400">NPR {amount}</div>
        <div className="text-sm font-medium text-gray-300">Send Money</div>
      </div>

      {/* Details */}
      <div className="bg-[#121212] rounded-xl p-4 space-y-3">
        <div className="text-white font-semibold">Payment Details</div>
        <div className="text-sm">
          <div className="flex justify-between border-b border-gray-700 py-1">
            <span className="text-gray-400">Arfin Id:</span>
            <span>{sendUserdata.phone}</span>
          </div>
          <div className="flex justify-between border-b border-gray-700 py-1">
            <span className="text-gray-400">Receiver Name:</span>
            <span>{sendUserdata.name}</span>
          </div>
          
          <div className="flex justify-between py-1">
            <span className="text-gray-400">Remarks:</span>
            <span>{sendUserdata.remark}</span>
          </div>
        </div>
      </div>

      {/* Total */}
      <div className="bg-[#121212] rounded-xl p-4">
        <div className="text-sm text-gray-300">Your Bill</div>
        <div className="flex justify-between font-semibold text-white mt-1">
          <span>Total Paying Amount</span>
          <span>{amount}</span>
        </div>
      </div>

      {/* Confirm Button */}
      <button
        className="w-full bg-blue-500 hover:bg-blue-600 text-white py-3 rounded-xl font-semibold text-lg transition"
        onClick={async () => {
          const solAmount = await NprToSol(amount);
          const privateKeyUint8 = hexToUint8Array(userData.privateKey);
          await handleConfirm(sendUserdata.publicKey, solAmount, privateKeyUint8);
        }}
      >
        CONFIRM
      </button>
    </div>
  </div>
);
};

export default TransactionConfirmation;
