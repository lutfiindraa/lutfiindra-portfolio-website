"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { Home, User, Briefcase, Mail } from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";

const navItems = [
    { name: "Home", href: "#home", icon: Home },
    { name: "About", href: "#about", icon: User },
    { name: "Projects", href: "#projects", icon: Briefcase },
    { name: "Contact", href: "#contact", icon: Mail },
];

export function Navbar() {
    const [active, setActive] = useState("Home");
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <motion.nav
            className={cn(
                "fixed top-0 left-0 w-full z-50 flex items-center justify-between px-4 md:px-6 py-4 transition-all duration-300 border-b",
                scrolled
                    ? "bg-white/80 dark:bg-black/80 backdrop-blur-md border-gray-200 dark:border-white/10 shadow-sm"
                    : "bg-transparent border-transparent"
            )}
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
        >
            {/* Brand / Logo Area */}
            <div className="text-xl font-bold tracking-tighter shrink-0 mr-4">
                <span className="text-gray-900 dark:text-white">Lutfi</span>
                <span className="text-purple-600">.Portfolio</span>
            </div>

            {/* Nav Items - Scrollable on Mobile, Flex on Desktop */}
            <div className="flex items-center gap-1 overflow-x-auto no-scrollbar mask-gradient flex-1 md:justify-center justify-start py-1">
                {navItems.map((item) => (
                    <a
                        key={item.name}
                        href={item.href}
                        onClick={() => setActive(item.name)}
                        className={cn(
                            "relative flex items-center gap-2 px-3 md:px-4 py-2 rounded-full text-xs md:text-sm font-medium transition-all duration-300 whitespace-nowrap shrink-0",
                            active === item.name
                                ? "text-purple-600 dark:text-white"
                                : "text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white hover:bg-gray-100 dark:hover:bg-white/5"
                        )}
                    >
                        {active === item.name && (
                            <motion.div
                                layoutId="active-nav"
                                className="absolute inset-0 bg-purple-100 dark:bg-white/10 rounded-full"
                                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                            />
                        )}
                        <span className="relative z-10 flex items-center gap-2">
                            <item.icon size={14} className="md:w-4 md:h-4" />
                            <span>{item.name}</span>
                        </span>
                    </a>
                ))}
            </div>

            {/* Right Side: Theme Toggle */}
            <div className="flex items-center gap-2 md:gap-4 shrink-0 ml-2">
                <ThemeToggle />
            </div>
        </motion.nav>
    );
}
