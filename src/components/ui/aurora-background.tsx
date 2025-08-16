import { cn } from "@/lib/utils";
import React, { ReactNode } from "react";

interface AuroraBackgroundProps extends React.HTMLProps<HTMLDivElement> {
  children: ReactNode;
  showRadialGradient?: boolean;
}

export const AuroraBackground = ({
  className,
  children,
  showRadialGradient = true,
  ...props
}: AuroraBackgroundProps) => {
  return (
    <div
      className={cn(
        "relative flex flex-col h-auto min-h-screen items-center justify-center bg-background text-foreground transition-bg",
        className
      )}
      {...props}
    >
      <div className="absolute inset-0 overflow-hidden">
        <div
          className={cn(
            `
          [--aurora:repeating-linear-gradient(100deg,#f1f5f9_10%,#e2e8f0_15%,#cbd5e1_20%,#94a3b8_25%,#64748b_30%)]
          [background-image:var(--aurora)]
          [background-size:200%_200%]
          [background-position:50%_50%]
          filter blur-[25px]
          after:content-[""] after:absolute after:inset-0 after:[background-image:var(--aurora)] 
          after:[background-size:200%,_100%] 
          after:animate-aurora after:[background-attachment:fixed] after:mix-blend-difference
          pointer-events-none
          absolute -inset-[25px] opacity-40 will-change-transform`,

            showRadialGradient &&
              `[mask-image:radial-gradient(ellipse_at_100%_0%,black_20%,var(--transparent)_70%)]`
          )}
        ></div>
      </div>
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};