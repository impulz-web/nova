import React from 'react';
import { Container } from '@/components/ui/Container';

const testimonials = [
  {
    name: 'Sarah Johnson',
    company: 'ApexTech',
    avatar: 'SJ',
    review: 'NovaAI has transformed how our team works. We are saving over 20 hours a week on repetitive tasks.',
  },
  {
    name: 'Michael Chen',
    company: 'CloudSync',
    avatar: 'MC',
    review: 'The AI assistant is incredibly smart. It understands our business context and helps us make better decisions.',
  },
  {
    name: 'Emily Rodriguez',
    company: 'DataFlow',
    avatar: 'ER',
    review: 'Best investment we have made this year. Productivity is up 40% and our team is happier than ever.',
  },
];

export const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="py-20 lg:py-32 bg-gray-50">
      <Container>
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Loved by teams everywhere</h2>
          <p className="text-lg text-gray-600">See what our customers are saying about NovaAI.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, idx) => (
            <div key={idx} className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm">
              <div className="text-2xl mb-4">&quot;</div>
              <p className="text-gray-700 mb-6">{testimonial.review}</p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-700 font-semibold">
                  {testimonial.avatar}
                </div>
                <div>
                  <p className="font-semibold text-gray-900">{testimonial.name}</p>
                  <p className="text-sm text-gray-500">{testimonial.company}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};
