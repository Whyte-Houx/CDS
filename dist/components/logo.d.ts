import * as React from "react";
interface LogoProps extends React.HTMLAttributes<HTMLDivElement> {
    variant?: "full" | "symbol" | "text";
    size?: "sm" | "md" | "lg";
}
export declare function Logo({ className, variant, size, ...props }: LogoProps): import("react/jsx-runtime").JSX.Element;
export {};
