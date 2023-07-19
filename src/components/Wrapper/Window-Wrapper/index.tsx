"use client";
import { motion } from "framer-motion";

export default function WindowWrapper(props: any) {
  return (
    <motion.main initial={{ opacity: 0 }} animate={{ opacity: 1 }} {...props}>
      {props.children}
    </motion.main>
  );
}
