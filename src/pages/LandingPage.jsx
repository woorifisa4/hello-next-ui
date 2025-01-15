// src/pages/LandingPage.jsx

import { ArrowRight, Check } from 'lucide-react';
import { Footer } from '@/components/Footer';

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="mx-auto max-w-7xl px-6 py-24">
        <div className="text-center">
          <h1 className="mb-6 text-6xl font-bold text-gray-900">
            Simple. Clean. Modern.
          </h1>
          <p className="mx-auto mb-8 max-w-2xl text-xl text-gray-600">
            최소한의 디자인으로 최대한의 효과를 전달하는 웹사이트입니다. 깔끔한
            디자인과 직관적인 사용자 경험을 제공합니다.
          </p>
          <button className="inline-flex items-center gap-2 rounded-lg bg-blue-600 px-8 py-4 text-lg font-semibold text-white transition-colors hover:bg-blue-700">
            시작하기
            <ArrowRight className="h-5 w-5" />
          </button>
        </div>
      </div>

      {/* Features Section */}
      <div className="bg-gray-50 py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-1 gap-12 md:grid-cols-3">
            {[
              {
                title: '심플한 디자인',
                description:
                  '불필요한 요소를 제거하고 핵심적인 내용만 전달합니다.',
              },
              {
                title: '빠른 로딩 속도',
                description: '최적화된 코드로 빠른 페이지 로딩을 보장합니다.',
              },
              {
                title: '반응형 레이아웃',
                description: '모든 디바이스에서 완벽한 화면을 제공합니다.',
              },
            ].map((feature, index) => (
              <div key={index} className="text-center">
                <div className="rounded-xl bg-white p-6 shadow-sm">
                  <Check className="mx-auto mb-4 h-12 w-12 text-blue-600" />
                  <h3 className="mb-2 text-xl font-semibold">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default LandingPage;
