"use client";

import * as React from "react";
import { cn } from "../lib/utils";

interface LogoProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "full" | "symbol" | "text";
  size?: "sm" | "md" | "lg";
}

export function Logo({ 
  className, 
  variant = "full", 
  size = "md", 
  ...props 
}: LogoProps) {
  const sizeClasses = {
    sm: "h-6 w-6 text-sm",
    md: "h-8 w-8 text-base", 
    lg: "h-12 w-12 text-xl"
  };

  if (variant === "symbol") {
    return (
      <div 
        className={cn(
          "flex items-center justify-center rounded-md bg-primary text-primary-foreground font-mono font-bold",
          sizeClasses[size],
          className
        )}
        {...props}
      >
        C
      </div>
    );
  }

  if (variant === "text") {
    return (
      <div 
        className={cn(
          "font-mono font-bold text-primary",
          size === "sm" && "text-sm",
          size === "md" && "text-base",
          size === "lg" && "text-xl",
          className
        )}
        {...props}
      >
        CATALYST
      </div>
    );
  }

  return (
    <div 
      className={cn("flex items-center gap-2", className)}
      {...props}
    >
      <div 
        className={cn(
          "flex items-center justify-center rounded-md bg-primary text-primary-foreground font-mono font-bold",
          sizeClasses[size]
        )}
      >
        C
      </div>
      <span 
        className={cn(
          "font-mono font-bold text-primary",
          size === "sm" && "text-sm",
          size === "md" && "text-base", 
          size === "lg" && "text-xl"
        )}
      >
        CATALYST
      </span>
    </div>
  );
}