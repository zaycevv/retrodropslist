import Image from 'next/image';
import IconButton from './common/Button/IconButton';
import Link from 'next/link';

export default function Header() {
  return (
    <div className='py-8'>
      <nav className='flex items-center justify-between'>
        <div className='flex items-center gap-2'>
          <Image src='/logo.svg' height={50} width={50} alt='logo' />
          <p className='text-xl font-bold'>AIRDROPS LIST</p>
        </div>
        <Link href='https://x.com/zaycevv_a' target='_blank'>
          <IconButton iconUrl='/icons/X.svg' variant='secondary'>
            Twitter
          </IconButton>
        </Link>
      </nav>
    </div>
  );
}
