"use client";

import { motion } from 'framer-motion';

const steps = [
    "Discover",
    "Define",
    "Design",
    "Develop",
    "Deploy",
    "Deliver"
];

export default function HomeCreativeWorkflow() {
    return (
        <section className="py-20 bg-background workflow-section">
            <div className="container max-w-[1100px] mx-auto text-center px-4">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-3xl font-bold text-foreground mb-12"
                >
                    Our Creative Workflow
                </motion.h2>

                <div className="flex flex-col md:flex-row flex-wrap justify-center items-center gap-6 md:gap-4 relative">
                    {steps.map((step, index) => (
                        <div key={index} className="contents">
                            {/* Step Card */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="bg-[#e1f5fe] border-2 border-[#b3e5fc] rounded-xl px-6 py-5 text-center flex-1 min-w-[140px] max-w-[160px] shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 relative group"
                            >
                                <h3 className="text-[1.1rem] font-medium text-[#01579b] m-0">
                                    {step}
                                </h3>
                            </motion.div>

                            {/* Arrow Connector */}
                            {index < steps.length - 1 && (
                                <>
                                    {/* Desktop Arrow */}
                                    <div className="hidden md:block text-2xl text-foreground font-light -mx-2 z-10">
                                        ➜
                                    </div>
                                    {/* Mobile Arrow */}
                                    <div className="block md:hidden text-2xl text-[#0288d1] -my-2">
                                        ↓
                                    </div>
                                </>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
