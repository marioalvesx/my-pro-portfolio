"use client";

import { motion, AnimatePresence } from "motion/react";
import { usePathname } from "next/navigation";

const enter = {
  opacity: 1,
  y: 0,
  transition: { duration: 0.35, ease: [0.16, 0.84, 0.44, 1] },
};
const exit = {
  opacity: 0,
  y: -8,
  transition: { duration: 0.25, ease: "easeInOut" },
};

export default function PageTransition({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={pathname}
        initial={{ opacity: 0, y: 8 }}
        animate={enter}
        exit={exit}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}
