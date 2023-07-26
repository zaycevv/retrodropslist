import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Card from '@/components/common/Card';
import CardList from '@/components/common/CardList';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <main className={`mx-auto max-w-5xl ${inter.className}`}>
      <Header />
      <Hero />
      <CardList />
    </main>
  );
}
