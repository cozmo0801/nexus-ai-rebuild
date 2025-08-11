import { useEffect, useRef, useState } from 'react';

const BackgroundPaths = () => {
  const svgRef = useRef<SVGSVGElement>(null);
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    // Check if dark mode is active
    const checkDarkMode = () => {
      const isDark = document.documentElement.classList.contains('dark');
      setIsDarkMode(isDark);
    };

    // Initial check
    checkDarkMode();

    // Watch for theme changes
    const observer = new MutationObserver(checkDarkMode);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class']
    });

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const svg = svgRef.current;
    if (!svg) return;

    const paths = svg.querySelectorAll('.path-line');
    
    paths.forEach((path, index) => {
      (path as SVGPathElement).style.animationDelay = `${index * 0.5}s`;
    });
  }, []);

  // Don't render path lines in dark mode
  if (isDarkMode) {
    return null;
  }

  return (
    <div className="background-paths">
      <svg
        ref={svgRef}
        className="absolute inset-0 w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1200 800"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <linearGradient id="pathGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="hsla(var(--accent-purple) / 0.12)" />
            <stop offset="100%" stopColor="hsla(var(--accent-green) / 0.12)" />
          </linearGradient>
        </defs>
        
        {/* Flowing curved paths */}
        <path
          className="path-line"
          d="M-100,100 Q300,50 600,200 T1300,150"
          stroke="url(#pathGradient)"
          strokeWidth="2"
          fill="none"
          opacity="0.6"
        />
        
        <path
          className="path-line"
          d="M-50,300 Q400,250 700,400 T1350,350"
          stroke="url(#pathGradient)"
          strokeWidth="2"
          fill="none"
          opacity="0.6"
        />
        
        <path
          className="path-line"
          d="M-150,500 Q250,450 550,600 T1250,550"
          stroke="url(#pathGradient)"
          strokeWidth="2"
          fill="none"
          opacity="0.6"
        />
        
        <path
          className="path-line"
          d="M-200,700 Q350,650 650,800 T1400,750"
          stroke="url(#pathGradient)"
          strokeWidth="2"
          fill="none"
          opacity="0.6"
        />
      </svg>
    </div>
  );
};

export default BackgroundPaths;