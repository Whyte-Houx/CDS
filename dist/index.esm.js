import { jsx, jsxs } from 'react/jsx-runtime';
import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cva } from 'class-variance-authority';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import * as DropdownMenuPrimitive from '@radix-ui/react-dropdown-menu';
import { ChevronRight, Check, Circle, Sun, Moon, Palette } from 'lucide-react';
import { useTheme, ThemeProvider as ThemeProvider$1 } from 'next-themes';

function cn(...inputs) {
    return twMerge(clsx(inputs));
}

const buttonVariants = cva("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium font-mono tracking-wide transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0", {
    variants: {
        variant: {
            default: "bg-primary text-primary-foreground shadow hover:bg-primary/90",
            destructive: "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",
            outline: "border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",
            secondary: "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",
            ghost: "hover:bg-accent hover:text-accent-foreground",
            link: "text-primary underline-offset-4 hover:underline",
        },
        size: {
            default: "h-9 px-4 py-2",
            sm: "h-8 rounded-md px-3 text-xs",
            lg: "h-10 rounded-md px-8",
            icon: "h-9 w-9",
        },
    },
    defaultVariants: {
        variant: "default",
        size: "default",
    },
});
const Button = React.forwardRef(({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (jsx(Comp, { className: cn(buttonVariants({ variant, size, className })), ref: ref, ...props }));
});
Button.displayName = "Button";

const badgeVariants = cva("inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold font-mono tracking-wider uppercase transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2", {
    variants: {
        variant: {
            default: "border-transparent bg-primary text-primary-foreground shadow hover:bg-primary/80",
            secondary: "border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",
            destructive: "border-transparent bg-destructive text-destructive-foreground shadow hover:bg-destructive/80",
            outline: "text-foreground",
        },
    },
    defaultVariants: {
        variant: "default",
    },
});
function Badge({ className, variant, ...props }) {
    return (jsx("div", { className: cn(badgeVariants({ variant }), className), ...props }));
}

const Card = React.forwardRef(({ className, ...props }, ref) => (jsx("div", { ref: ref, className: cn("rounded-lg border bg-card text-card-foreground shadow-sm", className), ...props })));
Card.displayName = "Card";
const CardHeader = React.forwardRef(({ className, ...props }, ref) => (jsx("div", { ref: ref, className: cn("flex flex-col space-y-1.5 p-6", className), ...props })));
CardHeader.displayName = "CardHeader";
const CardTitle = React.forwardRef(({ className, ...props }, ref) => (jsx("h3", { ref: ref, className: cn("text-2xl font-semibold leading-none tracking-tight font-mono", className), ...props })));
CardTitle.displayName = "CardTitle";
const CardDescription = React.forwardRef(({ className, ...props }, ref) => (jsx("p", { ref: ref, className: cn("text-sm text-muted-foreground font-mono", className), ...props })));
CardDescription.displayName = "CardDescription";
const CardContent = React.forwardRef(({ className, ...props }, ref) => (jsx("div", { ref: ref, className: cn("p-6 pt-0", className), ...props })));
CardContent.displayName = "CardContent";
const CardFooter = React.forwardRef(({ className, ...props }, ref) => (jsx("div", { ref: ref, className: cn("flex items-center p-6 pt-0", className), ...props })));
CardFooter.displayName = "CardFooter";

const DropdownMenu = DropdownMenuPrimitive.Root;
const DropdownMenuTrigger = DropdownMenuPrimitive.Trigger;
const DropdownMenuGroup = DropdownMenuPrimitive.Group;
const DropdownMenuPortal = DropdownMenuPrimitive.Portal;
const DropdownMenuSub = DropdownMenuPrimitive.Sub;
const DropdownMenuRadioGroup = DropdownMenuPrimitive.RadioGroup;
const DropdownMenuSubTrigger = React.forwardRef(({ className, inset, children, ...props }, ref) => (jsxs(DropdownMenuPrimitive.SubTrigger, { ref: ref, className: cn("flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent data-[state=open]:bg-accent", inset && "pl-8", className), ...props, children: [children, jsx(ChevronRight, { className: "ml-auto h-4 w-4" })] })));
DropdownMenuSubTrigger.displayName =
    DropdownMenuPrimitive.SubTrigger.displayName;
const DropdownMenuSubContent = React.forwardRef(({ className, ...props }, ref) => (jsx(DropdownMenuPrimitive.SubContent, { ref: ref, className: cn("z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2", className), ...props })));
DropdownMenuSubContent.displayName =
    DropdownMenuPrimitive.SubContent.displayName;
const DropdownMenuContent = React.forwardRef(({ className, sideOffset = 4, ...props }, ref) => (jsx(DropdownMenuPrimitive.Portal, { children: jsx(DropdownMenuPrimitive.Content, { ref: ref, sideOffset: sideOffset, className: cn("z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2", className), ...props }) })));
DropdownMenuContent.displayName = DropdownMenuPrimitive.Content.displayName;
const DropdownMenuItem = React.forwardRef(({ className, inset, ...props }, ref) => (jsx(DropdownMenuPrimitive.Item, { ref: ref, className: cn("relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50", inset && "pl-8", className), ...props })));
DropdownMenuItem.displayName = DropdownMenuPrimitive.Item.displayName;
const DropdownMenuCheckboxItem = React.forwardRef(({ className, children, checked, ...props }, ref) => (jsxs(DropdownMenuPrimitive.CheckboxItem, { ref: ref, className: cn("relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50", className), checked: checked, ...props, children: [jsx("span", { className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center", children: jsx(DropdownMenuPrimitive.ItemIndicator, { children: jsx(Check, { className: "h-4 w-4" }) }) }), children] })));
DropdownMenuCheckboxItem.displayName =
    DropdownMenuPrimitive.CheckboxItem.displayName;
const DropdownMenuRadioItem = React.forwardRef(({ className, children, ...props }, ref) => (jsxs(DropdownMenuPrimitive.RadioItem, { ref: ref, className: cn("relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50", className), ...props, children: [jsx("span", { className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center", children: jsx(DropdownMenuPrimitive.ItemIndicator, { children: jsx(Circle, { className: "h-2 w-2 fill-current" }) }) }), children] })));
DropdownMenuRadioItem.displayName = DropdownMenuPrimitive.RadioItem.displayName;
const DropdownMenuLabel = React.forwardRef(({ className, inset, ...props }, ref) => (jsx(DropdownMenuPrimitive.Label, { ref: ref, className: cn("px-2 py-1.5 text-sm font-semibold", inset && "pl-8", className), ...props })));
DropdownMenuLabel.displayName = DropdownMenuPrimitive.Label.displayName;
const DropdownMenuSeparator = React.forwardRef(({ className, ...props }, ref) => (jsx(DropdownMenuPrimitive.Separator, { ref: ref, className: cn("-mx-1 my-1 h-px bg-muted", className), ...props })));
DropdownMenuSeparator.displayName = DropdownMenuPrimitive.Separator.displayName;
const DropdownMenuShortcut = ({ className, ...props }) => {
    return (jsx("span", { className: cn("ml-auto text-xs tracking-widest opacity-60", className), ...props }));
};
DropdownMenuShortcut.displayName = "DropdownMenuShortcut";

function ThemeSwitcher() {
    const { theme, setTheme } = useTheme();
    const themes = [
        { value: "light", label: "LIGHT", icon: Sun },
        { value: "dark", label: "DARK", icon: Moon },
        { value: "theme-blue", label: "BLUE", icon: Palette },
        { value: "theme-green", label: "GREEN", icon: Palette },
        { value: "theme-purple", label: "PURPLE", icon: Palette },
    ];
    return (jsxs(DropdownMenu, { children: [jsx(DropdownMenuTrigger, { asChild: true, children: jsxs(Button, { variant: "ghost", size: "icon", className: "h-9 w-9 rounded-full", children: [jsx(Sun, { className: "h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" }), jsx(Moon, { className: "absolute h-4 w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" }), jsx("span", { className: "sr-only", children: "Toggle theme" })] }) }), jsxs(DropdownMenuContent, { align: "end", className: "font-mono", children: [themes.slice(0, 2).map((themeOption) => {
                        const Icon = themeOption.icon;
                        return (jsxs(DropdownMenuItem, { onClick: () => setTheme(themeOption.value), className: cn("font-mono", theme === themeOption.value && "bg-accent"), children: [jsx(Icon, { className: "mr-2 h-4 w-4" }), jsx("span", { children: themeOption.label }), theme === themeOption.value && jsx(Check, { className: "ml-auto h-4 w-4" })] }, themeOption.value));
                    }), jsx(DropdownMenuSeparator, {}), themes.slice(2).map((themeOption) => {
                        const Icon = themeOption.icon;
                        return (jsxs(DropdownMenuItem, { onClick: () => setTheme(themeOption.value), className: cn("font-mono", theme === themeOption.value && "bg-accent"), children: [jsx(Icon, { className: "mr-2 h-4 w-4" }), jsx("span", { children: themeOption.label }), theme === themeOption.value && jsx(Check, { className: "ml-auto h-4 w-4" })] }, themeOption.value));
                    })] })] }));
}

function Logo({ className, variant = "full", size = "md", ...props }) {
    const sizeClasses = {
        sm: "h-6 w-6 text-sm",
        md: "h-8 w-8 text-base",
        lg: "h-12 w-12 text-xl"
    };
    if (variant === "symbol") {
        return (jsx("div", { className: cn("flex items-center justify-center rounded-md bg-primary text-primary-foreground font-mono font-bold", sizeClasses[size], className), ...props, children: "C" }));
    }
    if (variant === "text") {
        return (jsx("div", { className: cn("font-mono font-bold text-primary", size === "sm" && "text-sm", size === "md" && "text-base", size === "lg" && "text-xl", className), ...props, children: "CATALYST" }));
    }
    return (jsxs("div", { className: cn("flex items-center gap-2", className), ...props, children: [jsx("div", { className: cn("flex items-center justify-center rounded-md bg-primary text-primary-foreground font-mono font-bold", sizeClasses[size]), children: "C" }), jsx("span", { className: cn("font-mono font-bold text-primary", size === "sm" && "text-sm", size === "md" && "text-base", size === "lg" && "text-xl"), children: "CATALYST" })] }));
}

function ThemeProvider({ children, ...props }) {
    return (jsx(ThemeProvider$1, { attribute: "class", defaultTheme: "light", enableSystem: false, themes: ["light", "dark", "theme-blue", "theme-green", "theme-purple"], ...props, children: children }));
}

export { Badge, Button, Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle, DropdownMenu, DropdownMenuCheckboxItem, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuLabel, DropdownMenuPortal, DropdownMenuRadioGroup, DropdownMenuRadioItem, DropdownMenuSeparator, DropdownMenuShortcut, DropdownMenuSub, DropdownMenuSubContent, DropdownMenuSubTrigger, DropdownMenuTrigger, Logo, ThemeProvider, ThemeSwitcher, badgeVariants, buttonVariants, cn };
//# sourceMappingURL=index.esm.js.map
