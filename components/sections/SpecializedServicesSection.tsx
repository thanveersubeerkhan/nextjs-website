"use client";

import { motion } from 'framer-motion';

type SpecializedServiceItem = {
    title: string;
    description: string;
    icon?: string | React.ReactNode;
    bgColor?: string;
};

type SpecializedServicesProps = {
    title?: string;
    items: SpecializedServiceItem[];
};

export default function SpecializedServicesSection({
    title = "Our Specialized Services",
    items
}: SpecializedServicesProps) {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20, scale: 0.98 },
        visible: {
            opacity: 1,
            y: 0,
            scale: 1,
            transition: {
                type: "spring" as const,
                stiffness: 100,
                damping: 20
            }
        }
    };

    return (
        <section className="section-padding bg-background relative overflow-hidden transition-colors duration-500">
            <div className="container relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-12"
                >
                    <h2 className="text-2xl md:text-4xl font-black text-foreground uppercase tracking-tight">
                        {title}
                    </h2>
                </motion.div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6"
                >
                    {items.map((item, index) => (
                        <motion.div
                            key={index}
                            variants={itemVariants}
                            whileHover={{
                                scale: 1.02,
                                y: -5,
                                transition: { duration: 0.3 }
                            }}
                            className={`${item.bgColor || 'bg-primary'} p-6 md:p-8 rounded-[2rem] text-white shadow-xl group relative overflow-hidden cursor-default`}
                        >
                            {/* Animated Background Overlay */}
                            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-500"></div>

                            <div className="relative z-10">
                                <div className="flex flex-col sm:flex-row items-center sm:items-start gap-5">
                                    <div className="w-14 h-14 md:w-16 md:h-16 bg-white/20 rounded-xl flex items-center justify-center text-3xl group-hover:rotate-6 transition-transform duration-500 flex-shrink-0 backdrop-blur-sm border border-white/20">
                                        {item.icon}
                                    </div>
                                    <div className="text-center sm:text-left">
                                        <h3 className="text-xl md:text-2xl font-black uppercase tracking-tight mb-3 group-hover:translate-x-1 transition-transform duration-500">
                                            {item.title}
                                        </h3>
                                        <p className="text-white/90 text-xs md:text-sm leading-relaxed font-medium">
                                            {item.description}
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Decorative Elements */}
                            <div className="absolute top-0 right-0 w-48 h-48 bg-white/10 rounded-full blur-3xl -mr-24 -mt-24 group-hover:bg-white/20 transition-all duration-700"></div>
                            <div className="absolute bottom-0 left-0 w-32 h-32 bg-black/10 rounded-full blur-2xl -ml-16 -mb-16 group-hover:w-48 group-hover:h-48 transition-all duration-700"></div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>

            {/* Contextual Accent */}
            <div className="absolute top-1/2 left-0 w-96 h-96 bg-primary/5 rounded-full blur-[120px] -z-10 -translate-y-1/2"></div>
        </section>
    );
}
