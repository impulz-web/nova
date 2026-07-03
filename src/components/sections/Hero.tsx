'use client';

import React from 'react';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';

export const Hero: React.FC = () => {
  return (
    <section className="py-20 lg:py-32">
      <Container>
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                AI that helps your business work smarter.
              </h1>
              <p className="text-xl text-gray-600 max-w-lg">
                NovaAI automates repetitive tasks, generates insights, and supercharges your team's productivity with cutting-edge artificial intelligence.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg">Start Free Trial</Button>
              <Button variant="outline" size="lg">Watch Demo</Button>
            </div>
          </div>

          {/* Dashboard Mockup */}
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-3xl blur-2xl" />
            <div className="relative bg-white rounded-2xl shadow-2xl border border-gray-100 p-6">
              {/* Dashboard Header */}
              <div className="flex items-center justify-between mb-6 pb-4 border-b border-gray-100">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center">
                    <span className="text-white font-bold">N</span>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">NovaAI Dashboard</p>
                    <p className="text-sm text-gray-500">Today, July 2</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-green-500 rounded-full" />
                  <span className="text-sm text-gray-600">Active</span>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 mb-6">
                {/* Analytics Cards */}
                <div className="bg-gray-50 rounded-xl p-4">
                  <p className="text-sm text-gray-500 mb-1">Tasks Completed</p>
                  <p className="text-2xl font-bold text-gray-900">127</p>
                  <div className="flex items-center gap-1 mt-2">
                    <span className="text-green-600 text-sm">+18%</span>
                    <span className="text-xs text-gray-500">from last week</span>
                  </div>
                </div>
                <div className="bg-gray-50 rounded-xl p-4">
                  <p className="text-sm text-gray-500 mb-1">Hours Saved</p>
                  <p className="text-2xl font-bold text-gray-900">32.5h</p>
                  <div className="flex items-center gap-1 mt-2">
                    <span className="text-green-600 text-sm">+24%</span>
                    <span className="text-xs text-gray-500">from last week</span>
                  </div>
                </div>
              </div>

              {/* AI Chat Mockup */}
              <div className="bg-gray-50 rounded-xl p-4 mb-4">
                <p className="text-sm font-medium text-gray-700 mb-3 flex items-center gap-2">
                  <span className="w-2 h-2 bg-blue-500 rounded-full animate-pulse" />
                  AI Assistant
                </p>
                <div className="space-y-3">
                  <div className="bg-white rounded-lg p-3 text-sm text-gray-700">
                    Can you help me prepare the weekly report?
                  </div>
                  <div className="bg-blue-50 rounded-lg p-3 text-sm text-blue-900">
                    Of course! I will analyze last week data and generate a summary in 30 seconds.
                  </div>
                </div>
              </div>

              {/* Tasks List */}
              <div className="space-y-2">
                {['Draft marketing email', 'Analyze sales data', 'Schedule team meeting', 'Prepare Q3 forecast'].map((task, idx) => (
                  <div key={idx} className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                    <div className="w-5 h-5 border-2 border-gray-300 rounded" />
                    <span className="text-sm text-gray-700">{task}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
