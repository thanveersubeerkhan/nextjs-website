"use client";

import { motion } from 'framer-motion';
import { Monitor, Layout, Palette, Layers, Settings, Smartphone } from 'lucide-react';

type ServiceItem = {
    title: string;
    description: string;
    icon: string;
    bgColor: string;
};

type UIUXServicesGridProps = {
    title: string;
    items: ServiceItem[];
};

export default function UIUXServicesGrid({ title, items }: UIUXServicesGridProps) {
    const renderSVG = (icon: string) => {
        const iconClass = "w-10 h-10 text-white stroke-[2.5]";
        switch (icon) {
            case 'ui':
                return <Monitor className={iconClass} />;
            case 'ux':
                return <Layout className={iconClass} />;
            case 'graphic':
                return <Palette className={iconClass} />;
            case 'wireframes':
                return <Layers className={iconClass} />;
            case 'system':
                return <Settings className={iconClass} />;
            case 'responsive':
                return <Smartphone className={iconClass} />;
            default:
                return null;
        }
    };

    const deepSeekServices = [
        {
            title: "UI Design",
            description: "Clean, modern and responsive user interface design tailored for your brand.",
            bgColor: "bg-[#8E44AD]", // Purple
            icon: "ui"
        },
        {
            title: "UX Design",
            description: "Smart user flows, easy navigation and conversion-focused experience mapping.",
            bgColor: "bg-[#2ECC71]", // Green
            icon: "ux"
        },
        {
            title: "Graphic Design",
            description: "Brand visuals, icons, banner graphics and illustrations to enhance your UI.",
            bgColor: "bg-[#E67E22]", // Orange
            icon: "graphic"
        },
        {
            title: "Wireframes",
            description: "Clickable prototypes and wireframes for better clarity before development.",
            bgColor: "bg-[#1ABC9C]", // Teal/Cyan
            icon: "wireframes"
        },
        {
            title: "Design System",
            description: "Color palettes, style guides, components and full design documentation.",
            bgColor: "bg-[#E74C3C]", // Red
            icon: "system"
        },
        {
            title: "Responsive Layout",
            description: "Optimized for all devices like mobile, tablet and desktop. Optimized for Speed & Usability",
            bgColor: "bg-[#FD79A8]", // Pink
            icon: "responsive"
        }
    ];

    return (
        <section className="py-24 bg-white overflow-hidden">
            <div className="container relative z-10">
                <div className="text-center mb-16">
                    <motion.h4
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        className="text-primary font-black uppercase tracking-[0.2em] mb-4 text-sm"
                    >
                        # Let's Design Something Together
                    </motion.h4>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="text-3xl md:text-5xl font-black text-[#0A0B10] uppercase tracking-tighter"
                    >
                        We Design Beautiful & User-Friendly Digital Experiences
                    </motion.h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 shadow-2xl rounded-3xl overflow-hidden">
                    {deepSeekServices.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className={`${item.bgColor} p-12 text-white h-[400px] flex flex-col items-center justify-center text-center hover:scale-[1.02] transition-transform duration-500 cursor-default relative group border-r border-b border-white/10`}
                        >
                            <div className="mb-8 transform group-hover:scale-110 transition-transform duration-500">
                                {renderSVG(item.icon)}
                            </div>
                            <h3 className="text-2xl font-black uppercase tracking-tight mb-4">
                                {item.title}
                            </h3>
                            <p className="text-white/90 text-sm leading-relaxed font-medium max-w-xs">
                                {item.description}
                            </p>

                            <div className="absolute top-4 right-4 text-white/10 text-6xl font-black select-none group-hover:text-white/20 transition-colors">
                                0{index + 1}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
