import { useEffect, useState } from 'react';

const MotionBubbles = () => {
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

  // Don't render motion bubbles in light mode
  if (!isDarkMode) {
    return null;
  }

  return (
    <div className="motion-bubbles">
      {/* Floating bubbles with different sizes and animation delays */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-accent-purple/10 rounded-full blur-3xl animate-float-gentle" />
      <div className="absolute top-40 right-20 w-24 h-24 bg-accent-teal/10 rounded-full blur-2xl animate-float-gentle" style={{ animationDelay: '1s' }} />
      <div className="absolute bottom-20 left-1/4 w-20 h-20 bg-accent-green/10 rounded-full blur-2xl animate-float-gentle" style={{ animationDelay: '2s' }} />
      <div className="absolute top-1/3 right-1/3 w-16 h-16 bg-accent-orange/10 rounded-full blur-xl animate-float-gentle" style={{ animationDelay: '0.5s' }} />
      <div className="absolute bottom-1/3 left-1/3 w-28 h-28 bg-accent-pink/10 rounded-full blur-2xl animate-float-gentle" style={{ animationDelay: '1.5s' }} />
    </div>
  );
};

export default MotionBubbles;