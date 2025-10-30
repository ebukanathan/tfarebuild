import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

const awards = [
  {
    id: 1,
    title: "Best Leatherworks Designer Male Category- Ace Awards",
    description: "December 2021",
  },
  {
    id: 2,
    title: "National MSME Award for Excellence in Leatherworks",
    description: "June 2021",
  },
  {
    id: 3,
    title:
      "Grant winner, Friends of Prof. Yemi Osibanjo Entrepreneurship competition.",
    description: "March 2020",
  },
  {
    id: 4,
    title: "Her Network StartUp Woman of the Year Award",
    description: "December 2019.",
  },
];

export default function AwardsSection() {
  const [index, setIndex] = useState(0);

  // Auto slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % awards.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const currentAward = awards[index];

  return (
    <section
      className="relative w-full h-[70vh] flex flex-col items-center justify-center text-center text-white p-4"
      style={{
        backgroundImage: "url('../src/assets/awardone.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/70"></div>
      <div className="relative z-10 mb-10 px-6">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-3xl md:text-5xl font-bold text-white"
        >
          Awards & Recognition
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-gray-300 mt-3 max-w-2xl mx-auto"
        >
          Celebrating our milestones and recognitions for innovation,
          excellence, and client satisfaction.
        </motion.p>
      </div>

      {/* Sliding Text Content */}
      <div className="relative z-10 max-w-3xl px-6 py-8">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentAward.id}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-4 text-pink-500">
              {currentAward.title}
            </h2>
            <p className="text-gray-200 text-lg md:text-xl leading-relaxed">
              {currentAward.description}
            </p>
          </motion.div>
        </AnimatePresence>

        {/* Dots Navigation */}
        <div className="flex justify-center mt-8 space-x-2">
          {awards.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              className={`w-3 h-3 rounded-full ${
                i === index ? "bg-pink-500" : "bg-gray-500"
              } transition`}
            ></button>
          ))}
        </div>
      </div>
    </section>
  );
}
