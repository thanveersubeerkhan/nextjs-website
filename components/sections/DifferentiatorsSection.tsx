"use client";

import { motion } from 'framer-motion';

const differentiators = [
    {
        id: "01.",
        title: "Client-Centered Approach",
        description: "We listen, understand, and tailor every solution to match your unique business goals — your success is our true measure of achievement."
    },
    {
        id: "02.",
        title: "Innovation with Purpose",
        description: "Our team combines creativity and technology to build smart, scalable, and future-ready digital experiences that truly make an impact."
    },
    {
        id: "03.",
        title: "Quality Beyond Code",
        description: "Every project we deliver is backed by precision, transparency, and continuous support — ensuring long-term performance and trust."
    }
];

export default function DifferentiatorsSection() {
    return (
        <section className="section-padding bg-muted/50 relative overflow-hidden">
            <div className="container relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-black text-foreground mb-4 uppercase tracking-tight">
                        What <span className="text-primary">Makes Us</span> Different
                    </h2>
                    <div className="w-24 h-1 bg-primary mx-auto rounded-full"></div>
                </div>

                <div className="grid md:grid-cols-3 gap-8 relative">
                    {/* Connecting line for desktop */}
                    <div className="hidden md:block absolute top-12 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-primary/30 to-transparent -z-10"></div>

                    {differentiators.map((item, index) => (
                        <motion.div
                            key={item.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.2 }}
                            className="bg-background border border-border p-8 rounded-3xl shadow-lg hover:shadow-2xl hover:border-primary/30 transition-all duration-300 group"
                        >
                            <div className="mb-6">
                                <span className="text-6xl font-black text-primary/10 group-hover:text-primary/20 transition-colors select-none">
                                    {item.id}
                                </span>
                            </div>
                            <h3 className="text-xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors">
                                {item.title}
                            </h3>
                            <p className="text-muted-foreground leading-relaxed">
                                {item.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
