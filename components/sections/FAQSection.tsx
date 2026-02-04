"use client";

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Search } from 'lucide-react';

type FAQItem = {
    question: string;
    answer: string;
};

type FAQProps = {
    title?: string;
    items: FAQItem[];
};

export default function FAQSection({ title = "Frequently Asked Questions", items }: FAQProps) {
    const [searchTerm, setSearchTerm] = useState('');
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const filteredItems = items.filter(item =>
        item.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.answer.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <section className="section-padding bg-background relative overflow-hidden transition-colors duration-500">
            <div className="container relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-black text-foreground mb-8 uppercase tracking-tight">
                        {title}
                    </h2>

                    {/* Search Bar */}
                    <div className="relative max-w-2xl mx-auto group">
                        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                            <Search className="h-5 w-5 text-muted-foreground group-focus-within:text-primary transition-colors" />
                        </div>
                        <input
                            type="text"
                            placeholder="Search FAQs (type keyword — e.g., SEO, PPC, YouTube)"
                            className="block w-full pl-12 pr-4 py-4 bg-muted/20 border border-border rounded-2xl text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all shadow-sm"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                    </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
                    {filteredItems.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: index * 0.05 }}
                            className="bg-card border border-border rounded-3xl overflow-hidden hover:border-primary/30 transition-all duration-300 shadow-sm hover:shadow-xl"
                        >
                            <button
                                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                                className="w-full px-8 py-6 text-left flex items-center justify-between gap-4 group"
                            >
                                <span className="font-bold text-foreground group-hover:text-primary transition-colors pr-4 leading-tight">
                                    {item.question}
                                </span>
                                <div className={`flex-shrink-0 w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center text-primary transition-transform duration-300 ${openIndex === index ? 'rotate-180 bg-primary text-white' : ''}`}>
                                    <ChevronDown className="h-4 w-4" />
                                </div>
                            </button>
                            <AnimatePresence>
                                {openIndex === index && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: 'auto', opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        <div className="px-8 pb-8 text-muted-foreground text-sm leading-relaxed border-t border-border/50 pt-4 bg-muted/5">
                                            {item.answer}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.div>
                    ))}
                </div>

                {filteredItems.length === 0 && (
                    <div className="text-center py-12 text-muted-foreground italic">
                        No results found for "{searchTerm}"
                    </div>
                )}
            </div>
        </section>
    );
}
