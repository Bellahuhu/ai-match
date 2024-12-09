import Link from 'next/link';

export const Footer = () => {
  return (
    <footer className="bg-white dark:bg-gray-900 border-t dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="col-span-1 md:col-span-2">
            <span className="text-2xl font-bold text-blue-500">AI Match</span>
            <p className="mt-4 text-gray-600 dark:text-gray-300">
              让AI匹配变得简单而高效，为您提供最佳的智能匹配服务。
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 dark:text-white uppercase tracking-wider">
              快速链接
            </h3>
            <div className="mt-4 space-y-4">
              <Link href="/" className="text-base text-gray-600 dark:text-gray-300 hover:text-blue-500 block">
                首页
              </Link>
              <Link href="/test" className="text-base text-gray-600 dark:text-gray-300 hover:text-blue-500 block">
                功能
              </Link>
              <Link href="/about" className="text-base text-gray-600 dark:text-gray-300 hover:text-blue-500 block">
                关于
              </Link>
              <Link href="/guide" className="text-base text-gray-600 dark:text-gray-300 hover:text-blue-500 block">
                快速开始
              </Link>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 dark:text-white uppercase tracking-wider">
              联系我们
            </h3>
            <div className="mt-4 space-y-4">
              <p className="text-base text-gray-600 dark:text-gray-300">
                邮箱：contact@example.com
              </p>
              <p className="text-base text-gray-600 dark:text-gray-300">
                地址：某某市某某区
              </p>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-800">
          <p className="text-base text-gray-400 text-center">
            © {new Date().getFullYear()} AI Match. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};