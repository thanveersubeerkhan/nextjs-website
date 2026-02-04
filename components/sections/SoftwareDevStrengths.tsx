"use client";

import { motion } from 'framer-motion';
import { Brain, DollarSign, Clock, Headset } from 'lucide-react';

const strengths = [
    {
        title: "Expertise in Custom Software",
        description: "We specialize in building tailor-made software solutions that perfectly align with your unique business needs and industry requirements.",
        icon: Brain,
        color: "text-purple-600",
        bg: "bg-purple-100"
    },
    {
        title: "Affordable & Scalable Solutions",
        description: "We offer cost-effective software services with the flexibility to scale as your business grows.",
        icon: DollarSign,
        color: "text-green-600",
        bg: "bg-green-100"
    },
    {
        title: "Quick Delivery & Efficiency",
        description: "We follow smart development practices that help us deliver projects faster without compromising on quality or functionality.",
        icon: Clock,
        color: "text-blue-600",
        bg: "bg-blue-100"
    },
    {
        title: "Long-Term Support",
        description: "Our support doesn’t end with delivery. We provide reliable maintenance, updates, and technical help whenever you need it.",
        icon: Headset,
        color: "text-pink-600",
        bg: "bg-pink-100"
    }
];

export default function SoftwareDevStrengths() {
    return (
        <section className="py-20 bg-muted/10">
            <div className="container">
                <div className="grid lg:grid-cols-2 gap-16">
                    {/* Left Column: Title & Description */}
                    <div>
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            className="text-3xl md:text-5xl font-black text-foreground mb-6 uppercase tracking-tight"
                        >
                            Our Strengths
                        </motion.h2>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="prose prose-lg text-muted-foreground leading-relaxed"
                        >
                            <p>
                                At Slash Info Tech, our strength lies in our deep technical expertise, strong commitment to quality, and customer-first approach. With a highly skilled development team, transparent communication practices, and a focus on delivering scalable, secure, and cost-effective software solutions, we ensure every project meets the highest standards.
                            </p>
                            <p>
                                Our ability to deliver projects on time, adapt to evolving business needs, and provide continuous long-term support makes us a trusted technology partner for businesses looking to grow through innovation.
                            </p>
                        </motion.div>
                    </div>

                    {/* Right Column: Grid of Strengths */}
                    <div className="grid sm:grid-cols-2 gap-6">
                        {strengths.map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                                className="bg-background p-6 rounded-2xl shadow-sm border border-border flex flex-col items-center text-center hover:shadow-md transition-shadow"
                            >
                                <div className={`w-14 h-14 rounded-full ${item.bg} ${item.color} flex items-center justify-center mb-4`}>
                                    <item.icon size={28} />
                                </div>
                                <h3 className="text-lg font-bold text-foreground mb-3">{item.title}</h3>
                                <p className="text-sm text-muted-foreground leading-relaxed">
                                    {item.description}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
