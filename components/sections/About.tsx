"use client";

import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, TorusKnot, Float } from "@react-three/drei";

function RotatingShape() {
    return (
        <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
            <TorusKnot args={[1, 0.3, 100, 16]} scale={1.2}>
                <meshNormalMaterial wireframe={true} />
            </TorusKnot>
        </Float>
    );
}

export function AboutSection() {
    return (
        <section id="about" className="min-h-screen flex items-center justify-center px-4 md:px-20 py-20">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center w-full max-w-7xl">

                {/* Left Side: 3D Object */}
                <motion.div
                    className="h-[400px] w-full flex items-center justify-center"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    <div className="relative w-full h-[300px] md:h-[500px] flex items-center justify-center">
                        <Canvas className="w-full h-full">
                            <ambientLight intensity={0.5} />
                            <directionalLight position={[2, 2, 5]} />
                            <RotatingShape />
                            <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={2} />
                        </Canvas>
                    </div>
                </motion.div>

                {/* Right Side: Content */}
                <motion.div
                    className="space-y-6"
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">
                        Hello, I'm <span className="text-purple-400">Lutfi Indra</span>
                    </h2>

                    <div className="relative p-6 bg-white/5 rounded-2xl border border-white/10 glass-card">
                        <p className="text-gray-300 italic text-lg">
                            "Technology is best when it brings people together."
                        </p>
                    </div>

                    <p className="text-gray-400 text-lg leading-relaxed">
                        I am an Informatics Student with a deep passion for Data Scientist, Analyst, and Mobile Development.
                        I enjoy solving complex problems and creating intuitive, user-friendly applications that make a difference.
                        With a strong foundation in modern technologies, I am always eager to learn and innovate.
                    </p>

                    <div className="flex gap-4 pt-4">
                        <Button variant="secondary" size="lg">
                            Download CV
                        </Button>
                        <Button variant="outline" size="lg" className="text-gray-900 dark:text-white border-gray-900 dark:border-white hover:bg-gray-100 dark:hover:bg-white/10" onClick={() => document.getElementById('projects')?.scrollIntoView()}>
                            View Projects
                        </Button>
                    </div>
                </motion.div>

            </div>
        </section>
    );
}
