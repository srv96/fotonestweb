import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

const Button = ({
    children,
    className,
    variant = 'primary', // 'primary' | 'secondary' | 'ghost'
    size = 'md', // 'sm' | 'md' | 'lg'
    onClick,
    ...props
}) => {

    const variants = {
        primary: "bg-gradient-primary text-white shadow-[0_4px_12px_rgba(59,130,246,0.5)] border-transparent hover:shadow-[0_8px_24px_rgba(59,130,246,0.6)]",
        secondary: "bg-transparent border border-gray-600 text-white hover:bg-white/5 hover:border-gray-400",
        ghost: "bg-transparent hover:bg-white/5 text-gray-300 hover:text-white"
    };

    const sizes = {
        sm: "px-4 py-2 text-sm",
        md: "px-6 py-3 text-base",
        lg: "px-8 py-4 text-lg font-semibold"
    };

    return (
        <motion.button
            whileTap={{ scale: 0.98 }}
            whileHover={{ scale: 1.02 }}
            className={cn(
                "relative rounded-pill font-medium transition-all duration-300 outline-none focus:ring-2 focus:ring-primary-500/50",
                variants[variant],
                sizes[size],
                className
            )}
            onClick={onClick}
            {...props}
        >
            {children}
        </motion.button>
    );
};

export default Button;
