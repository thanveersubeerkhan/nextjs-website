"use client";

import { motion } from 'framer-motion';
import Button from '@/components/ui/Button';
import Link from 'next/link';

export default function WebDevOverview() {
    return (
        <section className="py-20 bg-background">
            <div className="container">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Text Content */}
                    <div className="order-2">
                        <motion.h3
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            className="text-2xl font-bold text-muted-foreground mb-2"
                        >
                            Your Vision, Our Technology
                        </motion.h3>
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="text-4xl md:text-5xl font-black text-foreground mb-6 uppercase tracking-tight"
                        >
                            Web & Mobile Development
                        </motion.h2>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="text-lg text-muted-foreground mb-8 leading-relaxed space-y-4"
                        >
                            <p>
                                At Slash Info Tech, we build powerful, scalable, and user-friendly digital solutions designed to elevate your business. Our web and mobile development services combine intuitive design, robust functionality, and the latest technologies to deliver high-performance applications that work seamlessly across all devices.
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 }}
                        >
                            <Link href="/contact">
                                <Button size="lg" className="rounded-full px-8 text-base">
                                    Contact Us
                                </Button>
                            </Link>
                        </motion.div>
                    </div>

                    {/* Image */}
                    <div className="order-1">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5 }}
                            className="relative"
                        >
                            <div className="w-full aspect-[4/3] bg-muted/50 rounded-3xl flex items-center justify-center border-2 border-dashed border-muted-foreground/20">
                                <span className="text-muted-foreground font-medium">Image Placeholder</span>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
}
