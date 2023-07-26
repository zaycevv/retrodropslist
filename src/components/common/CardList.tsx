import React from 'react';
import Card from './Card';
import { AIRDROPS_LIST } from '@/utils/constans';

export default function CardList() {
  return (
    <div>
      <h1 className='mb-8 text-4xl font-bold'>Top</h1>
      <div className='grid grid-cols-2 gap-5'>
        {AIRDROPS_LIST.map((el) => (
          <Card key={el.id} {...el} />
        ))}
      </div>
    </div>
  );
}
