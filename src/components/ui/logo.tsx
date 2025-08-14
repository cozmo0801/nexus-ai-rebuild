import { Zap } from "lucide-react";
import { Link } from "react-router-dom";
import { LOGO_CONFIG } from "@/config/logo";

interface LogoProps {
  className?: string;
  showText?: boolean;
  size?: "sm" | "md" | "lg";
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
  // Logo size mappings
  const sizeMap = {
    sm: { icon: "h-5 w-5", text: "text-sm", container: "gap-2" },
    md: { icon: "h-6 w-6", text: "text-lg", container: "gap-3" },
    lg: { icon: "h-7 w-7", text: "text-xl", container: "gap-3" }
  };

  const { icon, text, container } = sizeMap[size];

  return (
    <Link to="/" className={`flex items-center ${container} group ${className}`}>
      {/* Custom Logo Image */}
      {useCustomLogo && (
        <img 
          src={customLogoSrc}
          alt={customLogoAlt}
          className={`${icon} object-contain transition-transform duration-300 group-hover:scale-110`}
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