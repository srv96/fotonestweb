import React from 'react';
import { motion } from 'framer-motion';
import SectionWrapper from './ui/SectionWrapper';
import GlassCard from './ui/GlassCard';
import { QrCode, UploadCloud, Smartphone, ArrowRight } from 'lucide-react';

const steps = [
    {
        id: 1,
        title: "Schedule & Generate",
        description: "Create a time-bound event service. The system instantly generates two unique QR codes: one for your team, one for your guests.",
        icon: <QrCode className="w-8 h-8 text-blue-400" />
    },
    {
        id: 2,
        title: "Capture & Sync",
        description: "Photographers and managers scan the Creator QR to upload event photos directly from local storage or cloud drives.",
        icon: <UploadCloud className="w-8 h-8 text-purple-400" />
    },
    {
        id: 3,
        title: "Scan & Relive",
        description: "Guests scan the Event QR, snap a quick selfie, and our AI instantly filters and delivers their personal gallery.",
        icon: <Smartphone className="w-8 h-8 text-pink-400" />
    }
];

const HowItWorks = () => {
    return (
        <SectionWrapper id="how-it-works" className="pt-10 md:pt-20">
            <div className="text-center mb-16">
                <h2 className="text-3xl md:text-5xl font-bold mb-6">How Fotonest Works</h2>
                <p className="text-gray-400 max-w-2xl mx-auto">
                    A seamless flow from the first click to the final memory.
                </p>
            </div>

            <div className="relative">
                {/* Connecting Line (Desktop) */}
                <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 -translate-y-1/2 z-0" />

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
                    {steps.map((step, index) => (
                        <motion.div
                            key={step.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2 }}
                        >
                            <GlassCard className="p-8 h-full flex flex-col items-center text-center hover:border-primary-500/30 transition-colors">
                                <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-6 shadow-[0_0_20px_rgba(255,255,255,0.05)]">
                                    {step.icon}
                                </div>

                                <div className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-white/10 text-sm font-bold mb-4 border border-white/10">
                                    {step.id}
                                </div>

                                <h3 className="text-xl font-bold mb-4">{step.title}</h3>
                                <p className="text-gray-400 leading-relaxed text-sm">
                                    {step.description}
                                </p>
                            </GlassCard>
                        </motion.div>
                    ))}
                </div>
            </div>
        </SectionWrapper>
    );
};

export default HowItWorks;
