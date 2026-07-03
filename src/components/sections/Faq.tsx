'use client';

import React, { useState } from 'react';
import { Container } from '@/components/ui/Container';

const faqs = [
  {
    question: 'What is NovaAI?',
    answer: 'NovaAI is an AI-powered productivity platform that helps businesses automate tasks, gain insights, and work more efficiently.',
  },
  {
    question: 'Can I try NovaAI for free?',
    answer: 'Yes! We offer a 14-day free trial with all features included. No credit card required to get started.',
  },
  {
    question: 'How secure is my data?',
    answer: 'We use bank-level encryption and are SOC 2 compliant. Your data is always safe and secure with us.',
  },
  {
    question: 'Does NovaAI integrate with other tools?',
    answer: 'Absolutely! NovaAI integrates with popular tools like Slack, Google Workspace, Microsoft 365, and many more.',
  },
  {
    question: 'Can I cancel anytime?',
    answer: 'Yes, you can cancel your subscription at any time. No hidden fees or cancellation charges.',
  },
  {
    question: 'Do you offer custom plans?',
    answer: 'Yes! Our Enterprise plan is fully customizable to fit your specific needs. Contact our sales team for more details.',
  },
  {
    question: 'What kind of support do you offer?',
    answer: 'We offer email support for all plans, with priority support and dedicated account managers for Professional and Enterprise customers.',
  },
  {
    question: 'How long does it take to set up?',
    answer: 'You can get started with NovaAI in less than 5 minutes. No complex setup or installation required.',
  },
];

const FaqItem: React.FC<{ question: string; answer: string }> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-100 py-4">
      <button
        className="w-full flex items-center justify-between text-left py-2"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="text-lg font-medium text-gray-900">{question}</span>
        <svg
          className={`w-5 h-5 text-gray-500 transition-transform ${isOpen ? 'rotate-180' : ''}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      {isOpen && (
        <div className="pt-4 pb-2 text-gray-600">
          {answer}
        </div>
      )}
    </div>
  );
};

export const Faq: React.FC = () => {
  return (
    <section id="faq" className="py-20 lg:py-32 bg-gray-50">
      <Container>
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Frequently asked questions</h2>
            <p className="text-lg text-gray-600">Got questions? We have got answers.</p>
          </div>
          <div className="bg-white rounded-2xl border border-gray-100 p-6">
            {faqs.map((faq, idx) => (
              <FaqItem key={idx} question={faq.question} answer={faq.answer} />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};
