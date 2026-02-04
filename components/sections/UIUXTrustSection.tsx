'use client';

import { motion } from 'framer-motion';
import Lottie from 'lottie-react';
import { useEffect, useState } from 'react';
import { ArrowRight } from 'lucide-react';

export default function UIUXTrustSection() {
    const [animationData, setAnimationData] = useState(null);

    useEffect(() => {
        fetch('https://ryanquantum.com/wp-content/uploads/2025/11/mobile-marketing.json')
            .then(response => response.json())
            .then(data => setAnimationData(data))
            .catch(error => console.error('Error loading Lottie animation:', error));
    }, []);

    return (
        <section className="py-24 bg-white overflow-hidden">
            <div className="container px-4 mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    {/* Left: Lottie Animation (Phone Illustration) */}
                    <div className="relative flex justify-center lg:justify-start">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="w-full max-w-lg"
                        >
                            {animationData ? (
                                <Lottie animationData={animationData} loop={true} className="w-full h-auto" />
                            ) : (
                                <div className="w-full aspect-square bg-gray-100 rounded-3xl animate-pulse flex items-center justify-center text-gray-400">
                                    Loading Animation...
                                </div>
                            )}
                        </motion.div>
                    </div>

                    {/* Right: Content */}
                    <div className="text-left">
                        <motion.h2
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="text-4xl md:text-5xl lg:text-6xl font-[1000] text-[#0A0B10] leading-tight mb-8"
                        >
                            Trusted UI/UX & Graphic Design Partner for <br className="hidden lg:block" />
                            Businesses in Coimbatore
                        </motion.h2>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="space-y-6 text-lg text-gray-600 font-medium leading-relaxed mb-10"
                        >
                            <p>
                                We believe great design is more than visuals — It's an experience. At Slash Info Tech
                                Coimbatore, our UI/UX and graphic design team crafts stunning, meaningful,
                                and functional designs that elevate your brand across all platforms.
                            </p>
                            <p>
                                From digital interfaces to full branding systems, we deliver work that looks beautiful
                                and performs brilliantly.
                            </p>
                        </motion.div>

                        <motion.button
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="bg-[#FF587C] text-white px-10 py-4 rounded-xl font-bold text-lg shadow-xl shadow-[#FF587C]/30 hover:bg-[#E0486C] transition-all flex items-center gap-2"
                        >
                            Get a Quote <ArrowRight className="w-5 h-5" />
                        </motion.button>
                    </div>
                </div>
            </div>
        </section>
    );
}
