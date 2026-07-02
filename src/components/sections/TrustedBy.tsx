import React from 'react';
import { Container } from '@/components/ui/Container';

const companies = [
  { name: 'ApexTech' },
  { name: 'CloudSync' },
  { name: 'DataFlow' },
  { name: 'InnovateX' },
  { name: 'NexusCore' },
  { name: 'VertexLab' },
];

export const TrustedBy: React.FC = () => {
  return (
    <section className="py-16 border-y border-gray-100">
      <Container>
        <p className="text-center text-gray-500 mb-8 font-medium">Trusted by innovative companies worldwide</p>
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 opacity-60">
          {companies.map((company) => (
            <div key={company.name} className="text-2xl font-bold text-gray-900">
              {company.name}
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};
