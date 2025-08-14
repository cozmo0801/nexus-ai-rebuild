# Adding Your Custom Logo

## Quick Setup (Recommended)

1. **Place your logo file** in the `public/images/` directory
2. **Update the configuration** in `src/config/logo.ts`
3. **Your logo will appear everywhere automatically!**

## Step-by-Step Instructions

### 1. Add Your Logo File

Place your logo file in the `public/images/` directory. Supported formats:
- **PNG** (recommended for logos with transparency)
- **SVG** (best for scalable logos)
- **JPG/JPEG** (for simple logos without transparency)

**Example file structure:**
```
public/
  images/
    logo.png         ← Your logo file here
    company-logo.svg ← Or your logo file here
```

### 2. Update Logo Configuration

Open `src/config/logo.ts` and update the configuration:

```ts
export const LOGO_CONFIG = {
  // Set to true to use your custom logo
  useCustomLogo: true,
  
  // Path to your logo file (relative to public directory)
  customLogoSrc: "/images/logo.png",  // Change this to your filename
  
  // Alt text for your logo
  customLogoAlt: "NexusCore AI Logo", // Update if needed
  
  // Whether to show text alongside the logo
  showText: true,  // Set to false for logo only
  
  // Default logo size
  defaultSize: "md", // "sm", "md", or "lg"
};
```

### 3. Test Your Logo

After updating the configuration:
1. **Refresh the page** to see changes
2. **Your logo will appear everywhere automatically**:
   - Navigation bar (desktop)
   - Mobile menu
   - Footer

## Advanced Customization

### Logo Only (No Text)
```ts
export const LOGO_CONFIG = {
  useCustomLogo: true,
  customLogoSrc: "/images/logo.png",
  showText: false,  // This hides the text
  // ... other settings
};
```

### Different Logo for Different Sizes
You can also override the configuration when using the Logo component:

```tsx
// Logo with text (overrides config)
<Logo showText={true} />

// Logo without text (overrides config)
<Logo showText={false} />

// Custom size (overrides config)
<Logo size="lg" />

// Custom logo source (overrides config)
<Logo customLogoSrc="/images/alternative-logo.png" />
```

## Logo Recommendations

### For Best Results:
- **Size**: At least 200x200px (will be scaled down automatically)
- **Format**: PNG with transparent background
- **Aspect Ratio**: Square or close to square works best
- **Colors**: Should work well on both light and dark backgrounds

### Example Logo Specifications:
```
Dimensions: 256x256px
Format: PNG with transparency
Background: Transparent
Colors: Should contrast well with text
```

## Current Logo Locations

Your logo will automatically appear in:
- ✅ **Navigation Bar** (top of every page)
- ✅ **Mobile Menu** (hamburger menu)
- ✅ **Footer** (bottom of every page)

## Troubleshooting

### Logo Not Showing?
1. Check the `useCustomLogo` setting in `src/config/logo.ts`
2. Verify the file path in `customLogoSrc`
3. Ensure the file is in the `public/images/` directory
4. Check the browser console for any errors

### Logo Too Big/Small?
- Adjust the `defaultSize` in the config: `"sm"`, `"md"`, or `"lg"`
- Or override when using the component: `<Logo size="lg" />`

### Logo Looks Blurry?
- Use a higher resolution logo file
- Consider using SVG format for crisp scaling

### Want to Switch Back to Icon + Text?
Simply set `useCustomLogo: false` in the config file.

## Example Configurations

### Basic Logo Setup:
```ts
export const LOGO_CONFIG = {
  useCustomLogo: true,
  customLogoSrc: "/images/logo.png",
  customLogoAlt: "NexusCore AI Logo",
  showText: true,
  defaultSize: "md",
};
```

### Logo Only Setup:
```ts
export const LOGO_CONFIG = {
  useCustomLogo: true,
  customLogoSrc: "/images/logo.png",
  customLogoAlt: "NexusCore AI Logo",
  showText: false,  // No text
  defaultSize: "lg", // Larger size
};
```

### Fallback Setup (Icon + Text):
```ts
export const LOGO_CONFIG = {
  useCustomLogo: false,  // Uses Zap icon + text
  customLogoSrc: "/images/logo.png",
  customLogoAlt: "NexusCore AI Logo",
  showText: true,
  defaultSize: "md",
};
```

## Need Help?

If you need assistance with:
- Logo file preparation
- Custom styling
- Responsive design
- Theme compatibility
- Configuration issues

Just let me know and I can help you customize it further!