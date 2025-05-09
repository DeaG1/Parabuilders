"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface FadeUpStaggerProps {
  children: ReactNode;
  delayOrder?: number;
}

export function FadeUpStagger({ children, delayOrder = 0 }: FadeUpStaggerProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ 
        duration: 0.6,
        ease: "easeOut",
        delay: delayOrder * 0.15
      }}
    >
      {children}
    </motion.div>
  );
}
