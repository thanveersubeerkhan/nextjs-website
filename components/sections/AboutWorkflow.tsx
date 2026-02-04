"use client";

import { Search, Compass, Palette, Laptop, Rocket, Target, ArrowRight } from 'lucide-react';

const steps = [
    {
        title: "Discover",
        icon: Search,
        description: "We start by understanding your goals, audience, and challenges — laying the foundation for success."
    },
    {
        title: "Define",
        icon: Compass,
        description: "We outline the strategy, structure, and project roadmap with clear objectives and milestones."
    },
    {
        title: "Design",
        icon: Palette,
        description: "Our creative experts craft intuitive, visually stunning designs that align with your brand identity."
    },
    {
        title: "Develop",
        icon: Laptop,
        description: "We code with precision and scalability — ensuring performance, security, and functionality."
    },
    {
        title: "Deploy",
        icon: Rocket,
        description: "After testing and optimization, we launch your project for the world to experience."
    },
    {
        title: "Deliver",
        icon: Target,
        description: "Our support continues post-launch, ensuring your platform grows and performs seamlessly."
    },
];

export default function AboutWorkflow() {
    return (
        <section className="py-20 bg-background text-foreground">
            <div className="container">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold text-green-700 mb-6">Our Proven Workflow — From Vision to Victory</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {steps.map((step, index) => (
                        <div
                            key={index}
                            className="relative bg-[#e8fbe8] border-2 border-[#9BE18E] rounded-2xl p-8 flex flex-col items-center text-center transition-transform hover:-translate-y-1 duration-300"
                        >
                            <div className="w-14 h-14 bg-[#9BE18E] rounded-full flex items-center justify-center text-white mb-6">
                                <step.icon className="w-7 h-7" />
                            </div>

                            <h3 className="text-xl font-bold text-green-800 mb-4">{step.title}</h3>
                            <p className="text-muted-foreground/80 text-sm leading-relaxed">
                                {step.description}
                            </p>

                            {/* Arrow for desktop - except last item */}
                            {index < steps.length - 1 && (
                                <div className="hidden lg:block absolute -right-3 top-1/2 -translate-y-1/2 z-10">
                                    {/* Using Lucide arrow or simple character if preferred, sticking to cleaner look */}
                                    <div className="text-[#9BE18E]">
                                        <ArrowRight className="w-6 h-6" />
                                    </div>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
