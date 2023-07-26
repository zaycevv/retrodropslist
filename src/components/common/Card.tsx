import Image from 'next/image';
import Badge, { BadgeProps } from './Badge';
import { capitalizeFirstLetter } from '@/utils/capitalizeFirstLetter';
import Link from 'next/link';

export type Chance = 'high' | 'medium' | 'low';

interface CardProps {
  className?: string;
  imageUrl: string;
  title: string;
  link: string;
  raised: string;
  chance: Chance;
  badges: BadgeProps[];
}

const chances = {
  high: 'text-green-500',
  medium: 'text-orange-500',
  low: 'text-red-500',
};

export default function Card({
  className,
  imageUrl,
  title,
  link,
  raised,
  chance,
  badges,
}: CardProps) {
  const chanceClasses = chances[chance];
  return (
    <div
      className={`w-full rounded-lg border border-black px-6 py-7  ${className}`}
    >
      <div className='flex items-center justify-between gap-7'>
        <Image
          src={imageUrl}
          width={100}
          height={100}
          alt={imageUrl}
          className='h-12 w-12 md:h-24 md:w-24'
        />
        <div className='w-full'>
          <div className='flex items-center justify-between '>
            <h1 className='font-bold md:text-2xl'>{title}</h1>
            <Link href={`http://${link}/`} className='hover:underline'>
              {link}
            </Link>
          </div>
          <div className='mt-2 flex items-center justify-between'>
            <h1 className='font-bold md:text-2xl'>{raised}</h1>
            <h1 className={`font-bold md:text-2xl ${chanceClasses}`}>
              {capitalizeFirstLetter(chance)}
            </h1>
          </div>
        </div>
      </div>
      <div className='mt-6 flex flex-wrap gap-3'>
        {badges.map((el) => (
          <Badge key={el.title} {...el} />
        ))}
      </div>
    </div>
  );
}
