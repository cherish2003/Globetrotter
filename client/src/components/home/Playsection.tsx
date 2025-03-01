import React from "react";
import { motion } from "framer-motion";

const Playsection = () => {
  return (
    <div className="flex justify-center items-center min-h-[400px] mt-20 py-16 ">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="relative"
      >
        <motion.button
          whileHover={{
            scale: 1.1,
            boxShadow: "0px 0px 15px rgba(59,130,246,0.6)",
          }}
          whileTap={{ scale: 0.95 }}
          className="cursor-pointer px-8 py-4 text-lg font-semibold bg-gradient-to-r from-blue-600 to-indigo-500 hover:from-blue-700 hover:to-indigo-600 text-white rounded-full shadow-2xl relative overflow-hidden"
        >
          <span className="relative z-10">Play Now 🚀</span>
          <motion.div
            className="absolute inset-0 bg-white opacity-10 rounded-full"
            animate={{
              opacity: [0.2, 0.5, 0.2],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </motion.button>
      </motion.div>
    </div>
  );
};

export default Playsection;
