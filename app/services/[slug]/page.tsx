import { notFound } from 'next/navigation';
import { servicePages } from '@/data/servicePages';
import PageHero from '@/components/sections/PageHero';
import WhyChooseUsSection from '@/components/sections/WhyChooseUsSection';
import ProcessSection from '@/components/sections/ProcessSection';
import CTASection from '@/components/sections/CTASection';
import ServicesSection from '@/components/sections/ServicesSection';
import Card from '@/components/ui/Card';

type Props = {
    params: Promise<{ slug: string }>;
};

export default async function ServicePage({ params }: Props) {
    const { slug } = await params;
    const config = servicePages[slug];

    if (!config) {
        notFound();
    }

    return (
        <div className="bg-background transition-colors duration-500">
            <PageHero
                title={config.title}
                subtitle={config.heroSubtitle}
            />

            {/* Overview section */}
            {config.sections.overview && (
                <section className="section-padding">
                    <div className="container">
                        <div className={`grid gap-16 items-center ${config.sections.overview?.layout === 'split' ? 'md:grid-cols-2' : 'grid-cols-1'}`}>
                            <div>
                                <h2 className="text-3xl font-black mb-6 text-foreground">Service Overview</h2>
                                <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                                    Providing specialized {config.title.toLowerCase()} tailored for modern business environments. Our approach focuses on reliability, performance, and user-centric design principles.
                                </p>
                                <ul className="space-y-4">
                                    {['Custom Strategy Development', 'Implementation & Integration', 'Performance Optimization', 'Ongoing Support'].map((item) => (
                                        <li key={item} className="flex items-center font-bold text-foreground">
                                            <span className="w-2 h-2 bg-primary rounded-full mr-3 shadow-sm shadow-primary/50"></span>
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            {(config.sections.overview?.layout === 'split' || config.sections.overview?.layout === 'media-heavy') && (
                                <div className="bg-muted rounded-2xl h-80 flex items-center justify-center p-12 text-muted-foreground font-bold border border-border shadow-inner transition-colors">
                                    [Visual Illustration for {config.title}]
                                </div>
                            )}
                        </div>
                    </div>
                </section>
            )}

            {config.sections.whyChooseUs && <WhyChooseUsSection />}

            {config.sections.offerings && (
                <section className="section-padding bg-muted/30 transition-colors">
                    <div className="container">
                        <h2 className="text-3xl font-black mb-12 text-center text-foreground uppercase tracking-tight">Specific Offerings</h2>
                        <div className={`grid gap-8 ${config.sections.offerings.variant === 'grid' ? 'sm:grid-cols-2 lg:grid-cols-3' : 'grid-cols-1'}`}>
                            <Card className="hover:border-primary/50 transition-all p-10">
                                <h4 className="text-xl font-bold mb-4 text-card-foreground">Enterprise Solution</h4>
                                <p className="text-muted-foreground text-sm leading-relaxed">Full-scale digital transformation for large organizations requiring high security and scalability.</p>
                            </Card>
                            <Card className="hover:border-primary/50 transition-all p-10">
                                <h4 className="text-xl font-bold mb-4 text-card-foreground">Startup Accelerator</h4>
                                <p className="text-muted-foreground text-sm leading-relaxed">Rapid development and launch strategy for new ventures to gain market traction fast.</p>
                            </Card>
                            <Card className="hover:border-primary/50 transition-all p-10">
                                <h4 className="text-xl font-bold mb-4 text-card-foreground">Custom Consulting</h4>
                                <p className="text-muted-foreground text-sm leading-relaxed">Strategic guidance and problem solving for your most complex digital challenges.</p>
                            </Card>
                        </div>
                    </div>
                </section>
            )}

            {config.sections.process && <ProcessSection />}

            {config.sections.cta && (
                <CTASection variant={config.sections.cta.variant} />
            )}

            {/* Cross-sell other services */}
            <section className="section-padding bg-background border-t border-border transition-colors">
                <div className="container">
                    <h2 className="text-2xl font-black mb-12 text-foreground tracking-tight">Explore Other Services</h2>
                    <ServicesSection />
                </div>
            </section>
        </div>
    );
}
