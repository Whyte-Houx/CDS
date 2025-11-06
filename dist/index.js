'use strict';

var jsxRuntime = require('react/jsx-runtime');
var React = require('react');
var reactSlot = require('@radix-ui/react-slot');
var classVarianceAuthority = require('class-variance-authority');
var clsx = require('clsx');
var tailwindMerge = require('tailwind-merge');
var DropdownMenuPrimitive = require('@radix-ui/react-dropdown-menu');
var lucideReact = require('lucide-react');
var nextThemes = require('next-themes');

function _interopNamespaceDefault(e) {
    var n = Object.create(null);
    if (e) {
        Object.keys(e).forEach(function (k) {
            if (k !== 'default') {
                var d = Object.getOwnPropertyDescriptor(e, k);
                Object.defineProperty(n, k, d.get ? d : {
                    enumerable: true,
                    get: function () { return e[k]; }
                });
            }
        });
    }
    n.default = e;
    return Object.freeze(n);
}

var React__namespace = /*#__PURE__*/_interopNamespaceDefault(React);
var DropdownMenuPrimitive__namespace = /*#__PURE__*/_interopNamespaceDefault(DropdownMenuPrimitive);

function cn(...inputs) {
    return tailwindMerge.twMerge(clsx.clsx(inputs));
}

