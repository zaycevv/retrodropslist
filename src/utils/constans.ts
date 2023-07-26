import type { BadgeProps } from '@/components/common/Badge';
import type { Chance } from '@/components/common/Card';

interface IAirdropsList {
  id: number;
  title: string;
  imageUrl: string;
  link: string;
  raised: string;
  chance: Chance;
  badges: BadgeProps[];
}

export const AIRDROPS_LIST: IAirdropsList[] = [
  {
    id: 1,
    title: 'LayerZero',
    imageUrl: '/lz.png',
    link: 'layerzero.network',
    raised: '$ 293.3M',
    chance: 'high',
    badges: [
      { title: 'Protocol', color: 'green' },
      { title: 'Ecosystem', color: 'pink' },
    ],
  },
  {
    id: 2,
    title: 'ZkSync',
    imageUrl: '/zk.png',
    link: 'ecosystem.zksync.io',
    raised: '$ 458M',
    chance: 'high',
    badges: [
      { title: 'Layer 2', color: 'brown' },
      { title: 'Ecosystem', color: 'pink' },
    ],
  },
];
