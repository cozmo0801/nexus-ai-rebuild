import { useEffect, useRef } from 'react';

const BackgroundPaths = () => {
  const svgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    const svg = svgRef.current;
    if (!svg) return;

    const paths = svg.querySelectorAll('.path-line');
    
    paths.forEach((path, index) => {
      (path as SVGPathElement).style.animationDelay = `${index * 0.5}s`;
    });
  }, []);

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
            <stop offset="0%" stopColor="rgba(180, 58, 183, 0.1)" />
            <stop offset="50%" stopColor="rgba(253, 29, 29, 0.1)" />
            <stop offset="100%" stopColor="rgba(252, 176, 64, 0.1)" />
          </linearGradient>
        </defs>
        
        {/* Flowing curved paths */}
        <path
          className="path-line"
          d="M-100,100 Q300,50 600,200 T1300,150"
          stroke="url(#pathGradient)"
          strokeWidth="1"
          fill="none"
        />
        
        <path
          className="path-line"
          d="M-50,300 Q400,250 700,400 T1350,350"
          stroke="url(#pathGradient)"
          strokeWidth="1"
          fill="none"
        />
        
        <path
          className="path-line"
          d="M-150,500 Q250,450 550,600 T1250,550"
          stroke="url(#pathGradient)"
          strokeWidth="1"
          fill="none"
        />
        
        <path
          className="path-line"
          d="M-200,700 Q350,650 650,800 T1400,750"
          stroke="url(#pathGradient)"
          strokeWidth="1"
          fill="none"
        />
        
        {/* Diagonal intersecting lines */}
        <path
          className="path-line"
          d="M0,0 L1200,800"
          stroke="rgba(180, 58, 183, 0.05)"
          strokeWidth="0.5"
          fill="none"
        />
        
        <path
          className="path-line"
          d="M0,800 L1200,0"
          stroke="rgba(252, 176, 64, 0.05)"
          strokeWidth="0.5"
          fill="none"
        />
        
        {/* Additional flowing lines */}
        <path
          className="path-line"
          d="M-100,200 Q500,100 800,300 Q1000,400 1300,250"
          stroke="rgba(253, 29, 29, 0.08)"
          strokeWidth="1"
          fill="none"
        />
        
        <path
          className="path-line"
          d="M-50,600 Q450,500 750,700 Q950,800 1250,650"
          stroke="rgba(180, 58, 183, 0.08)"
          strokeWidth="1"
          fill="none"
        />
      </svg>
      
      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-accent-purple/20 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 6}s`,
              animationDuration: `${4 + Math.random() * 4}s`
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default BackgroundPaths;