import Image from 'next/image';
import Button from './common/Button/Button';
import IconButton from './common/Button/IconButton';
import Link from 'next/link';

export default function Hero() {
  return (
    <div className='py-20 md:py-40'>
      <div>
        <div className='flex flex-col text-4xl font-bold md:flex-row md:items-center md:gap-4 md:text-5xl'>
          <h1 className='flex items-center gap-4'>
            The
            <Image
              src='/arb.png'
              height={60}
              width={60}
              alt='Arbitrum'
              className='h-12 w-12 md:h-14 md:w-14'
            />
            <span className='text-[#0e91dd]'>biggest</span>
          </h1>
          <h1 className='flex items-center gap-4 '>
            and most
            <Image
              src='/lz.png'
              height={60}
              width={60}
              alt='LayerZero'
              className='h-12 w-12 md:h-14 md:w-14'
            />
            <span className='line-through'>fucking</span>
          </h1>
        </div>
        <h1 className='mt-2 text-4xl font-bold md:mt-4 md:text-5xl'>
          airdrops list ever
        </h1>
      </div>
      <div className='mt-12 flex gap-4'>
        <Link href='#top-airdrops'>
          <Button>Get list free</Button>
        </Link>
        <Link href='https://github.com/zaycevv/retrodropslist' target='_blank'>
          <IconButton iconUrl='/icons/StarIcon.svg' variant='secondary'>
            Rate in Github
          </IconButton>
        </Link>
      </div>
    </div>
  );
}
