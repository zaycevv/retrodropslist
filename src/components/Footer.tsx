import Link from 'next/link';

export default function Footer() {
  return (
    <footer className='relative mt-16 flex w-full flex-col items-center justify-between gap-5 border-t-[1px] border-black px-2 py-8 md:flex md:flex-row md:gap-0 md:px-48 md:py-10 lg:mb-0'>
      <div className='flex flex-col gap-2 md:flex-row'>
        <p className='text-center'>© 2023 Airdrops list.</p>
        <p>
          Created by <span className='font-bold'>zaycevv</span> - Powered by{' '}
          <Link href='https://nextjs.org/' className='font-bold'>
            Next.js
          </Link>
        </p>
      </div>
      <div className='flex gap-4'>
        <Link href='https://x.com/zaycevv_a' className='underline'>
          Twitter (X)
        </Link>
        <Link href='https://github.com/zaycevv' className='underline'>
          Github
        </Link>
        <Link href='https://t.me/zaycevv_a' className='underline'>
          Telegram
        </Link>
      </div>
    </footer>
  );
}
