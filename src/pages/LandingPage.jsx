// src/pages/LandingPage.jsx

import { ArrowRight, Check } from 'lucide-react';
import { Footer } from '@/components/Footer';

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-6 py-24">
        <div className="text-center">
          <h1 className="text-6xl font-bold text-gray-900 mb-6">
            Simple. Clean. Modern.
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            최소한의 디자인으로 최대한의 효과를 전달하는 웹사이트입니다.
            깔끔한 디자인과 직관적인 사용자 경험을 제공합니다.
          </p>
          <button className="bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors inline-flex items-center gap-2">
            시작하기
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Features Section */}
      <div className="bg-gray-50 py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              {
                title: "심플한 디자인",
                description: "불필요한 요소를 제거하고 핵심적인 내용만 전달합니다."
              },
              {
                title: "빠른 로딩 속도",
                description: "최적화된 코드로 빠른 페이지 로딩을 보장합니다."
              },
              {
                title: "반응형 레이아웃",
                description: "모든 디바이스에서 완벽한 화면을 제공합니다."
              }
            ].map((feature, index) => (
              <div key={index} className="text-center">
                <div className="bg-white p-6 rounded-xl shadow-sm">
                  <Check className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
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