"use client";

import { motion } from 'framer-motion';
import Button from '@/components/ui/Button';
import Link from 'next/link';

export default function WebDevCTA() {
    return (
        <section className="py-24 relative overflow-hidden">
            {/* Background with overlay */}
            <div className="absolute inset-0 bg-blue-900 z-0">
                <div className="absolute inset-0 bg-[url('https://ryanquantum.com/wp-content/uploads/2025/11/pexels-vladbagacian-3987066-scaled.jpg')] bg-cover bg-center opacity-10 mix-blend-overlay"></div>
                <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-indigo-900 to-slate-900 opacity-90"></div>
            </div>

            <div className="container relative z-10 text-center">
                <motion.h3
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className="text-xl md:text-2xl text-blue-200 mb-4 font-medium"
                >
                    Our team is here to turn your ideas into powerful digital solutions.
                </motion.h3>
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className="text-4xl md:text-6xl font-black text-white mb-10 tracking-tight"
                >
                    Let’s Build Your <span className="text-yellow-400">Digital Success</span> Together
                </motion.h2>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                >
                    <Link href="/contact">
                        <Button size="lg" className="bg-yellow-400 text-blue-900 hover:bg-yellow-300 border-none font-bold text-lg px-8 py-6 rounded-full shadow-lg shadow-yellow-400/20">
                            Get in Touch
                        </Button>
                    </Link>
                </motion.div>
            </div>
        </section>
    );
}
