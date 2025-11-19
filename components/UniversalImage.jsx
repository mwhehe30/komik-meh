'use client';

import Image from 'next/image';
import { useState } from 'react';

const UniversalImage = ({
  src,
  alt,
  className,
  fill = false,
  width,
  height,
  sizes,
  priority = false,
  fallback,
  ...props
}) => {
  const [error, setError] = useState(false);

  const hasSrc = src && src.trim() !== '';

  if (!hasSrc || error) {
    return (
      <div
        className={`bg-zinc-800 flex items-center justify-center overflow-hidden ${className} ${
          fill ? 'w-full h-full' : ''
        }`}
        style={!fill ? { width, height } : {}}
      >
        {fallback || (
          <span className='text-zinc-600 text-xs font-medium'>No Image</span>
        )}
      </div>
    );
  }

  return (
    <Image
      key={src}
      src={src}
      alt={alt || 'Image'}
      className={className}
      fill={fill}
      width={!fill ? width : undefined}
      height={!fill ? height : undefined}
      sizes={sizes}
      priority={priority}
      onError={() => setError(true)}
      {...props}
    />
  );
};

export default UniversalImage;
