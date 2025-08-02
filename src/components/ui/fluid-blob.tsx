import React from 'react';
import { cn } from '@/lib/utils';

interface FluidBlobProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  color?: 'cyan' | 'blue' | 'teal' | 'gradient';
  animation?: 'slow' | 'medium' | 'fast';
  blur?: boolean;
}

export const FluidBlob: React.FC<FluidBlobProps> = ({ 
  className, 
  size = 'lg', 
  color = 'gradient',
  animation = 'medium',
  blur = true
}) => {
  const sizeClasses = {
    sm: 'w-32 h-32',
    md: 'w-48 h-48',
    lg: 'w-72 h-72',
    xl: 'w-96 h-96'
  };

  const colorClasses = {
    cyan: 'from-cyan-400 to-cyan-600',
    blue: 'from-blue-400 to-blue-600',
    teal: 'from-teal-400 to-teal-600',
    gradient: 'from-cyan-400 via-blue-500 to-teal-600'
  };

  const animationClasses = {
    slow: 'animate-blob-slow',
    medium: 'animate-blob',
    fast: 'animate-blob-fast'
  };

  return (
    <div className={cn('relative', className)}>
      {/* Main blob */}
      <div 
        className={cn(
          'absolute rounded-full mix-blend-multiply',
          'bg-gradient-to-br',
          sizeClasses[size],
          colorClasses[color],
          animationClasses[animation],
          blur && 'blur-xl',
          'opacity-70'
        )}
        style={{
          clipPath: 'polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%)'
        }}
      />
      
      {/* Secondary blob for morphing effect */}
      <div 
        className={cn(
          'absolute rounded-full mix-blend-multiply',
          'bg-gradient-to-bl from-blue-400 to-indigo-600',
          sizeClasses[size],
          'animate-blob-reverse',
          blur && 'blur-xl',
          'opacity-70'
        )}
        style={{
          clipPath: 'polygon(20% 0%, 80% 0%, 100% 20%, 100% 80%, 80% 100%, 20% 100%, 0% 80%, 0% 20%)',
          animationDelay: '2s',
          transform: 'translate(20px, 20px)'
        }}
      />
      
      {/* Third blob for complexity */}
      <div 
        className={cn(
          'absolute rounded-full mix-blend-multiply',
          'bg-gradient-to-tr from-teal-400 to-cyan-600',
          sizeClasses[size],
          'animate-blob-alt',
          blur && 'blur-xl',
          'opacity-70'
        )}
        style={{
          clipPath: 'polygon(40% 0%, 60% 0%, 100% 40%, 100% 60%, 60% 100%, 40% 100%, 0% 60%, 0% 40%)',
          animationDelay: '4s',
          transform: 'translate(-20px, -20px)'
        }}
      />

      {/* Center highlight */}
      <div 
        className={cn(
          'absolute rounded-full',
          'bg-gradient-to-r from-white/20 to-white/10',
          'w-16 h-16',
          'top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2',
          'animate-pulse',
          blur && 'blur-sm'
        )}
      />
    </div>
  );
};

// SVG version for more complex shapes
export const FluidBlobSVG: React.FC<FluidBlobProps> = ({ 
  className, 
  size = 'lg',
  color = 'gradient'
}) => {
  const sizeMap = {
    sm: 128,
    md: 192,
    lg: 288,
    xl: 384
  };

  const dimension = sizeMap[size];

  return (
    <div className={cn('relative', className)}>
      <svg 
        width={dimension} 
        height={dimension} 
        viewBox="0 0 200 200" 
        className="absolute top-0 left-0"
      >
        <defs>
          <linearGradient id={`gradient-${color}`} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#06b6d4" stopOpacity="0.8" />
            <stop offset="50%" stopColor="#3b82f6" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#14b8a6" stopOpacity="0.8" />
          </linearGradient>
          <filter id="glow">
            <feGaussianBlur stdDeviation="4" result="coloredBlur"/>
            <feMerge> 
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>
        
        <path 
          d="M50,100 C50,60 70,20 100,20 C130,20 150,60 150,100 C150,140 130,180 100,180 C70,180 50,140 50,100 Z"
          fill={`url(#gradient-${color})`}
          filter="url(#glow)"
          className="animate-blob-morph"
        />
        
        <path 
          d="M60,100 C60,70 75,40 100,40 C125,40 140,70 140,100 C140,130 125,160 100,160 C75,160 60,130 60,100 Z"
          fill="rgba(255,255,255,0.1)"
          className="animate-blob-morph-reverse"
        />
      </svg>
    </div>
  );
};