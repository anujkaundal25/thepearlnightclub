"use client"

import { motion } from "framer-motion"
import PageHero from "../PageHero"

export default function BottleServiceHero() {
  return (
    <motion.div
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="w-full"
    >
      <PageHero
        eyebrow="THE PEARL"
        title="Premium Bottle Service"
        image="/hero-section/vip.webp"
      />
    </motion.div>
  )
}
