"use client";

import { useState } from 'react';
import { PlusCircle, MinusCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const items = [
    {
        title: "Experienced Team",
        description: "A skilled group of designers, developers, and strategists passionate about digital innovation."
    },
    {
        title: "Tailored Solutions",
        description: "Every project is customized to meet your unique business goals and audience needs."
    },
    {
        title: "Quality & Performance",
        description: "We prioritize speed, security, and seamless functionality in every solution we deliver."
    },
    {
        title: "Transparent Process",
        description: "Clear communication and complete visibility at every stage of your project."
    },
    {
        title: "Local Expertise, Global Standards",
        description: "Based in Coimbatore, delivering world-class web solutions with local understanding."
    },
    {
        title: "Ongoing Support",
        description: "We stay with you even after launch — maintaining, upgrading, and ensuring continued growth."
    }
];

export default function AboutWhyChooseUs() {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    return (
        <section className="py-20 bg-background">
            <div className="container">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold text-foreground">Why Choose Us?</h2>
                </div>

                <div className="flex flex-col lg:flex-row items-start gap-12 lg:gap-16">
                    {/* Image Column */}
                    {/* Image Column */}
                    <div className="lg:w-1/2 w-full flex justify-center lg:justify-start">
                        <div className="relative rounded-3xl overflow-hidden max-w-md">
                            <img
                                src="https://ryanquantum.com/wp-content/uploads/2025/11/Untitled-design-3.gif"
                                alt="Why Choose Slash Info Tech"
                                className="w-full h-auto object-contain"
                            />
                        </div>
                    </div>

                    {/* Content Column */}
                    <div className="lg:w-1/2 w-full">
                        <div className="mb-8">
                            <p className="text-muted-foreground leading-relaxed">
                                At <strong className="text-foreground">Slash Info Tech</strong>, we believe that every business deserves a powerful digital presence that drives real results. Our approach combines creativity, innovation, and technical expertise to craft tailored solutions that help brands grow and stand out. From concept to completion, we focus on delivering excellence, reliability, and measurable value — ensuring your success is always our top priority.
                            </p>
                        </div>

                        <div className="space-y-4">
                            {items.map((item, index) => (
                                <div key={index} className="border-b border-border/50 pb-4">
                                    <button
                                        onClick={() => setOpenIndex(openIndex === index ? null : index)}
                                        className="w-full flex items-center justify-between py-2 text-left group"
                                    >
                                        <span className={`text-lg font-medium transition-colors ${openIndex === index ? 'text-primary' : 'text-foreground group-hover:text-primary'}`}>
                                            {item.title}
                                        </span>
                                        <span className="text-primary ml-4 shrink-0">
                                            {openIndex === index ? (
                                                <MinusCircle className="w-5 h-5" />
                                            ) : (
                                                <PlusCircle className="w-5 h-5" />
                                            )}
                                        </span>
                                    </button>

                                    <AnimatePresence>
                                        {openIndex === index && (
                                            <motion.div
                                                initial={{ height: 0, opacity: 0 }}
                                                animate={{ height: "auto", opacity: 1 }}
                                                exit={{ height: 0, opacity: 0 }}
                                                transition={{ duration: 0.3 }}
                                                className="overflow-hidden"
                                            >
                                                <p className="text-muted-foreground text-sm pt-2 pb-2 leading-relaxed">
                                                    {item.description}
                                                </p>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
