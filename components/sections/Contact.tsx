"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { GlassCard } from "@/components/ui/GlassCard";
import { Button } from "@/components/ui/Button";
import { Mail, ArrowRight, Github, Linkedin, Instagram, Send } from "lucide-react";

export function ContactSection() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: ""
    });

    const handleSendEmail = (e: React.FormEvent) => {
        e.preventDefault();
        const subject = `Portfolio Contact from ${formData.name}`;
        const body = `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`;
        window.location.href = `mailto:lutfiindra958@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    };

    const socialLinks = [
        { icon: Github, href: "https://github.com/lutfiindraa", label: "GitHub", color: "text-white" },
        { icon: Linkedin, href: "https://www.linkedin.com/in/lutfi-indra-nur-praditya-598a67269", label: "LinkedIn", color: "text-blue-400" },
        { icon: Instagram, href: "https://instagram.com/fi.indra_", label: "Instagram", color: "text-pink-500" },
    ];

    return (
        <section id="contact" className="min-h-[80vh] flex items-center justify-center px-4 md:px-20 py-20">
            <div className="max-w-5xl w-full text-center">

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">Let's <span className="text-purple-400">Connect</span></h2>
                    <p className="text-gray-400 text-lg mb-12 max-w-2xl mx-auto">
                        Have a project in mind or just want to explore my world? I'm always open to discussing new projects, creative ideas or opportunities to be part of your visions.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">

                        {/* Socials Card - Optimized */}
                        <GlassCard className="flex flex-col justify-center items-center gap-6 py-10 h-full relative overflow-hidden group">
                            {/* Background Glow */}
                            <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/10 rounded-full blur-3xl -z-10 group-hover:bg-purple-500/20 transition-all duration-500" />

                            <div className="p-4 rounded-full bg-black/5 dark:bg-white/5 text-purple-600 dark:text-purple-400 mb-2 group-hover:scale-110 transition-transform duration-300">
                                <ArrowRight size={32} />
                            </div>

                            <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Connect With Me</h3>
                            <p className="text-gray-600 dark:text-gray-400 text-sm max-w-xs mx-auto">
                                Check out my latest code updates, professional journey, and daily life snapshots.
                            </p>

                            <div className="flex gap-4 mt-4 w-full justify-center">
                                {socialLinks.map((social) => (
                                    <a
                                        key={social.label}
                                        href={social.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="group/icon flex flex-col items-center gap-2 p-4 rounded-xl bg-black/5 dark:bg-white/5 hover:bg-black/10 dark:hover:bg-white/10 border border-black/5 dark:border-white/5 hover:border-black/20 dark:hover:border-white/20 transition-all duration-300 w-24"
                                    >
                                        <social.icon size={28} className={`${social.color} group-hover/icon:scale-110 transition-transform`} />
                                        <span className="text-xs text-gray-600 dark:text-gray-400 group-hover/icon:text-gray-900 dark:group-hover/icon:text-white transition-colors">{social.label}</span>
                                    </a>
                                ))}
                            </div>
                        </GlassCard>

                        {/* Message Form - Direct Email */}
                        <GlassCard className="p-8 md:p-10 h-full flex flex-col justify-center text-left">
                            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2 flex items-center gap-2">
                                <Mail className="text-purple-600 dark:text-purple-400" /> Send a Message
                            </h3>
                            <p className="text-gray-400 text-sm mb-6">
                                I'll receive your message directly to my email inbox.
                            </p>

                            <form onSubmit={handleSendEmail} className="space-y-4 flex-grow">
                                <div>
                                    <input
                                        required
                                        type="text"
                                        placeholder="Your Name"
                                        value={formData.name}
                                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                        className="w-full bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 rounded-lg px-4 py-3 text-gray-900 dark:text-white placeholder:text-gray-500 focus:outline-none focus:border-purple-500 focus:bg-black/10 dark:focus:bg-white/10 transition-colors"
                                    />
                                </div>
                                <div>
                                    <input
                                        required
                                        type="email"
                                        placeholder="Your Email"
                                        value={formData.email}
                                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                        className="w-full bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 rounded-lg px-4 py-3 text-gray-900 dark:text-white placeholder:text-gray-500 focus:outline-none focus:border-purple-500 focus:bg-black/10 dark:focus:bg-white/10 transition-colors"
                                    />
                                </div>
                                <div>
                                    <textarea
                                        required
                                        placeholder="Your Message"
                                        rows={4}
                                        value={formData.message}
                                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                        className="w-full bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 rounded-lg px-4 py-3 text-gray-900 dark:text-white placeholder:text-gray-500 focus:outline-none focus:border-purple-500 focus:bg-black/10 dark:focus:bg-white/10 transition-colors resize-none"
                                    ></textarea>
                                </div>
                                <Button type="submit" className="w-full gap-2" size="lg">
                                    <Send size={18} /> Send Message
                                </Button>
                            </form>
                        </GlassCard>

                    </div>

                </motion.div>

            </div>
        </section>
    );
}
