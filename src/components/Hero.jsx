import React from 'react';
import { motion } from 'framer-motion';
import SectionWrapper from './ui/SectionWrapper';
import Button from './ui/Button';
import GlassCard from './ui/GlassCard';
import { ArrowRight, Sparkles, Zap, Smile, ScanFace, ShieldCheck, Lock, Cloud, Download, Globe, Share2, BadgeCheck, Rocket } from 'lucide-react';

const Hero = () => {
    return (
        <SectionWrapper className="pt-32 pb-10 md:pt-48 md:pb-12 flex flex-col md:flex-row items-center gap-12 md:gap-20">

            {/* Text Content */}
            <div className="flex-1 text-center md:text-left z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 mb-6">
                        <Sparkles className="w-4 h-4 text-primary-500" />
                        <span className="text-xs font-medium text-gray-300 uppercase tracking-wider">The Intelligent Photography Platform</span>
                    </div>

                    <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6 bg-clip-text text-transparent bg-gradient-to-b from-white to-white/60">
                        Relive Your Best <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-500 to-indigo-500">Moments.</span>
                    </h1>

                    <p className="text-lg md:text-xl text-gray-400 mb-8 max-w-2xl mx-auto md:mx-0 leading-relaxed">
                        Intelligent photo discovery for events powered by next-gen AI.
                        Manage your FotoNest services with enterprise-grade control and give your attendees
                        instant access to their memories.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center gap-4 justify-center md:justify-start">
                        <a href="https://fotonest-admin-347198183294.us-central1.run.app/" target="_blank" rel="noopener noreferrer">
                            <Button size="lg" className="w-full sm:w-auto gap-2 flex items-center">
                                Get Started <ArrowRight className="w-4 h-4" />
                            </Button>
                        </a>
                        {/* Added smooth scroll to features instead of "Demo" */}
                        <Button
                            size="lg"
                            variant="secondary"
                            className="w-full sm:w-auto"
                            onClick={() => document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' })}
                        >
                            Explore Features
                        </Button>
                    </div>
                </motion.div>
            </div>

            {/* Visual Content (Organic Word Cloud) */}
            <div className="flex-1 relative w-full h-[400px] md:h-[500px] flex items-center justify-center pointer-events-none select-none">

                {/* Living Background Pulse */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-primary-500/10 rounded-full blur-[100px] -z-10 animate-pulse" />

                <div className="relative w-full h-full">
                    {/* Desktop Layout */}
                    <div className="hidden md:block w-full h-full">
                        {[
                            { text: "Shared Smiles", icon: <Smile className="w-4 h-4 text-yellow-400" />, x: "10%", y: "20%", scale: 1.1, delay: 0 },
                            { text: "Smart Discovery", icon: <Sparkles className="w-4 h-4 text-blue-400" />, x: "65%", y: "15%", scale: 1.2, delay: 1 },
                            { text: "Precision AI", icon: <ScanFace className="w-4 h-4 text-purple-400" />, x: "40%", y: "45%", scale: 1.3, delay: 2 },
                            { text: "Instant Match", icon: <Zap className="w-4 h-4 text-yellow-300" />, x: "15%", y: "55%", scale: 1.0, delay: 1.5 },
                            { text: "Privacy First", icon: <ShieldCheck className="w-4 h-4 text-green-400" />, x: "75%", y: "65%", scale: 1.1, delay: 0.5 },
                            { text: "Secure Vault", icon: <Lock className="w-4 h-4 text-red-400" />, x: "80%", y: "30%", scale: 0.9, delay: 2.5 },
                            { text: "No Data Loss", icon: <Cloud className="w-4 h-4 text-cyan-400" />, x: "25%", y: "80%", scale: 1.05, delay: 3 },
                            { text: "One-Click Save", icon: <Download className="w-4 h-4 text-indigo-400" />, x: "55%", y: "85%", scale: 1.0, delay: 1.2 },
                            { text: "Anytime Access", icon: <Globe className="w-4 h-4 text-blue-300" />, x: "5%", y: "40%", scale: 0.9, delay: 2.8 },
                            { text: "Effortless Sharing", icon: <Share2 className="w-4 h-4 text-pink-400" />, x: "85%", y: "50%", scale: 1.15, delay: 0.8 },
                            { text: "Trusted Platform", icon: <BadgeCheck className="w-4 h-4 text-emerald-400" />, x: "35%", y: "10%", scale: 0.95, delay: 3.5 },
                            { text: "Zero Lag", icon: <Rocket className="w-4 h-4 text-orange-400" />, x: "50%", y: "65%", scale: 1.1, delay: 1.8 },
                        ].map((item, i) => (
                            <motion.div
                                key={'desktop-' + i}
                                initial={{ opacity: 0, scale: 0 }}
                                animate={{
                                    opacity: 1,
                                    scale: [item.scale, item.scale * 1.05, item.scale],
                                    y: [0, -20, 0],
                                    x: [0, 10, 0],
                                }}
                                transition={{
                                    opacity: { duration: 0.8, delay: item.delay * 0.5 },
                                    scale: { duration: 4, repeat: Infinity, repeatType: "reverse", ease: "easeInOut", delay: i * 0.2 },
                                    y: { duration: 6, repeat: Infinity, repeatType: "reverse", ease: "easeInOut", delay: i * 0.3 },
                                    x: { duration: 7, repeat: Infinity, repeatType: "reverse", ease: "easeInOut", delay: i * 0.4 }
                                }}
                                style={{ left: item.x, top: item.y }}
                                className="absolute z-10"
                            >
                                <div className="relative group cursor-default">
                                    <div className="absolute inset-0 bg-primary-500/20 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                    <GlassCard className="px-5 py-3 !rounded-full bg-white/5 backdrop-blur-sm border-white/10 shadow-[0_4px_20px_rgba(0,0,0,0.1)] hover:bg-white/10 hover:border-white/20 hover:scale-105 transition-all duration-300 flex items-center gap-3">
                                        {item.icon}
                                        <span className="text-sm font-medium text-gray-200 whitespace-nowrap group-hover:text-white transition-colors">{item.text}</span>
                                    </GlassCard>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    {/* Mobile Layout (Optimized) */}
                    <div className="block md:hidden w-full h-full">
                        {[
                            { text: "Shared Smiles", icon: <Smile className="w-3 h-3 text-yellow-400" />, x: "5%", y: "5%", scale: 0.9, delay: 0 },
                            { text: "Smart Discovery", icon: <Sparkles className="w-3 h-3 text-blue-400" />, x: "45%", y: "15%", scale: 1.0, delay: 1 },
                            { text: "Precision AI", icon: <ScanFace className="w-3 h-3 text-purple-400" />, x: "10%", y: "25%", scale: 1.0, delay: 2 },
                            { text: "Instant Match", icon: <Zap className="w-3 h-3 text-yellow-300" />, x: "55%", y: "35%", scale: 0.9, delay: 1.5 },
                            { text: "Privacy First", icon: <ShieldCheck className="w-3 h-3 text-green-400" />, x: "5%", y: "45%", scale: 0.95, delay: 0.5 },
                            { text: "Secure Vault", icon: <Lock className="w-3 h-3 text-red-400" />, x: "50%", y: "55%", scale: 0.8, delay: 2.5 },
                            { text: "No Data Loss", icon: <Cloud className="w-3 h-3 text-cyan-400" />, x: "15%", y: "65%", scale: 0.9, delay: 3 },
                            { text: "One-Click Save", icon: <Download className="w-3 h-3 text-indigo-400" />, x: "60%", y: "75%", scale: 0.85, delay: 1.2 },
                            { text: "Anytime Access", icon: <Globe className="w-3 h-3 text-blue-300" />, x: "5%", y: "85%", scale: 0.8, delay: 2.8 },
                            // Reduced items for cleanliness
                            { text: "Trusted Platform", icon: <BadgeCheck className="w-3 h-3 text-emerald-400" />, x: "55%", y: "85%", scale: 0.85, delay: 3.5 },
                        ].map((item, i) => (
                            <motion.div
                                key={'mobile-' + i}
                                initial={{ opacity: 0, scale: 0 }}
                                animate={{
                                    opacity: 1,
                                    scale: [item.scale, item.scale * 1.05, item.scale],
                                    y: [0, -10, 0],
                                    x: [0, 5, 0],
                                }}
                                transition={{
                                    opacity: { duration: 0.8, delay: item.delay * 0.5 },
                                    scale: { duration: 4, repeat: Infinity, repeatType: "reverse", ease: "easeInOut", delay: i * 0.2 },
                                    y: { duration: 5, repeat: Infinity, repeatType: "reverse", ease: "easeInOut", delay: i * 0.3 },
                                    x: { duration: 6, repeat: Infinity, repeatType: "reverse", ease: "easeInOut", delay: i * 0.4 }
                                }}
                                style={{ left: item.x, top: item.y }}
                                className="absolute z-10"
                            >
                                <div className="relative group cursor-default">
                                    <div className="absolute inset-0 bg-primary-500/20 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                    <GlassCard className="px-3 py-2 !rounded-full bg-white/5 backdrop-blur-sm border-white/10 shadow-[0_4px_20px_rgba(0,0,0,0.1)] hover:bg-white/10 hover:border-white/20 hover:scale-105 transition-all duration-300 flex items-center gap-2">
                                        {item.icon}
                                        <span className="text-xs font-medium text-gray-200 whitespace-nowrap group-hover:text-white transition-colors">{item.text}</span>
                                    </GlassCard>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </SectionWrapper>
    );
};

export default Hero;
