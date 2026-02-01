"use client";

import React, { useEffect, useState } from "react";
import { motion, useSpring, useMotionValue } from "framer-motion";
import { cn } from "@/lib/utils";

export const CustomCursor = () => {
    const [isHovering, setIsHovering] = useState(false);
    const [isVisible, setIsVisible] = useState(false);

    // Motion values for exact mouse position
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    // Smooth springs for the trailing cursor
    // Damping: Strength of opposing force (higher = less oscillation)
    // Stiffness: Strength of the spring (higher = faster movement)
    const springX = useSpring(mouseX, { damping: 25, stiffness: 120 });
    const springY = useSpring(mouseY, { damping: 25, stiffness: 120 });

    useEffect(() => {
        const moveCursor = (e: MouseEvent) => {
            // Update motion values
            mouseX.set(e.clientX);
            mouseY.set(e.clientY);

            // Make visible once mouse moves
            if (!isVisible) setIsVisible(true);
        };

        const handleMouseDown = () => setIsHovering(true);
        const handleMouseUp = () => setIsHovering(false);

        // Add event listeners for hover effects on clickable elements
        const handleLinkHover = () => setIsHovering(true);
        const handleLinkLeave = () => setIsHovering(false);

        const attachHoverListeners = () => {
            const hoverableElements = document.querySelectorAll("a, button, input, textarea, [role='button']");
            hoverableElements.forEach((el) => {
                el.addEventListener("mouseenter", handleLinkHover);
                el.addEventListener("mouseleave", handleLinkLeave);
            });
            return () => {
                hoverableElements.forEach((el) => {
                    el.removeEventListener("mouseenter", handleLinkHover);
                    el.removeEventListener("mouseleave", handleLinkLeave);
                });
            };
        };

        // Initial attach
        let detachListeners = attachHoverListeners();

        // Re-attach on DOM changes (simple observation)
        const observer = new MutationObserver(() => {
            detachListeners();
            detachListeners = attachHoverListeners();
        });
        observer.observe(document.body, { childList: true, subtree: true });

        window.addEventListener("mousemove", moveCursor);
        window.addEventListener("mousedown", handleMouseDown);
        window.addEventListener("mouseup", handleMouseUp);

        return () => {
            window.removeEventListener("mousemove", moveCursor);
            window.removeEventListener("mousedown", handleMouseDown);
            window.removeEventListener("mouseup", handleMouseUp);
            detachListeners();
            observer.disconnect();
        };
    }, [mouseX, mouseY, isVisible]);

    return (
        <div className="hidden lg:block pointer-events-none fixed inset-0 z-[9999] overflow-hidden">
            {/* Main Glowing Light - Follows cursor instantly */}
            <motion.div
                className={cn(
                    "fixed top-0 left-0 w-4 h-4 rounded-full pointer-events-none shadow-[0_0_20px_2px_rgba(255,255,255,0.8)]",
                    !isVisible && "opacity-0"
                )}
                style={{
                    x: mouseX,
                    y: mouseY,
                    translateX: "-50%",
                    translateY: "-50%",
                    background: "radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(168,85,247,0.8) 50%, rgba(168,85,247,0) 100%)",
                }}
            />

            {/* Trailing Energy Ring - Follows with spring physics */}
            <motion.div
                className={cn(
                    "fixed top-0 left-0 rounded-full pointer-events-none transition-opacity duration-300 blur-[2px]",
                    !isVisible && "opacity-0"
                )}
                style={{
                    x: springX,
                    y: springY,
                    translateX: "-50%",
                    translateY: "-50%",
                }}
                animate={{
                    width: isHovering ? 80 : 40,
                    height: isHovering ? 80 : 40,
                    backgroundColor: isHovering ? "rgba(168, 85, 247, 0.15)" : "transparent",
                    border: isHovering ? "2px solid rgba(168, 85, 247, 0.5)" : "2px solid rgba(168, 85, 247, 0.3)",
                    boxShadow: isHovering ? "0 0 40px 5px rgba(168, 85, 247, 0.4)" : "none",
                }}
                transition={{
                    type: "spring",
                    stiffness: 150,
                    damping: 15,
                    mass: 0.1
                }}
            />
        </div>
    );
};
