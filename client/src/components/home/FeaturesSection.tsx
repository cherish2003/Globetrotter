import React from "react";
import { cn } from "@/lib/utils";
import { BentoGrid, BentoGridItem } from "../ui/bento-grid";
import {
  IconBoxAlignRightFilled,
  IconClipboardCopy,
  IconFileBroken,
  IconSignature,
  IconTableColumn,
} from "@tabler/icons-react";
import { motion } from "framer-motion";
import { IconTrophy } from "@tabler/icons-react";

export function FeaturesSection() {
  return (
    <BentoGrid className="max-w-4xl mx-auto md:auto-rows-[20rem] mt-20">
      
      {items.map((item, i) => (
        <BentoGridItem
          key={i}
          title={item.title}
          description={item.description}
          header={item.header}
          className={cn("[&>p:text-lg]", item.className)}
          icon={item.icon}
        />
      ))}
    </BentoGrid>
  );
}

const SkeletonOne = () => {
  const variants = {
    initial: {
      x: 0,
    },
    animate: {
      x: 10,
      rotate: 5,
      transition: {
        duration: 0.2,
      },
    },
  };
  const variantsSecond = {
    initial: {
      x: 0,
    },
    animate: {
      x: -10,
      rotate: -5,
      transition: {
        duration: 0.2,
      },
    },
  };

  return (
    <motion.div
      initial="initial"
      whileHover="animate"
      className="flex flex-1 w-full h-full min-h-[6rem] dark:bg-dot-white/[0.2] bg-dot-black/[0.2] flex-col space-y-2"
    >
      <motion.div
        variants={variants}
        className="flex flex-row rounded-full border border-neutral-100 dark:border-white/[0.2] p-2  items-center space-x-2 bg-white dark:bg-black"
      >
        <div className="h-6 w-6 rounded-full bg-gradient-to-r from-pink-500 to-violet-500 flex-shrink-0" />
        <div className="w-full bg-gray-100 h-4 rounded-full dark:bg-neutral-900" />
      </motion.div>
      <motion.div
        variants={variantsSecond}
        className="flex flex-row rounded-full border border-neutral-100 dark:border-white/[0.2] p-2 items-center space-x-2 w-3/4 ml-auto bg-white dark:bg-black"
      >
        <div className="w-full bg-gray-100 h-4 rounded-full dark:bg-neutral-900" />
        <div className="h-6 w-6 rounded-full bg-gradient-to-r from-pink-500 to-violet-500 flex-shrink-0" />
      </motion.div>
      <motion.div
        variants={variants}
        className="flex flex-row rounded-full border border-neutral-100 dark:border-white/[0.2] p-2 items-center space-x-2 bg-white dark:bg-black"
      >
        <div className="h-6 w-6 rounded-full bg-gradient-to-r from-pink-500 to-violet-500 flex-shrink-0" />
        <div className="w-full bg-gray-100 h-4 rounded-full dark:bg-neutral-900" />
      </motion.div>
    </motion.div>
  );
};
const SkeletonTwo = () => {
  const variants = {
    initial: { width: 0, opacity: 0, y: 10 },
    animate: (i: number) => ({
      width: "100%",
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.6,
        ease: "easeOut",
      },
    }),
    hover: {
      scale: [1, 1.05, 1],
      rotate: [0, 2, -2, 0],
      transition: {
        duration: 0.5,
        repeat: Infinity,
        repeatType: "reverse" as const,
      },
    },
  };

  const colors = [
    "bg-gradient-to-r from-green-400 to-blue-500 shadow-lg",
    "bg-gradient-to-r from-red-400 to-yellow-500 shadow-lg",
    "bg-gradient-to-r from-purple-400 to-pink-500 shadow-lg",
    "bg-gradient-to-r from-indigo-400 to-teal-500 shadow-lg",
    "bg-gradient-to-r from-orange-400 to-rose-500 shadow-lg",
  ];

  // Random emoji reactions 🎉🔥🚀✨
  const emojis = ["🎉", "🔥", "🚀", "✨", "🤯", "🎶"];

  return (
    <motion.div
      initial="initial"
      animate="animate"
      whileHover="hover"
      className="flex flex-1 w-full h-full min-h-[6rem] dark:bg-dot-white/[0.2] bg-dot-black/[0.2] flex-col space-y-3 p-4 rounded-lg shadow-xl border border-neutral-300 dark:border-white/10 relative overflow-hidden"
    >
      {/* Shimmering Animated Bars */}
      {colors.map((color, i) => (
        <motion.div
          key={"skeleton-funky-" + i}
          custom={i}
          variants={variants}
          className={`h-4 rounded-full ${color} animate-pulse`}
          style={{ maxWidth: Math.random() * (90 - 50) + 50 + "%" }}
        />
      ))}

      {/* 🎉 Confetti Particles (Moving Dots) */}
      {[...Array(10)].map((_, i) => (
        <motion.div
          key={"confetti-" + i}
          className="absolute w-2 h-2 rounded-full bg-white opacity-80"
          style={{
            top: Math.random() * 100 + "%",
            left: Math.random() * 100 + "%",
          }}
          animate={{
            y: [-5, 5, -5],
            x: [5, -5, 5],
            rotate: [0, 20, -20, 0],
          }}
          transition={{
            duration: Math.random() * (3 - 1) + 1,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* 🎊 Floating Emoji Reactions */}
      {emojis.map((emoji, i) => (
        <motion.div
          key={"emoji-" + i}
          className="absolute text-2xl"
          style={{
            top: Math.random() * 90 + "%",
            left: Math.random() * 90 + "%",
          }}
          animate={{
            y: [-5, 5, -5],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: Math.random() * (2.5 - 1.5) + 1.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          {emoji}
        </motion.div>
      ))}
    </motion.div>
  );
};

const SkeletonThree = () => {
  const variants = {
    initial: { opacity: 0.9, scale: 1 },
    animate: {
      opacity: [0.9, 1, 0.9],
      scale: [1, 1.05, 1],
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  return (
    <motion.div
      initial="initial"
      animate="animate"
      variants={variants}
      className="flex flex-1 w-full h-full min-h-[6rem] dark:bg-dot-white/[0.2] rounded-lg bg-dot-black/[0.2] flex-col items-center justify-center p-4 relative overflow-hidden shadow-lg"
      style={{
        background:
          "linear-gradient(135deg, #ff9a9e, #fad0c4, #fbc2eb, #a18cd1)",
        backgroundSize: "400% 400%",
      }}
    >
      {/* Floating Icons for Fun Effect */}
      <motion.div
        className="absolute top-2 left-2 w-8 h-8 bg-white/40 dark:bg-black/40 rounded-full flex items-center justify-center"
        animate={{ y: [0, -10, 0], rotate: [0, 10, -10, 0] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
      >
        🎮
      </motion.div>
      <motion.div
        className="absolute bottom-2 right-2 w-8 h-8 bg-white/40 dark:bg-black/40 rounded-full flex items-center justify-center"
        animate={{ y: [0, 10, 0], rotate: [0, -10, 10, 0] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
      >
        🏆
      </motion.div>

      {/* Main Content */}
      <p className="text-sm font-semibold text-neutral-700 dark:text-neutral-300">
        Invite a Friend & Compete!
      </p>

      {/* Animated Share Button */}
      <motion.div
        className="mt-3 px-5 py-2 rounded-full bg-blue-500 text-white text-xs font-medium shadow-md cursor-pointer flex items-center space-x-2"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        <span>📩 Share Invite</span>
      </motion.div>
    </motion.div>
  );
};

const SkeletonFour = () => {
  const first = {
    initial: { x: 20, rotate: -5 },
    hover: { x: 0, rotate: 0 },
  };
  const second = {
    initial: { x: -20, rotate: 5 },
    hover: { x: 0, rotate: 0 },
  };

  return (
    <motion.div
      initial="initial"
      animate="animate"
      whileHover="hover"
      className="flex flex-1 w-full h-full min-h-[6rem] dark:bg-dot-white/[0.2] bg-dot-black/[0.2] flex-col space-y-2"
    >
      <motion.div
        variants={first}
        className="rounded-xl bg-white dark:bg-black dark:border-white/[0.1] border border-neutral-200 p-3 w-3/4"
      >
        <p className="text-xs text-neutral-500">
          "Hint: The city is known for its canals and gondolas."
        </p>
      </motion.div>
      <motion.div
        variants={second}
        className="rounded-xl bg-blue-100 dark:bg-blue-900/20 text-blue-600 border border-blue-500 p-3 w-2/3 ml-auto"
      >
        <p className="text-xs">"Is it Venice?"</p>
      </motion.div>
      <motion.div
        variants={first}
        className="rounded-xl bg-green-100 dark:bg-green-900/20 text-green-600 border border-green-500 p-3 w-3/4"
      >
        <p className="text-xs">"Try thinking of Italy!"</p>
      </motion.div>
      <motion.div
        variants={second}
        className="rounded-xl bg-orange-100 dark:bg-orange-900/20 text-orange-600 border border-orange-500 p-3 w-2/3 ml-auto"
      >
        <p className="text-xs">"I got it! It's Venice!"</p>
      </motion.div>
    </motion.div>
  );
};

const SkeletonFive = () => {
  const variants = {
    initial: {
      x: 0,
    },
    animate: {
      x: 10,
      rotate: 5,
      transition: {
        duration: 0.2,
      },
    },
  };
  const variantsSecond = {
    initial: {
      x: 0,
    },
    animate: {
      x: -10,
      rotate: -5,
      transition: {
        duration: 0.2,
      },
    },
  };

  return (
    <motion.div
      initial="initial"
      whileHover="animate"
      className="flex flex-1 w-full h-full min-h-[6rem] dark:bg-dot-white/[0.2] bg-dot-black/[0.2] flex-col space-y-2"
    >
      {/* Player Score */}
      <motion.div
        variants={variants}
        className="flex flex-row rounded-2xl border border-neutral-100 dark:border-white/[0.2] p-3 items-center space-x-3 bg-white dark:bg-black shadow-lg"
      >
        <IconTrophy className="h-6 w-6 text-yellow-500" />
        <div className="flex flex-col">
          <p className="text-sm font-semibold">Your Score</p>
          <p className="text-lg font-bold text-blue-600 dark:text-blue-400">
            7,520
          </p>
        </div>
      </motion.div>

      {/* Leaderboard */}
      <motion.div
        variants={variantsSecond}
        className="flex flex-col rounded-xl border border-neutral-100 dark:border-white/[0.2] p-3 space-y-2 bg-white dark:bg-black shadow-md"
      >
        <p className="text-sm font-semibold">Leaderboard</p>
        <div className="flex justify-between items-center text-xs">
          <span className="font-medium">1. Alex Johnson</span>
          <span className="text-green-500 font-semibold">8,150</span>
        </div>
        <div className="flex justify-between items-center text-xs">
          <span className="font-medium">2. You</span>
          <span className="text-blue-600 font-semibold">7,520</span>
        </div>
        <div className="flex justify-between items-center text-xs">
          <span className="font-medium">3. Emma Davis</span>
          <span className="text-gray-500 font-semibold">7,400</span>
        </div>
      </motion.div>
    </motion.div>
  );
};

const items = [
  {
    title: "AI-Generated Clues",
    description: (
      <span className="text-sm">
        Engage with AI-powered cryptic clues to test your knowledge.
      </span>
    ),
    header: <SkeletonOne />,
    className: "md:col-span-1",
    icon: <IconClipboardCopy className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Funky Feedback",
    description: (
      <span className="text-sm">
        Enjoy animated reactions for correct and incorrect answers.
      </span>
    ),
    header: <SkeletonTwo />,
    className: "md:col-span-1",
    icon: <IconFileBroken className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Challenge a Friend",
    description: (
      <span className="text-sm">
        Share a dynamic invite link and compete with friends.
      </span>
    ),
    header: <SkeletonThree />,
    className: "md:col-span-1",
    icon: <IconSignature className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Live Chat Hints",
    description: (
      <span className="text-sm">
        Get real-time hints and discussions with fellow players.
      </span>
    ),
    header: <SkeletonFour />,
    className: "md:col-span-2",
    icon: <IconTableColumn className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Score Tracking & Leaderboards",
    description: (
      <span className="text-sm">
        Keep track of scores and see where you rank among players.
      </span>
    ),
    header: <SkeletonFive />,
    className: "md:col-span-1",
    // icon: <IconBoxAlignRightFilled className="h-4 w-4 text-neutral-500" />,
  },
];
