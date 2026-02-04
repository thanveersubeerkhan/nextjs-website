import { notFound } from 'next/navigation';
import { servicePages } from '@/data/servicePages';
import PageHero from '@/components/sections/PageHero';
import WhyChooseUsSection from '@/components/sections/WhyChooseUsSection';
import ServiceWhyChooseUs from '@/components/sections/ServiceWhyChooseUs';
import DigitalMarketingWhyChooseUs from '@/components/sections/DigitalMarketingWhyChooseUs';
import DigitalMarketingOfferings from '@/components/sections/DigitalMarketingOfferings';
import WebDevHero from '@/components/sections/WebDevHero';
import WebDevOverview from '@/components/sections/WebDevOverview';
import WebDevMobileAppSection from '@/components/sections/WebDevMobileAppSection';
import WebDevCTA from '@/components/sections/WebDevCTA';
import WebDevWhyChooseUs from '@/components/sections/WebDevWhyChooseUs';
import WebDevWhatWeDo from '@/components/sections/WebDevWhatWeDo';
import WebDevTechStack from '@/components/sections/WebDevTechStack';
import SoftwareDevHero from '@/components/sections/SoftwareDevHero';
import SoftwareDevOverview from '@/components/sections/SoftwareDevOverview';
import SoftwareDevServicesTabs from '@/components/sections/SoftwareDevServicesTabs';
import SoftwareDevWhyChooseUs from '@/components/sections/SoftwareDevWhyChooseUs';
import SoftwareDevStrengths from '@/components/sections/SoftwareDevStrengths';
import SoftwareDevCTA from '@/components/sections/SoftwareDevCTA';
import ProcessSection from '@/components/sections/ProcessSection';
import ServiceProcessSection from '@/components/sections/ServiceProcessSection';
import ServiceOfferingsSection from '@/components/sections/ServiceOfferingsSection';
import SpecializedServicesSection from '@/components/sections/SpecializedServicesSection';
import FAQSection from '@/components/sections/FAQSection';
import CTASection from '@/components/sections/CTASection';
import ServicesSection from '@/components/sections/ServicesSection';
import Card from '@/components/ui/Card';
import UIUXHero from '@/components/sections/UIUXHero';
import UIUXFeatures from '@/components/sections/UIUXFeatures';
import UIUXWhyChooseUs from '@/components/sections/UIUXWhyChooseUs';
import UIUXServicesGrid from '@/components/sections/UIUXServicesGrid';
import UIUXTechStack from '@/components/sections/UIUXTechStack';
import UIUXTrustSection from '@/components/sections/UIUXTrustSection';
import UIUXSubFooter from '@/components/sections/UIUXSubFooter';
import UIUXBrandingTable from '@/components/sections/UIUXBrandingTable';

type Props = {
    params: Promise<{ slug: string }>;
};

