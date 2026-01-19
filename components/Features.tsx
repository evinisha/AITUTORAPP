
import React from 'react';

const FeatureCard: React.FC<{ title: string; desc: string; icon: React.ReactNode; color: string }> = ({ title, desc, icon, color }) => (
  <div className="p-8 rounded-3xl bg-white border border-slate-100 shadow-sm hover:shadow-xl hover:border-indigo-100 transition-all group">
    <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 ${color} text-white shadow-lg`}>
      {icon}
    </div>
    <h3 className="text-2xl font-bold text-slate-900 mb-4 group-hover:text-indigo-600 transition-colors">{title}</h3>
    <p className="text-slate-600 leading-relaxed">{desc}</p>
  </div>
);

const Features: React.FC = () => {
  return (
    <section className="py-24 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-indigo-600 font-bold tracking-widest uppercase text-sm mb-4">Core Features</h2>
          <h3 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">Designed for modern learners</h3>
          <p className="text-slate-600 text-lg">
            Traditional learning is broken. Lumina fixes it by providing personalized, adaptive, and interactive guidance for every single student.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <FeatureCard 
            title="Socratic Method"
            desc="Lumina doesn't just give answers. It asks leading questions to help you arrive at the solution yourself, ensuring deep understanding."
            color="bg-indigo-600"
            icon={<svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"/></svg>}
          />
          <FeatureCard 
            title="Adaptive Curriculum"
            desc="Struggling with Calculus but flying through History? Lumina adjusts its difficulty and focus based on your real-time performance."
            color="bg-purple-600"
            icon={<svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/></svg>}
          />
          <FeatureCard 
            title="Voice Interactivity"
            desc="Learn hands-free. Talk to your tutor just like a real teacher. Perfect for language learning and verbal reasoning practice."
            color="bg-pink-600"
            icon={<svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z"/></svg>}
          />
          <FeatureCard 
            title="Visual Aids"
            desc="Lumina generates custom diagrams, flowcharts, and graphs on the fly to help visual learners grasp abstract concepts instantly."
            color="bg-blue-600"
            icon={<svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"/></svg>}
          />
          <FeatureCard 
            title="Subject Expert"
            desc="From K-12 basics to PhD-level research, our AI is trained on massive datasets spanning every academic discipline imaginable."
            color="bg-green-600"
            icon={<svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"/></svg>}
          />
          <FeatureCard 
            title="Progress Tracking"
            desc="Detailed analytics for students, parents, and teachers. Watch your mastery level grow over time with verifiable metrics."
            color="bg-orange-600"
            icon={<svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"/></svg>}
          />
        </div>
      </div>
    </section>
  );
};

export default Features;
