"use client";

import { UserCheck, Palette, MapPin, TrendingUp } from 'lucide-react';
import { motion } from 'framer-motion';

const defaultItems = [
    {
        title: "Client-Centric Approach",
        description: "Every solution is customized to your business goals.",
        icon: UserCheck
    },
    {
        title: "Creative Excellence",
        description: "Designs that captivate and convert.",
        icon: Palette
    },
    {
        title: "Local Expertise",
        description: "Based in Coimbatore, we understand your market and deliver globally competitive results.",
        icon: MapPin
    },
    {
        title: "Proven Track Record",
        description: "Trusted by businesses for quality, transparency, and timely delivery.",
        icon: TrendingUp
    }
];

type WhyChooseUsItem = {
    title: string;
    description: string;
    icon?: any;
    // For compatibility with incoming data structure if needed
    backTitle?: string;
    backDescription?: string;
};

type ServiceWhyChooseUsProps = {
    title?: string;
    items?: WhyChooseUsItem[];
};

export default function ServiceWhyChooseUs({
    title = "Why Choose Slash Info Tech?",
    items = defaultItems
}: ServiceWhyChooseUsProps) {
    // If items passed don't have icons, map them to defaults or generic icon if needed
    // For now assuming incoming data might vary, but we prioritizing the new design structure.

    // Ensure items have icons for this design, if not, fallback or use default sequence
    const displayItems = items.map((item, i) => ({
        ...item,
        icon: item.icon || defaultItems[i % defaultItems.length].icon
    }));
    return (
        <section className="py-20 bg-background overflow-hidden">
            <div className="container">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                    {/* Image Column */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="relative flex justify-center lg:justify-start"
                    >
                        <div className="rounded-3xl overflow-hidden relative z-10 w-full max-w-md">
                            <img
                                src="https://ryanquantum.com/wp-content/uploads/2025/11/Untitled-design-4.gif"
                                alt="Our Services"
                                className="w-full h-auto object-contain"
                            />
                        </div>
                    </motion.div>

                    {/* Content Column */}
                    <div className="space-y-8">
                        <div className="space-y-4">
                            <motion.h2
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="text-3xl md:text-4xl font-bold text-foreground"
                            >
                                {title}
                            </motion.h2>
                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.1 }}
                                className="text-muted-foreground text-lg leading-relaxed"
                            >
                                We don’t just build websites — we build digital partnerships.
                            </motion.p>
                        </div>

                        <div className="space-y-6">
                            {displayItems.map((item, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.2 + (index * 0.1) }}
                                    className="flex items-start gap-4 group"
                                >
                                    <div className="shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary mt-1 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                                        <item.icon className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">{item.title}</h3>
                                        <p className="text-muted-foreground leading-relaxed">
                                            {item.description}
                                        </p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
