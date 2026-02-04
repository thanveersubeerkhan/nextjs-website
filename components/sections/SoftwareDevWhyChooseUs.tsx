"use client";

import { motion } from 'framer-motion';
import { Users, ShieldCheck, Trophy } from 'lucide-react';

const items = [
    {
        title: "Collaborative Approach",
        description: "At Slash Info Tech, we believe successful software is built through teamwork. Our developers work closely with you at every stage, ensuring your ideas and expectations are integrated into the final product. We maintain continuous communication and provide regular updates so you always stay informed about your project’s progress.",
        icon: Users
    },
    {
        title: "Accountable & Trustworthy",
        description: "Businesses across Tamil Nadu prefer Slash Info Tech because of our transparent processes and commitment to delivering dependable software solutions. We prioritize clarity, honesty, and quality in every project — ensuring you receive modern, high-performing, and long-lasting applications.",
        icon: ShieldCheck
    },
    {
        title: "Skilled & Dedicated Team",
        description: "Our strong reputation in software development comes from our expert development team. Their technical expertise, creativity, and customer-focused approach allow us to deliver high-quality software at competitive pricing. Every solution is engineered to support growth, efficiency, and long-term success.",
        icon: Trophy
    }
];

export default function SoftwareDevWhyChooseUs() {
    return (
        <section className="py-20 bg-background">
            <div className="container">
                <div className="text-center mb-16">
                    <motion.h4
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="text-lg font-bold text-muted-foreground uppercase tracking-wider mb-2"
                    >
                        Why Choose
                    </motion.h4>
                    <motion.h2
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-3xl md:text-5xl font-black text-foreground uppercase tracking-tight"
                    >
                        Our Software Development in Coimbatore?
                    </motion.h2>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {items.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-card p-8 rounded-2xl shadow-sm border border-border/50 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
                        >
                            <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mb-6">
                                <item.icon size={32} strokeWidth={1.5} />
                            </div>
                            <h3 className="text-xl font-bold text-foreground mb-4">{item.title}</h3>
                            <p className="text-muted-foreground leading-relaxed text-sm">
                                {item.description}
                            </p>

                            <button className="mt-6 flex items-center text-primary font-bold text-sm group">
                                Learn more
                                <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
                            </button>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
