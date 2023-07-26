import React from 'react';
import Card from './Card';
import { AIRDROPS_LIST } from '@/utils/constans';

interface CardListProps {
  className?: string;
  title?: string;
  id?: string;
}

export default function CardList({ title, className, id }: CardListProps) {
  return (
    <div className={className} id={id}>
      {Boolean(title) && <h1 className='mb-8 text-4xl font-bold'>{title}</h1>}
      <div className='grid grid-cols-1 gap-5 md:grid-cols-2'>
        {AIRDROPS_LIST.map((el) => (
          <Card key={el.id} {...el} />
        ))}
      </div>
    </div>
  );
}
