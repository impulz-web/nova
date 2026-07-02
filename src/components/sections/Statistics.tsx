'use client';

import React, { useEffect, useRef, useState } from 'react';
import { Container } from '@/components/ui/Container';

const stats = [
  { number: 50000, label: 'Users', suffix: 'K' },
  { number: 99.9, label: 'Uptime', suffix: '%' },
  { number: 12000000, label: 'Tasks Automated', suffix: 'M' },
  { number: 4.9, label: 'Rating', suffix: '/5' },
];

const AnimatedCounter: React.FC<{ number: number; suffix: string }> = ({ number, suffix }) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            let start = 0;
            const duration = 2000;
            const increment = number / (duration / 16);
            const timer = setInterval(() => {
              start += increment;
              if (start >= number) {
                setCount(number);
                clearInterval(timer);
              } else {
                setCount(start);
              }
            }, 16);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.5 }
    );

    if (ref.current) observer.observe(ref.current);

    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, [number]);

  const formatNumber = (num: number) => {
    if (suffix === 'K') return Math.floor(num / 1000);
    if (suffix === 'M') return Math.floor(num / 1000000);
    if (suffix === '%' || suffix === '/5') return num.toFixed(1);
    return num;
  };

  return (
    <div ref={ref}>
      <span className="text-4xl lg:text-5xl font-bold text-gray-900">
        {formatNumber(count)}
        {suffix}
      </span>
    </div>
  );
};

export const Statistics: React.FC = () => {
  return (
    <section className="py-20 lg:py-32 bg-blue-600">
      <Container>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-12 text-center">
          {stats.map((stat, idx) => (
            <div key={idx} className="space-y-2">
              <AnimatedCounter number={stat.number} suffix={stat.suffix} />
              <p className="text-blue-100 text-lg">{stat.label}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};
