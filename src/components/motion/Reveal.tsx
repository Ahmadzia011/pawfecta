"use client";

import { motion, useReducedMotion, type MotionStyle } from "motion/react";
import type { ReactNode } from "react";
import { PREMIUM_EASE } from "../../constants/motion.constants";

type RevealDirection = "up" | "down" | "left" | "right";

type RevealProps = {
  as?: "article" | "div";
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: RevealDirection;
  distance?: number;
  duration?: number;
  hoverLift?: boolean;
  scale?: number;
  style?: MotionStyle;
};

function getOffset(direction: RevealDirection, distance: number) {
  switch (direction) {
    case "down":
      return { x: 0, y: -distance };
    case "left":
      return { x: distance, y: 0 };
    case "right":
      return { x: -distance, y: 0 };
    default:
      return { x: 0, y: distance };
  }
}

function useRevealProps({
  delay = 0,
  direction = "up",
  distance = 24,
  duration = 0.85,
  hoverLift = false,
  scale = 0.96,
}: Omit<RevealProps, "as" | "children" | "className" | "style">) {
  const shouldReduceMotion = useReducedMotion();
  const offset = getOffset(direction, distance);

  return {
    initial: shouldReduceMotion
      ? false
      : { opacity: 0, scale, x: offset.x, y: offset.y },
    whileInView: { opacity: 1, scale: 1, x: 0, y: 0 },
    whileHover:
      hoverLift && !shouldReduceMotion
        ? { y: -6, transition: { duration: 0.3, ease: PREMIUM_EASE } }
        : undefined,
    viewport: { once: true, amount: 0.2 },
    transition: { duration, delay, ease: PREMIUM_EASE },
  };
}

export function Reveal({
  as = "div",
  children,
  className,
  style,
  ...options
}: RevealProps) {
  const revealProps = useRevealProps(options);

  return (
    <motion.div className={className} style={style} {...revealProps}>
      {children}
    </motion.div>
  );
}
