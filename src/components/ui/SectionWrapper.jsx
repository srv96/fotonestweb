import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

const SectionWrapper = ({
    children,
    className,
    id,
    fullWidth = false
}) => {
    return (
        <section
            id={id}
            className={cn(
                "relative w-full py-20 md:py-32 overflow-hidden",
                className
            )}
        >
            <div className={cn(
                "mx-auto px-4 md:px-8",
                !fullWidth && "max-w-7xl"
            )}>
                {children}
            </div>
        </section>
    );
};

export default SectionWrapper;
