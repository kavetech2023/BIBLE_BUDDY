import React from 'react';
import { cn } from '../../utils/cn';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'icon' | 'default';
  children: React.ReactNode;
}

export function Button({ 
  variant = 'default', 
  className, 
  children, 
  ...props 
}: ButtonProps) {
  return (
    <button
      className={cn(
        "transition-colors",
        variant === 'icon' && "p-2 text-gray-600 hover:text-indigo-600",
        variant === 'default' && "flex items-center space-x-1 text-gray-600",
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}