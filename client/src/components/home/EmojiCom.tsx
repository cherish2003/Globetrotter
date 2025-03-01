import { useMemo } from "react";
import { motion } from "framer-motion";

export const AnimatedEmojis = () => {
  const emojis = useMemo(
    () => ["✈️", "🌍", "📍", "🗺️", "🎒", "🏝️", "🏔️", "🛫", "🚀"],
    []
  );

  return (
    <>
      {emojis.map((emoji, index) => (
        <motion.span
          key={index}
          className="absolute text-4xl"
          initial={{ y: "100vh", opacity: 1 }}
          animate={{ y: "-100vh", opacity: [1, 1, 0] }}
          transition={{
            duration: Math.random() * 5 + 5,
            repeat: Infinity,
            ease: "linear",
          }}
          style={{ left: `${Math.random() * 100}vw` }}
        >
          {emoji}
        </motion.span>
      ))}
    </>
  );
};
