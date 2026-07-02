import React from 'react';
import { Container } from '@/components/ui/Container';

const showcaseItems = [
  {
    title: 'AI Assistant',
    description: 'Your intelligent partner that understands context, learns from your interactions, and helps you get things done faster.',
    illustration: (
      <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-8 flex items-center justify-center">
        <div className="w-full max-w-xs aspect-square bg-white rounded-xl shadow-xl p-6 flex flex-col justify-between">
          <div className="space-y-3">
            <div className="h-3 bg-gray-200 rounded w-3/4" />
            <div className="h-3 bg-gray-200 rounded w-1/2" />
          </div>
          <div className="space-y-3">
            <div className="h-20 bg-blue-100 rounded-lg flex items-center justify-center">
              <span className="text-4xl">🤖</span>
            </div>
            <div className="h-3 bg-gray-200 rounded w-full" />
          </div>
        </div>
      </div>
    ),
  },
  {
    title: 'Workflow Automation',
    description: 'Create custom workflows that automate your business processes, saving you hours every week.',
    illustration: (
      <div className="bg-gradient-to-br from-green-50 to-teal-50 rounded-2xl p-8 flex items-center justify-center">
        <div className="w-full max-w-xs aspect-square bg-white rounded-xl shadow-xl p-6">
          <div className="h-full flex flex-col justify-center gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-green-200 rounded-lg" />
              <div className="h-3 bg-gray-200 rounded w-1/2" />
            </div>
            <div className="flex justify-center">
              <div className="w-6 h-6 border-2 border-gray-300 rounded-full flex items-center justify-center">
                <div className="w-2 h-2 bg-gray-300 rounded-full" />
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-teal-200 rounded-lg" />
              <div className="h-3 bg-gray-200 rounded w-2/3" />
            </div>
          </div>
        </div>
      </div>
    ),
    reverse: true,
  },
  {
    title: 'Smart Analytics',
    description: 'Beautiful dashboards and reports that give you actionable insights into your business performance.',
    illustration: (
      <div className="bg-gradient-to-br from-pink-50 to-orange-50 rounded-2xl p-8 flex items-center justify-center">
        <div className="w-full max-w-xs aspect-square bg-white rounded-xl shadow-xl p-6">
          <div className="h-3 bg-gray-200 rounded w-1/3 mb-6" />
          <div className="flex items-end gap-2 h-40">
            {[40, 70, 55, 90, 65, 80].map((height, idx) => (
              <div
                key={idx}
                className="flex-1 bg-gradient-to-t from-orange-400 to-pink-400 rounded-t-lg"
                style={{ height: `${height}%` }}
              />
            ))}
          </div>
        </div>
      </div>
    ),
  },
];

export const ProductShowcase: React.FC = () => {
  return (
    <section className="py-20 lg:py-32 bg-gray-50">
      <Container>
        <div className="space-y-20">
          {showcaseItems.map((item, idx) => (
            <div
              key={idx}
              className={`grid lg:grid-cols-2 gap-12 items-center ${item.reverse ? 'lg:flex-row-reverse' : ''}`}
            >
              <div className="space-y-4">
                <h3 className="text-3xl lg:text-4xl font-bold text-gray-900">{item.title}</h3>
                <p className="text-lg text-gray-600">{item.description}</p>
              </div>
              <div>{item.illustration}</div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};
