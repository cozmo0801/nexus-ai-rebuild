// Logo Configuration
// Set this to true to use your custom logo, false to use the fallback icon + text
export const LOGO_CONFIG = {
  // Set to true when you want to use your custom logo
  useCustomLogo: true,
  
  // Path to your custom logo file (relative to public directory)
  customLogoSrc: "/images/nexuscore logo.JPG",
  
  // Alt text for your logo
  customLogoAlt: "NexusCore AI Logo",
  
  // Whether to show text alongside the logo
  showText: true,
  
  // Default logo size - making it much bigger for better visibility
  defaultSize: "lg" as const,
};

// Logo file recommendations:
// - Place your logo in: public/images/
// - Supported formats: PNG, SVG, JPG
// - Recommended size: 256x256px or larger
// - Use PNG with transparency for best results
// - Ensure logo works on both light and dark backgrounds