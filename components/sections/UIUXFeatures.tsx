"use client";

import { motion } from 'framer-motion';

type FeatureItem = {
    title: string;
    description: string;
    icon: string;
};

type UIUXFeaturesProps = {
    items: FeatureItem[];
};

export default function UIUXFeatures({ items }: UIUXFeaturesProps) {
    const renderIcon = (icon: string) => {
        if (icon === 'fas fa-user-check') return <i className="fas fa-user-check text-3xl" />;
        if (icon === 'wireframe') return (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-10 h-10 fill-current">
                <path d="M71.68,0v143.36h163.84V0H71.68z M219.52,127.36H87.68V16h131.84V127.36z M276.48,0v143.36h163.84V0H276.48z M424.32,127.36H292.48V16h131.84V127.36z M71.68,184.32v143.36h368.64V184.32H71.68z M424.32,311.68H87.68V200.32h336.64V311.68z M71.68,368.64V512h368.64V368.64H71.68z M424.32,496H87.68V384.64h336.64V496z" />
            </svg>
        );
        if (icon === 'design') return (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 511 511" className="w-10 h-10 fill-current">
                <path d="M39.5,103c1.97,0,3.91-0.8,5.3-2.2c1.4-1.39,2.2-3.33,2.2-5.3s-0.8-3.91-2.2-5.3c-1.39-1.4-3.32-2.2-5.3-2.2 s-3.91,0.8-5.3,2.2c-1.4,1.39-2.2,3.33-2.2,5.3s0.8,3.91,2.2,5.3C35.59,102.2,37.53,103,39.5,103z M63.5,103c1.98,0,3.91-0.8,5.3-2.2c1.4-1.39,2.2-3.33,2.2-5.3s-0.8-3.91-2.2-5.3c-1.39-1.4-3.33-2.2-5.3-2.2 c-1.97,0-3.91,0.8-5.3,2.2c-1.4,1.39-2.2,3.33-2.2,5.3s0.8,3.91,2.2,5.3C59.59,102.2,61.53,103,63.5,103z M87.5,103c1.97,0,3.91-0.8,5.3-2.2c1.4-1.39,2.2-3.33,2.2-5.3s-0.8-3.91-2.2-5.3c-1.39-1.4-3.33-2.2-5.3-2.2 c-1.97,0-3.91,0.8-5.3,2.2c-1.4,1.39-2.2,3.33-2.2,5.3s0.8,3.91,2.2,5.3C83.59,102.2,85.53,103,87.5,103z M119.5,103h304c4.142,0,7.5-3.358,7.5-7.5s-3.358-7.5-7.5-7.5h-304c-4.142,0-7.5,3.358-7.5,7.5" />
                <path d="M455.5,103h16c4.142,0,7.5-3.358,7.5-7.5s-3.358-7.5-7.5-7.5h-16c-4.142,0-7.5,3.358-7.5,7.5 M439.5,168h-144c-12.958,0-23.5,10.542-23.5,23.5v0.5h-8.5c-12.958,0-23.5,10.542-23.5,23.5V280h-17v-24.5 c0-12.958-10.542-23.5-23.5-23.5h-128C58.542,232,48,242.542,48,255.5v64c0,12.958,10.542,23.5,23.5,23.5h128 c12.958,0,23.5-10.542,23.5-23.5V295h17v64.5c0,12.958,10.542,23.5,23.5,23.5h8.5v0.5c0,12.958,10.542,23.5,23.5,23.5h144 c12.958,0,23.5-10.542,23.5-23.5v-16c0-12.958-10.542-23.5-23.5-23.5h-144c-12.958,0-23.5,10.542-23.5,23.5v0.5h-8.5 c-4.687,0-8.5-3.813-8.5-8.5V295h17v0.5c0,12.958,10.542,23.5,23.5,23.5h144c12.958,0,23.5-10.542,23.5-23.5v-16 c0-12.958-10.542-23.5-23.5-23.5h-144c-12.958,0-23.5,10.542-23.5,23.5v0.5h-17v-64.5c0-4.687,3.813-8.5,8.5-8.5h8.5v0.5 c0,12.958,10.542,23.5,23.5,23.5h144c12.958,0,23.5-10.542,23.5-23.5" />
            </svg>
        );
        return null;
    };

    return (
        <section className="py-20 bg-background relative overflow-hidden">
            <div className="container relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {items.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="p-10 bg-white shadow-[0_20px_50px_rgba(0,0,0,0.05)] border border-border/50 rounded-[2.5rem] text-center hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 group"
                        >
                            <div className="w-20 h-20 bg-primary/5 rounded-2xl flex items-center justify-center text-primary mx-auto mb-8 group-hover:bg-primary group-hover:text-white transition-colors duration-500">
                                {renderIcon(item.icon)}
                            </div>
                            <h3 className="text-2xl font-black mb-4 uppercase tracking-tight text-foreground">
                                {item.title}
                            </h3>
                            <p className="text-muted-foreground leading-relaxed font-medium">
                                {item.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
