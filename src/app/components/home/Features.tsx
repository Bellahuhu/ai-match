export const Features = () => {
  return (
    <section className="w-full py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
  <div className="text-center mb-12">
    <h2 className="text-3xl font-bold mb-4">
      为什么选择
      <span className="text-blue-500"> AI Match</span>
    </h2>
    <p className="text-xl text-gray-600 dark:text-gray-300">
      打造完美的AI伴侣体验，让科技更有温度
    </p>
  </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* 特色功能 1 */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
            <div className="text-blue-500 mb-4">
              <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">深度个性匹配</h3>
            <p className="text-gray-600 dark:text-gray-300">
              采用先进的AI算法，分析性格特征，确保最佳匹配度
            </p>
          </div>

          {/* 特色功能 2 */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
            <div className="text-blue-500 mb-4">
              <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">智能对话系统</h3>
            <p className="text-gray-600 dark:text-gray-300">
              自然流畅的对话体验，理解情感需求，提供贴心回应
            </p>
          </div>

          {/* 特色功能 3 */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
            <div className="text-blue-500 mb-4">
              <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">持续学习成长</h3>
            <p className="text-gray-600 dark:text-gray-300">
              AI伴侣会不断学习你的喜好，逐渐成长为最懂你的伙伴
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};