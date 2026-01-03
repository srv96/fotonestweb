import React from 'react';
import ReactDOM from 'react-dom';
import { X, Shield, FileText, RefreshCw } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const pages = {
    privacy: {
        title: "Privacy Policy",
        icon: Shield,
        content: (
            <div className="space-y-4 text-gray-300 text-sm leading-relaxed">
                <p><strong>Effective Date:</strong> January 1, 2024</p>
                <p>At Fotonest, we respect your privacy and are committed to protecting your personal data.</p>

                <h4 className="text-white font-medium mt-4">1. Information We Collect</h4>
                <p>We collect information you provide directly to us, such as when you create an account, subscribe to our services, or communicate with us.</p>

                <h4 className="text-white font-medium mt-4">2. How We Use Your Information</h4>
                <p>We use your information to provide, maintain, and improve our services, process transactions, and send you related information.</p>

                <h4 className="text-white font-medium mt-4">3. Photo Data</h4>
                <p>Photos uploaded to our platform are processed solely for the purpose of distribution to event guests. We do not use your photos for model training without explicit consent.</p>

                <h4 className="text-white font-medium mt-4">4. Contact Us</h4>
                <p>If you have any questions about this Privacy Policy, please contact us at souravdash231996@gmail.com.</p>
            </div>
        )
    },
    terms: {
        title: "Terms & Conditions",
        icon: FileText,
        content: (
            <div className="space-y-4 text-gray-300 text-sm leading-relaxed">
                <p><strong>Last Updated:</strong> January 1, 2024</p>
                <p>Welcome to Fotonest. By accessing or using our website, you agree to be bound by these Terms.</p>

                <h4 className="text-white font-medium mt-4">1. Use of Services</h4>
                <p>You agree to use our services only for lawful purposes along with the Terms & Conditions of Fotonest.</p>

                <h4 className="text-white font-medium mt-4">2. User Accounts</h4>
                <p>You are responsible for safeguarding the password that you use to access the service and for any activities or actions under your password.</p>

                <h4 className="text-white font-medium mt-4">3. Intellectual Property</h4>
                <p>The service and its original content, features, and functionality are and will remain the exclusive property of Fotonest.</p>
            </div>
        )
    },
    refund: {
        title: "Cancellation & Refunds",
        icon: RefreshCw,
        content: (
            <div className="space-y-4 text-gray-300 text-sm leading-relaxed">
                <p><strong>Policy Clarity:</strong> We strive to be transparent with our billing.</p>

                <h4 className="text-white font-medium mt-4">1. Refunds</h4>
                <p>As Fotonest provides digital services (hosting and AI processing), <strong>we do not offer refunds once the service has been successfully rendered</strong> or the event has concluded.</p>

                <h4 className="text-white font-medium mt-4">2. Cancellations</h4>
                <p>You may cancel a scheduled service or booking up to <strong>48 hours before the scheduled start time</strong> for a full refund. Cancellations made within 48 hours of the event are non-refundable.</p>

                <h4 className="text-white font-medium mt-4">3. Processing Issues</h4>
                <p>If there is a technical error on our end that prevents service delivery, a full or partial refund will be issued upon investigation.</p>
            </div>
        )
    }
};

const LegalOverlay = ({ type, onClose }) => {
    if (!type) return null;

    const page = pages[type] || pages.privacy;
    const Icon = page.icon;

    return ReactDOM.createPortal(
        <AnimatePresence>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 z-[9999] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
                onClick={onClose}
            >
                <motion.div
                    initial={{ scale: 0.95, opacity: 0, y: 20 }}
                    animate={{ scale: 1, opacity: 1, y: 0 }}
                    exit={{ scale: 0.95, opacity: 0, y: 20 }}
                    className="relative w-full max-w-lg max-h-[80vh] overflow-hidden rounded-2xl bg-[#0F172A] border border-white/10 shadow-2xl"
                    onClick={(e) => e.stopPropagation()}
                >
                    {/* Header */}
                    <div className="flex items-center justify-between p-6 border-b border-white/5 bg-white/5">
                        <div className="flex items-center gap-3">
                            <div className="p-2 rounded-lg bg-primary-500/20 text-primary-400">
                                <Icon className="w-5 h-5" />
                            </div>
                            <h3 className="text-xl font-bold text-white">{page.title}</h3>
                        </div>
                        <button
                            onClick={onClose}
                            className="p-2 rounded-full hover:bg-white/10 text-gray-400 hover:text-white transition-colors"
                        >
                            <X className="w-5 h-5" />
                        </button>
                    </div>

                    {/* Content */}
                    <div className="p-6 overflow-y-auto max-h-[60vh] custom-scrollbar">
                        {page.content}
                    </div>

                    {/* Footer */}
                    <div className="p-6 border-t border-white/5 bg-white/[0.02]">
                        <button
                            onClick={onClose}
                            className="w-full py-3 rounded-xl bg-white/10 hover:bg-white/15 text-white font-medium transition-colors border border-white/10"
                        >
                            Close
                        </button>
                    </div>
                </motion.div>
            </motion.div>
        </AnimatePresence>,
        document.body
    );
};

export default LegalOverlay;
