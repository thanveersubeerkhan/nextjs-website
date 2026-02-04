"use client";

import { motion } from 'framer-motion';

type WhyChooseUsItem = {
    id?: string;
    title: string;
    content?: string;
    description?: string;
    icon?: React.ReactNode;
};

type WhyChooseUsProps = {
    title?: string;
    subtitle?: string;
    items?: WhyChooseUsItem[];
    image?: string;
};

export default function WhyChooseUsSection({
    title = "Why Choose Slash Info Tech?",
    subtitle = "We don’t just build websites — we build digital partnerships.",
    items,
    image = "https://ryanquantum.com/wp-content/uploads/2025/11/Untitled-design-3.gif"
}: WhyChooseUsProps) {
    const defaultItems: WhyChooseUsItem[] = [
        {
            title: "Experienced Team",
            description: "A skilled group of designers, developers, and strategists passionate about digital innovation."
        },
        {
            title: "Tailored Solutions",
            description: "Every project is customized to meet your unique business goals and audience needs."
        },
        {
            title: "Quality & Performance",
            description: "We prioritize speed, security, and seamless functionality in every solution we deliver."
        },
        {
            title: "Transparent Process",
            description: "Clear communication and complete visibility at every stage of your project."
        },
        {
            title: "Local Expertise, Global Standards",
            description: "Based in Coimbatore, delivering world-class web solutions with local understanding."
        },
        {
            title: "Ongoing Support",
            description: "We stay with you even after launch — maintaining, upgrading, and ensuring continued growth."
        }
    ];

    const displayItems = items || defaultItems;

    return (
        <section className="section-padding bg-background relative overflow-hidden">
            <div className="container relative z-10">
                <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-24">
                    {/* GIF Column */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="lg:w-1/2 relative flex justify-center items-center"
                    >
                        {/* Soft Glow behind GIF */}
                        <div className="absolute w-[80%] h-[80%] bg-primary/20 rounded-full blur-[80px] -z-10 animate-pulse"></div>

                        <div className="relative group">
                            <img
                                src={image}
                                alt="Why Choose Us"
                                className="w-full max-w-xl mx-auto transform hover:scale-105 transition-transform duration-700 select-none mix-blend-darken dark:mix-blend-normal"
                            />
                        </div>
                    </motion.div>

                    {/* Content Column */}
                    <div className="lg:w-1/2 text-center lg:text-left">
                        <div className="mb-12">
                            <h2 className="text-3xl md:text-5xl font-black text-foreground mb-6 uppercase tracking-tight leading-tight">
                                {title.split('Slash Info Tech').map((part, i, arr) => (
                                    <span key={i}>
                                        {part}
                                        {i < arr.length - 1 && <span className="text-primary italic">Slash Info Tech</span>}
                                    </span>
                                ))}
                            </h2>
                            <p className="text-lg md:text-xl text-muted-foreground font-medium italic border-l-4 border-primary pl-6 py-2 mx-auto lg:mx-0 max-w-lg lg:max-w-none">
                                {subtitle}
                            </p>
                        </div>

                        <div className="grid sm:grid-cols-2 gap-6 md:gap-8 text-left">
                            {displayItems.map((item, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    className="p-8 bg-muted/20 backdrop-blur-sm rounded-[2rem] border border-transparent hover:border-primary/20 hover:bg-muted/40 transition-all duration-500 group shadow-sm hover:shadow-2xl relative overflow-hidden"
                                >
                                    <div className="absolute top-0 right-0 w-24 h-24 bg-primary/5 rounded-full blur-2xl -mr-12 -mt-12 group-hover:bg-primary/10 transition-colors"></div>
                                    <div className="mb-6 group-hover:scale-110 transition-transform duration-500 flex lg:block justify-center lg:justify-start">
                                        {item.icon || (
                                            <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center text-primary font-black text-xl">
                                                {index + 1}
                                            </div>
                                        )}
                                    </div>
                                    <h3 className="text-lg font-black text-foreground mb-3 uppercase tracking-tight group-hover:text-primary transition-colors text-center lg:text-left">
                                        {item.title}
                                    </h3>
                                    <p className="text-sm text-muted-foreground leading-relaxed text-center lg:text-left">
                                        {item.description || item.content}
                                    </p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Background Accents */}
            <div className="absolute top-1/4 -right-24 w-96 h-96 bg-primary/5 rounded-full blur-[100px] -z-10"></div>
            <div className="absolute bottom-1/4 -left-24 w-96 h-96 bg-primary/5 rounded-full blur-[100px] -z-10"></div>
        </section>
    );
}
