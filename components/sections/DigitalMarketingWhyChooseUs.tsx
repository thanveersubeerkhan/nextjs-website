"use client";

import { motion } from 'framer-motion';

const items = [
    {
        title: "Data-Driven Approach",
        description: "We use insights and analytics to build strategies that deliver real results.",
        backTitle: "Data-Driven",
        backDescription: "Every decision is backed by research and accurate data."
    },
    {
        title: "Tailored Strategies",
        description: "We create personalized digital marketing plans for your business goals.",
        backTitle: "Custom Plans",
        backDescription: "Unique strategies for your brand success."
    },
    {
        title: "Transparent Reporting",
        description: "You get detailed reports with clear campaign insights every month.",
        backTitle: "100% Transparent",
        backDescription: "Know how your campaigns perform anytime."
    },
    {
        title: "Expert Team",
        description: "Our skilled designers, strategists & marketers help your brand grow.",
        backTitle: "Specialists",
        backDescription: "A team dedicated to your success."
    },
    {
        title: "Focus on ROI",
        description: "We prioritize leads, conversions, and sales to maximize your revenue.",
        backTitle: "More Conversions",
        backDescription: "Our strategies focus on real business growth."
    }
];

export default function DigitalMarketingWhyChooseUs() {
    return (
        <section className="py-20 bg-background">
            <div className="container">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-5xl font-extrabold text-[#122f54] dark:text-foreground mb-4">
                        Why Choose <span className="text-[#BFC424]">Slash Info Tech</span>
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 perspective-1000">
                    {items.map((item, index) => (
                        <div
                            key={index}
                            className="bg-transparent w-full h-[220px] relative group [perspective:1000px]"
                        >
                            <div
                                className="relative w-full h-full duration-700 transition-all [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]"
                            >
                                {/* Front */}
                                <div className="absolute inset-0 w-full h-full backface-hidden bg-white dark:bg-card border border-border/50 rounded-[14px] shadow-[0_4px_16px_rgba(0,0,0,0.12)] p-6 flex flex-col justify-center items-start">
                                    <h3 className="text-xl font-bold text-[#122f54] dark:text-foreground mb-3">{item.title}</h3>
                                    <p className="text-[#333] dark:text-muted-foreground text-[15px] leading-relaxed">
                                        {item.description}
                                    </p>
                                </div>

                                {/* Back */}
                                <div className="absolute inset-0 w-full h-full backface-hidden [transform:rotateY(180deg)] bg-[#7ED957] rounded-[14px] shadow-lg p-6 flex flex-col justify-center items-start text-left">
                                    <h3 className="text-xl font-bold text-white mb-3">{item.backTitle}</h3>
                                    <p className="text-white text-[15px] font-medium leading-relaxed">
                                        {item.backDescription}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
