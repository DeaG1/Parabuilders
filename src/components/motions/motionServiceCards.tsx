// components/Motion/MotionServiceCard.tsx
"use client";
import { motion } from "framer-motion";
import { ReactNode } from "react";

interface MotionServiceCardProps {
  isLeft: boolean;
  children: ReactNode;
}

export default function MotionServiceCard({ isLeft, children }: MotionServiceCardProps) {
  return (
    <motion.div
      initial={{ x: isLeft ? -100 : 100, opacity: 0 }}
      whileInView={{ x: 0, opacity: 1 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}
