import React from 'react';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';

export const FinalCta: React.FC = () => {
  return (
    <section className="py-20 lg:py-32">
      <Container>
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-12 lg:p-20 text-center">
          <h2 className="text-3xl lg:text-5xl font-bold text-white mb-6">
            Ready to transform your business?
          </h2>
          <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto">
            Start your 14-day free trial today. No credit card required.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-white text-blue-600 hover:bg-gray-100"
            >
              Start Free Trial
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white/10"
            >
              Talk to Sales
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
};
