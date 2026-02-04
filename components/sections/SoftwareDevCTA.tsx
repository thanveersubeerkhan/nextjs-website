"use client";

import { motion } from 'framer-motion';
import Button from '@/components/ui/Button';
import Link from 'next/link';

export default function SoftwareDevCTA() {
    return (
        <section className="py-24 relative overflow-hidden">
            {/* Background with overlay */}
            <div className="absolute inset-0 bg-blue-900 z-0">
                <div className="absolute inset-0 bg-[url('https://ryanquantum.com/wp-content/uploads/2025/11/pexels-vladbagacian-3987066-scaled.jpg')] bg-cover bg-center opacity-10 mix-blend-overlay"></div>
                <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-indigo-900 to-slate-900 opacity-90"></div>
            </div>

            <div className="container relative z-10 text-center">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className="text-3xl md:text-5xl font-black text-white mb-6 uppercase tracking-tight max-w-4xl mx-auto"
                >
                    Bring Your Ideas to Life With Custom Software
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto"
                >
                    Ready to Digitize Your Business? Reach Out to Our Software Specialists Today.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                >
                    <Link href="/contact">
                        <Button size="lg" className="bg-yellow-400 text-blue-900 hover:bg-yellow-300 border-none font-bold text-lg px-8 py-6 rounded-full shadow-lg shadow-yellow-400/20">
                            Talk to Us Today
                        </Button>
                    </Link>
                </motion.div>
            </div>
        </section>
    );
}
