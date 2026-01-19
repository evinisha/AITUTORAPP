
import React from 'react';

interface HeroProps {
  onTryNow: () => void;
}

const Hero: React.FC<HeroProps> = ({ onTryNow }) => {
  return (
    <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 right-0 -z-10 w-1/2 h-full bg-indigo-50/50 rounded-bl-[100px] hidden lg:block"></div>
      <div className="absolute top-20 right-20 -z-10 w-64 h-64 bg-purple-200/40 blur-3xl rounded-full"></div>
      <div className="absolute bottom-10 left-10 -z-10 w-96 h-96 bg-indigo-100/40 blur-3xl rounded-full"></div>

      <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center">
        <div className="text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-100 text-indigo-700 font-medium text-sm mb-6">
            <span className="flex h-2 w-2 rounded-full bg-indigo-600 animate-pulse"></span>
            AI-Powered Learning for Everyone
          </div>
          <h1 className="text-5xl md:text-7xl font-extrabold text-slate-900 leading-tight mb-6">
            Unlock Your <span className="gradient-text">Potential</span> with a Personal AI Tutor.
          </h1>
          <p className="text-slate-600 text-xl leading-relaxed mb-10 max-w-xl">
            Lumina is your 24/7 dedicated learning companion. We tailor our teaching style to your unique pace, making complex subjects easy to master.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button 
              onClick={onTryNow}
              className="bg-indigo-600 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-indigo-700 shadow-xl shadow-indigo-200 transition-all transform hover:-translate-y-1"
            >
              Try it Now — Free
            </button>
            <button className="flex items-center justify-center gap-2 bg-white text-slate-700 px-8 py-4 rounded-full font-bold text-lg border border-slate-200 hover:border-indigo-300 hover:text-indigo-600 transition-all shadow-sm">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
              Watch Demo
            </button>
          </div>
          <div className="mt-8 flex items-center gap-4">
            <div className="flex -space-x-3">
              {[1, 2, 3, 4].map(i => (
                <img key={i} src={`https://picsum.photos/100/100?random=${i}`} className="w-10 h-10 rounded-full border-2 border-white object-cover" alt="Student" />
              ))}
            </div>
            <p className="text-slate-500 text-sm">
              <span className="font-bold text-slate-700">4.9/5</span> from over <span className="font-bold text-slate-700">10,000</span> active students
            </p>
          </div>
        </div>

        <div className="relative">
          <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl border-8 border-white">
            <img 
              src="https://picsum.photos/800/600?education" 
              alt="Student using Lumina" 
              className="w-full h-auto object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-indigo-900/40 to-transparent"></div>
            
            {/* Floating UI elements for authenticity */}
            <div className="absolute top-10 left-6 glass p-4 rounded-2xl shadow-xl animate-bounce" style={{animationDuration: '3s'}}>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white">✓</div>
                <div>
                  <p className="text-xs text-slate-500 font-bold uppercase">Topic Mastered</p>
                  <p className="text-sm font-bold text-slate-800">Quantum Physics 101</p>
                </div>
              </div>
            </div>

            <div className="absolute bottom-10 right-6 glass p-4 rounded-2xl shadow-xl max-w-[200px]">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-2 h-2 rounded-full bg-indigo-600"></div>
                <p className="text-[10px] font-bold text-indigo-600 uppercase">Live Assistance</p>
              </div>
              <p className="text-xs text-slate-700 italic">"The way you explained photosynthesis with a factory analogy really helped!"</p>
            </div>
          </div>
          
          {/* Background circles */}
          <div className="absolute -top-10 -right-10 w-40 h-40 bg-indigo-600 rounded-full opacity-10 animate-pulse"></div>
          <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-purple-600 rounded-full opacity-10 animate-pulse" style={{animationDelay: '1s'}}></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
