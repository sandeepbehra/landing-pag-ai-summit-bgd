// components/FadeIn.js
"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function FadeIn({ children, slideUp = true, duration = 0.6, delay = 0.2 }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const initialProps = { opacity: 0, y: slideUp ? 20 : 5 };
  const animateProps = { opacity: 1, y: 0 };

  return (
    <div ref={ref}>
      <motion.div
        initial={initialProps}
        animate={isInView ? animateProps : initialProps} // Animate based on the hook's state
        transition={{ duration: duration, delay: delay }}
      >
        {children}
      </motion.div>
    </div>
  );
}