"use client";

import { useState } from 'react';
import { PlusCircle, MinusCircle } from 'lucide-react';

export default function WhyChooseUsSection() {
    const accordionItems = [
        { title: "Experienced Team", content: "A skilled group of designers, developers, and strategists passionate about digital innovation." },
        { title: "Tailored Solutions", content: "Every project is customized to meet your unique business goals and audience needs." },
        { title: "Quality & Performance", content: "We prioritize speed, security, and seamless functionality in every solution we deliver." },
        { title: "Transparent Process", content: "Clear communication and complete visibility at every stage of your project." },
        { title: "Local Expertise, Global Standards", content: "Based in Erode, delivering world-class web solutions with local understanding." },
        { title: "Ongoing Support", content: "We stay with you even after launch — maintaining, upgrading, and ensuring continued growth." }
    ];

    const differenceItems = [
        { id: "01.", title: "Client-Centered Approach", content: "We listen, understand, and tailor every solution to match your unique business goals — your success is our true measure of achievement." },
        { id: "02.", title: "Innovation with Purpose", content: "Our team combines creativity and technology to build smart, scalable, and future-ready digital experiences that truly make an impact." },
        { id: "03.", title: "Quality Beyond Code", content: "Every project we deliver is backed by precision, transparency, and continuous support — ensuring long-term performance and trust." }
    ];

    const [openIndex, setOpenIndex] = useState<number | null>(0);

    return (
        <>
            <section className="section-padding bg-background transition-colors duration-500">
                <div className="container">
                    <div className="grid lg:grid-cols-2 gap-8 lg:gap-20 items-center">
                        <div>
                            <div className="mb-6 relative">
                                <img
                                    src="https://ryanquantum.com/wp-content/uploads/2025/11/Untitled-design-3.gif"
                                    alt="Why Choose Us"
                                    className="w-full max-w-md mx-auto lg:mx-0 rounded-2xl shadow-2xl"
                                />
                            </div>
                        </div>

                        <div>
                            <h2 className="text-3xl md:text-5xl font-black text-foreground mb-6">Why Choose Us?</h2>
                            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
                                At <strong className="text-foreground">Ryan Quantum Technologies</strong>, we believe that every business deserves a powerful digital presence that drives real results. Our approach combines creativity, innovation, and technical expertise to craft tailored solutions that help brands grow and stand out. From concept to completion, we focus on delivering excellence, reliability, and measurable value — ensuring your success is always our top priority.
                            </p>

                            <div className="space-y-4">
                                {accordionItems.map((item, index) => (
                                    <div key={index} className="border-b border-border pb-4">
                                        <button
                                            onClick={() => setOpenIndex(index === openIndex ? null : index)}
                                            className="flex items-center justify-between w-full text-left py-2 group"
                                        >
                                            <span className={`text-lg font-bold transition-colors ${index === openIndex ? 'text-primary' : 'text-foreground group-hover:text-primary'}`}>
                                                {item.title}
                                            </span>
                                            {index === openIndex ? (
                                                <MinusCircle className="w-6 h-6 text-primary" />
                                            ) : (
                                                <PlusCircle className="w-6 h-6 text-muted-foreground group-hover:text-primary transition-colors" />
                                            )}
                                        </button>
                                        <div
                                            className={`overflow-hidden transition-all duration-300 ease-in-out ${index === openIndex ? 'max-h-40 opacity-100 mt-2' : 'max-h-0 opacity-0'}`}
                                        >
                                            <p className="text-muted-foreground leading-relaxed pl-2 border-l-2 border-primary/20">
                                                {item.content}
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* What Makes Us Different Section */}
            <section className="section-padding bg-gradient-to-br from-primary/5 to-transparent relative overflow-hidden">
                <div className="container relative z-10">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-black text-foreground">What <span className="text-primary">Makes Us</span> Different</h2>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {differenceItems.map((item) => (
                            <div key={item.id} className="bg-card border border-border p-8 rounded-3xl hover:shadow-xl transition-all duration-300 group">
                                <div className="text-sm font-bold text-primary mb-4 tracking-widest">{item.id}</div>
                                <h3 className="text-xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors">{item.title}</h3>
                                <p className="text-muted-foreground leading-relaxed">
                                    {item.content}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}
