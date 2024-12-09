import { Navbar } from '../components/layout/Navbar';
import { Footer } from '../components/layout/Footer';

export default function FeaturesPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-16">
        {/* 功能介绍部分 */}
        <section className="py-20 bg-white dark:bg-gray-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
                功能与服务
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-300 mb-16">
                探索我们提供的全方位AI匹配解决方案
              </p>
            </div>

            {/* 功能列表 */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* 智能匹配 */}
              <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-8">
                <div className="text-blue-500 mb-4">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                  智能匹配
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  使用先进的AI算法，根据用户需求提供精准匹配建议
                </p>
              </div>

              {/* 数据分析 */}
              <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-8">
                <div className="text-green-500 mb-4">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                  数据分析
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  深度分析用户数据，提供个性化的匹配方案
                </p>
              </div>

              {/* 实时监控 */}
              <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-8">
                <div className="text-purple-500 mb-4">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                  实时监控
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  全天候监控匹配效果，及时优化匹配策略
                </p>
              </div>
            </div>
          </div>
        </section>

         {/* 价格方案部分 */}
        <section className="py-20 bg-gray-50 dark:bg-gray-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                价格方案
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300">
                选择最适合您的方案
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* 基础版 */}
              <div className="bg-white dark:bg-gray-900 rounded-lg shadow-lg overflow-hidden">
                <div className="p-8">
                  <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                    基础版
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-6">
                    适合个人用户
                  </p>
                  <p className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
                    ¥99<span className="text-base font-normal">/月</span>
                  </p>
                  <ul className="space-y-4 mb-8">
                    <li className="flex items-center text-gray-600 dark:text-gray-300">
                      <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      基础AI匹配功能
                    </li>
                    <li className="flex items-center text-gray-600 dark:text-gray-300">
                      <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      每月100次匹配
                    </li>
                    <li className="flex items-center text-gray-600 dark:text-gray-300">
                      <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      基础数据分析
                    </li>
                  </ul>
                  <button className="w-full bg-blue-500 text-white py-3 rounded-lg font-medium hover:bg-blue-600 transition-colors">
                    选择方案
                  </button>
                </div>
              </div>

              {/* 专业版 */}
              <div className="bg-white dark:bg-gray-900 rounded-lg shadow-lg overflow-hidden border-2 border-blue-500">
                <div className="p-8">
                  <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                    专业版
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-6">
                    适合小型企业
                  </p>
                  <p className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
                    ¥299<span className="text-base font-normal">/月</span>
                  </p>
                  <ul className="space-y-4 mb-8">
                    <li className="flex items-center text-gray-600 dark:text-gray-300">
                      <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      高级AI匹配功能
                    </li>
                    <li className="flex items-center text-gray-600 dark:text-gray-300">
                      <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      无限次匹配
                    </li>
                    <li className="flex items-center text-gray-600 dark:text-gray-300">
                      <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      高级数据分析
                    </li>
                    <li className="flex items-center text-gray-600 dark:text-gray-300">
                      <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      7*24技术支持
                    </li>
                  </ul>
                  <button className="w-full bg-blue-500 text-white py-3 rounded-lg font-medium hover:bg-blue-600 transition-colors">
                    选择方案
                  </button>
                </div>
              </div>

              {/* 企业版 */}
              <div className="bg-white dark:bg-gray-900 rounded-lg shadow-lg overflow-hidden">
                <div className="p-8">
                  <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                    企业版
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-6">
                    适合大型企业
                  </p>
                  <p className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
                    定制<span className="text-base font-normal">/年</span>
                  </p>
                  <ul className="space-y-4 mb-8">
                    <li className="flex items-center text-gray-600 dark:text-gray-300">
                      <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      定制AI匹配方案
                    </li>
                    <li className="flex items-center text-gray-600 dark:text-gray-300">
                      <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      专属技术支持
                    </li>
                    <li className="flex items-center text-gray-600 dark:text-gray-300">
                      <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      API接口对接
                    </li>
                  </ul>
                  <button className="w-full bg-blue-500 text-white py-3 rounded-lg font-medium hover:bg-blue-600 transition-colors">
                    联系我们
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 bg-white dark:bg-gray-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                常见问题
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300">
                了解更多关于我们服务的信息
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-8">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                  如何开始使用？
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  注册账号后，选择适合您的方案即可开始使用我们的服务。我们提供详细的使用指南和技术支持。
                </p>
              </div>

              <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-8">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                  支持哪些支付方式？
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  我们支持支付宝、微信支付等主流支付方式，企业用户还可以使用对公转账。
                </p>
              </div>

              <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-8">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                  数据安全如何保障？
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  我们采用银行级别的加密技术，确保您的数据安全。同时，我们严格遵守隐私政策，绝不会泄露您的信息。
                </p>
              </div>

              <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-8">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                  如何获取技术支持？
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  我们提供全天候的技术支持，您可以通过电话、邮件或在线客服获取帮助。专业版和企业版用户享有优先支持服务。
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}