import React, { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

interface CustomScrollbarProps {
  children: React.ReactNode;
  className?: string;
  showScrollbar?: boolean;
  scrollbarColor?: string;
  scrollbarWidth?: "thin" | "auto" | "none";
}

export const CustomScrollbar = ({
  children,
  className = "",
  showScrollbar = true,
  scrollbarColor = "accent-teal",
  scrollbarWidth = "thin"
}: CustomScrollbarProps) => {
  const [isScrolling, setIsScrolling] = useState(false);
  const [scrollTop, setScrollTop] = useState(0);
  const [scrollHeight, setScrollHeight] = useState(0);
  const [clientHeight, setClientHeight] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolling(true);
      const timeout = setTimeout(() => setIsScrolling(false), 1000);
      return () => clearTimeout(timeout);
    };

    const element = document.querySelector('[data-custom-scrollbar]');
    if (element) {
      element.addEventListener('scroll', handleScroll);
      return () => element.removeEventListener('scroll', handleScroll);
    }
  }, []);

  const getScrollbarStyles = () => {
    if (!showScrollbar) return {};

    const baseStyles = {
      scrollbarWidth: scrollbarWidth,
      scrollbarColor: `hsl(var(--${scrollbarColor})) transparent`
    };

    // Webkit scrollbar styles
    const webkitStyles = {
      '&::-webkit-scrollbar': {
        width: scrollbarWidth === 'thin' ? '8px' : '12px',
        height: scrollbarWidth === 'thin' ? '8px' : '12px'
      },
      '&::-webkit-scrollbar-track': {
        background: 'transparent',
        borderRadius: '4px'
      },
      '&::-webkit-scrollbar-thumb': {
        background: `hsl(var(--${scrollbarColor}))`,
        borderRadius: '4px',
        border: '2px solid transparent',
        backgroundClip: 'content-box',
        transition: 'all 0.2s ease'
      },
      '&::-webkit-scrollbar-thumb:hover': {
        background: `hsl(var(--${scrollbarColor}-foreground))`,
        transform: 'scale(1.1)'
      },
      '&::-webkit-scrollbar-corner': {
        background: 'transparent'
      }
    };

    return { ...baseStyles, ...webkitStyles };
  };

  return (
    <div
      data-custom-scrollbar
      className={cn(
        "relative overflow-auto transition-all duration-300",
        showScrollbar && "scrollbar-custom",
        className
      )}
      style={getScrollbarStyles()}
    >
      {children}
    </div>
  );
};

// Smooth scroll container with custom scrollbar
export const SmoothScrollContainer = ({
  children,
  className = "",
  duration = 500,
  easing = "ease-in-out"
}: {
  children: React.ReactNode;
  className?: string;
  duration?: number;
  easing?: string;
}) => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const scrollToElement = (elementId: string) => {
    const element = document.getElementById(elementId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <div className={cn("smooth-scroll-container", className)}>
      {children}
    </div>
  );
};

// Scroll progress indicator
export const ScrollProgress = ({
  className = "",
  color = "accent-teal",
  height = "2px"
}: {
  className?: string;
  color?: string;
  height?: string;
}) => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const updateScrollProgress = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (scrollTop / docHeight) * 100;
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', updateScrollProgress);
    return () => window.removeEventListener('scroll', updateScrollProgress);
  }, []);

  return (
    <div
      className={cn(
        "fixed top-0 left-0 w-full z-[9999] transition-all duration-300",
        className
      )}
      style={{ height }}
    >
      <div
        className="h-full bg-gradient-to-r from-accent-purple via-accent-teal to-accent-green transition-all duration-300 ease-out"
        style={{
          width: `${scrollProgress}%`,
          transform: `translateX(${scrollProgress > 0 ? '0' : '-100%'})`
        }}
      />
    </div>
  );
};

// Scroll to top button
export const ScrollToTop = ({
  className = "",
  threshold = 400,
  smooth = true
}: {
  className?: string;
  threshold?: number;
  smooth?: boolean;
}) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.scrollY > threshold);
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, [threshold]);

  const scrollToTop = () => {
    if (smooth) {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    } else {
      window.scrollTo(0, 0);
    }
  };

  if (!isVisible) return null;

  return (
    <button
      onClick={scrollToTop}
      className={cn(
        "fixed bottom-6 right-6 z-50 p-3 rounded-full bg-accent-teal text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 hover:bg-accent-teal/90",
        "animate-in slide-in-from-bottom-2 duration-300",
        className
      )}
      title="Scroll to top"
    >
      <svg
        className="w-5 h-5"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M5 10l7-7m0 0l7 7m-7-7v18"
        />
      </svg>
    </button>
  );
};

// Virtual scroll container for large lists
export const VirtualScrollContainer = ({
  items,
  itemHeight = 60,
  containerHeight = 400,
  renderItem,
  className = ""
}: {
  items: any[];
  itemHeight: number;
  containerHeight: number;
  renderItem: (item: any, index: number) => React.ReactNode;
  className?: string;
}) => {
  const [scrollTop, setScrollTop] = useState(0);

  const visibleItems = Math.ceil(containerHeight / itemHeight);
  const startIndex = Math.floor(scrollTop / itemHeight);
  const endIndex = Math.min(startIndex + visibleItems + 1, items.length);

  const handleScroll = (e: React.UIEvent<HTMLDivElement>) => {
    setScrollTop(e.currentTarget.scrollTop);
  };

  const totalHeight = items.length * itemHeight;
  const offsetY = startIndex * itemHeight;

  return (
    <CustomScrollbar
      className={cn("h-full", className)}
      onScroll={handleScroll}
    >
      <div style={{ height: totalHeight, position: 'relative' }}>
        <div style={{ transform: `translateY(${offsetY}px)` }}>
          {items.slice(startIndex, endIndex).map((item, index) =>
            renderItem(item, startIndex + index)
          )}
        </div>
      </div>
    </CustomScrollbar>
  );
};