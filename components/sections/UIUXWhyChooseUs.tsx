"use client";

import { motion } from 'framer-motion';
import { MousePointer, BarChart2, Zap, Monitor, Rocket, Layers } from 'lucide-react';

type WhyChooseItem = {
    title: string;
    description: string;
};

type UIUXWhyChooseUsProps = {
    title: string;
    items: WhyChooseItem[];
};

export default function UIUXWhyChooseUs({ title, items }: UIUXWhyChooseUsProps) {
    const icons = [
        <MousePointer key="1" className="w-6 h-6 text-blue-500" />,
        <BarChart2 key="2" className="w-6 h-6 text-pink-500" />,
        <Zap key="3" className="w-6 h-6 text-orange-500" />,
        <Monitor key="4" className="w-6 h-6 text-green-500" />,
        <Rocket key="5" className="w-6 h-6 text-purple-500" />,
        <Layers key="6" className="w-6 h-6 text-red-500" />
    ];

    const displayItems = items && items.length > 0 ? items : [
        { title: "User-First Approach", description: "We solve real user problems with research-driven design strategies." },
        { title: "Clean, Modern & Trend-Ready", description: "From minimal to bold, we design for the future." },
        { title: "Pixel-Perfect Visuals", description: "We deliver premium and aesthetic designs that stand out." },
        { title: "Cross-Platform Consistency", description: "Mobile, tablet, or desktop—your design looks perfect everywhere." },
        { title: "Faster Conversions", description: "Better experience → more engagement → more sales." },
        { title: "Design System & Style Guide", description: "We deliver a complete design system with typography, color palettes, components." }
    ];

    return (
        <section className="py-24 bg-white relative overflow-hidden">
            {/* Background Accents */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-blue-50/50 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />

            <div className="container relative z-10">
                <div className="text-center mb-20">
                    <motion.h4
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        className="text-primary font-black uppercase tracking-[0.2em] mb-4 text-sm"
                    >
                        # Why Partner With Us
                    </motion.h4>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="text-3xl md:text-5xl font-black text-[#0A0B10] uppercase tracking-tighter"
                    >
                        {title}
                    </motion.h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-12 max-w-7xl mx-auto px-4">
                    {displayItems.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="flex gap-6 items-start p-6 rounded-2xl hover:bg-gray-50 transition-colors duration-300 group"
                        >
                            <div className="w-14 h-14 flex-shrink-0 flex items-center justify-center bg-white rounded-xl shadow-lg shadow-gray-200/50 group-hover:scale-110 transition-transform duration-300 border border-gray-100">
                                {icons[index % icons.length]}
                            </div>
                            <div className="text-left pt-1">
                                <h3 className="text-lg font-black text-[#0A0B10] mb-2 uppercase tracking-tight group-hover:text-primary transition-colors">
                                    {item.title}
                                </h3>
                                <p className="text-gray-500 text-sm leading-relaxed font-medium">
                                    {item.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
