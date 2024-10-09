"use client";

import { motion, AnimatePresence } from "framer-motion";

type FramerMotionProps = {
  children: React.ReactNode;
  className?: string;
  x?: number;
  y?: number;
  delay?: number;
  duration?: number;
};

const MotionContainer = ({
  children,
  delay = 0.25,
  x = 0,
  y = 0,
  duration = 0.3,
  className,
}: FramerMotionProps) => {

  const initialStyle = {
    opacity: 0,
    x,
    y,
  };

  const animateStyle = {
    opacity: 1,
    x: 0,
    y: 0,
  };

  const exitStyle = {
    opacity: 0,
    y: 0,
  };

  return (
    <AnimatePresence>
      <motion.div
        initial={initialStyle}
        animate={animateStyle}
        exit={exitStyle}
        transition={{ delay, duration }}
        className={className}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
};

export default MotionContainer;
