import Image from 'next/image';
import Button from './common/Button/Button';
import IconButton from './common/Button/IconButton';
import { useRouter } from 'next/router';

export default function Hero() {
  const router = useRouter();
  return (
    <div className='py-40'>
      <div>
        <h1 className='flex items-center gap-4 text-5xl font-bold'>
          The <Image src='/arb.png' height={60} width={60} alt='Arbitrum' />
          <span className='text-[#0e91dd]'>biggest</span> and most
          <Image src='/lz.png' height={60} width={60} alt='LayerZero' />
          <span className='line-through'>fucking</span>
        </h1>
        <h1 className='mt-4 text-5xl font-bold'>airdrops list ever</h1>
      </div>
      <div className='mt-12 flex gap-4'>
        <Button>Get list free</Button>
        <IconButton
          iconUrl='/icons/StarIcon.svg'
          variant='secondary'
          onClick={() =>
            router.push('https://github.com/zaycevv/retrodropslist')
          }
        >
          Rate in Github
        </IconButton>
      </div>
    </div>
  );
}
