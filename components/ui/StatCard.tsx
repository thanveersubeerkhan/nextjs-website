import { Stat } from '@/data/stats';

export default function StatCard({ value, label }: Stat) {
    return (
        <div className="text-center p-6 transition-all duration-300 hover:scale-110">
            <div className="text-4xl md:text-5xl font-black text-primary mb-2 transition-colors drop-shadow-sm">{value}</div>
            <div className="text-muted-foreground font-bold uppercase tracking-widest text-[10px] md:text-xs transition-colors">{label}</div>
        </div>
    );
}
