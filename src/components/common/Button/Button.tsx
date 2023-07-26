import React from 'react';

export type Variant = 'primary' | 'secondary';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  variant?: Variant;
}

export const variants = {
  primary:
    'border border-black bg-black text-white hover:bg-white hover:text-black transition-colors duration-300 ease-out',
  secondary:
    'border border-black hover:bg-[#E0E0E0] transition-colors duration-300 ease-out',
};

export default function Button({
  children,
  className,
  variant = 'primary',
  ...props
}: ButtonProps) {
  const variantClasses = variants[variant];
  return (
    <button
      className={`rounded-full px-6 py-3 font-medium ${variantClasses} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
