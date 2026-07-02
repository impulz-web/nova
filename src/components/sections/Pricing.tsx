import React from 'react';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';

const plans = [
  {
    name: 'Starter',
    price: '$29',
    period: '/month',
    features: [
      'Up to 5 team members',
      '100 AI tasks/month',
      'Basic analytics',
      'Email support',
      'Standard integrations',
    ],
    highlight: false,
  },
  {
    name: 'Professional',
    price: '$99',
    period: '/month',
    features: [
      'Up to 25 team members',
      'Unlimited AI tasks',
      'Advanced analytics',
      'Priority support',
      'All integrations',
      'Custom workflows',
    ],
    highlight: true,
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    period: '',
    features: [
      'Unlimited team members',
      'Dedicated account manager',
      'Custom AI training',
      '24/7 support',
      'SLA guarantee',
      'On-premise deployment',
    ],
    highlight: false,
  },
];

export const Pricing: React.FC = () => {
  return (
    <section id="pricing" className="py-20 lg:py-32">
      <Container>
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Simple, transparent pricing</h2>
          <p className="text-lg text-gray-600">Choose the plan that fits your team. No hidden fees.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {plans.map((plan, idx) => (
            <div
              key={idx}
              className={`p-8 rounded-2xl border ${
                plan.highlight
                  ? 'border-blue-600 shadow-xl relative'
                  : 'border-gray-100'
              } bg-white`}
            >
              {plan.highlight && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-blue-600 text-white px-4 py-1 rounded-full text-sm font-medium">
                  Most Popular
                </div>
              )}
              <div className="mb-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{plan.name}</h3>
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl font-bold text-gray-900">{plan.price}</span>
                  {plan.period && <span className="text-gray-500">{plan.period}</span>}
                </div>
              </div>
              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-3 text-gray-600">
                    <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
              <Button
                variant={plan.highlight ? 'primary' : 'outline'}
                className="w-full"
              >
                Get Started
              </Button>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};
