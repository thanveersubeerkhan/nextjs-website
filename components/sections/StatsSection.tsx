import { stats } from '@/data/stats';
import StatCard from '@/components/ui/StatCard';

export default function StatsSection() {
    return (
        <section className="py-12 bg-background transition-colors duration-500">
            <div className="container">
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
                    {stats.map((stat, index) => (
                        <div key={stat.label} className="flex flex-col items-center">
                            <StatCard {...stat} />
                            {index < stats.length - 1 && (
                                <div className="hidden lg:block absolute right-0 top-1/2 -translate-y-1/2 h-12 w-px bg-border"></div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
