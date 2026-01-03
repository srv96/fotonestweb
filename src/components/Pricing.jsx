import React, { useState } from 'react';
import SectionWrapper from './ui/SectionWrapper';
import GlassCard from './ui/GlassCard';
import Button from './ui/Button';
import { Check } from 'lucide-react';
import { cn } from '@/lib/utils';

const Pricing = () => {
    const [billingCycle, setBillingCycle] = useState('monthly'); // Just for UI toggle, though pricing is fixed in prompt

    const plans = [
        {
            name: "Small",
            price: "₹12",
            period: "/hour",
            description: "For intimate gatherings.",
            features: ["Handle up to 500 Photos", "2-3 Guests at a time", "Standard Support"],
            highlight: false
        },
        {
            name: "Normal",
            price: "₹17",
            period: "/hour",
            description: "Best for weddings & parties.",
            features: ["Handle up to 1000 Photos", "4-6 Guests at a time", "Priority Support"],
            highlight: true
        },
        {
            name: "Large",
            price: "₹25",
            period: "/hour",
            description: "For corporate events.",
            features: ["Handle up to 2000 Photos", "10-12 Guests at a time", "Priority Support"],
            highlight: false
        },
        {
            name: "X-Large",
            price: "₹40",
            period: "/hour",
            description: "For massive festivals.",
            features: ["Handle up to 4000 Photos", "22-24 Guests at a time", "Account Manager"],
            highlight: false
        }
    ];

    return (
        <SectionWrapper id="pricing">
            <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold mb-6">Simple, Transparent Pricing</h2>
                <p className="text-gray-400 max-w-xl mx-auto">
                    Start for free, upgrade when you need to scaling power. No hidden fees.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-start max-w-7xl mx-auto">
                {plans.map((plan, idx) => (
                    <GlassCard
                        key={idx}
                        className={cn(
                            "p-8 transition-transform duration-300",
                            plan.highlight ? "border-primary-500/50 shadow-[0_0_40px_rgba(59,130,246,0.1)] bg-white/10 z-10 relative" : "opacity-80 hover:opacity-100 hover:scale-[1.02]"
                        )}
                    >
                        {plan.highlight && (
                            <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-gradient-primary px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider shadow-lg whitespace-nowrap">
                                Most Popular
                            </div>
                        )}

                        <h3 className="text-xl font-medium text-gray-300 mb-2">{plan.name}</h3>
                        <div className="flex items-baseline gap-1 mb-4">
                            <span className="text-4xl font-bold text-white">{plan.price}</span>
                            <span className="text-sm text-gray-500">{plan.period}</span>
                        </div>
                        <p className="text-sm text-gray-400 mb-8 h-10">{plan.description}</p>

                        <a href="https://fotonest-admin-347198183294.us-central1.run.app/" target="_blank" rel="noopener noreferrer">
                            <Button
                                variant={plan.highlight ? 'primary' : 'secondary'}
                                className="w-full mb-8"
                            >
                                Choose {plan.name}
                            </Button>
                        </a>

                        <ul className="space-y-4">
                            {plan.features.map((feat, i) => (
                                <li key={i} className="flex items-center gap-3 text-sm text-gray-300">
                                    <Check className="w-4 h-4 text-green-400 shrink-0" />
                                    {feat}
                                </li>
                            ))}
                        </ul>
                    </GlassCard>
                ))}
            </div>
        </SectionWrapper>
    );
};

export default Pricing;
