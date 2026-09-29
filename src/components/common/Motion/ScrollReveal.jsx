import React from 'react';
import { motion } from 'framer-motion';

/**
 * Palantir-Style ScrollReveal Component
 * Smoothly animates elements into view as the user scrolls the page.
 */
export function ScrollReveal({
  children,
  delay = 0,
  duration = 0.7,
  yOffset = 36,
  xOffset = 0,
  className = '',
  style = {},
  viewportMargin = '-60px',
  once = true,
}) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: yOffset,
        x: xOffset,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
        x: 0,
      }}
      viewport={{
        once,
        margin: viewportMargin,
      }}
      transition={{
        duration,
        delay,
        ease: [0.16, 1, 0.3, 1], // Palantir & Apple signature fluid decel curve
      }}
      className={className}
      style={style}
    >
      {children}
    </motion.div>
  );
}

/**
 * Staggered container for card grids
 */
export function StaggerContainer({
  children,
  staggerDelay = 0.08,
  className = '',
  style = {},
  viewportMargin = '-60px',
}) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: viewportMargin }}
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren: staggerDelay,
          },
        },
      }}
      className={className}
      style={style}
    >
      {children}
    </motion.div>
  );
}

/**
 * Individual item inside a StaggerContainer
 */
export function StaggerItem({
  children,
  yOffset = 30,
  duration = 0.65,
  className = '',
  style = {},
}) {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: yOffset },
        visible: {
          opacity: 1,
          y: 0,
          transition: {
            duration,
            ease: [0.16, 1, 0.3, 1],
          },
        },
      }}
      className={className}
      style={style}
    >
      {children}
    </motion.div>
  );
}

export default ScrollReveal;
