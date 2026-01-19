
import React from 'react';

const TestimonialCard: React.FC<{ quote: string; name: string; role: string; img: string }> = ({ quote, name, role, img }) => (
  <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm hover:shadow-lg transition-all">
    <div className="flex gap-1 text-yellow-400 mb-4">
      {[1, 2, 3, 4, 5].map(i => (
        <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
      ))}
    </div>
    <p className="text-slate-700 italic mb-8 leading-relaxed">"{quote}"</p>
    <div className="flex items-center gap-4">
      <img src={img} alt={name} className="w-12 h-12 rounded-full object-cover" />
      <div>
        <h4 className="font-bold text-slate-900">{name}</h4>
        <p className="text-sm text-slate-500">{role}</p>
      </div>
    </div>
  </div>
);

const Testimonials: React.FC = () => {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">Loved by students everywhere</h2>
          <p className="text-slate-600 max-w-2xl mx-auto">Don't just take our word for it. Hear from the thousands of learners who have transformed their grades with Lumina.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <TestimonialCard 
            quote="I used to struggle with organic chemistry for months. Lumina explained it using simple food recipes as analogies, and everything clicked in 30 minutes!"
            name="Sarah Jenkins"
            role="Pre-Med Student"
            img="https://picsum.photos/100/100?random=11"
          />
          <TestimonialCard 
            quote="The best part is that I can ask 'stupid' questions without feeling judged. It's like having the world's most patient professor in my pocket."
            name="David Chen"
            role="High School Junior"
            img="https://picsum.photos/100/100?random=12"
          />
          <TestimonialCard 
            quote="As a non-native English speaker, Lumina helps me translate complex academic papers into simple language I can understand. Truly life-changing."
            name="Elena Rodriguez"
            role="Graduate Researcher"
            img="https://picsum.photos/100/100?random=13"
          />
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
