"use client";

import { useState } from 'react';
import Button from '@/components/ui/Button';
import Input from '@/components/ui/Input';
import Textarea from '@/components/ui/Textarea';
import { services } from '@/data/services';

export default function ContactFormSection() {
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitted(true);
    };

    if (isSubmitted) {
        return (
            <div className="bg-card border border-border p-12 rounded-3xl text-center shadow-xl animate-in fade-in zoom-in duration-500">
                <div className="w-20 h-20 bg-primary/10 text-primary rounded-full flex items-center justify-center mx-auto mb-6">
                    <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-foreground">Message Received!</h3>
                <p className="text-muted-foreground mb-8">Thank you for reaching out. Our team will get back to you within 24 hours.</p>
                <Button onClick={() => setIsSubmitted(false)} className="rounded-full px-8">Send Another Message</Button>
            </div>
        );
    }

    return (
        <div className="bg-card border border-border p-6 md:p-12 rounded-3xl shadow-xl transition-all">
            <h3 className="text-2xl font-bold mb-8 text-foreground">Request Free Consultation</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-5">
                    <Input
                        label="First Name"
                        placeholder="Your Name"
                        required
                        className="rounded-xl border-border/50 focus:ring-primary/20 focus:border-primary h-12 bg-background/50 hover:bg-background transition-colors"
                    />
                    <Input
                        label="Email Address"
                        type="email"
                        placeholder="email@example.com"
                        required
                        className="rounded-xl border-border/50 focus:ring-primary/20 focus:border-primary h-12 bg-background/50 hover:bg-background transition-colors"
                    />
                    <Input
                        label="Phone Number"
                        type="tel"
                        placeholder="+91 98765 43210"
                        required
                        className="rounded-xl border-border/50 focus:ring-primary/20 focus:border-primary h-12 bg-background/50 hover:bg-background transition-colors"
                    />
                </div>

                <Button type="submit" className="w-full rounded-2xl py-6 text-lg font-bold flex items-center justify-center space-x-2 group mt-8 shadow-lg shadow-primary/25 hover:shadow-primary/40 hover:scale-[1.02] transition-all duration-300">
                    <span>Submit Request</span>
                    <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                </Button>
            </form>
        </div>
    );
}
