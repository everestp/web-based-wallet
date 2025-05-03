import React from 'react';

const Dashboard = () => {
  return (
    <div className="bg-gray-100 min-h-screen p-4">

      {/* Balance Card */}
      <div className="bg-white rounded-xl shadow p-6 mb-6">
        <h2 className="text-gray-700 text-sm">Available Balance</h2>
        <p className="text-3xl font-bold text-gray-800 mt-2">Rs -</p>
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-4 gap-4 mb-6">
        {[
          { label: 'Send', icon: '📤' },
          { label: 'Receive', icon: '📥' },
          { label: 'Scan QR', icon: '📷' },
          { label: 'Pay Bills', icon: '💡' },
        ].map((action) => (
          <div key={action.label} className="flex flex-col items-center bg-white p-4 rounded-lg shadow hover:bg-blue-50 transition">
            <div className="text-2xl">{action.icon}</div>
            <span className="text-sm mt-2">{action.label}</span>
          </div>
        ))}
      </div>

      {/* Recent Transactions */}
      <div className="bg-white rounded-xl shadow p-4">
        <h3 className="text-lg font-semibold text-gray-800 mb-4">Recent Transactions</h3>
        {[
          { name: 'Momo Restaurant', amount: '-₹450', time: 'Today 10:30 AM' },
          { name: 'Received from Sita', amount: '+₹2,000', time: 'Yesterday 4:15 PM' },
          { name: 'Electricity Bill', amount: '-₹1,200', time: '2 days ago' },
        ].map((txn, index) => (
          <div key={index} className="flex justify-between py-2 border-b last:border-b-0">
            <div>
              <p className="text-gray-800 font-medium">{txn.name}</p>
              <p className="text-sm text-gray-500">{txn.time}</p>
            </div>
            <p className={`font-semibold ${txn.amount.startsWith('+') ? 'text-green-600' : 'text-red-600'}`}>
              {txn.amount}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
