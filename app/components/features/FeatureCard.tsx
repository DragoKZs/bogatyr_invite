"use client";

import { motion } from "framer-motion";

interface FeatureCardProps {
  title: string;
  description: string;
  image: string;
}

export default function FeatureCard({
  title,
  description,
  image,
}: FeatureCardProps) {
  return (
    <motion.div
      whileHover={{
        scale: 1.03,
        y: -8,
      }}
      transition={{
        duration: 0.35,
      }}
      className="group relative h-[520px] overflow-hidden rounded-3xl cursor-pointer"
    >
      <img
        src={image}
        alt={title}
        className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-110"
      />

      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />

      <div className="absolute bottom-0 left-0 p-8">

        <h3 className="text-3xl font-black">
          {title}
        </h3>

        <p className="mt-5 max-w-sm text-white/80 opacity-0 transition duration-500 group-hover:opacity-100">
          {description}
        </p>

      </div>
    </motion.div>
  );
}