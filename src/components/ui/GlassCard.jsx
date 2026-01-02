import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

const GlassCard = ({
    children,
    className,
    hoverEffect = false,
    ...props
}) => {
    return (
        <motion.div
            className={cn(
                "relative overflow-hidden rounded-card border border-white/5 bg-white/5 backdrop-blur-xl",
                "transition-all duration-300",
                hoverEffect && "hover:bg-white/10 hover:border-white/20 hover:shadow-[0_8px_32px_0_rgba(31,38,135,0.37)]",
                className
            )}
            {...props}
        >
            {/* Optional: Noise texture or gradient overlay could go here */}
            <div className="relative z-10 h-full">
                {children}
            </div>
        </motion.div>
    );
};

export default GlassCard;
