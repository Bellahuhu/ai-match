export const Steps = () => {
  return (
    <section className="w-full py-12 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">
            开启你的
            <span className="text-blue-500"> AI伴侣之旅</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            只需简单三步，遇见你的专属AI伴侣
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* 步骤 1 */}
          <div className="relative">
            <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg">
              <div className="w-12 h-12 bg-blue-500 text-white rounded-full flex items-center justify-center text-xl font-bold mb-4">
                1
              </div>
              <h3 className="text-xl font-semibold mb-2">完成个性测试</h3>
              <p className="text-gray-600 dark:text-gray-300">
                通过简单有趣的测试，让我们了解你的性格特征和偏好
              </p>
            </div>
            <div className="hidden md:block absolute top-1/2 left-full w-16 h-0.5 bg-blue-500 transform -translate-y-1/2"></div>
          </div>

          {/* 步骤 2 */}
          <div className="relative">
            <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg">
              <div className="w-12 h-12 bg-blue-500 text-white rounded-full flex items-center justify-center text-xl font-bold mb-4">
                2
              </div>
              <h3 className="text-xl font-semibold mb-2">AI匹配分析</h3>
              <p className="text-gray-600 dark:text-gray-300">
                我们的AI系统会根据你的特点，定制最适合你的AI伴侣性格
              </p>
            </div>
            <div className="hidden md:block absolute top-1/2 left-full w-16 h-0.5 bg-blue-500 transform -translate-y-1/2"></div>
          </div>

          {/* 步骤 3 */}
          <div className="relative">
            <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg">
              <div className="w-12 h-12 bg-blue-500 text-white rounded-full flex items-center justify-center text-xl font-bold mb-4">
                3
              </div>
              <h3 className="text-xl font-semibold mb-2">开始互动</h3>
              <p className="text-gray-600 dark:text-gray-300">
                与你的专属AI伴侣开始对话，享受贴心的陪伴与交流
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};