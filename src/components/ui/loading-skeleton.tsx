import React from "react";
import { cn } from "@/lib/utils";

interface SkeletonProps {
  className?: string;
  width?: string;
  height?: string;
  rounded?: "sm" | "md" | "lg" | "xl" | "full";
}

export const Skeleton = ({ 
  className, 
  width = "w-full", 
  height = "h-4", 
  rounded = "md" 
}: SkeletonProps) => {
  const roundedClasses = {
    sm: "rounded-sm",
    md: "rounded-md", 
    lg: "rounded-lg",
    xl: "rounded-xl",
    full: "rounded-full"
  };

  return (
    <div
      className={cn(
        "animate-pulse bg-gradient-to-r from-muted/50 via-muted to-muted/50",
        width,
        height,
        roundedClasses[rounded],
        className
      )}
    />
  );
};

// Pre-built skeleton components for common use cases
export const SkeletonText = ({ 
  lines = 3, 
  className = "" 
}: { 
  lines?: number; 
  className?: string; 
}) => (
  <div className={cn("space-y-3", className)}>
    {Array.from({ length: lines }).map((_, i) => (
      <Skeleton 
        key={i} 
        height="h-4" 
        width={i === lines - 1 ? "w-3/4" : "w-full"} 
      />
    ))}
  </div>
);

export const SkeletonCard = ({ className = "" }: { className?: string }) => (
  <div className={cn("space-y-4 p-6", className)}>
    <div className="flex items-center space-x-4">
      <Skeleton className="h-12 w-12 rounded-full" />
      <div className="space-y-2 flex-1">
        <Skeleton height="h-4" width="w-3/4" />
        <Skeleton height="h-3" width="w-1/2" />
      </div>
    </div>
    <SkeletonText lines={3} />
  </div>
);

export const SkeletonHero = ({ className = "" }: { className?: string }) => (
  <div className={cn("space-y-6 text-center", className)}>
    <Skeleton className="h-8 w-48 mx-auto rounded-full" />
    <Skeleton className="h-16 w-96 mx-auto" />
    <Skeleton className="h-6 w-80 mx-auto" />
    <div className="flex justify-center space-x-4">
      <Skeleton className="h-12 w-32 rounded-full" />
      <Skeleton className="h-12 w-32 rounded-full" />
    </div>
  </div>
);

export const SkeletonGrid = ({ 
  cols = 3, 
  rows = 2, 
  className = "" 
}: { 
  cols?: number; 
  rows?: number; 
  className?: string; 
}) => (
  <div className={cn(`grid grid-cols-1 md:grid-cols-${cols} gap-6`, className)}>
    {Array.from({ length: cols * rows }).map((_, i) => (
      <div key={i} className="bg-card border border-border rounded-xl p-6">
        <Skeleton className="h-8 w-3/4 mb-4" />
        <SkeletonText lines={3} />
        <div className="mt-4 flex space-x-2">
          <Skeleton className="h-8 w-20 rounded-full" />
          <Skeleton className="h-8 w-24 rounded-full" />
        </div>
      </div>
    ))}
  </div>
);

// Loading spinner component
export const LoadingSpinner = ({ 
  size = "md", 
  className = "" 
}: { 
  size?: "sm" | "md" | "lg"; 
  className?: string; 
}) => {
  const sizeClasses = {
    sm: "h-4 w-4",
    md: "h-8 w-8", 
    lg: "h-12 w-12"
  };

  return (
    <div className={cn("flex items-center justify-center", className)}>
      <div
        className={cn(
          "animate-spin rounded-full border-2 border-muted border-t-accent-teal",
          sizeClasses[size]
        )}
      />
    </div>
  );
};

// Page loading overlay
export const PageLoader = ({ 
  message = "Loading..." 
}: { 
  message?: string; 
}) => (
  <div className="fixed inset-0 z-[9999] bg-background/80 backdrop-blur-sm flex items-center justify-center">
    <div className="text-center space-y-4">
      <LoadingSpinner size="lg" />
      <p className="text-muted-foreground animate-pulse">{message}</p>
    </div>
  </div>
);

// Content loading wrapper
export const LoadingWrapper = ({ 
  isLoading, 
  children, 
  skeleton, 
  className = "" 
}: { 
  isLoading: boolean; 
  children: React.ReactNode; 
  skeleton?: React.ReactNode; 
  className?: string; 
}) => {
  if (isLoading) {
    return (
      <div className={cn("animate-in fade-in duration-300", className)}>
        {skeleton || <SkeletonCard />}
      </div>
    );
  }

  return (
    <div className={cn("animate-in fade-in duration-300", className)}>
      {children}
    </div>
  );
};