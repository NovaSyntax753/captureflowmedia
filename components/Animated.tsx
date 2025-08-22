"use client"
import { motion } from 'framer-motion';

import { ReactNode } from 'react';

interface AnimatedTitleProps {
  children: ReactNode;
  className?: string;
}

const AnimatedTitle = ({ children, className = '' }: AnimatedTitleProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedTitle; 