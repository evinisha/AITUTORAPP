
import React, { useState, useEffect } from 'react';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'glass py-3' : 'bg-transparent py-5'}`}>
      <div className="container mx-auto px-4 flex items-center justify-between">
        <div className="flex items-center gap-2 cursor-pointer">
          <div className="w-10 h-10 bg-indigo-600 rounded-xl flex items-center justify-center text-white font-bold text-xl shadow-lg shadow-indigo-200">
            L
          </div>
          <span className="text-2xl font-bold tracking-tight text-slate-900">Lumina<span className="text-indigo-600">AI</span></span>
        </div>

        <div className="hidden md:flex items-center gap-8">
          <a href="#" className="text-slate-600 hover:text-indigo-600 font-medium transition-colors">How it Works</a>
          <a href="#" className="text-slate-600 hover:text-indigo-600 font-medium transition-colors">Subjects</a>
          <a href="#" className="text-slate-600 hover:text-indigo-600 font-medium transition-colors">For Schools</a>
          <a href="#" className="text-slate-600 hover:text-indigo-600 font-medium transition-colors">Pricing</a>
        </div>

        <div className="flex items-center gap-4">
          <button className="text-slate-700 hover:text-indigo-600 font-semibold px-4 py-2 transition-colors">
            Log In
          </button>
          <button className="bg-indigo-600 text-white px-6 py-2 rounded-full font-semibold hover:bg-indigo-700 shadow-md shadow-indigo-200 transition-all transform hover:-translate-y-0.5">
            Sign Up Free
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
