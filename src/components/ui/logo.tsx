import { Zap } from "lucide-react";
import { Link } from "react-router-dom";
import { LOGO_CONFIG } from "@/config/logo";

interface LogoProps {
  className?: string;
  showText?: boolean;
  size?: "sm" | "md" | "lg" | "xl" | "xxl";
  useCustomLogo?: boolean;
  customLogoSrc?: string;
  customLogoAlt?: string;
}

const Logo = ({ 
  className = "", 
  showText = LOGO_CONFIG.showText, 
  size = LOGO_CONFIG.defaultSize,
  useCustomLogo = LOGO_CONFIG.useCustomLogo,
  customLogoSrc = LOGO_CONFIG.customLogoSrc,
  customLogoAlt = LOGO_CONFIG.customLogoAlt
}: LogoProps) => {
  // Logo size mappings - making all sizes much bigger for better visibility
  const sizeMap = {
    sm: { icon: "h-12 w-12", text: "text-xl", container: "gap-4" },
    md: { icon: "h-16 w-16", text: "text-2xl", container: "gap-5" },
    lg: { icon: "h-20 w-20", text: "text-3xl", container: "gap-5" },
    xl: { icon: "h-24 w-24", text: "text-4xl", container: "gap-6" },
    xxl: { icon: "h-32 w-32", text: "text-5xl", container: "gap-8" }
  };

  const { icon, text, container } = sizeMap[size];

  // Check if the logo is an SVG file
  const isSVG = customLogoSrc?.toLowerCase().endsWith('.svg');

  return (
    <Link to="/" className={`flex items-center ${container} group ${className}`}>
      {/* Custom Logo Image */}
      {useCustomLogo && (
        <img 
          src={customLogoSrc}
          alt={customLogoAlt}
          className={`${icon} object-contain transition-transform duration-300 group-hover:scale-110 ${
            isSVG 
              ? 'svg-logo' // Special class for SVG logos
              : ''
          }`}
          style={{
            // Ensure SVG logos maintain crisp quality
            ...(isSVG && {
              imageRendering: 'optimizeQuality',
              shapeRendering: 'geometricPrecision',
              textRendering: 'optimizeLegibility'
            })
          }}
        />
      )}
      
      {/* Fallback Icon + Text Logo */}
      {!useCustomLogo && (
        <>
          <div className="relative">
            <Zap className={`${icon} text-accent-teal group-hover:scale-110 transition-transform duration-300`} />
            <div className="absolute inset-0 bg-accent-teal/20 rounded-full blur-md group-hover:blur-lg transition-all duration-300"></div>
          </div>
          
          {showText && (
            <span className={`font-bold text-foreground group-hover:text-accent-teal transition-colors duration-300 ${text}`}>
              NexusCore AI
            </span>
          )}
        </>
      )}
    </Link>
  );
};

export default Logo;