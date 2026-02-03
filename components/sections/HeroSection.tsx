import Button from '@/components/ui/Button';
import Image from 'next/image';

export default function HeroSection() {
    return (
        <section className="relative overflow-hidden bg-background pt-32 pb-20 md:pt-40 md:pb-32 lg:pt-48 lg:pb-40 min-h-[90vh] flex items-center transition-colors duration-500">
            {/* Background Gradient - subtly shifts with theme */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/5 dark:from-primary/10 dark:via-transparent dark:to-primary/10"></div>

            <div className="container relative z-10">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                    <div className="text-center lg:text-left">
                        <div className="inline-block mb-6 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full">
                            <span className="text-primary text-sm font-bold">Technology That Works</span>
                        </div>
                        <h1 className="font-black text-foreground leading-[1.1] mb-6 animate-in fade-in slide-in-from-left duration-700 tracking-tight text-4xl md:text-6xl lg:text-7xl">
                            SLASH <span className="text-primary">INFO TECH</span>
                        </h1>
                        <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto lg:mx-0 leading-relaxed animate-in fade-in slide-in-from-left duration-1000 font-medium">
                            We empower businesses with cutting-edge technology, from web development to custom software solutions. Based in Erode and Coimbatore, we deliver excellence globally.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-in fade-in slide-in-from-bottom duration-1000">
                            <Button size="lg" className="rounded-full px-10 shadow-2xl shadow-primary/20 hover:scale-105 transition-transform font-black">Get a Quote</Button>
                            <Button variant="outline" size="lg" className="rounded-full px-10 font-black transition-all">Learn More</Button>
                        </div>
                    </div>

                    <div className="relative aspect-square max-w-[500px] mx-auto lg:max-w-none w-full animate-in fade-in zoom-in duration-1000">
                        <div className="absolute inset-0 bg-primary/20 rounded-full blur-[120px] animate-pulse"></div>
                        <div className="relative border-4 border-border/50 rounded-3xl overflow-hidden shadow-2xl group">
                            <Image
                                src="/hero-bg.png"
                                alt="Digital Transformation Illustration"
                                width={600}
                                height={600}
                                className="object-cover transition-transform group-hover:scale-110 duration-1000"
                                priority
                            />
                            <div className="absolute bottom-6 left-6 right-6 bg-background/80 backdrop-blur-xl p-6 rounded-2xl border border-border">
                                <p className="text-xs font-black text-primary uppercase tracking-widest mb-1">Slash Excellence</p>
                                <p className="text-sm font-black text-foreground uppercase tracking-tight">Top-Rated Web Development in Erode & Coimbatore</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Abstract Background Design */}
            <div className="absolute top-0 right-0 -mr-20 -mt-20 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl opacity-50 z-0"></div>
            <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-[400px] h-[400px] bg-primary/5 rounded-full blur-3xl opacity-50 z-0"></div>
        </section>
    );
}
