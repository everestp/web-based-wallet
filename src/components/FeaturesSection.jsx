import React from 'react';

const FeaturesSection = () => {
  const features = [
    {
      title: 'Send & Receive Instantly',
      icon: '📤',
      desc: 'Transfer crypto assets in seconds across the globe with minimal gas fees.',
    },
    {
      title: 'Non-Custodial Vault',
      icon: '🔐',
      desc: 'Your keys, your coins. Full control over your funds secured on-chain.',
    },
    {
      title: 'Multi-Chain Support',
      icon: '🔗',
      desc: 'Connect and interact with Ethereum, Polygon, BSC, and more.',
    },
  ];

  return (
    <section className="bg-white text-gray-800 py-16 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-10">Explore Powerful Features</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-xl shadow p-6 hover:shadow-lg transition"
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
