"use client";

import { motion } from 'framer-motion';

type OfferingItem = {
    title: string;
    icon?: string | React.ReactNode;
};

type OfferingsProps = {
    title?: string;
    items: OfferingItem[];
    image?: string;
};

export default function ServiceOfferingsSection({
    title = "our Service",
    items,
    image = "https://ryanquantum.com/wp-content/uploads/2025/11/Untitled-design-20.png"
}: OfferingsProps) {
    const containerVariants = {
        hidden: { opacity: 0, x: 20 },
        visible: {
            opacity: 1,
            x: 0,
            transition: {
                staggerChildren: 0.05,
                duration: 0.6
            }
        }
    };

    const cardVariants = {
        hidden: { opacity: 0, scale: 0.9, y: 10 },
        visible: {
            opacity: 1,
            scale: 1,
            y: 0,
            transition: { type: "spring" as const, stiffness: 120, damping: 15 }
        }
    };

    return (
        <section className="section-padding bg-muted/10 relative overflow-hidden transition-colors duration-500">
            {/* Background Accents */}
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
                <div className="absolute top-1/4 -left-32 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[140px] opacity-60"></div>
                <div className="absolute bottom-1/4 -right-32 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-[120px] opacity-40"></div>
            </div>

            <div className="container relative z-10">
                <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
                    {/* Illustration Column */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="lg:w-1/2"
                    >
                        <motion.div
                            animate={{
                                y: [0, -20, 0],
                                rotate: [0, 1, 0, -1, 0]
                            }}
                            transition={{
                                duration: 6,
                                repeat: Infinity,
                                ease: "easeInOut"
                            }}
                            className="relative group p-8 backdrop-blur-xl  w-[80%] aspect-square flex items-center justify-center shadow-[0_32px_64px_-16px_rgba(0,0,0,0.1)] border border-white/60"
                        >
                            <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 to-transparent opacity-50"></div>
                            <img
                                src={image}
                                alt="Service Illustration"
                                className="w-[80%] h-auto object-contain relative z-10 drop-shadow-2xl transform transition-transform duration-1000 group-hover:scale-105 mix-blend-multiply"
                            />
                        </motion.div>
                    </motion.div>

                    {/* Cards Column */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="lg:w-1/2"
                    >
                        <div className="bg-white/70 backdrop-blur-2xl rounded-[2.5rem] shadow-[0_40px_70px_-20px_rgba(0,0,0,0.1)] border border-white relative overflow-hidden">
                            <div className="p-8 md:p-10">
                                <motion.div
                                    initial={{ opacity: 0, y: -10 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.3 }}
                                >
                                    <h3 className="text-2xl md:text-3xl font-black mb-8 text-foreground uppercase tracking-tight relative inline-block">
                                        {title}
                                        <span className="absolute -bottom-1.5 left-0 w-10 h-1 bg-primary rounded-full"></span>
                                    </h3>
                                </motion.div>

                                <motion.div
                                    variants={containerVariants}
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: true }}
                                    className="grid grid-cols-2 gap-4"
                                >
                                    {items.map((item, index) => (
                                        <motion.div
                                            key={index}
                                            variants={cardVariants}
                                            whileHover={{
                                                y: -3,
                                                backgroundColor: "rgba(255, 255, 255, 1)",
                                                transition: { duration: 0.2 }
                                            }}
                                            className="flex flex-col items-center justify-center p-5 bg-white/40 backdrop-blur-md rounded-2xl border border-white/50 hover:border-primary/30 shadow-md hover:shadow-lg transition-all duration-300 group cursor-default"
                                        >
                                            <div className="w-12 h-12 bg-primary/5 rounded-xl flex items-center justify-center mb-3 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                                                {typeof item.icon === 'string' && item.icon.includes('<svg') ? (
                                                    <div className="w-6 h-6 text-primary" dangerouslySetInnerHTML={{ __html: item.icon }} />
                                                ) : (
                                                    <span className="text-2xl">{item.icon}</span>
                                                )}
                                            </div>
                                            <span className="text-[10px] md:text-xs font-black text-center text-foreground uppercase tracking-widest leading-tight group-hover:text-primary transition-colors">
                                                {item.title}
                                            </span>
                                        </motion.div>
                                    ))}
                                </motion.div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
