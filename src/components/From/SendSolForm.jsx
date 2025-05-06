import React, { useState } from 'react';
import {
  Connection,
  PublicKey,
  LAMPORTS_PER_SOL,
  SystemProgram,
  Transaction,
  Keypair,
} from '@solana/web3.js';
import { receiverUserData } from '../../assets/service/TransactionService';
import { data, useNavigate } from 'react-router-dom';
import { useUser } from '../../context/UserContext';

const SendSolForm = ({ showForm, setShowForm }) => {
const navigate = useNavigate()
const { sendUserdata,setSendUserData,token,setAmount,balance} =useUser()

  const [status, setStatus] = useState('');
 const [formData ,setFormData] = useState ({
    phone :"",
    remark :""
 })

 const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  
  const connection = new Connection('https://api.devnet.solana.com', 'confirmed');

  // NOTE: Replace this with your real keypair (from wallet)
  const senderKeypair = Keypair.generate(); // Placeholder — replace this in production
 const handleSend =  async (e)=>{
   console.log("This is the form data that is send to the api a",formData)
   console.log('Does the token is printing here or not',token)
   e.preventDefault()
   try {
     
     const response = await receiverUserData(formData)
     console.log(" const response = await receiverUserData(formData)",response)
     console.log("This the resoponse",response)
     
     setSendUserData(response)
     navigate("/confirm")
          
          
          
     
        console.log(response)
        console.log("This is the sendUSerData from context apii",sendUserdata)
    } catch (error) {
        console.log("Error fetchinf recierver data",error)
    }
 }
   if (!showForm) return null;
return (
<div className="min-h-screen bg-gray-900 text-white p-4">
      <div className="max-w-md mx-auto space-y-4">

        {/* Header */}
        <div className="bg-[#121212] rounded-xl px-4 py-3 flex justify-between items-center shadow-inner">
          <div>
            <div className="text-gray-300 text-sm">NPR</div>
            <div className="text-xl font-bold">{balance}</div>
            <div className="text-xs text-gray-400">Balance</div>
          </div>
          <div className="w-5 h-5 bg-green-500 rounded-full animate-pulse" />
        </div>

        {/* Recent Fund Transfers */}
        
        {/* Transfer Method Toggle */}
        <form onSubmit={handleSend}>

        <div className="bg-[#1f1f1f] p-4 rounded-lg space-y-3">
         

          <div className="space-y-2">
            <label className="text-gray-400 text-sm">Phone Nummber</label>
            <div className="relative">
              <input
                type="text"
                name='phone'
                onChange={handleChange}
                required
                placeholder={
                 " + 977 98XXX"
                }
                className="w-full bg-[#2c2c2c] rounded-lg px-4 py-2 text-sm placeholder-gray-500 text-white focus:outline-none"
              />
              <span className="absolute right-3 top-2.5 text-green-400 text-xl">👤</span>
            </div>
            <label className="text-gray-400 text-sm">Amount</label>
            <div className="relative">
              <input
                type="text"
                name='amount'
                onChange={(e)=>setAmount(e.target.value)}
                placeholder={
                 "Amount Rs"
                }
                className="w-full bg-[#2c2c2c] rounded-lg px-4 py-2 text-sm placeholder-gray-500 text-white focus:outline-none"
              />
              
            </div>
            <label className="text-gray-400 text-sm">Remark</label>
            <div className="relative">
              <input
                type="text"
                name='remark'
                onChange={handleChange}
                placeholder={
                 "Remark"
                }
                className="w-full bg-[#2c2c2c] rounded-lg px-4 py-2 text-sm placeholder-gray-500 text-white focus:outline-none"
              />
              
            </div>
          </div>

          <button className="w-full bg-blue-500 hover:bg-blue-700 text-white py-2 mt-2 rounded-xl text-sm font-semibold" type='sumbit'>
            PROCEED
          </button>
        </div>
        </form>

        {/* Secure Transfer Info */}
        <div className="bg-[#1f1f1f] p-4 rounded-lg text-sm space-y-2">
          <div className="flex items-center space-x-2">
            <span className="text-green-400">🛡</span>
            <span className="font-semibold text-white">Secure Your Fund Transfer</span>
          </div>
          <p className="text-gray-300">
            Sending money? Please Ensure Trusted Person .<span className="text-white font-medium"> Ar-fina </span> Provide secured way to transfer funds to another eSewa user.
          </p>
          <button className="w-full bg-red-900 text-gray-100 hover:text-green-500 py-2 rounded-lg font-medium" onClick={()=>setShowForm(false)}>
          Go Back
          </button>
        </div>
      </div>
    </div>
  )
};

export default SendSolForm;
