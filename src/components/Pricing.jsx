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
            name: "Starter",
            price: "₹499",
            period: "/event",
            description: "Perfect for single-day events.",
            features: ["1 Day Duration", "Up to 500 Guests", "Basic AI Discovery", "Standard Support"],
            highlight: false
        },
        {
            name: "Professional",
            price: "₹799",
            period: "/event",
            description: "Our most popular plan for weddings & parties.",
            features: ["3 Days Duration", "Up to 2000 Guests", "Priority AI Processing", "Branded Watermarks", "Email Support"],
            highlight: true
        },
        {
            name: "Enterprise",
            price: "₹1499",
            period: "/week",
            description: "For festivals and multi-day conferences.",
            features: ["7 Days Duration", "Unlimited Guests", "Custom Branding", "dedicated Account Manager", "API Access"],
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

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center max-w-6xl mx-auto">
                {plans.map((plan, idx) => (
                    <GlassCard
                        key={idx}
                        className={cn(
                            "p-8 transition-transform duration-300",
                            plan.highlight ? "border-primary-500/50 shadow-[0_0_40px_rgba(59,130,246,0.1)] scale-105 z-10 relative" : "opacity-80 hover:opacity-100 hover:scale-105"
                        )}
                    >
                        {plan.highlight && (
                            <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-primary px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
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