export default async function ServicePage({ params }: Props) {
    const { slug } = await params;
    const config = servicePages[slug];

    if (!config) {
        notFound();
    }

    if (slug === 'ui-ux-design') {
        return (
            <div className="bg-background transition-colors duration-500">
                <UIUXHero
                    title={config.title}
                    subtitle={config.heroSubtitle}
                    image={config.sections.overview?.image || ''}
                    features={[
                        { title: "User Research & Analysis", description: "We dive deep into understanding your audience, their behavior, needs, challenges, and expectations.", icon: "search" },
                        { title: "Wireframing & Prototyping", description: "We build intuitive wireframes and interactive prototypes that present the page layout, structure, and flow.", icon: "layout" },
                        { title: "UI/UX Design", description: "We craft visually stunning, modern, and responsive interfaces using consistent design systems.", icon: "monitor" }
                    ]}
                />
                <UIUXWhyChooseUs
                    title="Why Choose Us for UI & UX Design?"
                    items={(config.sections.whyChooseUs as any)?.items || []}
                />

                <UIUXServicesGrid
                    title="We Design Beautiful & User-Friendly Digital Experiences"
                    items={(config.sections.offerings?.items as any) || []}
                />
                <UIUXTechStack />


                <UIUXBrandingTable />


                <UIUXTrustSection />
            </div>
        );
    }

    if (slug === 'software-development') {
        return (
            <div className="bg-background transition-colors duration-500">
                <SoftwareDevHero />
                <SoftwareDevOverview />
                <SoftwareDevServicesTabs />
                <SoftwareDevWhyChooseUs />
                <SoftwareDevStrengths />
                <SoftwareDevCTA />
            </div>
        );
    }

    if (slug === 'web-development') {
        return (
            <div className="bg-background transition-colors duration-500">
                <WebDevHero />
                <WebDevOverview />
                <WebDevWhyChooseUs />
                <WebDevWhatWeDo />
                <WebDevMobileAppSection />
                <WebDevTechStack />
                <WebDevCTA />
            </div>
        );
    }

    return (
        <div className="bg-background transition-colors duration-500">
            <PageHero
                title={config.title}
                subtitle={config.heroSubtitle}
                backgroundImage={config.heroImage}
                gradientOverlay={config.heroGradient}
            />

            {/* Overview section */}
            {config.sections.overview && (
                <section className="section-padding bg-background relative overflow-hidden transition-colors duration-500">
                    <div className="container">
                        <div className={`grid gap-16 items-center ${config.sections.overview?.layout === 'split' ? 'md:grid-cols-2' : 'grid-cols-1'}`}>
                            <div className="relative z-10">
                                <h2 className="text-3xl md:text-5xl font-black mb-6 text-foreground uppercase tracking-tight">
                                    {config.sections.overview.title || 'Service Overview'}
                                </h2>
                                <div className="space-y-4 mb-8">
                                    {config.sections.overview.paragraphs ? (
                                        config.sections.overview.paragraphs.map((p, i) => (
                                            <p key={i} className="text-muted-foreground text-lg leading-relaxed">
                                                {p}
                                            </p>
                                        ))
                                    ) : (
                                        <p className="text-muted-foreground text-lg leading-relaxed">
                                            Providing specialized {config.title.toLowerCase()} tailored for modern business environments.
                                        </p>
                                    )}
                                </div>
                            </div>
                            {(config.sections.overview?.layout === 'split' || config.sections.overview?.layout === 'media-heavy') && (
                                <div className="relative group">
                                    <div className="absolute -inset-4 bg-primary/10 rounded-[2rem] blur-2xl group-hover:bg-primary/20 transition-all duration-700"></div>
                                    <div className="relative bg-muted/30 backdrop-blur-sm rounded-2xl overflow-hidden border border-border shadow-2xl transition-all duration-500">
                                        {config.sections.overview.image ? (
                                            <img
                                                src={config.sections.overview.image}
                                                alt={config.title}
                                                className="w-full h-auto object-cover transform scale-105 group-hover:scale-110 transition-transform duration-700"
                                            />
                                        ) : (
                                            <div className="h-80 flex items-center justify-center p-12 text-muted-foreground font-bold italic">
                                                [Visual Illustration for {config.title}]
                                            </div>
                                        )}
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </section>
            )}

            {/* Why Choose Us Section */}
            {config.sections.whyChooseUs && (
                typeof config.sections.whyChooseUs === 'object' && config.sections.whyChooseUs.variant === 'flip' ? (
                    <DigitalMarketingWhyChooseUs />
                ) : (
                    <WhyChooseUsSection
                        title={typeof config.sections.whyChooseUs === 'object' ? config.sections.whyChooseUs.title : undefined}
                        items={typeof config.sections.whyChooseUs === 'object' ? (config.sections.whyChooseUs.items as any) : undefined}
                    />
                )
            )}

            {/* Offerings Section */}
            {slug === 'digital-marketing' ? (
                <DigitalMarketingOfferings />
            ) : config.sections.offerings && (
                config.sections.offerings.variant === 'floating-grid' ? (
                    <ServiceOfferingsSection
                        title={config.sections.offerings.title}
                        items={config.sections.offerings.items || []}
                        image={config.sections.overview?.image}
                    />
                ) : (
                    <section className="section-padding bg-muted/10 relative overflow-hidden transition-colors duration-500">
                        <div className="container relative z-10">
                            <h2 className="text-3xl md:text-5xl font-black mb-16 text-center text-foreground uppercase tracking-tight">
                                {config.sections.offerings.title || 'Specific Offerings'}
                            </h2>
                            <div className={`grid gap-8 ${config.sections.offerings.variant === 'grid' || config.sections.offerings.variant === 'icon-box' ? 'sm:grid-cols-2 lg:grid-cols-3' : 'grid-cols-1'}`}>
                                {config.sections.offerings.items?.map((item, index) => (
                                    <Card key={index} className={`group hover:border-primary/50 transition-all duration-500 p-10 bg-card/50 backdrop-blur-sm relative overflow-hidden ${config.sections.offerings?.variant === 'icon-box' ? 'text-center' : ''}`}>
                                        <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-3xl -mr-16 -mt-16 group-hover:bg-primary/10 transition-colors"></div>

                                        {item.icon && (
                                            <div className="w-20 h-20 mx-auto mb-6 transition-transform duration-500 group-hover:scale-110 flex items-center justify-center">
                                                {typeof item.icon === 'string' && item.icon.includes('<svg') ? (
                                                    <div className="w-full h-full" dangerouslySetInnerHTML={{ __html: item.icon }} />
                                                ) : (
                                                    <span className="text-4xl">{item.icon}</span>
                                                )}
                                            </div>
                                        )}

                                        <h4 className="text-xl font-black mb-4 text-card-foreground group-hover:text-primary transition-colors uppercase tracking-tight">
                                            {item.title}
                                        </h4>
                                        <p className="text-muted-foreground text-sm leading-relaxed">
                                            {item.description || `Expert ${item.title.toLowerCase()} services designed to scale your business and outshine competition.`}
                                        </p>
                                    </Card>
                                ))}
                            </div>
                        </div>
                    </section>
                )
            )}

            {/* Specialized Services Section */}
            {config.sections.specializedServices && (
                <SpecializedServicesSection
                    title={config.sections.specializedServices.title}
                    items={config.sections.specializedServices.items}
                />
            )}

            {/* Process Section */}
            {config.sections.process && (
                typeof config.sections.process === 'object' ? (
                    <ServiceProcessSection
                        title={config.sections.process.title}
                        items={config.sections.process.items}
                    />
                ) : (
                    <ProcessSection />
                )
            )}

            {/* FAQ Section */}
            {config.sections.faq && (
                <FAQSection
                    title={config.sections.faq.title}
                    items={config.sections.faq.items}
                />
            )}

            {/* CTA Section */}
            {config.sections.cta && (
                <CTASection
                    variant={config.sections.cta.variant}
                    title={config.sections.cta.title}
                    description={config.sections.cta.description}
                />
            )}

            {/* Cross-sell other services */}
            {/* <section className="section-padding bg-background border-t border-border transition-colors">
                <div className="container">
                    <h2 className="text-2xl font-black mb-12 text-foreground tracking-tight">Explore Other Services</h2>
                    <ServicesSection />
                </div>
            </section> */}
        </div>
    );
}
