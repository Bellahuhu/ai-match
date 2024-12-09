'use client';
import { useState } from 'react';
import { TryModal } from './TryModal';

export const Hero = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="relative bg-white dark:bg-gray-900 overflow-hidden min-h-[700px] flex items-center">
      {/* 文本内容 */}
      <div className="relative z-10 text-left max-w-md mx-16 pt-32 flex-1">
        <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-6xl">
          <span className="block">AI智能匹配</span>
          <span className="block text-blue-600">遇见你的专属AI伴侣</span>
        </h1>
        <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300">
          简单三步，使用先进的AI技术，为您提供精准的匹配服务
        </p>
        <div className="mt-10 flex items-center gap-x-6">
          <button
            onClick={() => setIsModalOpen(true)}
            className="rounded-md bg-blue-500 px-6 py-3 text-base font-semibold text-white shadow-sm hover:bg-blue-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 transition-colors duration-200"
          >
            立即体验
          </button>
          <a href="/guide" className="text-base font-semibold leading-6 text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200">
            了解更多 <span aria-hidden="true">→</span>
          </a>
        </div>
      </div>

      {/* 图片 */}
      <img 
        src="/images/undraw_artificial_intelligence_re_enpp.svg" 
        alt="AI Illustration" 
        className="flex-1 max-w-[50%] h-auto object-contain"
      />

      <TryModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
    </div>
  );
};