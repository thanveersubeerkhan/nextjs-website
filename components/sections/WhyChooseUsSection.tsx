import Card from '@/components/ui/Card';

export default function WhyChooseUsSection() {
    const reasons = [
        {
            title: "Data-Driven Approach",
            description: "We don't guess. We use data to drive every decision, ensuring maximum ROI for your business."
        },
        {
            title: "Experts Only",
            description: "Our team consists of senior developers and strategists with years of industry experience."
        },
        {
            title: "Modular Scaling",
            description: "We build systems that grow with you. Our modular architecture prevents technical debt."
        },
        {
            title: "Transparent Workflow",
            description: "Stay in the loop with real-time updates and a perfectly clear communication path."
        }
    ];

    return (
        <section className="section-padding bg-background transition-colors duration-500">
            <div className="container">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    <div>
                        <h2 className="text-sm font-bold text-primary uppercase tracking-widest mb-4">Value Proposition</h2>
                        <h3 className="text-3xl md:text-5xl font-black text-foreground mb-8">Why Businesses Choose Slash Info Tech</h3>
                        <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
                            We translate complex business challenges into seamless digital experiences. Our Erode and Coimbatore-based teams combine global standards with local dedication to deliver excellence.
                        </p>
                        <div className="space-y-4">
                            {['99% Client Satisfaction', '24/7 Premium Support', 'Cutting-edge Technology Stack'].map((item) => (
                                <div key={item} className="flex items-center text-foreground font-bold">
                                    <span className="w-6 h-6 bg-primary/10 text-primary rounded-full flex items-center justify-center mr-3 transition-colors border border-primary/20">
                                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg>
                                    </span>
                                    {item}
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-6">
                        {reasons.map((reason) => (
                            <Card key={reason.title} className="p-8">
                                <h4 className="text-lg font-bold mb-3 text-card-foreground">{reason.title}</h4>
                                <p className="text-muted-foreground text-sm leading-relaxed">{reason.description}</p>
                            </Card>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
