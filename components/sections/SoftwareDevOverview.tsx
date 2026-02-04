"use client";

import { motion } from 'framer-motion';
import Button from '@/components/ui/Button';
import Link from 'next/link';

export default function SoftwareDevOverview() {
    return (
        <section className="py-20 bg-muted/20">
            <div className="container">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Image Placeholder Left */}
                    <div className="order-1">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5 }}
                            className="relative"
                        >
                            <img
                                src="https://ryanquantum.com/wp-content/uploads/2025/11/Untitled-design-1.png"
                                alt="Software Development Team"
                                className="w-full h-auto rounded-3xl shadow-lg hover:scale-[1.02] transition-transform duration-500"
                            />
                        </motion.div>
                    </div>

                    {/* Text Right */}
                    <div className="order-2">
                        <motion.h4
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            className="text-primary font-bold uppercase tracking-wide mb-2"
                        >
                            Leading Software Developers
                        </motion.h4>
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="text-3xl md:text-5xl font-black text-foreground mb-6 uppercase tracking-tight"
                        >
                            Top Software Development Company in Coimbatore
                        </motion.h2>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="text-lg text-muted-foreground mb-8 leading-relaxed space-y-4"
                        >
                            <p>
                                Slash Info Tech stands as a trusted and innovative software development company in Coimbatore, delivering next-generation software solutions for businesses of all sizes. As expert custom software developers, we provide a wide range of tailored products — including billing software, enterprise applications, and end-to-end business solutions — designed to streamline your operations and accelerate growth.
                            </p>
                            <p>
                                Our software development team in Coimbatore ensures robust, secure, and user-centric solutions that perfectly align with your unique business goals — both locally and globally.
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 }}
                        >
                            <Link href="/about">
                                <Button size="lg" variant="outline" className="rounded-full px-8 text-base border-2">
                                    Know more about us
                                </Button>
                            </Link>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
}
