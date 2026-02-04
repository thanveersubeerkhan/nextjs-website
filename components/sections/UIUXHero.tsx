"use client";

import { motion } from 'framer-motion';
import { Search, PenTool, Layout, Users, Lightbulb, Zap, Rocket, Layers, Smartphone, MousePointer, BarChart, Target, Monitor, Share2, Box, Image as ImageIcon, Briefcase, RefreshCw } from 'lucide-react';

type FeatureItem = {
    title: string;
    description: string;
    icon: any;
};

type UIUXHeroProps = {
    title: string;
    subtitle: string;
    image: string;
    features: FeatureItem[];
};

export default function UIUXHero({ title, subtitle, image, features }: UIUXHeroProps) {
    return (
        <section className="relative pt-32 pb-24 overflow-visible">
            {/* Abstract Background Image */}
            <div className="absolute top-0 left-0 right-0 h-[85%] z-0 rounded-b-[1rem] overflow-hidden">
                <img
                    src="https://images.unsplash.com/photo-1550684848-fac1c5b4e853?q=80&w=2070&auto=format&fit=crop"
                    className="w-full h-full object-cover opacity-60 mix-blend-overlay"
                    alt="Abstract Texture Background"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-[#0A0B10]/95 via-[#0A0B10]/80 to-[#0A0B10]/40"></div>
                <div className="absolute inset-0 bg-[#0A0B10] -z-10"></div>
            </div>

            <div className="container relative z-10 px-4">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
                    {/* Left Content */}
                    <div className="text-left">
                        <motion.span
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            className="inline-block text-white/80 font-bold tracking-[0.2em] mb-4 uppercase text-sm bg-white/10 px-4 py-2 rounded-full border border-white/10 backdrop-blur-md"
                        >
                            # Let's Grow Your Hand
                        </motion.span>

                        <motion.h1
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            className="text-4xl md:text-6xl lg:text-7xl font-black text-white capitalize tracking-tight leading-[1.1] mb-6"
                        >
                            {title}
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.4 }}
                            className="text-lg md:text-xl text-gray-200 font-medium leading-relaxed max-w-xl mb-8"
                        >
                            Let's Design Something Extraordinary Together
                        </motion.p>
                    </div>

                    {/* Right Image */}
                    <div className="flex justify-center lg:justify-end">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.6 }}
                            className="relative flex-shrink-0"
                        >
                            <div className="relative z-10 bg-white p-4 rounded-3xl shadow-2xl rotate-3 hover:rotate-0 transition-transform duration-500">
                                <img
                                    src={image}
                                    alt="UI Illustration"
                                    className="w-full max-w-md h-auto rounded-xl"
                                />
                            </div>
                            {/* Decorative Elements */}
                            <div className="absolute -top-12 -right-12 w-32 h-32 bg-cyan-500/30 rounded-full blur-3xl"></div>
                            <div className="absolute -bottom-12 -left-12 w-32 h-32 bg-purple-500/30 rounded-full blur-3xl"></div>
                        </motion.div>
                    </div>
                </div>

                {/* Integrated Red Feature Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-7xl mx-auto">
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.8 + (index * 0.1) }}
                            className="bg-[#E74C3C] p-8 rounded-2xl text-white text-center hover:bg-[#D64535] transition-all duration-300 group relative overflow-hidden shadow-lg border border-white/10"
                        >
                            {/* Background Image Overlay */}
                            <div className="absolute inset-0 opacity-10 mix-blend-overlay">
                                <img
                                    src="https://images.unsplash.com/photo-1557683316-973673baf926?auto=format&fit=crop&q=80"
                                    className="w-full h-full object-cover grayscale"
                                    alt="Overlay"
                                />
                            </div>

                            <div className="relative z-10">
                                <div className="w-16 h-16 mx-auto mb-6 flex items-center justify-center bg-white/10 rounded-full backdrop-blur-sm border border-white/20 group-hover:scale-110 transition-transform">
                                    {(() => {
                                        if (typeof feature.icon === 'string') {
                                            const iconMap: { [key: string]: any } = {
                                                search: Search,
                                                layout: Layout,
                                                pen: PenTool,
                                                monitor: Monitor
                                            };
                                            const Icon = iconMap[feature.icon];
                                            if (Icon) return <Icon className="w-8 h-8 text-white stroke-[2.5]" />;
                                            return <i className={`${feature.icon} text-3xl text-white`} />;
                                        }
                                        const Icon = feature.icon;
                                        return <Icon className="w-8 h-8 text-white stroke-[2.5]" />;
                                    })()}
                                </div>
                                <h3 className="text-xl font-black mb-3 uppercase tracking-tight">
                                    {feature.title}
                                </h3>
                                <p className="text-white/90 text-sm leading-relaxed font-medium">
                                    {feature.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
