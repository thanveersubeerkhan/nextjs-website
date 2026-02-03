'use client';

import { useEffect, useRef } from 'react';
import { useInView, useMotionValue, useSpring } from 'framer-motion';

export default function StatCard({ value, label, suffix }: { value: number, label: string, suffix: string }) {
    const ref = useRef<HTMLDivElement>(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    const motionValue = useMotionValue(0);
    const springValue = useSpring(motionValue, {
        stiffness: 50,
        damping: 20,
        duration: 2000
    });

    useEffect(() => {
        if (isInView) {
            motionValue.set(value);
        }
    }, [isInView, value, motionValue]);

    useEffect(() => {
        springValue.on("change", (latest) => {
            if (ref.current) {
                // Determine if we should show decimals based on the input value
                // For integers like 200, 150, 50, we want 0 decimals.
                const formatted = latest.toFixed(0);
                // We'll update the text content directly for performance
                // But since we have a suffix, we need to handle that. 
                // Using a span for the number specifically would be better but the current structure has it mixed.
                // Let's rely on React state update or just simpler text content manipulation if possible.
                // Actually, standard react render is fine for this scale.
            }
        });
    }, [springValue]);

    // To avoid too many re-renders, we can use a separate component for the number
    // or just accept the re-renders. Given it's 3 cards, it's fine.
    // However, useSpring returns a motion value. We can't render it directly inside a standard div easily with suffix without splitting.

    return (
        <div className="text-center p-6 transition-all duration-300 hover:scale-110" ref={ref}>
            <div className="text-4xl md:text-5xl font-black text-primary mb-2 transition-colors drop-shadow-sm flex justify-center items-center">
                <NumberDisplay value={value} />
                <span>{suffix}</span>
            </div>
            <div className="text-muted-foreground font-bold uppercase tracking-widest text-[10px] md:text-xs transition-colors">{label}</div>
        </div>
    );
}

function NumberDisplay({ value }: { value: number }) {
    const ref = useRef<HTMLSpanElement>(null);
    const isInView = useInView(ref, { once: true, margin: "-50px" });
    const motionValue = useMotionValue(0);
    const springValue = useSpring(motionValue, {
        stiffness: 30,
        damping: 15,
        mass: 1, // default
        // duration doesn't work with spring directly like tween, but stiffness/damping control it
    });

    useEffect(() => {
        if (isInView) {
            motionValue.set(value);
        }
    }, [isInView, value, motionValue]);

    useEffect(() => {
        return springValue.on("change", (latest) => {
            if (ref.current) {
                ref.current.textContent = Math.floor(latest).toLocaleString();
            }
        });
    }, [springValue]);

    return <span ref={ref}>0</span>;
}
