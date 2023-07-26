type Color = 'white' | 'brown' | 'pink' | 'green' | 'blue' | 'purple';

export interface BadgeProps {
  title: string;
  color?: Color;
}

const colors = {
  white: 'border border-black bg-white',
  brown: 'bg-[#E8D5CC]',
  pink: 'bg-[#F8CCE6]',
  green: 'bg-[#CCE7E1]',
  blue: 'bg-[#]',
  purple: 'bg-[#]',
};

export default function Badge({ title, color = 'white' }: BadgeProps) {
  const colorClasses = colors[color];
  return (
    <div className={`rounded-full px-4 py-1 ${colorClasses}`}>{title}</div>
  );
}
