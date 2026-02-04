import HeroSection from '@/components/sections/HeroSection';
import StatsSection from '@/components/sections/StatsSection';
import ServicesSection from '@/components/sections/ServicesSection';
import WhyChooseUsSection from '@/components/sections/WhyChooseUsSection';
import ProcessSection from '@/components/sections/ProcessSection';
import CTASection from '@/components/sections/CTASection';
import IndustriesSection from '@/components/sections/IndustriesSection';
import TechStackSection from '@/components/sections/TechStackSection';
import TabsSection from '@/components/sections/TabsSection';
import HomeCreativeWorkflow from '@/components/sections/HomeCreativeWorkflow';

export default function Home() {
  return (
    <>
      <HeroSection />

      {/* Introduction Section - Fully Theme Aware */}
      <section className="section-padding bg-background border-b border-border transition-colors duration-500 overflow-hidden">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left Column: Overlapping Images with Motion */}
            <div className="relative order-2 lg:order-1 min-h-[350px] md:min-h-[500px]">
              {/* Image 1: Fade In Left (Woman) */}
              <div className="absolute top-0 left-0 w-3/4 z-10 animate-in slide-in-from-left fade-in duration-1000">
                <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-background">
                  <img
                    src="https://ryanquantum.com/wp-content/uploads/2025/11/portrait-young-woman-smiling-scaled.jpg"
                    alt="Slash Info Tech Team"
                    className="w-full h-auto object-cover"
                  />
                </div>
              </div>

              {/* Image 2: Bounce In Up (Men) - Overlapping */}
              <div className="absolute bottom-0 right-0 w-3/4 z-20 animate-in slide-in-from-bottom-20 fade-in duration-1000 delay-300">
                <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-background">
                  <img
                    src="https://ryanquantum.com/wp-content/uploads/2025/11/two-indian-business-man-suits-sitting-office-cafe-looking-laptop-drinking-coffee-scaled.jpg"
                    alt="Web Development Team"
                    className="w-full h-auto object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Right Column: Content */}
            <div className="order-1 lg:order-2">
              <h5 className="font-bold text-lg mb-2 animate-in fade-in slide-in-from-bottom duration-700">Building Digital Experiences That Drive Results</h5>
              <h2 className="mb-6 font-black leading-tight text-foreground text-3xl md:text-5xl tracking-tight uppercase animate-in fade-in slide-in-from-right duration-700">
                Expert Web Design and <br />
                <span className="text-primary text-2xl md:text-4xl block mt-2">Development Services in Coimbatore</span>
              </h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed animate-in fade-in slide-in-from-bottom duration-1000">
                At <strong>Slash Info Tech</strong>, we deliver high-quality and affordable web design and development solutions that drive measurable results. Based in <strong>Coimbatore</strong>, we specialize in creating professional, mobile-responsive, and SEO-optimized websites that enhance your brand presence and business performance.
              </p>

              <div className="space-y-8">
                {/* Feature 1: Web Design */}
                <div className="flex items-start gap-6 group">
                  <div className="relative shrink-0 w-20 h-20 transition-transform duration-700 group-hover:rotate-[360deg]">
                    <img
                      src="https://ryanquantum.com/wp-content/uploads/2025/11/about1-1.png"
                      alt="Web Design Icon"
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-2 text-foreground uppercase tracking-tight">Web Design</h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      We create visually stunning, user-friendly, and mobile-responsive website designs that reflect your brand identity and deliver an engaging user experience.
                    </p>
                  </div>
                </div>

                {/* Feature 2: Web Development */}
                <div className="flex items-start gap-6 group">
                  <div className="relative shrink-0 w-20 h-20 transition-transform duration-700 group-hover:rotate-[360deg]">
                    <img
                      src="https://ryanquantum.com/wp-content/uploads/2025/11/price3.png"
                      alt="Web Development Icon"
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-2 text-foreground uppercase tracking-tight">Web Development</h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      We build fast, secure, and scalable websites using the latest technologies to ensure seamless functionality, performance, and long-term reliability.
                    </p>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      <ServicesSection />
      <TechStackSection />
      <TabsSection />
      <ProcessSection />
      <HomeCreativeWorkflow />

      {/* Convert More Customers Section */}
      <section className="section-padding bg-muted/20 overflow-hidden">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative order-2 lg:order-1">
              <div className="absolute inset-0 bg-primary/20 rounded-full blur-[100px]"></div>
              <img
                src="https://ryanquantum.com/wp-content/uploads/2025/11/promotion.gif"
                alt="Promotion"
                className="relative z-10 w-full max-w-md mx-auto"
              />
            </div>
            <div className="order-1 lg:order-2">
              <h6 className="text-primary font-bold uppercase tracking-widest mb-4">Convert More Customers</h6>
              <h2 className="text-3xl md:text-5xl font-black text-foreground mb-6 tracking-tight uppercase">Boost Your Brand Visibility</h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                At <strong>Slash Info Tech</strong>, we help your business <strong>reach more customers</strong> through strategic digital marketing, responsive web design, and data-driven solutions. Our approach ensures your brand message connects with the right audience — transforming traffic into long-term growth. With modern tools and creative expertise, we make sure your digital presence works 24/7 to expand your customer base.
              </p>
              <button className="bg-primary text-primary-foreground px-8 py-4 rounded-full font-bold shadow-lg shadow-primary/30 hover:scale-105 transition-transform">
                Get touch with our digital marketing team
              </button>
            </div>
          </div>
        </div>
      </section>

      <StatsSection />

      {/* <CTASection
        variant="gradient"
        title="Ready to Scale Your Business?"
        description="Join hands with Slash Info Tech to transform your vision into a digital reality."
      /> */}
    </>
  );
}
