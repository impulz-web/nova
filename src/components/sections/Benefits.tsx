import React from 'react';
import { Container } from '@/components/ui/Container';

const benefits = [
  {
    icon: '⏱️',
    title: 'Save Time',
    description: 'Automate repetitive tasks and free up hours every week for what really matters.',
  },
  {
    icon: '🚀',
    title: 'Increase Productivity',
    description: 'Your team can accomplish more in less time with AI-powered assistance.',
  },
  {
    icon: '📈',
    title: 'Better Decisions',
    description: 'Make data-driven decisions with intelligent insights and analytics.',
  },
];

export const Benefits: React.FC = () => {
  return (
    <section className="py-20 lg:py-32">
      <Container>
        <div className="grid md:grid-cols-3 gap-8">
          {benefits.map((benefit, idx) => (
            <div key={idx} className="text-center space-y-4">
              <div className="text-5xl mb-4">{benefit.icon}</div>
              <h3 className="text-2xl font-bold text-gray-900">{benefit.title}</h3>
              <p className="text-gray-600">{benefit.description}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};
