import { motion } from "framer-motion";
import { PlayCircle, Brain, Trophy, Users } from "lucide-react";
import { Button } from "@/components/ui/button";

const steps = [
  {
    id: 1,
    title: "Crack the Clue! 🧩",
    description:
      "Get a cryptic AI-generated clue about a famous place. Can you guess it?",
    icon: <Brain className="h-12 w-12 text-blue-500" />,
  },
  {
    id: 2,
    title: "Pick the Right Answer 🎯",
    description:
      "Choose from multiple options. Be quick and trust your instincts!",
    icon: <PlayCircle className="h-12 w-12 text-green-500" />,
  },
  {
    id: 3,
    title: "Celebrate or Learn 🎉",
    description:
      "Confetti if correct! If wrong, no worries—you’ll still unlock a fun fact!",
    icon: <Trophy className="h-12 w-12 text-yellow-500" />,
  },
  {
    id: 4,
    title: "Challenge a Friend 🤝",
    description: "Share your score and challenge a friend to beat you!",
    icon: <Users className="h-12 w-12 text-purple-500" />,
  },
];

const HowToPlay = () => {
  return (
    <section className="py-20 bg-white text-center">
      <h2 className="text-5xl font-extrabold text-gray-900 mb-6">
        How to Play
      </h2>
      <p className="text-lg text-gray-600 mb-12">
        Get ready for a wild guessing adventure! 🌍✨
      </p>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 max-w-6xl mx-auto">
        {steps.map((step, index) => (
          <motion.div
            key={step.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2, duration: 0.5 }}
            whileHover={{ scale: 1.05 }}
            className="p-6 bg-white/70 backdrop-blur-xl border border-gray-200 rounded-xl shadow-xl flex flex-col items-center text-center relative overflow-hidden"
          >
            <div className="mb-4">{step.icon}</div>
            <h3 className="text-2xl font-bold mb-3 text-gray-800">
              {step.title}
            </h3>
            <p className="text-gray-600 text-lg">{step.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default HowToPlay;
