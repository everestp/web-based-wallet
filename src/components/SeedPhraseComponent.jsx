import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const SeedPhraseComponent = ({ seedPhrase }) => {
  const [copied, setCopied] = useState(false);

  // Function to copy seed phrase to clipboard
  const copyToClipboard = () => {
    navigator.clipboard.writeText(seedPhrase);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000); // Reset copied state after 2 seconds
  };

  return (
    <section className="bg-white text-gray-800 py-16 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6">Your 24-Word Seed Phrase</h2>
        <p className="text-lg mb-6 text-gray-600">
          This is your unique seed phrase. Write it down and keep it in a safe place. This phrase is the only way to recover your wallet if you lose access.
        </p>
        <div className="bg-gray-50 rounded-xl shadow-lg p-8 space-y-4">
          <div className="text-left">
            <p className="text-xl font-semibold">Seed Phrase:</p>
            <p className="text-lg text-gray-700">{seedPhrase}</p>
          </div>
          <div className="space-x-4">
            <button
              onClick={copyToClipboard}
              className="bg-blue-700 hover:bg-blue-800 text-white py-2 px-6 rounded-lg shadow-lg transition"
            >
              {copied ? 'Copied!' : 'Copy to Clipboard'}
            </button>
           
              <button className="bg-green-700 hover:bg-green-800 text-white py-2 px-6 rounded-lg shadow-lg transition">
                Done
              </button>
            
          </div>
        </div>
      </div>
    </section>
  );
};

export default SeedPhraseComponent;
