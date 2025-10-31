import {
  motion,
  AnimatePresence,
  useScroll,
  useTransform,
} from "framer-motion";
import { useState, useEffect, useRef } from "react";

const images = [
  "../src/assets/heroImagetwo.jpg",
  "../src/assets/heroImageone.jpg",
  "../src/assets/shoe5.jpg",
];

export default function HeroSection() {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  // Parallax movement (slight X and Y shift as user scrolls)
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-10%"]);

  // Auto slide every 5s
  useEffect(() => {
    const interval = setInterval(() => {
      slideNext();
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const slideNext = () => {
    setDirection(1);
    setIndex((prev) => (prev + 1) % images.length);
  };

  const slidePrev = () => {
    setDirection(-1);
    setIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const variants = {
    enter: (direction) => ({
      x: direction > 0 ? "100%" : "-100%",
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction) => ({
      x: direction > 0 ? "-100%" : "100%",
      opacity: 0,
    }),
  };

  return (
    <section
      ref={sectionRef}
      className="relative w-full h-[90vh] overflow-hidden text-white flex justify-center items-center"
    >
      {/* Background slider with parallax */}
      <div className="absolute inset-0">
        <AnimatePresence initial={false} custom={direction}>
          <motion.div
            key={images[index]}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: "spring", stiffness: 80, damping: 20 },
              opacity: { duration: 0.4 },
            }}
            style={{
              backgroundImage: `url(${images[index]})`,
              y,
              x,
            }}
            className="absolute inset-0 bg-cover bg-center bg-no-repeat will-change-transform w-full"
          />
        </AnimatePresence>
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/60" />
      </div>

      {/* Hero Text */}
      <div className="relative z-10 text-center px-6 max-w-2xl">
        <motion.h1
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl font-bold mb-4"
        >
          Master the art of shoemaking
        </motion.h1>

        <motion.p
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="text-lg md:text-xl text-gray-200 mb-8"
        >
          and turn your creativity into a thriving career.
        </motion.p>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-pink-600 hover:bg-pink-700 px-8 py-3 rounded-full text-lg font-semibold shadow-lg"
        >
          <a href="#courses">Join the Program</a>
        </motion.button>
      </div>

      {/* Navigation Buttons */}
      {/* <div className="absolute inset-y-0 left-4 flex items-center z-10">
        <button
          onClick={slidePrev}
          className="bg-black/40 hover:bg-black/60 text-white p-2 rounded-full"
        >
          ◀
        </button>
      </div>
      <div className="absolute inset-y-0 right-4 flex items-center z-10">
        <button
          onClick={slideNext}
          className="bg-black/40 hover:bg-black/60 text-white p-2 rounded-full"
        >
          ▶
        </button>
      </div> */}

      {/* Dots */}
      <div className="absolute bottom-6 flex justify-center w-full space-x-2 z-10">
        {images.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className={`w-3 h-3 rounded-full transition ${
              i === index ? "bg-pink-500" : "bg-gray-400/60"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
