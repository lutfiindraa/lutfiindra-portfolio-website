"use client";

import React from "react";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { Github, Linkedin, Instagram } from "lucide-react";
import { Button } from "@/components/ui/Button";
import Image from "next/image";

const socialLinks = [
    { icon: Github, href: "https://github.com/lutfiindraa", label: "GitHub" }, // Placeholder
    { icon: Linkedin, href: "https://www.linkedin.com/in/lutfi-indra-nur-praditya-598a67269", label: "LinkedIn" },
    { icon: Instagram, href: "https://instagram.com/fi.indra_", label: "Instagram" },
];

export function HomeSection() {
    return (
        <section id="home" className="min-h-screen flex items-center justify-center px-4 md:px-20 pt-20">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center w-full max-w-7xl">

                {/* Left Side: Text */}
                <motion.div
                    className="space-y-6 order-2 md:order-1"
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <div className="inline-block px-4 py-2 rounded-full border border-purple-500/30 bg-purple-500/10 text-purple-300 text-sm font-medium mb-4">
                        Welcome to my portfolio
                    </div>

                    <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-gray-900 dark:text-white leading-tight">
                        I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">Lutfi Indra Nur Praditya</span>
                    </h1>

                    <div className="text-2xl md:text-4xl font-semibold text-gray-400 min-h-[60px]">
                        <TypeAnimation
                            sequence={[
                                "Informatics Student",
                                2000,
                                "Data Scientist",
                                2000,
                                "Web Developer",
                                2000,
                                "Mobile Developer",
                                2000,
                            ]}
                            wrapper="span"
                            speed={50}
                            repeat={Infinity}
                        />
                    </div>

                    <p className="text-gray-400 text-lg max-w-lg leading-relaxed">
                        Passionate about transforming data into insights and building immersive digital experiences through modern web and mobile technologies.
                    </p>

                    <div className="flex gap-4 pt-4">
                        {socialLinks.map((social) => (
                            <a
                                key={social.label}
                                href={social.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-3 border border-gray-200 dark:border-white/10 rounded-full bg-white dark:bg-white/5 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-white/10 hover:border-purple-500/50 hover:text-purple-600 dark:hover:text-purple-400 transition-all duration-300 shadow-sm dark:shadow-none"
                            >
                                <social.icon size={24} />
                            </a>
                        ))}
                    </div>

                    <div className="pt-6">
                        <Button variant="primary" size="lg" onClick={() => document.getElementById('projects')?.scrollIntoView()}>
                            Explore My Work
                        </Button>
                    </div>

                </motion.div>

                {/* Right Side: Visuals */}
                <motion.div
                    className="relative flex justify-center items-center order-1 md:order-2"
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    {/* Abstract Circle/Glow behind */}
                    <div className="absolute w-[300px] h-[300px] bg-purple-600/20 rounded-full blur-[100px] animate-pulse-slow" />

                    {/* New Experimental Glow on Hover */}
                    <div className="absolute w-[320px] h-[320px] md:w-[420px] md:h-[520px] bg-gradient-to-tr from-purple-500/30 to-blue-500/30 rounded-2xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />

                    {/* Profile Frame - Glassmorphism */}
                    <div className="relative z-10 w-[300px] h-[300px] md:w-[400px] md:h-[500px] rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm overflow-hidden group shadow-2xl">
                        <Image
                            src="/images/profile.jpg"
                            alt="Lutfi Indra Profile"
                            fill
                            className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                            priority
                        />
                        {/* Gradient Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-8 pointer-events-none">
                            <div className="text-center transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                                <p className="text-white/60 text-sm mb-1 opacity-100 group-hover:opacity-0 transition-opacity duration-200 absolute bottom-8 left-0 right-0">
                                    Open to Work
                                </p>
                                <p className="text-purple-300 text-xl font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-200 delay-100">
                                    Informatics Student
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Floating Elements (Decorative) */}
                    <div className="absolute -top-10 -right-10 w-20 h-20 bg-blue-500/20 rounded-full blur-xl animate-bounce" style={{ animationDuration: '3s' }} />
                    <div className="absolute -bottom-10 -left-10 w-24 h-24 bg-pink-500/20 rounded-full blur-xl animate-bounce" style={{ animationDuration: '4s' }} />

                </motion.div>

            </div>
        </section>
    );
}
