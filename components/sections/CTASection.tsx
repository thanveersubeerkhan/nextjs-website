"use client";

import Button from '@/components/ui/Button';
import { motion } from 'framer-motion';

type CTASectionProps = {
    title?: string;
    description?: string;
    variant?: 'default' | 'dark' | 'gradient';
};

export default function CTASection({
    title = "Ready to Scale Your Business?",
    description = "At Slash Info Tech, we empower businesses across diverse industries through tailored digital solutions that drive innovation, efficiency, and measurable growth.",
    variant = 'default'
}: CTASectionProps) {

    const backgrounds = {
        default: 'bg-primary text-primary-foreground',
        dark: 'bg-neutral-900 dark:bg-black text-white border-t border-border',
        gradient: 'bg-gradient-to-r from-primary via-primary/90 to-primary/80 text-primary-foreground'
    };

    return (
        <section className={`py-32 md:py-40 transition-colors relative overflow-hidden bg-white`}>
            {/* Background elements for good UI */}
            <div className="absolute inset-0 bg-neutral-50/50" />

            <div className="container text-center relative z-10 px-4">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className="text-4xl md:text-7xl font-[1000] mb-8 max-w-5xl mx-auto tracking-tighter uppercase italic leading-[0.9] text-[#0A0B10]"
                >
                    {title}
                </motion.h2>
                <div className="w-24 h-2 bg-[#2872fa] mx-auto mb-10 rounded-full" />
                <p className="text-lg md:text-2xl text-gray-500 mb-12 max-w-3xl mx-auto leading-relaxed font-medium">
                    {description}
                </p>
                <div className="flex justify-center flex-col sm:flex-row gap-6">
                    <Button
                        variant="primary"
                        size="lg"
                        className="rounded-full px-12 py-8 text-xl font-black uppercase tracking-tighter shadow-[0_20px_40px_-10px_rgba(40,114,250,0.3)] hover:scale-105 transition-transform"
                    >
                        Let's Talk
                    </Button>
                    <Button
                        variant="outline"
                        size="lg"
                        className="rounded-full px-12 py-8 text-xl font-black uppercase tracking-tighter border-2 border-gray-200 hover:bg-gray-50 hover:border-gray-300 hover:scale-105 transition-transform"
                    >
                        Talk to Sales
                    </Button>
                </div>
            </div>
        </section>
    );
}
