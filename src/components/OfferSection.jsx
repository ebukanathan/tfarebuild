import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

const cardData = [
  {
    id: 1,
    title: "Shoe Making",
    text: "Customized one-on-one coaching designed to help you achieve faster results with tailored plans.",
    img: "../src/assets/shoe4.jpg",
  },
  {
    id: 2,
    title: "Bag Making",
    text: "Progressive strength workouts that focus on endurance, power, and perfect form.",
    img: "../src/assets/bag-8.jpeg",
  },
  {
    id: 3,
    title: "Group Training",
    text: "Eat smart with meal plans and guidance that fuel your training and recovery effectively.",
    img: "../src/assets/group-training-hero.webp",
  },
];

export default function CardSection() {
  return (
    <section id="courses" className="w-full py-20 bg-gray-900 text-white">
      <div className="max-w-6xl mx-auto px-6 text-center">
        {/* Section Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold mb-4"
        >
          WE OFFER
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          viewport={{ once: true }}
          className="text-gray-400 text-lg max-w-2xl mx-auto mb-12"
        >
          Our academy is a dedicated hub for all things shoes and bags, offering
          a diverse range of courses and resources for both aspiring and
          seasoned enthusiasts.
        </motion.p>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {cardData.map((card, index) => (
            <AnimatedCard
              key={card.id}
              card={card}
              delay={index * 0.2} // staggered animation
            />
          ))}
        </div>
      </div>
    </section>
  );
}

// ✅ Animated Card Component
function AnimatedCard({ card, delay }) {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  useEffect(() => {
    if (inView) controls.start("visible");
  }, [controls, inView]);

  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, delay },
    },
  };

  return (
    <motion.div
      ref={ref}
      variants={variants}
      initial="hidden"
      animate={controls}
      whileHover={{ scale: 1.05, y: -8 }}
      transition={{ type: "spring", stiffness: 200, damping: 15 }}
      className="bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300"
    >
      <div className="h-56 overflow-hidden">
        <img
          src={card.img}
          alt={card.title}
          className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
        />
      </div>
      <div className="p-6 text-left">
        <h3 className="text-2xl font-semibold mb-2">{card.title}</h3>
        <p className="text-gray-400 text-sm">{card.text}</p>
      </div>
    </motion.div>
  );
}
