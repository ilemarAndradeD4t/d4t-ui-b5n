import { TooltipContent } from './tooltip';
import { VariantProps } from 'class-variance-authority';

import * as React from 'react';
type SidebarContext = {
    state: 'expanded' | 'collapsed';
    open: boolean;
    setOpen: (open: boolean) => void;
    openMobile: boolean;
    setOpenMobile: (open: boolean) => void;
    isMobile: boolean;
    toggleSidebar: () => void;
};
declare const SidebarContext: React.Context<SidebarContext>;
declare function useSidebarUI(): SidebarContext;
declare const SidebarProvider: React.ForwardRefExoticComponent<Omit<React.ClassAttributes<HTMLDivElement> & React.HTMLAttributes<HTMLDivElement> & {
    defaultOpen?: boolean;
    open?: boolean;
    onOpenChange?: (open: boolean) => void;
}, "ref"> & React.RefAttributes<HTMLDivElement>>;
declare const SidebarUI: React.ForwardRefExoticComponent<Omit<React.ClassAttributes<HTMLDivElement> & React.HTMLAttributes<HTMLDivElement> & {
    side?: 'left' | 'right';
    variant?: 'sidebar' | 'floating' | 'inset';
    collapsible?: 'offcanvas' | 'icon' | 'none';
}, "ref"> & React.RefAttributes<HTMLDivElement>>;
declare const SidebarTrigger: React.ForwardRefExoticComponent<Omit<import('./button').ButtonProps & React.RefAttributes<HTMLButtonElement>, "ref"> & React.RefAttributes<HTMLButtonElement>>;
declare const SidebarRail: React.ForwardRefExoticComponent<Omit<React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>, "ref"> & React.RefAttributes<HTMLButtonElement>>;
declare const SidebarInset: React.ForwardRefExoticComponent<Omit<React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>, "ref"> & React.RefAttributes<HTMLDivElement>>;
declare const SidebarInput: React.ForwardRefExoticComponent<Omit<import('./input').InputUIProps & React.RefAttributes<HTMLInputElement>, "ref"> & React.RefAttributes<HTMLInputElement>>;
declare const SidebarUIHeader: React.ForwardRefExoticComponent<Omit<React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "ref"> & React.RefAttributes<HTMLDivElement>>;
declare const SidebarUIFooter: React.ForwardRefExoticComponent<Omit<React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "ref"> & React.RefAttributes<HTMLDivElement>>;
declare const SidebarSeparator: React.ForwardRefExoticComponent<Omit<Omit<Omit<import('@radix-ui/react-separator').SeparatorProps & React.RefAttributes<HTMLDivElement>, "ref">, "placeholder"> & React.RefAttributes<HTMLDivElement>, "ref"> & React.RefAttributes<HTMLDivElement>>;
declare const SidebarUIContent: React.ForwardRefExoticComponent<Omit<React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "ref"> & React.RefAttributes<HTMLDivElement>>;
declare const SidebarGroup: React.ForwardRefExoticComponent<Omit<React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "ref"> & React.RefAttributes<HTMLDivElement>>;
declare const SidebarGroupLabel: React.ForwardRefExoticComponent<Omit<React.ClassAttributes<HTMLDivElement> & React.HTMLAttributes<HTMLDivElement> & {
    asChild?: boolean;
}, "ref"> & React.RefAttributes<HTMLDivElement>>;
declare const SidebarGroupAction: React.ForwardRefExoticComponent<Omit<React.ClassAttributes<HTMLButtonElement> & React.ButtonHTMLAttributes<HTMLButtonElement> & {
    asChild?: boolean;
}, "ref"> & React.RefAttributes<HTMLButtonElement>>;
declare const SidebarGroupContent: React.ForwardRefExoticComponent<Omit<React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "ref"> & React.RefAttributes<HTMLDivElement>>;
declare const SidebarMenu: React.ForwardRefExoticComponent<Omit<React.DetailedHTMLProps<React.HTMLAttributes<HTMLUListElement>, HTMLUListElement>, "ref"> & React.RefAttributes<HTMLUListElement>>;
declare const SidebarMenuItem: React.ForwardRefExoticComponent<Omit<React.DetailedHTMLProps<React.LiHTMLAttributes<HTMLLIElement>, HTMLLIElement>, "ref"> & React.RefAttributes<HTMLLIElement>>;
declare const SidebarMenuButton: React.ForwardRefExoticComponent<Omit<React.ClassAttributes<HTMLButtonElement> & React.ButtonHTMLAttributes<HTMLButtonElement> & {
    asChild?: boolean;
    isActive?: boolean;
    tooltip?: string | React.ComponentProps<typeof TooltipContent>;
} & VariantProps<(props?: {
    variant?: "default" | "outline";
    size?: "default" | "sm" | "lg";
} & import('class-variance-authority/dist/types').ClassProp) => string>, "ref"> & React.RefAttributes<HTMLButtonElement>>;
declare const SidebarMenuAction: React.ForwardRefExoticComponent<Omit<React.ClassAttributes<HTMLButtonElement> & React.ButtonHTMLAttributes<HTMLButtonElement> & {
    asChild?: boolean;
    showOnHover?: boolean;
}, "ref"> & React.RefAttributes<HTMLButtonElement>>;
declare const SidebarMenuBadge: React.ForwardRefExoticComponent<Omit<React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "ref"> & React.RefAttributes<HTMLDivElement>>;
declare const SidebarMenuSkeleton: React.ForwardRefExoticComponent<Omit<React.ClassAttributes<HTMLDivElement> & React.HTMLAttributes<HTMLDivElement> & {
    showIcon?: boolean;
}, "ref"> & React.RefAttributes<HTMLDivElement>>;
declare const SidebarMenuSub: React.ForwardRefExoticComponent<Omit<React.DetailedHTMLProps<React.HTMLAttributes<HTMLUListElement>, HTMLUListElement>, "ref"> & React.RefAttributes<HTMLUListElement>>;
declare const SidebarMenuSubItem: React.ForwardRefExoticComponent<Omit<React.DetailedHTMLProps<React.LiHTMLAttributes<HTMLLIElement>, HTMLLIElement>, "ref"> & React.RefAttributes<HTMLLIElement>>;
declare const SidebarMenuSubButton: React.ForwardRefExoticComponent<Omit<React.ClassAttributes<HTMLAnchorElement> & React.AnchorHTMLAttributes<HTMLAnchorElement> & {
    asChild?: boolean;
    size?: 'sm' | 'md';
    isActive?: boolean;
}, "ref"> & React.RefAttributes<HTMLAnchorElement>>;
export { SidebarUI, SidebarUIContent, SidebarUIFooter, SidebarGroup, SidebarGroupAction, SidebarGroupContent, SidebarGroupLabel, SidebarUIHeader, SidebarInput, SidebarInset, SidebarMenu, SidebarMenuAction, SidebarMenuBadge, SidebarMenuButton, SidebarMenuItem, SidebarMenuSkeleton, SidebarMenuSub, SidebarMenuSubButton, SidebarMenuSubItem, SidebarProvider, SidebarRail, SidebarSeparator, SidebarTrigger, useSidebarUI };
