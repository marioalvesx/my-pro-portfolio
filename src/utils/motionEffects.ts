/**
 * Motion Effects Utility
 * Reusable Framer Motion animation effects for the project
 */

import { Variants, Transition } from "framer-motion";

// ============================================
// Border Animations
// ============================================

/**
 * Animated border that slides away from right to left on parent hover
 * Usage: Apply to a child span inside a motion element with whileHover state
 */
export const borderSlideRightToLeft: Variants = {
  initial: {
    scaleX: 1,
  },
  hover: {
    scaleX: 0,
    transition: {
      duration: 1.4,
      ease: [0.4, 0.0, 0.2, 1] as [number, number, number, number], // Material Design easing
    },
  },
};

/**
 * Animated border that slides away from left to right on parent hover
 */
export const borderSlideLeftToRight: Variants = {
  initial: {
    scaleX: 1,
  },
  hover: {
    scaleX: 0,
    transition: {
      duration: 0.4,
      ease: [0.4, 0.0, 0.2, 1] as [number, number, number, number],
    },
  },
};

/**
 * Animated border that expands from center on parent hover
 */
export const borderExpandCenter: Variants = {
  initial: {
    scaleX: 0,
  },
  hover: {
    scaleX: 1,
    transition: {
      duration: 0.4,
      ease: [0.4, 0.0, 0.2, 1] as [number, number, number, number],
    },
  },
};

// ============================================
// Fade Animations
// ============================================

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.5 },
  },
};

export const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.16, 0.84, 0.44, 1] },
  },
};

export const fadeInDown: Variants = {
  hidden: { opacity: 0, y: -20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.16, 0.84, 0.44, 1] },
  },
};

export const fadeInLeft: Variants = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.5, ease: [0.16, 0.84, 0.44, 1] },
  },
};

export const fadeInRight: Variants = {
  hidden: { opacity: 0, x: 20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.5, ease: [0.16, 0.84, 0.44, 1] },
  },
};

// ============================================
// Scale Animations
// ============================================

export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.4, ease: [0.16, 0.84, 0.44, 1] },
  },
};

export const scaleOnHover = {
  initial: { scale: 1 },
  hover: {
    scale: 1.05,
    transition: { duration: 0.3, ease: [0.4, 0.0, 0.2, 1] },
  },
  tap: {
    scale: 0.95,
  },
};

// ============================================
// Slide Animations
// ============================================

export const slideInLeft: Variants = {
  hidden: { x: -100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.5, ease: [0.16, 0.84, 0.44, 1] },
  },
};

export const slideInRight: Variants = {
  hidden: { x: 100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.5, ease: [0.16, 0.84, 0.44, 1] },
  },
};

// ============================================
// Stagger Container
// ============================================

export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

// ============================================
// Rotation Animations
// ============================================

export const rotateOnHover = {
  initial: { rotate: 0 },
  hover: {
    rotate: 5,
    transition: { duration: 0.3 },
  },
};

// ============================================
// Shine Effect
// ============================================

export const shineEffect = {
  initial: {
    x: "-100%",
    opacity: 0,
  },
  hover: {
    x: "100%",
    opacity: [0, 0.3, 0],
    transition: {
      duration: 0.6,
      ease: "easeInOut",
    },
  },
};

// ============================================
// Card Hover Effect
// ============================================

export const cardHover = {
  initial: { y: 0 },
  hover: {
    y: -8,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 30,
    },
  },
  tap: {
    scale: 0.98,
  },
};

// ============================================
// Gradient Border Effect
// ============================================

export const gradientBorder = {
  initial: { opacity: 0 },
  hover: {
    opacity: 1,
    transition: { duration: 0.5 },
  },
};

// ============================================
// Custom Transition Configs
// ============================================

export const springTransition: Transition = {
  type: "spring",
  stiffness: 300,
  damping: 30,
};

export const smoothTransition: Transition = {
  duration: 0.4,
  ease: [0.16, 0.84, 0.44, 1],
};

export const fastTransition: Transition = {
  duration: 0.2,
  ease: [0.4, 0.0, 0.2, 1],
};
