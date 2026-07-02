import React from 'react';
import { Container } from '@/components/ui/Container';

const features = [
  {
    icon: '⚡',
    title: 'Lightning Fast',
    description: 'Process tasks in milliseconds with our optimized AI engine.',
  },
  {
    icon: '🔒',
    title: 'Enterprise Security',
    description: 'Bank-level encryption and SOC 2 compliance for your data.',
  },
  {
    icon: '🔗',
    title: 'Seamless Integrations',
    description: 'Connect with your favorite tools and workflows effortlessly.',
  },
  {
    icon: '📊',
    title: 'Smart Analytics',
    description: 'Gain valuable insights from your data with AI-powered analysis.',
  },
  {
    icon: '🤖',
    title: 'AI Automation',
    description: 'Automate repetitive tasks and focus on what matters.',
  },
  {
    icon: '👥',
    title: 'Team Collaboration',
    description: 'Work together seamlessly with shared workspaces and real-time updates.',
  },
];

export const Features: React.FC = () => {
  return (
    <section id="features" className="py-20 lg:py-32">
      <Container>
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Everything you need to succeed</h2>
          <p className="text-lg text-gray-600">Powerful features designed to boost your productivity and streamline your workflows.</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, idx) => (
            <div key={idx} className="p-8 bg-white rounded-2xl border border-gray-100 hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};
