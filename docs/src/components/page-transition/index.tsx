"use client";

import { AnimatePresence, motion } from "framer-motion";
import type { ReactNode } from "react";

interface PageTransitionProps {
  children: ReactNode;
  className?: string;
}

const variants = {
  initial: {
    opacity: 0,
    y: 6
  },
  enter: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.24,
      ease: [0.36, 0.66, 0.6, 1]
    }
  }
};

const PageTransition = ({ children, className }: PageTransitionProps) => (
  <AnimatePresence>
    <motion.section
      initial="initial"
      animate="enter"
      variants={variants}
      className={className}
    >
      {children}
    </motion.section>
  </AnimatePresence>
);

export default PageTransition;
