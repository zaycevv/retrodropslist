import Image from 'next/image';
import React from 'react';
import { Variant, variants } from './Button';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  iconUrl: string;
  className?: string;
  variant?: Variant;
}

export default function IconButton({
  children,
  className,
  iconUrl,
  variant = 'primary',
  ...props
}: ButtonProps) {
  const variantClasses = variants[variant];
  return (
    <button
      className={`flex items-center gap-4 rounded-full px-6 py-3 font-medium ${variantClasses} ${className}`}
      {...props}
    >
      <Image src={iconUrl} width={25} height={25} alt='icon' />
      {children}
    </button>
  );
}
