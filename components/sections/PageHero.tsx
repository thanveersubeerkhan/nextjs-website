type PageHeroProps = {
    title: string;
    subtitle?: string;
    className?: string;
    backgroundImage?: string;
    gradientOverlay?: string;
};

export default function PageHero({ title, subtitle, className = '', backgroundImage, gradientOverlay }: PageHeroProps) {
    return (
        <section className={`relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden ${className}`}>
            {/* Background with overlay */}
            <div className="absolute inset-0 z-0">
                <div className={`absolute inset-0 bg-blue-900 ${gradientOverlay ? '' : 'bg-blue-900'}`}>
                    {/* Only show default blue if needed, mostly covered by overlay */}
                </div>

                {backgroundImage ? (
                    <div className="absolute inset-0 z-0">
                        <img src={backgroundImage} alt={title} className="w-full h-full object-cover opacity-20 mix-blend-overlay" />
                    </div>
                ) : (
                    <div className="absolute inset-0 bg-[url('https://ryanquantum.com/wp-content/uploads/2025/11/pexels-vladbagacian-3987066-scaled.jpg')] bg-cover bg-center opacity-10 mix-blend-overlay"></div>
                )}

                <div className={`absolute inset-0 opacity-90 ${gradientOverlay || 'bg-gradient-to-br from-blue-900 via-indigo-900 to-slate-900'}`}></div>
            </div>

            <div className="container relative z-10 text-center">
                <h1 className="text-4xl md:text-6xl font-black mb-6 animate-in fade-in slide-in-from-bottom duration-500 text-white tracking-tight uppercase">
                    {title}
                </h1>
                {subtitle && (
                    <p className="text-lg md:text-xl text-blue-100 max-w-2xl mx-auto font-medium animate-in fade-in slide-in-from-bottom duration-700 leading-relaxed">
                        {subtitle}
                    </p>
                )}
            </div>

            {/* Accent Glow */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1/2 h-px bg-gradient-to-r from-transparent via-blue-400/50 to-transparent"></div>
        </section>
    );
}
