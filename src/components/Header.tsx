import Image from 'next/image';
import Link from 'next/link';
import IconButton from './common/Button/IconButton';

export default function Header() {
  return (
    <div className='py-8'>
      <nav className='flex items-center justify-between'>
        <div className='flex items-center gap-2'>
          <Image src='/logo.svg' height={50} width={50} alt='logo' />
          <p className='font-bold'>Airdrops List</p>
        </div>
        <IconButton iconUrl='/icons/X.svg' variant='secondary'>
          Twitter
        </IconButton>
      </nav>
    </div>
  );
}
