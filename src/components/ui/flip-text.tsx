"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const words = ["people", "organisations", "brands", "communities"];

export function FlipText() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length);
    }, 2500);
    return () => clearInterval(timer);
  }, []);

  return (
    <span className="relative inline-block align-middle">
      <AnimatePresence mode="popLayout">
        <motion.span
          key={words[index]}
          initial={{ rotateX: -90, opacity: 0, y: 10 }}
          animate={{ rotateX: 0, opacity: 1, y: 0 }}
          exit={{ rotateX: 90, opacity: 0, y: -10 }}
          transition={{ duration: 0.45, ease: [0.32, 0.72, 0, 1] }}
          className="inline-block origin-bottom text-brand-gold"
          style={{ transformStyle: "preserve-3d" }}
        >
          {words[index]}
        </motion.span>
      </AnimatePresence>
    </span>
  );
}
