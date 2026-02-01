"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
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
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Lock body scroll when menu is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }
    }, [isOpen]);

    return (
        <>
            <motion.nav
                className={cn(
                    "fixed top-0 left-0 w-full z-50 flex items-center justify-between px-4 md:px-6 py-4 transition-all duration-300 border-b",
                    scrolled || isOpen
                        ? "bg-white/80 dark:bg-black/80 backdrop-blur-md border-gray-200 dark:border-white/10 shadow-sm"
                        : "bg-transparent border-transparent"
                )}
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8 }}
            >
                {/* Brand / Logo Area */}
                <div className="text-xl font-bold tracking-tighter shrink-0 mr-4 z-50">
                    <span className="text-gray-900 dark:text-white">Lutfi</span>
                    <span className="text-purple-600">.Portfolio</span>
                </div>

                {/* Desktop Nav Items */}
                <div className="hidden md:flex items-center gap-1 bg-white/50 dark:bg-black/20 backdrop-blur-sm p-1.5 rounded-full border border-gray-200 dark:border-white/10">
                    {navItems.map((item) => (
                        <a
                            key={item.name}
                            href={item.href}
                            onClick={() => setActive(item.name)}
                            className={cn(
                                "relative flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all duration-300",
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
                                <item.icon size={16} />
                                <span>{item.name}</span>
                            </span>
                        </a>
                    ))}
                </div>

                {/* Right Side: Theme Toggle & Mobile Menu Button */}
                <div className="flex items-center gap-4 z-50">
                    <ThemeToggle />

                    {/* Mobile Hamburger Button */}
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="md:hidden flex flex-col items-center justify-center w-10 h-10 rounded-full bg-gray-100 dark:bg-white/10 text-gray-900 dark:text-white hover:bg-gray-200 dark:hover:bg-white/20 transition-colors focus:outline-none"
                        aria-label="Toggle Menu"
                    >
                        <div className="w-5 h-5 flex flex-col justify-center gap-1.5">
                            <motion.span
                                animate={{ rotate: isOpen ? 45 : 0, y: isOpen ? 6 : 0 }}
                                className="w-full h-0.5 bg-current rounded-full origin-center transition-transform"
                            />
                            <motion.span
                                animate={{ opacity: isOpen ? 0 : 1 }}
                                className="w-full h-0.5 bg-current rounded-full transition-opacity"
                            />
                            <motion.span
                                animate={{ rotate: isOpen ? -45 : 0, y: isOpen ? -6 : 0 }}
                                className="w-full h-0.5 bg-current rounded-full origin-center transition-transform"
                            />
                        </div>
                    </button>
                </div>
            </motion.nav>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.3 }}
                        className="fixed inset-0 z-40 bg-white/95 dark:bg-black/95 backdrop-blur-2xl md:hidden flex flex-col pt-24 px-6 [mask-image:linear-gradient(to_bottom,black_60%,transparent_100%)]"
                    >
                        <div className="flex flex-col gap-2">
                            {navItems.map((item, index) => (
                                <motion.a
                                    key={item.name}
                                    href={item.href}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.1 + index * 0.1 }}
                                    onClick={() => {
                                        setActive(item.name);
                                        setIsOpen(false);
                                    }}
                                    className={cn(
                                        "flex items-center gap-4 p-3 rounded-xl text-base font-medium transition-all border border-transparent",
                                        active === item.name
                                            ? "bg-purple-100/50 dark:bg-white/10 text-purple-600 dark:text-white border-purple-200 dark:border-white/10"
                                            : "text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-white/5"
                                    )}
                                >
                                    <div className={cn(
                                        "p-2 rounded-lg",
                                        active === item.name ? "bg-purple-200 dark:bg-white/20" : "bg-gray-200 dark:bg-white/5"
                                    )}>
                                        <item.icon size={18} />
                                    </div>
                                    <span>{item.name}</span>
                                    {active === item.name && (
                                        <motion.div
                                            layoutId="active-dot"
                                            className="ml-auto w-1.5 h-1.5 rounded-full bg-purple-600 dark:bg-white"
                                        />
                                    )}
                                </motion.a>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
