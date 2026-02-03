import React from 'react';

type CardProps = {
    children: React.ReactNode;
    className?: string;
};

export default function Card({ children, className = '' }: CardProps) {
    return (
        <div className={`bg-card text-card-foreground rounded-3xl shadow-sm border border-border p-6 transition-all duration-500 hover:shadow-xl hover:border-primary/50 group ${className}`}>
            {children}
        </div>
    );
}
