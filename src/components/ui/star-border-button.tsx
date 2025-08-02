import React from 'react';
import { cn } from '@/lib/utils';

interface StarBorderButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: 'default' | 'hero' | 'secondary';
  size?: 'sm' | 'md' | 'lg';
}

export const StarBorderButton = React.forwardRef<HTMLButtonElement, StarBorderButtonProps>(
  ({ className, children, variant = 'default', size = 'md', ...props }, ref) => {
    return (
      <div className="relative group">
        {/* Animated star border background */}
        <div className="absolute -inset-0.5 bg-gradient-to-r from-accent-teal via-accent-purple to-accent-pink rounded-xl blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
        
        {/* Star corners decoration */}
        <div className="absolute -top-1 -left-1 w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
          <div className="w-full h-full bg-gradient-to-br from-accent-teal to-accent-purple rounded-full animate-pulse"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-1 h-1 bg-white rounded-full"></div>
        </div>
        <div className="absolute -top-1 -right-1 w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
          <div className="w-full h-full bg-gradient-to-bl from-accent-purple to-accent-pink rounded-full animate-pulse"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-1 h-1 bg-white rounded-full"></div>
        </div>
        <div className="absolute -bottom-1 -left-1 w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-200">
          <div className="w-full h-full bg-gradient-to-tr from-accent-pink to-accent-orange rounded-full animate-pulse"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-1 h-1 bg-white rounded-full"></div>
        </div>
        <div className="absolute -bottom-1 -right-1 w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-300">
          <div className="w-full h-full bg-gradient-to-tl from-accent-orange to-accent-teal rounded-full animate-pulse"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-1 h-1 bg-white rounded-full"></div>
        </div>

        {/* Main button */}
        <button
          className={cn(
            'relative flex items-center justify-center font-medium transition-all duration-200 group-hover:scale-105',
            'bg-gradient-to-r from-background via-card to-background text-white',
            'border border-accent-teal/30 group-hover:border-transparent',
            'shadow-lg group-hover:shadow-accent-purple/25',
            {
              'px-4 py-2 text-sm rounded-lg': size === 'sm',
              'px-6 py-3 text-base rounded-xl': size === 'md',
              'px-8 py-4 text-lg rounded-xl': size === 'lg',
            },
            {
              'hover:from-gray-800 hover:to-gray-900': variant === 'default',
              'hover:from-cyan-900/50 hover:to-blue-900/50': variant === 'hero',
              'hover:from-teal-900/50 hover:to-cyan-900/50': variant === 'secondary',
            },
            className
          )}
          ref={ref}
          {...props}
        >
          {/* Inner glow */}
          <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-accent-teal/10 via-accent-purple/10 to-accent-pink/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          
          {/* Content */}
          <span className="relative z-10 flex items-center gap-2">
            {children}
          </span>

          {/* Shimmer effect */}
          <div className="absolute inset-0 rounded-xl overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out"></div>
          </div>
        </button>
      </div>
    );
  }
);

StarBorderButton.displayName = 'StarBorderButton';