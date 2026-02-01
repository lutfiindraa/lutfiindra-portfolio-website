"use client";

import React from "react";
import { cn } from "@/lib/utils";
import { motion, HTMLMotionProps } from "framer-motion";

interface GlassCardProps extends HTMLMotionProps<"div"> {
    children: React.ReactNode;
    className?: string;
    hoverEffect?: boolean;
}

export function GlassCard({ children, className, hoverEffect = true, ...props }: GlassCardProps) {
    return (
        <motion.div
            className={cn(
                "group relative p-6 rounded-2xl backdrop-blur-md border transition-all duration-500",
                // Light Mode Base
                "bg-white/70 border-gray-200/50 shadow-sm",
                // Dark Mode Base (Increased visibility: 10% white on black is clearly visible gray)
                "dark:bg-white/10 dark:border-white/10 dark:shadow-none",
                // Hover Effects (Conditional)
                hoverEffect && [
                    "hover:-translate-y-2 hover:shadow-xl",
                    // Light Mode Hover (Solid White Pop)
                    "hover:bg-white hover:border-white",
                    // Dark Mode Hover (Brighter & Purple Glow)
                    "dark:hover:bg-white/20 dark:hover:border-purple-500/30 dark:hover:shadow-purple-500/20"
                ],
                className
            )}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            {...props}
        >
            {children}
        </motion.div>
    );
}
