import { Hero } from './components/home/Hero';
import { Features } from './components/home/Features';
import { Steps } from './components/home/Steps';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';  // 添加这行

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex min-h-screen flex-col items-center justify-between pt-16">
        <Hero />
        <Features />
        <Steps />
      </main>
      <Footer />  {/* 添加这行 */}
    </>
  );
}