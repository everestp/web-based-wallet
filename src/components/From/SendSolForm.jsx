import React, { useState } from 'react';
import {
  Connection,
  PublicKey,
  LAMPORTS_PER_SOL,
  SystemProgram,
  Transaction,
  Keypair,
} from '@solana/web3.js';

const SendSolForm = ({ showForm, setShowForm }) => {
  const [toAddress, setToAddress] = useState('');
  const [amount, setAmount] = useState('');
  const [status, setStatus] = useState('');

  const connection = new Connection('https://api.devnet.solana.com', 'confirmed');

  // NOTE: Replace this with your real keypair (from wallet)
  const senderKeypair = Keypair.generate(); // Placeholder — replace this in production

  const handleSend = async (e) => {
    e.preventDefault();
    try {
      const recipient = new PublicKey(toAddress);
      const lamports = parseFloat(amount) * LAMPORTS_PER_SOL;

      const transaction = new Transaction().add(
        SystemProgram.transfer({
          fromPubkey: senderKeypair.publicKey,
          toPubkey: recipient,
          lamports,
        })
      );

      const signature = await connection.sendTransaction(transaction, [senderKeypair]);
      await connection.confirmTransaction(signature, 'confirmed');

      setStatus(`✅ Sent ${amount} SOL to ${toAddress}. Tx: ${signature}`);
      setToAddress('');
      setAmount('');
    } catch (err) {
      console.error(err);
      setStatus('❌ Failed to send transaction.');
    }
  };

  if (!showForm) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-xl w-96">
        <h2 className="text-xl font-bold mb-4">Send SOL</h2>
        <form className="space-y-4" onSubmit={handleSend}>
          <input
            type="text"
            placeholder="Recipient Address"
            value={toAddress}
            onChange={(e) => setToAddress(e.target.value)}
            className="w-full p-2 border rounded"
            required
          />
          <input
            type="number"
            placeholder="Amount (SOL)"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            className="w-full p-2 border rounded"
            required
          />
          <div className="flex justify-between">
            <button
              type="submit"
              className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
            >
              Send
            </button>
            <button
              type="button"
              onClick={() => {
                setShowForm(false);
                setStatus('');
              }}
              className="text-gray-500 hover:underline"
            >
              Cancel
            </button>
          </div>
        </form>
        {status && <p className="mt-3 text-sm">{status}</p>}
      </div>
    </div>
  );
};

export default SendSolForm;
