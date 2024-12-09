import { Navbar } from '../components/layout/Navbar';
import { Footer } from '../components/layout/Footer';  // 添加这行

export default function GuidePage() {
  return (
    <>
      <Navbar />
      <main className="flex min-h-screen flex-col items-center p-24 pt-32">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold mb-8">快速开始指南</h1>
          {/* 现有的主要内容 */}
        </div>
      </main>
      <Footer />  {/* 添加这行 */}
    </>
  );
}