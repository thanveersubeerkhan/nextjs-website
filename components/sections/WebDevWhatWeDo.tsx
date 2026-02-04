"use client";

import { motion } from 'framer-motion';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { useState } from 'react';

const faqColumns = [
    [
        {
            title: "Custom Web Development",
            description: "Secure, fast, and responsive websites tailored to your business goals."
        },
        {
            title: "Mobile App Development",
            description: "Android, iOS, and cross-platform apps built for performance and user experience."
        },
        {
            title: "E-commerce Solutions",
            description: "Fully functional, conversion-focused online stores."
        }
    ],
    [
        {
            title: "Web Applications",
            description: "Scalable, cloud-ready applications built with modern frameworks."
        },
        {
            title: "UI/UX Integration",
            description: "Smooth, intuitive interfaces that enhance customer engagement."
        }
    ]
];

export default function WebDevWhatWeDo() {
    const [openIndex, setOpenIndex] = useState<{ col: number, idx: number } | null>(null);

    const toggle = (col: number, idx: number) => {
        if (openIndex?.col === col && openIndex?.idx === idx) {
            setOpenIndex(null);
        } else {
            setOpenIndex({ col, idx });
        }
    };

    return (
        <section className="py-20 bg-muted/10">
            <div className="container">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-black text-foreground uppercase tracking-tight">
                        What We Do
                    </h2>
                </div>

                <div className="grid md:grid-cols-2 gap-8 items-start">
                    {faqColumns.map((column, colIndex) => (
                        <div key={colIndex} className="space-y-4">
                            {column.map((item, idx) => (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, y: 10 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ delay: idx * 0.1 }}
                                    className="bg-card rounded-lg overflow-hidden border border-border"
                                >
                                    <button
                                        onClick={() => toggle(colIndex, idx)}
                                        className="w-full flex items-center justify-between p-6 text-left hover:bg-muted/50 transition-colors"
                                    >
                                        <h3 className="text-lg font-bold text-foreground">{item.title}</h3>
                                        <div className={`p-1 rounded-full bg-primary/10 text-primary transition-transform duration-300 ${openIndex?.col === colIndex && openIndex?.idx === idx ? 'rotate-180' : ''}`}>
                                            <ChevronDown size={20} />
                                        </div>
                                    </button>
                                    <div
                                        className={`overflow-hidden transition-all duration-300 ease-in-out ${openIndex?.col === colIndex && openIndex?.idx === idx ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'}`}
                                    >
                                        <div className="p-6 pt-0 text-muted-foreground border-t border-border/50">
                                            {item.description}
                                        </div>
                                    </div>
                                    {/* Default open state for demo purposes? Or maybe expand on hover? 
                                        Actually let's just make them expandable cards. 
                                        Or keep them looking like standard info cards if user prefers.
                                        The reference is an FAQ styleaccordion.
                                    */}
                                </motion.div>
                            ))}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
