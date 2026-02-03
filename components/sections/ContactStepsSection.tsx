import { Target, BarChart3, Rocket } from 'lucide-react';

export default function ContactStepsSection() {
    const steps = [
        {
            icon: Target,
            title: "Define Your Goals",
            description: "Share your business objectives and expectations to help us tailor the perfect solution for you."
        },
        {
            icon: BarChart3,
            title: "Plan With Experts",
            description: "Collaborate with our strategy specialists to outline an actionable roadmap for success."
        },
        {
            icon: Rocket,
            title: "Launch & Grow",
            description: "Implement innovative strategies that drive growth, scalability, and long-term impact."
        }
    ];

    return (
        <section className="section-padding bg-background text-center">
            <div className="container">
                <div className="max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl lg:text-4xl font-black text-foreground mb-6">Let's Turn Your Vision Into Reality</h2>
                    <p className="text-muted-foreground leading-relaxed text-lg">
                        Connect with our team at Ryan Quantum Technologies to strengthen your digital foundation, enhance efficiency, and elevate your brand online. Let's start building your digital future today.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8 md:gap-12 relative">
                    {/* Connecting Lines (Desktop only) */}
                    <div className="hidden md:block absolute top-12 left-[16%] right-[16%] h-0.5 border-t-2 border-dashed border-primary/20 -z-10"></div>

                    {steps.map((step, index) => (
                        <div key={index} className="flex flex-col items-center group relative p-6 md:p-8 rounded-3xl transition-all duration-300 hover:bg-white hover:shadow-xl hover:-translate-y-2 border border-transparent hover:border-primary/5">
                            <div className="w-24 h-24 bg-background rounded-full border-4 border-primary/10 flex items-center justify-center mb-6 group-hover:border-primary transition-colors duration-500 shadow-sm relative z-10">
                                <div className="w-20 h-20 bg-primary text-white rounded-full flex items-center justify-center transform group-hover:scale-95 transition-transform duration-500 shadow-inner">
                                    <step.icon className="w-9 h-9" />
                                </div>
                            </div>
                            <h3 className="text-xl font-bold text-foreground mb-3">{step.title}</h3>
                            <p className="text-muted-foreground leading-relaxed max-w-xs mx-auto text-sm group-hover:text-foreground/80 transition-colors">
                                {step.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
