import React from 'react';
import { cn } from '../../utils/cn';

interface AvatarProps {
  src: string;
  alt: string;
  className?: string;
}

export function Avatar({ src, alt, className }: AvatarProps) {
  return (
    <img
      src={src}
      alt={alt}
      className={cn("w-10 h-10 rounded-full object-cover", className)}
    />
  );
}