const buttonVariants = classVarianceAuthority.cva("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium font-mono tracking-wide transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0", {
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
const Button = React__namespace.forwardRef(({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? reactSlot.Slot : "button";
    return (jsxRuntime.jsx(Comp, { className: cn(buttonVariants({ variant, size, className })), ref: ref, ...props }));
});
Button.displayName = "Button";

const badgeVariants = classVarianceAuthority.cva("inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold font-mono tracking-wider uppercase transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2", {
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
    return (jsxRuntime.jsx("div", { className: cn(badgeVariants({ variant }), className), ...props }));
}

const Card = React__namespace.forwardRef(({ className, ...props }, ref) => (jsxRuntime.jsx("div", { ref: ref, className: cn("rounded-lg border bg-card text-card-foreground shadow-sm", className), ...props })));
Card.displayName = "Card";
const CardHeader = React__namespace.forwardRef(({ className, ...props }, ref) => (jsxRuntime.jsx("div", { ref: ref, className: cn("flex flex-col space-y-1.5 p-6", className), ...props })));
CardHeader.displayName = "CardHeader";
const CardTitle = React__namespace.forwardRef(({ className, ...props }, ref) => (jsxRuntime.jsx("h3", { ref: ref, className: cn("text-2xl font-semibold leading-none tracking-tight font-mono", className), ...props })));
CardTitle.displayName = "CardTitle";
const CardDescription = React__namespace.forwardRef(({ className, ...props }, ref) => (jsxRuntime.jsx("p", { ref: ref, className: cn("text-sm text-muted-foreground font-mono", className), ...props })));
CardDescription.displayName = "CardDescription";
const CardContent = React__namespace.forwardRef(({ className, ...props }, ref) => (jsxRuntime.jsx("div", { ref: ref, className: cn("p-6 pt-0", className), ...props })));
CardContent.displayName = "CardContent";
const CardFooter = React__namespace.forwardRef(({ className, ...props }, ref) => (jsxRuntime.jsx("div", { ref: ref, className: cn("flex items-center p-6 pt-0", className), ...props })));
CardFooter.displayName = "CardFooter";

const DropdownMenu = DropdownMenuPrimitive__namespace.Root;
const DropdownMenuTrigger = DropdownMenuPrimitive__namespace.Trigger;
const DropdownMenuGroup = DropdownMenuPrimitive__namespace.Group;
const DropdownMenuPortal = DropdownMenuPrimitive__namespace.Portal;
const DropdownMenuSub = DropdownMenuPrimitive__namespace.Sub;
const DropdownMenuRadioGroup = DropdownMenuPrimitive__namespace.RadioGroup;
const DropdownMenuSubTrigger = React__namespace.forwardRef(({ className, inset, children, ...props }, ref) => (jsxRuntime.jsxs(DropdownMenuPrimitive__namespace.SubTrigger, { ref: ref, className: cn("flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent data-[state=open]:bg-accent", inset && "pl-8", className), ...props, children: [children, jsxRuntime.jsx(lucideReact.ChevronRight, { className: "ml-auto h-4 w-4" })] })));
DropdownMenuSubTrigger.displayName =
    DropdownMenuPrimitive__namespace.SubTrigger.displayName;
const DropdownMenuSubContent = React__namespace.forwardRef(({ className, ...props }, ref) => (jsxRuntime.jsx(DropdownMenuPrimitive__namespace.SubContent, { ref: ref, className: cn("z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2", className), ...props })));
DropdownMenuSubContent.displayName =
    DropdownMenuPrimitive__namespace.SubContent.displayName;
const DropdownMenuContent = React__namespace.forwardRef(({ className, sideOffset = 4, ...props }, ref) => (jsxRuntime.jsx(DropdownMenuPrimitive__namespace.Portal, { children: jsxRuntime.jsx(DropdownMenuPrimitive__namespace.Content, { ref: ref, sideOffset: sideOffset, className: cn("z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2", className), ...props }) })));
DropdownMenuContent.displayName = DropdownMenuPrimitive__namespace.Content.displayName;
const DropdownMenuItem = React__namespace.forwardRef(({ className, inset, ...props }, ref) => (jsxRuntime.jsx(DropdownMenuPrimitive__namespace.Item, { ref: ref, className: cn("relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50", inset && "pl-8", className), ...props })));
DropdownMenuItem.displayName = DropdownMenuPrimitive__namespace.Item.displayName;
const DropdownMenuCheckboxItem = React__namespace.forwardRef(({ className, children, checked, ...props }, ref) => (jsxRuntime.jsxs(DropdownMenuPrimitive__namespace.CheckboxItem, { ref: ref, className: cn("relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50", className), checked: checked, ...props, children: [jsxRuntime.jsx("span", { className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center", children: jsxRuntime.jsx(DropdownMenuPrimitive__namespace.ItemIndicator, { children: jsxRuntime.jsx(lucideReact.Check, { className: "h-4 w-4" }) }) }), children] })));
DropdownMenuCheckboxItem.displayName =
    DropdownMenuPrimitive__namespace.CheckboxItem.displayName;
const DropdownMenuRadioItem = React__namespace.forwardRef(({ className, children, ...props }, ref) => (jsxRuntime.jsxs(DropdownMenuPrimitive__namespace.RadioItem, { ref: ref, className: cn("relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50", className), ...props, children: [jsxRuntime.jsx("span", { className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center", children: jsxRuntime.jsx(DropdownMenuPrimitive__namespace.ItemIndicator, { children: jsxRuntime.jsx(lucideReact.Circle, { className: "h-2 w-2 fill-current" }) }) }), children] })));
DropdownMenuRadioItem.displayName = DropdownMenuPrimitive__namespace.RadioItem.displayName;
const DropdownMenuLabel = React__namespace.forwardRef(({ className, inset, ...props }, ref) => (jsxRuntime.jsx(DropdownMenuPrimitive__namespace.Label, { ref: ref, className: cn("px-2 py-1.5 text-sm font-semibold", inset && "pl-8", className), ...props })));
DropdownMenuLabel.displayName = DropdownMenuPrimitive__namespace.Label.displayName;
const DropdownMenuSeparator = React__namespace.forwardRef(({ className, ...props }, ref) => (jsxRuntime.jsx(DropdownMenuPrimitive__namespace.Separator, { ref: ref, className: cn("-mx-1 my-1 h-px bg-muted", className), ...props })));
DropdownMenuSeparator.displayName = DropdownMenuPrimitive__namespace.Separator.displayName;
const DropdownMenuShortcut = ({ className, ...props }) => {
    return (jsxRuntime.jsx("span", { className: cn("ml-auto text-xs tracking-widest opacity-60", className), ...props }));
};
DropdownMenuShortcut.displayName = "DropdownMenuShortcut";

function ThemeSwitcher() {
    const { theme, setTheme } = nextThemes.useTheme();
    const themes = [
        { value: "light", label: "LIGHT", icon: lucideReact.Sun },
        { value: "dark", label: "DARK", icon: lucideReact.Moon },
        { value: "theme-blue", label: "BLUE", icon: lucideReact.Palette },
        { value: "theme-green", label: "GREEN", icon: lucideReact.Palette },
        { value: "theme-purple", label: "PURPLE", icon: lucideReact.Palette },
    ];
    return (jsxRuntime.jsxs(DropdownMenu, { children: [jsxRuntime.jsx(DropdownMenuTrigger, { asChild: true, children: jsxRuntime.jsxs(Button, { variant: "ghost", size: "icon", className: "h-9 w-9 rounded-full", children: [jsxRuntime.jsx(lucideReact.Sun, { className: "h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" }), jsxRuntime.jsx(lucideReact.Moon, { className: "absolute h-4 w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" }), jsxRuntime.jsx("span", { className: "sr-only", children: "Toggle theme" })] }) }), jsxRuntime.jsxs(DropdownMenuContent, { align: "end", className: "font-mono", children: [themes.slice(0, 2).map((themeOption) => {
                        const Icon = themeOption.icon;
                        return (jsxRuntime.jsxs(DropdownMenuItem, { onClick: () => setTheme(themeOption.value), className: cn("font-mono", theme === themeOption.value && "bg-accent"), children: [jsxRuntime.jsx(Icon, { className: "mr-2 h-4 w-4" }), jsxRuntime.jsx("span", { children: themeOption.label }), theme === themeOption.value && jsxRuntime.jsx(lucideReact.Check, { className: "ml-auto h-4 w-4" })] }, themeOption.value));
                    }), jsxRuntime.jsx(DropdownMenuSeparator, {}), themes.slice(2).map((themeOption) => {
                        const Icon = themeOption.icon;
                        return (jsxRuntime.jsxs(DropdownMenuItem, { onClick: () => setTheme(themeOption.value), className: cn("font-mono", theme === themeOption.value && "bg-accent"), children: [jsxRuntime.jsx(Icon, { className: "mr-2 h-4 w-4" }), jsxRuntime.jsx("span", { children: themeOption.label }), theme === themeOption.value && jsxRuntime.jsx(lucideReact.Check, { className: "ml-auto h-4 w-4" })] }, themeOption.value));
                    })] })] }));
}

function Logo({ className, variant = "full", size = "md", ...props }) {
    const sizeClasses = {
        sm: "h-6 w-6 text-sm",
        md: "h-8 w-8 text-base",
        lg: "h-12 w-12 text-xl"
    };
    if (variant === "symbol") {
        return (jsxRuntime.jsx("div", { className: cn("flex items-center justify-center rounded-md bg-primary text-primary-foreground font-mono font-bold", sizeClasses[size], className), ...props, children: "C" }));
    }
    if (variant === "text") {
        return (jsxRuntime.jsx("div", { className: cn("font-mono font-bold text-primary", size === "sm" && "text-sm", size === "md" && "text-base", size === "lg" && "text-xl", className), ...props, children: "CATALYST" }));
    }
    return (jsxRuntime.jsxs("div", { className: cn("flex items-center gap-2", className), ...props, children: [jsxRuntime.jsx("div", { className: cn("flex items-center justify-center rounded-md bg-primary text-primary-foreground font-mono font-bold", sizeClasses[size]), children: "C" }), jsxRuntime.jsx("span", { className: cn("font-mono font-bold text-primary", size === "sm" && "text-sm", size === "md" && "text-base", size === "lg" && "text-xl"), children: "CATALYST" })] }));
}

function ThemeProvider({ children, ...props }) {
    return (jsxRuntime.jsx(nextThemes.ThemeProvider, { attribute: "class", defaultTheme: "light", enableSystem: false, themes: ["light", "dark", "theme-blue", "theme-green", "theme-purple"], ...props, children: children }));
}

exports.Badge = Badge;
exports.Button = Button;
exports.Card = Card;
exports.CardContent = CardContent;
exports.CardDescription = CardDescription;
exports.CardFooter = CardFooter;
exports.CardHeader = CardHeader;
exports.CardTitle = CardTitle;
exports.DropdownMenu = DropdownMenu;
exports.DropdownMenuCheckboxItem = DropdownMenuCheckboxItem;
exports.DropdownMenuContent = DropdownMenuContent;
exports.DropdownMenuGroup = DropdownMenuGroup;
exports.DropdownMenuItem = DropdownMenuItem;
exports.DropdownMenuLabel = DropdownMenuLabel;
exports.DropdownMenuPortal = DropdownMenuPortal;
exports.DropdownMenuRadioGroup = DropdownMenuRadioGroup;
exports.DropdownMenuRadioItem = DropdownMenuRadioItem;
exports.DropdownMenuSeparator = DropdownMenuSeparator;
exports.DropdownMenuShortcut = DropdownMenuShortcut;
exports.DropdownMenuSub = DropdownMenuSub;
exports.DropdownMenuSubContent = DropdownMenuSubContent;
exports.DropdownMenuSubTrigger = DropdownMenuSubTrigger;
exports.DropdownMenuTrigger = DropdownMenuTrigger;
exports.Logo = Logo;
exports.ThemeProvider = ThemeProvider;
exports.ThemeSwitcher = ThemeSwitcher;
exports.badgeVariants = badgeVariants;
exports.buttonVariants = buttonVariants;
exports.cn = cn;
//# sourceMappingURL=index.js.map
