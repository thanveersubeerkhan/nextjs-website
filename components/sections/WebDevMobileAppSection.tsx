"use client";

import { motion } from 'framer-motion';

export default function WebDevMobileAppSection() {
    return (
        <section className="py-20 bg-background">
            <div className="container">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    {/* Image/GIF */}
                    <div>
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5 }}
                            className="relative"
                        >
                            <img
                                src="https://ryanquantum.com/wp-content/uploads/2025/11/Untitled-design-5.gif"
                                alt="Mobile App Development"
                                className="w-full h-auto rounded-3xl shadow-lg"
                            />
                        </motion.div>
                    </div>

                    {/* Content */}
                    <div>
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            className="text-3xl md:text-4xl font-bold text-foreground mb-6 leading-tight"
                        >
                            Why Choose Slash Info Tech for <span className="text-primary">Mobile App Development in Coimbatore</span>
                        </motion.h2>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="text-lg text-muted-foreground leading-relaxed"
                        >
                            <p>
                                At Slash Info Tech, we build high-performance mobile applications that are fast, secure, and tailored to your business needs. Our expert team focuses on user-friendly design, smooth functionality, and advanced technology integration to deliver apps that enhance customer engagement and drive business growth. From concept to deployment, we ensure reliable communication, on-time delivery, and solutions that work flawlessly across Android, iOS, and cross-platform environments.
                            </p>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
}
