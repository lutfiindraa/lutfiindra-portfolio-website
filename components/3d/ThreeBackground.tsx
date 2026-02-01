"use client";

import { useRef, useState, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
// @ts-ignore
import * as random from "maath/random/dist/maath-random.esm";
import { useTheme } from "next-themes";

function StarField({ color, ...props }: any) {
    const ref = useRef<any>(null);
    const [sphere] = useState(() => random.inSphere(new Float32Array(6000), { radius: 1.5 }));

    // We can't easily access theme here without context, but since this is inside Canvas, 
    // we might need to pass theme prop or rely on CSS variables if supported by PointMaterial (it's not).
    // Let's just use a color that works on both or use a hook if this component is client-side.
    // It is "use client" so we can use useTheme (if we wrap it or if it's in provider)
    // However, canvas creates a separate context context sometimes.
    // Let's try to use a neutral color or check system.

    useFrame((state, delta) => {
        if (ref.current) {
            ref.current.rotation.x -= delta / 10;
            ref.current.rotation.y -= delta / 15;
        }
    });

    return (
        <group rotation={[0, 0, Math.PI / 4]}>
            <Points ref={ref} positions={sphere} stride={3} frustumCulled={false} {...props}>
                <PointMaterial
                    transparent
                    color={color}
                    size={0.002}
                    sizeAttenuation={true}
                    depthWrite={false}
                />
            </Points>
        </group>
    );
}

export function ThreeBackground() {
    const { theme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    // Default to light purple if not mounted yet (or check system pref logic, but safe default is fine)
    // Dark mode: #a29bfe (Light Purple)
    // Light mode: #5a4b81 (Darker Purple for contrast on white) or just Black/Grey
    const starColor = !mounted ? "#a29bfe" : theme === "light" ? "#4c1d95" : "#a29bfe";

    return (
        <div className="fixed inset-0 z-[-1] pointer-events-none">
            {/* 
               Container is transparent. 
               The body background from globals.css will handle the main color (white/black). 
            */}
            <Canvas camera={{ position: [0, 0, 1] }} gl={{ alpha: true }} style={{ background: 'transparent' }}>
                <StarField color={starColor} />
            </Canvas>
        </div>
    );
}
