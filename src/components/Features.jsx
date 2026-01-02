import React from 'react';
import { motion } from 'framer-motion';
import SectionWrapper from './ui/SectionWrapper';
import GlassCard from './ui/GlassCard';
import { ScanFace, Share2, Server, Camera, Heart, Users } from 'lucide-react';

const Features = () => {
    const features = [
        {
            title: "AI Face Discovery",
            description: "Our proprietary AI scans thousands of event photos in milliseconds to find your guests instantly.",
            icon: <ScanFace className="w-8 h-8 text-blue-400" />,
            colSpan: "md:col-span-2",
            bgImage: "bg-gradient-to-br from-blue-900/20 to-black" // Placeholder for AI scanning visual
        },
        {
            title: "Instant Sharing",
            description: "Guests scan a QR code, take a selfie, and get their photos instantly.",
            icon: <Share2 className="w-8 h-8 text-green-400" />,
            colSpan: "md:col-span-1",
            bgImage: "bg-gradient-to-br from-green-900/20 to-black"
        },
        {
            title: "Enterprise Reliability",
            description: "99.9% Uptime guarantee for your critical events.",
            icon: <Server className="w-8 h-8 text-purple-400" />,
            colSpan: "md:col-span-1",
            bgImage: "bg-gradient-to-br from-purple-900/20 to-black"
        },
        {
            title: "Social Impact",
            description: "Boost your event's social reach as guests share their branded memories.",
            icon: <Heart className="w-8 h-8 text-red-400" />,
            colSpan: "md:col-span-2",
            bgImage: "bg-gradient-to-br from-red-900/20 to-black"
        }
    ];

    return (
        <SectionWrapper id="features">
            <div className="mb-16 text-center max-w-2xl mx-auto">
                <h2 className="text-3xl md:text-5xl font-bold mb-6">Built for Modern Events</h2>
                <p className="text-gray-400">
                    From weddings to corporate summits, Fotonest scales with your needs.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {features.map((feature, idx) => (
                    <GlassCard
                        key={idx}
                        hoverEffect={true}
                        className={`p-8 flex flex-col justify-between min-h-[300px] ${feature.colSpan} group`}
                    >
                        {/* Background Placeholder */}
                        <div className={`absolute inset-0 opacity-20 transition-opacity duration-500 group-hover:opacity-30 ${feature.bgImage}`} />

                        <div className="relative z-10">
                            <div className="mb-4 inline-block p-3 rounded-xl bg-white/5 border border-white/10 backdrop-blur-md">
                                {feature.icon}
                            </div>
                            <h3 className="text-2xl font-bold mb-2">{feature.title}</h3>
                            <p className="text-gray-400 leading-relaxed">{feature.description}</p>
                        </div>

                        {/* UI Mockup Placeholder (Bottom right) */}
                        <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-white/5 rounded-full blur-2xl group-hover:bg-primary-500/10 transition-colors duration-500" />
                    </GlassCard>
                ))}
            </div>
        </SectionWrapper>
    );
};

export default Features;
