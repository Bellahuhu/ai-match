'use client';
import { useState } from 'react';
import { ThemeToggle } from './ThemeToggle';
import Link from 'next/link';

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white dark:bg-gray-900 fixed w-full z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <span className="text-2xl font-bold text-blue-500">AI Match</span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-4">
           <Link href="/" replace className="text-gray-600 hover:text-blue-500 px-3 py-2 rounded-md text-sm font-medium">
              首页
            </Link>
            <Link href="/features" className="text-gray-600 hover:text-blue-500 px-3 py-2 rounded-md text-sm font-medium">
              功能
            </Link>
            <Link href="/about" className="text-gray-600 hover:text-blue-500 px-3 py-2 rounded-md text-sm font-medium">
              关于
            </Link>
            <ThemeToggle />
            <Link href="/guide" className="bg-blue-500 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-blue-600 transition-colors">
  开始使用
</Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-blue-500 hover:bg-gray-100 focus:outline-none"
            >
              <svg
                className="h-6 w-6"
                stroke="currentColor"
                fill="none"
                viewBox="0 0 24 24"
              >
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link href="/" replace className="text-gray-600 hover:text-blue-500 px-3 py-2 rounded-md text-sm font-medium">
              首页
            </Link>
            <Link href="/features" className="block text-gray-600 hover:text-blue-500 px-3 py-2 rounded-md text-base font-medium">
              功能
            </Link>
            <Link href="/about" className="block text-gray-600 hover:text-blue-500 px-3 py-2 rounded-md text-base font-medium">
              关于
            </Link>
            <Link href="/guide" className="w-full mt-2 block bg-blue-500 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-blue-600 transition-colors text-center">
  开始使用
</Link>
          </div>
        </div>
      )}
    </nav>
  );
};