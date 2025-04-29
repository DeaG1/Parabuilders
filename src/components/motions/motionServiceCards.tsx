"use client";
import { motion } from "framer-motion";
import { ReactNode } from "react";

interface MotionServiceCardProps {
  isLeft: boolean;
  children: ReactNode;
}

export default function MotionServiceCard({ isLeft, children }: MotionServiceCardProps) {
  const variants = {
    hidden: { x: isLeft ? -100 : 100, opacity: 0 },
    visible: { x: 0, opacity: 1 },
    exit: { x: isLeft ? -100 : 100, opacity: 0 },
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      exit="exit"
      variants={variants}
      viewport={{ once: false, amount: 0.4,  }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}
