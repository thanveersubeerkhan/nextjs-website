import PageHero from '@/components/sections/PageHero';
import CTASection from '@/components/sections/CTASection';

export default function AboutPage() {
    return (
        <div className="bg-background transition-colors duration-500">
            <PageHero
                title="Our Story"
                subtitle="Slash Info Tech: Empowering Innovation in Erode & Coimbatore"
            />

            <section className="section-padding">
                <div className="container">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div className="space-y-6">
                            <h2 className="text-3xl md:text-5xl font-black text-foreground">A Legacy of Excellence</h2>
                            <p className="text-muted-foreground text-lg leading-relaxed">
                                Slash Info Tech was founded with a single mission: to provide world-class IT solutions that help local businesses compete on a global stage. With offices in Erode and Coimbatore, we combine local accessibility with global standards of quality.
                            </p>
                            <p className="text-muted-foreground text-lg leading-relaxed">
                                Our team of passionate developers, designers, and strategists work tirelessly to turn complex technical challenges into seamless digital experiences.
                            </p>
                            <div className="grid grid-cols-2 gap-8 pt-6">
                                <div>
                                    <h4 className="text-primary text-4xl font-black mb-2">10+</h4>
                                    <p className="text-sm font-bold uppercase tracking-widest text-muted-foreground">Years Experience</p>
                                </div>
                                <div>
                                    <h4 className="text-primary text-4xl font-black mb-2">500+</h4>
                                    <p className="text-sm font-bold uppercase tracking-widest text-muted-foreground">Projects Delivered</p>
                                </div>
                            </div>
                        </div>
                        <div className="relative aspect-video bg-muted rounded-3xl overflow-hidden shadow-2xl border border-border">
                            <div className="absolute inset-0 flex items-center justify-center text-muted-foreground font-bold">
                                [Team Photo / Office Space]
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section-padding bg-muted/30">
                <div className="container">
                    <div className="max-w-3xl mx-auto text-center space-y-12">
                        <div>
                            <h2 className="text-sm font-bold text-primary uppercase tracking-widest mb-4">Our Philosophy</h2>
                            <blockquote className="text-2xl md:text-4xl font-black text-foreground italic leading-tight">
                                "Technology should simplify, not complicate. We build bridges between complex problems and elegant solutions."
                            </blockquote>
                        </div>
                        <div className="grid sm:grid-cols-2 gap-8">
                            <div className="p-8 bg-card border border-border rounded-2xl text-left">
                                <h4 className="text-xl font-bold mb-4 text-foreground">Our Mission</h4>
                                <p className="text-muted-foreground leading-relaxed">To deliver performance-driven digital products that provide measurable value and long-term success for our clients in Erode, Coimbatore, and beyond.</p>
                            </div>
                            <div className="p-8 bg-card border border-border rounded-2xl text-left">
                                <h4 className="text-xl font-bold mb-4 text-foreground">Our Vision</h4>
                                <p className="text-muted-foreground leading-relaxed">To become the leading technology partner for growing businesses in South India, recognized for our innovation, transparency, and excellence.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <CTASection variant="gradient" />
        </div>
    );
}
