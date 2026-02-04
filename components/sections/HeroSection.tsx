"use client";

import Button from '@/components/ui/Button';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';

export default function HeroSection() {
    return (
        <section className="relative overflow-hidden bg-background pt-32 pb-20 md:pt-48 md:pb-32 lg:pt-56 lg:pb-40 min-h-[95vh] flex items-center transition-colors duration-500">
            {/* Animated Gradient Background */}
            <div className="absolute inset-0 z-0">
                <div className="absolute top-0 -left-4 w-[500px] h-[500px] bg-primary/20 rounded-full mix-blend-multiply filter blur-[128px] opacity-70 animate-blob"></div>
                <div className="absolute top-0 -right-4 w-[500px] h-[500px] bg-[#4CC3F7]/20 rounded-full mix-blend-multiply filter blur-[128px] opacity-70 animate-blob animation-delay-2000"></div>
                <div className="absolute -bottom-8 left-20 w-[500px] h-[500px] bg-[#6B46FE]/20 rounded-full mix-blend-multiply filter blur-[128px] opacity-70 animate-blob animation-delay-4000"></div>
                {/* Grid Pattern Overlay */}
                <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150 grayscale"></div>
            </div>

            <div className="container relative z-10">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                    {/* Text Content */}
                    <div className="text-center lg:text-left">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary mb-8"
                        >
                            <span className="relative flex h-3 w-3">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-3 w-3 bg-primary"></span>
                            </span>
                            <span className="text-sm font-bold uppercase tracking-wider">Innovation First</span>
                        </motion.div>

                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                            className="text-5xl md:text-7xl lg:text-[5.5rem] font-black leading-[1.1] mb-6 tracking-tight text-foreground"
                        >
                            SLASH <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-[#4CC3F7]">
                                INFO TECH
                            </span>
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className="text-lg md:text-xl text-muted-foreground mb-10 max-w-xl mx-auto lg:mx-0 leading-relaxed font-medium"
                        >
                            We provide end-to-end IT solutions that help businesses streamline operations, enhance productivity, and achieve sustainable growth through technology-driven innovation.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.3 }}
                            className="flex flex-col sm:flex-row gap-5 justify-center lg:justify-start"
                        >
                            <Button size="lg" className="rounded-full px-8 h-12 md:h-14 text-base shadow-xl shadow-primary/25 hover:shadow-primary/40 transition-all hover:scale-105">
                                Get a Free Quote <ArrowRight className="ml-2 w-5 h-5" />
                            </Button>
                            <Button variant="outline" size="lg" className="rounded-full px-8 h-12 md:h-14 text-base border-2 hover:bg-muted transition-all">
                                View Our Work
                            </Button>
                        </motion.div>
                    </div>

                    {/* Hero Visual */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8 }}
                        className="relative"
                    >
                        {/* Glow Effect */}
                        <div className="absolute -inset-4 bg-gradient-to-r from-primary to-[#4CC3F7] rounded-full blur-3xl opacity-30 animate-pulse"></div>

                        {/* Main Image Container with Glassmorphism */}
                        <div className="relative border border-white/20 dark:border-white/10 bg-white/30 dark:bg-black/30 backdrop-blur-md rounded-[3rem] p-4 shadow-2xl">
                            <div className="rounded-[2.5rem] overflow-hidden relative aspect-square bg-gradient-to-br from-gray-100 to-gray-50 dark:from-gray-900 dark:to-gray-800">
                                {/* Placeholder for Hero Visual */}
                                <div className="absolute inset-0 flex items-center justify-center text-muted-foreground/30 font-black text-4xl uppercase tracking-widest bg-muted/20">
                                    Hero Visual
                                </div>
                            </div>

                            {/* Floating Badge */}
                            <motion.div
                                initial={{ y: 20, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ delay: 0.6 }}
                                className="absolute -bottom-6 -left-6 bg-background/90 backdrop-blur-xl border border-border/50 p-4 rounded-2xl shadow-xl max-w-[200px]"
                            >
                                <div className="flex items-center gap-2 mb-1">
                                    <div className="p-1.5 bg-green-500/10 rounded-full text-green-500">
                                        <Sparkles size={16} />
                                    </div>
                                    <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Top Rated</span>
                                </div>
                                <p className="text-sm font-bold leading-tight">Trusted by 100+ Businesses in Coimbatore</p>
                            </motion.div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
