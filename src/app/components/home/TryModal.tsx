'use client';
import { useState } from 'react';

export const TryModal = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  setLoading(true);
  setError(null);

  try {
    const response = await fetch('/api/trial', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name, email }),
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || '提交失败');
    }

    setSubmitted(true);
    // 成功后延迟关闭
    setTimeout(() => {
      onClose();
      // 重置表单
      setEmail('');
      setName('');
      setSubmitted(false);
    }, 2000);

  } catch (err) {
    setError(err instanceof Error ? err.message : '提交失败，请稍后重试');
  } finally {
    setLoading(false);
  }
};

  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 z-50 overflow-y-auto">
          <div className="flex min-h-screen items-center justify-center p-4">
            {/* 背景遮罩 */}
            <div 
              className="fixed inset-0 bg-black bg-opacity-50 transition-opacity"
              onClick={onClose}
            ></div>

            {/* 模态框内容 */}
            <div className="relative bg-white dark:bg-gray-800 rounded-lg max-w-lg w-full p-6">
              <div className="absolute top-4 right-4">
                <button
                  onClick={onClose}
                  className="text-gray-400 hover:text-gray-500 focus:outline-none"
                >
                  <span className="sr-only">关闭</span>
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              <div className="mt-3 text-center sm:mt-5">
                <h3 className="text-lg font-medium leading-6 text-gray-900 dark:text-white">
                  开始体验
                </h3>
                <div className="mt-2">
                  <p className="text-sm text-gray-500 dark:text-gray-300">
                    请填写以下信息，我们会为您提供个性化的体验
                  </p>
                </div>
              </div>

  <form onSubmit={handleSubmit} className="mt-6 space-y-4">
  <div>
    <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
      姓名
    </label>
    <input
      type="text"
      id="name"
      value={name}
      onChange={(e) => setName(e.target.value)}
      className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
      placeholder="请输入您的姓名"
      required
    />
  </div>
  <div>
    <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
      邮箱
    </label>
    <input
      type="email"
      id="email"
      value={email}
      onChange={(e) => setEmail(e.target.value)}
      className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
      placeholder="请输入您的邮箱"
      required
    />
  </div>
  
 {error && (
  <div className="text-red-500 text-sm mt-2">
    {error}
  </div>
)}

<button
  type="submit"
  disabled={loading}
  className={`w-full mt-6 bg-blue-500 text-white px-4 py-2 rounded-md transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 ${
    loading ? 'opacity-50 cursor-not-allowed' : 'hover:bg-blue-600'
  }`}
>
  {loading ? '提交中...' : '开始体验'}
</button>

                </form>
              ) : (
                <div className="mt-6 text-center">
                  <div className="text-green-500 mb-4">
                    <svg className="mx-auto h-12 w-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="text-lg font-medium text-gray-900 dark:text-white">
                    提交成功！
                  </p>
                  <p className="mt-2 text-sm text-gray-500 dark:text-gray-300">
                    我们会尽快通过邮件联系您
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};