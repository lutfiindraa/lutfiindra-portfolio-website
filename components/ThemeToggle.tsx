"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/Button";
import { motion } from "framer-motion";

export function ThemeToggle() {
    const { theme, setTheme } = useTheme();
    const [mounted, setMounted] = React.useState(false);

    React.useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return (
            <Button variant="glass" size="sm" className="w-10 h-10 p-0 rounded-full bg-white/5 border-white/10">
                <span className="sr-only">Toggle theme</span>
            </Button>
        );
    }

    return (
        <Button
            variant="glass"
            size="sm"
            className="relative w-10 h-10 p-0 rounded-full overflow-hidden bg-white/5 border-white/10 hover:bg-white/10"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        >
            <motion.div
                initial={false}
                animate={{
                    y: theme === "dark" ? -20 : 0,
                    opacity: theme === "dark" ? 0 : 1,
                }}
                transition={{ duration: 0.2 }}
                className="absolute inset-0 flex items-center justify-center"
            >
                <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0 text-yellow-500" />
            </motion.div>
            <motion.div
                initial={false}
                animate={{
                    y: theme === "dark" ? 0 : 20,
                    opacity: theme === "dark" ? 1 : 0,
                }}
                transition={{ duration: 0.2 }}
                className="absolute inset-0 flex items-center justify-center"
            >
                <Moon className="h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100 text-purple-400" />
            </motion.div>
            <span className="sr-only">Toggle theme</span>
        </Button>
    );
}
