import { Navbar } from '../components/layout/Navbar';
import { Footer } from '../components/layout/Footer';

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main className="flex min-h-screen flex-col items-center justify-between p-24 pt-32">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-bold mb-8">关于我们</h1>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            我们致力于为用户提供最好的AI匹配服务
          </p>
        </div>
      </main>
      <Footer />
    </>
  );
}