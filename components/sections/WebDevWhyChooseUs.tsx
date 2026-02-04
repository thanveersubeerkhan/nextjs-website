"use client";

import { motion } from 'framer-motion';
import { Star, User, Clock } from 'lucide-react';

const items = [
    {
        title: "Expertise That Ensures Excellence",
        description: "Our experienced team delivers secure, scalable, high-quality web and mobile solutions built for long-term performance.",
        icon: Star,
        color: "#e8fbe8",
        borderColor: "#2f6f3f"
    },
    {
        title: "User-Focused Development Approach",
        description: "We combine user-friendly UI/UX with powerful engineering to create intuitive digital experiences customers love.",
        icon: User,
        color: "#e8fbe8",
        borderColor: "#2f6f3f"
    },
    {
        title: "Transparent, Reliable & On-Time Delivery",
        description: "We follow structured workflows, provide weekly updates, and ensure every milestone is delivered on time.",
        icon: Clock,
        color: "#e8fbe8",
        borderColor: "#2f6f3f"
    }
];

export default function WebDevWhyChooseUs() {
    return (
        <section className="py-20 bg-background">
            <div className="container">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-5xl font-black text-foreground uppercase tracking-tight mb-4">
                        Why Choose Us
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {items.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            className="bg-card w-full p-8 rounded-xl shadow-[0_4px_14px_rgba(0,0,0,0.08)] border-t-[6px] flex flex-col md:flex-row items-start gap-4 hover:-translate-y-2 transition-transform duration-300"
                            style={{ borderColor: item.color }}
                        >
                            <div
                                className="w-14 h-14 min-w-[56px] min-h-[56px] rounded-xl flex items-center justify-center text-2xl"
                                style={{ backgroundColor: item.color }}
                            >
                                <item.icon className="w-8 h-8 text-[#2f6f3f]" />
                            </div>
                            <div className="text-left">
                                <h3 className="text-lg font-bold text-[#2f6f3f] mb-2">{item.title}</h3>
                                <p className="text-muted-foreground text-sm leading-relaxed">
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
