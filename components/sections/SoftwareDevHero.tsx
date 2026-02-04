"use client";

import { motion } from 'framer-motion';
import Button from '@/components/ui/Button';
import Link from 'next/link';

export default function SoftwareDevHero() {
    return (
        <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden bg-background">
            <div className="container relative z-10">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <div>
                        <motion.h4
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-sm md:text-base font-black uppercase tracking-wider text-muted-foreground mb-4"
                        >
                            Play. explore. learn.
                        </motion.h4>
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="text-4xl md:text-6xl font-black text-foreground mb-6 leading-tight uppercase"
                        >
                            Software <br />
                            <span className="text-primary">Development</span>
                        </motion.h1>
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="text-xl md:text-2xl font-bold text-foreground mb-6"
                        >
                            Empowering Your Business with Smart, Scalable Software Solutions
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 }}
                            className="text-lg text-muted-foreground mb-8 max-w-lg"
                        >
                            At Slash Info Tech, Coimbatore — we design and develop powerful software systems that drive business efficiency and innovation.
                        </motion.p>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4 }}
                            className="flex flex-col sm:flex-row gap-4 items-start sm:items-center"
                        >
                            <Link href="/contact">
                                <Button size="lg" className="rounded-full px-8 text-base shadow-xl shadow-primary/20">
                                    Get a Free Consultation
                                </Button>
                            </Link>

                            <div className="flex items-center gap-3 bg-card px-4 py-2 rounded-full border border-border shadow-sm">
                                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" /></svg>
                                </div>
                                <div>
                                    <span className="block text-xs font-semibold text-muted-foreground">Call Us</span>
                                    <a href="tel:+919677704785" className="text-sm font-bold hover:text-primary transition-colors">+91 96777 04785</a>
                                </div>
                            </div>
                        </motion.div>
                    </div>

                    <div className="relative">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8 }}
                            className="relative z-10"
                        >
                            <img
                                src="https://ryanquantum.com/wp-content/uploads/2025/11/pexels-vladbagacian-3987066-scaled.jpg"
                                alt="Software Development"
                                className="w-full h-auto rounded-3xl shadow-2xl"
                            />
                        </motion.div>

                        {/* Floating GIF */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.6, duration: 0.8 }}
                            className="absolute -bottom-12 -left-12 z-20 w-40 md:w-64 hidden md:block"
                        >
                            <img
                                src="https://ryanquantum.com/wp-content/uploads/2025/11/software-1-unscreen.gif"
                                alt="Analysis"
                                className="w-full h-auto"
                            />
                        </motion.div>
                    </div>
                </div>
            </div>

            {/* Background elements */}
            <div className="absolute top-0 right-0 -z-10 w-1/3 h-full bg-primary/5 blur-[120px] rounded-full" />
            <div className="absolute bottom-0 left-0 -z-10 w-1/3 h-full bg-blue-500/5 blur-[120px] rounded-full" />
        </section>
    );
}
