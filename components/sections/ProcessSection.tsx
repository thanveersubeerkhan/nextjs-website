const steps = [
    { title: "Discover", icon: "🔍", description: "We start by understanding your goals, audience, and challenges — laying the foundation for success." },
    { title: "Define", icon: "🧭", description: "We outline the strategy, structure, and project roadmap with clear objectives and milestones." },
    { title: "Design", icon: "🎨", description: "Our creative experts craft intuitive, visually stunning designs that align with your brand identity." },
    { title: "Develop", icon: "💻", description: "We code with precision and scalability — ensuring performance, security, and functionality." },
    { title: "Deploy", icon: "🚀", description: "After testing and optimization, we launch your project for the world to experience." },
    { title: "Deliver", icon: "🎯", description: "Our support continues post-launch, ensuring your platform grows and performs seamlessly." },
];

export default function ProcessSection() {
    return (
        <section className="section-padding bg-muted/30">
            <div className="container">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-black text-foreground mb-6 uppercase tracking-tight">Our Proven Workflow — From Vision to Victory</h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto">We follow a systematic approach to ensure every project is delivered with excellence and precision.</p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
                    {steps.map((step, index) => (
                        <div key={step.title} className="flex flex-col items-center text-center group">
                            <div className="w-16 h-16 bg-background rounded-2xl flex items-center justify-center text-3xl mb-4 border border-border group-hover:border-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300 shadow-sm">
                                {step.icon}
                            </div>
                            <h4 className="font-bold text-foreground mb-2">{step.title}</h4>
                            <p className="text-xs text-muted-foreground hidden md:block">{step.description}</p>
                            {index < steps.length - 1 && (
                                <div className="hidden lg:block absolute right-0 top-1/2 -translate-y-1/2 text-border">
                                    ➜
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
