const WhyChooseUs = () => {
    return (
      <section className="bg-gray-100 py-16 px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-6">Why Choose Re-paisa?</h2>
          <p className="text-gray-700 mb-6 text-lg">
            We combine security, speed, and usability to give you the best Web3 wallet experience.
          </p>
  
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <div className="bg-white rounded-xl shadow p-6 flex-1">
              <h3 className="text-xl font-semibold mb-2">🌐 Global Access</h3>
              <p className="text-gray-600">Access your wallet anytime, anywhere with just your device.</p>
            </div>
            <div className="bg-white rounded-xl shadow p-6 flex-1">
              <h3 className="text-xl font-semibold mb-2">⚡ Blazing Fast</h3>
              <p className="text-gray-600">Optimized for speed and low latency transactions.</p>
            </div>
          </div>
        </div>
      </section>
    );
  };
  
  export default WhyChooseUs;
  