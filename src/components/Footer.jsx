import React, { useState } from 'react';
import { cn } from '@/lib/utils';
import { Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';
import LegalOverlay from './ui/LegalOverlay';

const Footer = () => {
    const [legalPage, setLegalPage] = useState(null);

    return (
        <footer className="border-t border-white/10 bg-black/50 backdrop-blur-lg pt-20 pb-10 relative z-20">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-16">

                    {/* Brand */}
                    <div className="col-span-1 md:col-span-1">
                        <div className="flex items-center gap-2 mb-4">
                            <div className="w-6 h-6 rounded-md bg-gradient-to-br from-primary-500 to-primary-600 flex items-center justify-center">
                                <span className="text-white font-bold text-xs">F</span>
                            </div>
                            <span className="text-xl font-bold">Fotonest</span>
                        </div>
                        <p className="text-gray-400 text-sm leading-relaxed mb-6">
                            Empowering photographers and event managers with next-gen AI tools for instant photo discovery.
                        </p>
                    </div>

                    {/* Product Links */}
                    <div>
                        <h4 className="font-bold mb-4 text-white">Product</h4>
                        <ul className="space-y-2 text-sm text-gray-400">
                            <li><a href="#features" className="hover:text-primary-400 transition-colors">Features</a></li>
                            <li><a href="#pricing" className="hover:text-primary-400 transition-colors">Pricing</a></li>
                            <li><a href="#howitworks" className="hover:text-primary-400 transition-colors">How it Works</a></li>
                        </ul>
                    </div>

                    {/* Legal Links (Trigger Overlay) */}
                    <div>
                        <h4 className="font-bold mb-4 text-white">Legal</h4>
                        <ul className="space-y-2 text-sm text-gray-400">
                            <li>
                                <button onClick={() => setLegalPage('privacy')} className="hover:text-primary-400 transition-colors text-left">
                                    Privacy Policy
                                </button>
                            </li>
                            <li>
                                <button onClick={() => setLegalPage('terms')} className="hover:text-primary-400 transition-colors text-left">
                                    Terms & Conditions
                                </button>
                            </li>
                            <li>
                                <button onClick={() => setLegalPage('refund')} className="hover:text-primary-400 transition-colors text-left">
                                    Cancellation & Refunds
                                </button>
                            </li>
                        </ul>
                    </div>

                    {/* Contact Info (Razorpay Requirement) */}
                    <div>
                        <h4 className="font-bold mb-4 text-white">Contact Us</h4>
                        <ul className="space-y-3 text-sm text-gray-400">
                            <li className="flex items-start gap-2">
                                <MapPin className="w-4 h-4 text-primary-500 shrink-0 mt-0.5" />
                                <span>Dhobai Niwas, Nilachakranagar, Titilagarh, Balangir, Odisha, 767033</span>
                            </li>
                            <li className="flex items-center gap-2">
                                <Mail className="w-4 h-4 text-primary-500 shrink-0" />
                                <a href="mailto:souravdash231996@gmail.com" className="hover:text-white transition-colors">
                                    souravdash231996@gmail.com
                                </a>
                            </li>
                            <li className="flex items-center gap-2">
                                <Phone className="w-4 h-4 text-primary-500 shrink-0" />
                                <a href="tel:+918280189328" className="hover:text-white transition-colors">
                                    +91 82801 89328
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/5 gap-4">
                    <p className="text-xs text-gray-500">
                        © 2024 Fotonest Studio. All rights reserved.
                    </p>
                    <div className="flex gap-4">
                        <a href="#" className="text-gray-500 hover:text-white transition-colors"><Twitter className="w-4 h-4" /></a>
                        <a href="#" className="text-gray-500 hover:text-white transition-colors"><Instagram className="w-4 h-4" /></a>
                        <a href="#" className="text-gray-500 hover:text-white transition-colors"><Linkedin className="w-4 h-4" /></a>
                    </div>
                </div>
            </div>

            {/* Legal Overlay Modal */}
            <LegalOverlay type={legalPage} onClose={() => setLegalPage(null)} />
        </footer>
    );
};

export default Footer;
