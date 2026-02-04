"use client";

import { motion } from 'framer-motion';

type ProcessItem = {
    title: string;
    description: string;
    icon?: string | React.ReactNode;
};

type ProcessProps = {
    title?: string;
    items?: ProcessItem[];
};

export default function ServiceProcessSection({
    title = "Our Proven Workflow — From Vision to Victory",
    items
}: ProcessProps) {
    const defaultSteps = [
        { title: "Discover", icon: "🔍", description: "We start by understanding your goals, audience, and challenges — laying the foundation for success." },
        { title: "Define", icon: "🧭", description: "We outline the strategy, structure, and project roadmap with clear objectives and milestones." },
        { title: "Design", icon: "🎨", description: "Our creative experts craft intuitive, visually stunning designs that align with your brand identity." },
        { title: "Develop", icon: "💻", description: "We code with precision and scalability — ensuring performance, security, and functionality." },
        { title: "Deploy", icon: "🚀", description: "After testing and optimization, we launch your project for the world to experience." },
        { title: "Deliver", icon: "🎯", description: "Our support continues post-launch, ensuring your platform grows and performs seamlessly." },
    ];

    const displayItems = items || defaultSteps;

    return (
        <section className="section-padding bg-muted/10 relative overflow-hidden transition-colors duration-500">
            <div className="container relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-12"
                >
                    <h2 className="text-3xl md:text-5xl font-black text-foreground mb-4 uppercase tracking-tight">
                        {title}
                    </h2>
                    <div className="w-20 h-1.5 bg-green-500 mx-auto rounded-full"></div>
                </motion.div>

                <div className="relative max-w-5xl mx-auto">
                    {/* Vertical Green Line with drawing animation */}
                    <motion.div
                        initial={{ height: 0 }}
                        whileInView={{ height: '100%' }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.5, ease: "easeInOut" }}
                        className="absolute left-[30px] md:left-1/2 top-0 w-[3px] bg-gradient-to-b from-green-500 via-green-400 to-green-500 md:-translate-x-1/2 z-0"
                    ></motion.div>

                    <div className="space-y-8 md:space-y-12">
                        {displayItems.map((step, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, scale: 0.98 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true, margin: "-50px" }}
                                transition={{ duration: 0.6, delay: 0.1 }}
                                className={`relative flex items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                            >
                                {/* Dot on the line with ping effect */}
                                <div className="absolute left-[30px] md:left-1/2 -translate-x-1/2 z-20">
                                    <div className="w-6 h-6 bg-white border-4 border-green-500 rounded-full shadow-md relative">
                                        <motion.div
                                            animate={{ scale: [1, 1.4, 1], opacity: [0.5, 0, 0.5] }}
                                            transition={{ duration: 2, repeat: Infinity }}
                                            className="absolute inset-0 bg-green-500 rounded-full"
                                        ></motion.div>
                                    </div>
                                </div>

                                {/* Content Card */}
                                <div className={`w-full md:w-[46%] pl-16 md:pl-0 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
                                    <motion.div
                                        whileHover={{ y: -5 }}
                                        className="bg-card border border-border p-8 rounded-[2rem] shadow-[0_15px_40px_rgba(0,0,0,0.04)] hover:shadow-[0_30px_60px_rgba(0,0,0,0.08)] transition-all duration-500 group relative overflow-hidden"
                                    >
                                        <div className="absolute top-0 right-0 w-24 h-24 bg-green-500/5 rounded-full blur-2xl -mr-10 -mt-10 group-hover:bg-green-500/10 transition-colors"></div>

                                        <div className="flex items-center gap-5 mb-5">
                                            <div className="w-14 h-14 bg-green-500/10 rounded-xl flex items-center justify-center text-green-600 text-2xl group-hover:scale-110 transition-all duration-500 shadow-inner">
                                                {typeof step.icon === 'string' ? step.icon : (index + 1)}
                                            </div>
                                            <h4 className="text-xl font-black text-foreground uppercase tracking-tight group-hover:text-green-600 transition-colors">
                                                {step.title}
                                            </h4>
                                        </div>
                                        <p className="text-muted-foreground text-sm leading-relaxed font-medium">
                                            {step.description}
                                        </p>

                                        {/* Number Badge */}
                                        <div className="absolute bottom-2 right-6 text-7xl font-black text-foreground/5 pointer-events-none group-hover:text-green-500/5 transition-colors">
                                            {index + 1}
                                        </div>
                                    </motion.div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Background Decor */}
            <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-green-500/5 rounded-full blur-[120px] -z-10 translate-x-1/2 translate-y-1/2"></div>
        </section>
    );
}
