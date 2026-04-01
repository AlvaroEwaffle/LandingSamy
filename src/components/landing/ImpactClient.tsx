import { motion } from 'framer-motion';
import { useState } from 'react';

export default function ImpactClient() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <section className="relative w-full bg-slate-950 overflow-hidden py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          className="relative w-full flex items-center justify-center"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.img
            src="/assets/impacto.svg"
            alt="IMPACTO"
            className="w-full max-w-5xl h-auto object-contain"
            animate={
              isHovered
                ? { scale: 1.05, y: -8 }
                : { scale: 1, y: 0 }
            }
            transition={{
              type: 'spring',
              stiffness: 200,
              damping: 20,
              duration: 0.4
            }}
          />
        </motion.div>
      </div>
    </section>
  );
}
