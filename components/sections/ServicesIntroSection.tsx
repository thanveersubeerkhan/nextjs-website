import Button from '@/components/ui/Button';

export default function ServicesIntroSection() {
    return (
        <section className="section-padding bg-background relative overflow-hidden">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px] -z-10"></div>
            <div className="container max-w-4xl text-center relative z-10">
                <h2 className="text-4xl md:text-6xl font-black text-foreground mb-8 leading-[1.1] uppercase tracking-tighter">
                    Empowering Your Digital Success with <span className="text-primary italic">Smart, Scalable, and Creative Solutions.</span>
                </h2>
                <p className="text-lg md:text-xl text-muted-foreground mb-12 leading-relaxed max-w-3xl mx-auto font-medium">
                    At <strong className="text-foreground">Slash Info Tech</strong>, we provide cutting-edge web and digital solutions designed to transform your ideas into engaging online experiences. Our team blends <strong className="text-primary italic">innovation, expertise, and precision</strong> to deliver solutions that not only look great but perform flawlessly across all platforms.
                </p>
                <div className="flex justify-center">
                    <Button size="lg" className="rounded-full px-12 py-8 text-lg font-black uppercase tracking-widest shadow-[0_20px_40px_-12px_rgba(var(--primary),0.3)] hover:shadow-[0_30px_60px_-12px_rgba(var(--primary),0.4)] transition-all duration-500 hover:-translate-y-1">
                        Let's Talk
                    </Button>
                </div>
            </div>
        </section>
    );
}
