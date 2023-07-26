import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Card from '@/components/common/Card';
import CardList from '@/components/common/CardList';
import Footer from '@/components/Footer';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <main className={`${inter.className}`}>
      <div className='mx-auto max-w-[400px] md:max-w-5xl'>
        <Header />
        <Hero />
        <CardList title='Top' id='top-airdrops' />
        <CardList title='Finished' id='finished-airdrops' className='mt-16' />
      </div>
      <Footer />
    </main>
  );
}
