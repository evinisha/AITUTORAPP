
import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Testimonials from './components/Testimonials';
import DemoChat from './components/DemoChat';
import Footer from './components/Footer';

const App: React.FC = () => {
  const [showDemo, setShowDemo] = useState(false);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Hero onTryNow={() => setShowDemo(true)} />
        
        {showDemo && (
          <section id="demo" className="py-20 bg-white">
            <div className="container mx-auto px-4 max-w-4xl">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Experience the Magic</h2>
                <p className="text-slate-600 text-lg">Ask any question and see how Lumina explains complex concepts simply.</p>
              </div>
              <DemoChat />
            </div>
          </section>
        )}

        <Features />
        
        <section className="py-20 bg-indigo-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Ready to transform your learning?</h2>
            <p className="text-indigo-100 text-xl mb-10 max-w-2xl mx-auto">
              Join 50,000+ students who are already using Lumina to master their studies and boost their grades.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-indigo-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-indigo-50 transition-colors">
                Start for Free
              </button>
              <button className="bg-indigo-500 text-white border border-indigo-400 px-8 py-4 rounded-full font-semibold text-lg hover:bg-indigo-400 transition-colors">
                View Pricing
              </button>
            </div>
          </div>
        </section>

        <Testimonials />
      </main>
      <Footer />
    </div>
  );
};

export default App;
