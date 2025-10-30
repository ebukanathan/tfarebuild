import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    text: "The online training sessions completely changed my fitness routine. I’ve never felt stronger or more confident!",
    image: "https://randomuser.me/api/portraits/women/65.jpg",
  },
  {
    id: 2,
    name: "Michael Lee",
    text: "Personalized workouts and nutrition guidance helped me lose 15kg in 3 months. Highly recommend!",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    id: 3,
    name: "Emma Brown",
    text: "The trainers are so supportive! The live feedback during my virtual workouts keeps me motivated every day.",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    id: 4,
    name: "David Kim",
    text: "I was skeptical about online training, but this experience changed my perspective completely. It’s amazing!",
    image: "https://randomuser.me/api/portraits/men/45.jpg",
  },
  {
    id: 5,
    name: "Lisa Adams",
    text: "Their online sessions are dynamic, motivating, and super fun! I’ve achieved my goals faster than I thought.",
    image: "https://randomuser.me/api/portraits/women/51.jpg",
  },
];

export default function TestimonialCarousel() {
  const [startIndex, setStartIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  const nextSlide = () => {
    setStartIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setStartIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  // Determine how many cards to show based on screen size
  const getVisibleCards = () => {
    if (typeof window === "undefined") return 1;
    if (window.innerWidth >= 1024) return 3;
    if (window.innerWidth >= 640) return 2;
    return 1;
  };

  const [visibleCards, setVisibleCards] = useState(getVisibleCards());

  // Update visible cards on resize
  useEffect(() => {
    const handleResize = () => setVisibleCards(getVisibleCards());
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Auto slide
  useEffect(() => {
    if (paused) return;
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(interval);
  }, [paused, startIndex]);

  const displayed = testimonials
    .slice(startIndex, startIndex + visibleCards)
    .concat(
      testimonials.slice(
        0,
        Math.max(0, startIndex + visibleCards - testimonials.length)
      )
    );

  return (
    <section
      className="w-full bg-gray-900 text-white py-20 overflow-hidden"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="max-w-6xl mx-auto px-6 text-center">
        {/* Section Heading */}
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          What Our Clients Say
        </h2>
        <p className="text-gray-400 text-lg mb-12">
          Real stories from people who transformed their lives with our
          programs.
        </p>

        {/* Slider Container */}
        <div className="relative flex items-center justify-center">
          {/* Left Arrow */}
          <button
            onClick={prevSlide}
            className="absolute left-0 md:-left-8 bg-pink-600 hover:bg-pink-700 text-white p-3 rounded-full z-10"
          >
            <ChevronLeft size={24} />
          </button>

          {/* Cards */}
          <div className="flex gap-6 overflow-hidden justify-center">
            <AnimatePresence initial={false}>
              {displayed.map((testimonial) => (
                <div
                  key={testimonial.id}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -50 }}
                  transition={{ duration: 0.5 }}
                  className="bg-gray-800 rounded-2xl p-8 w-[300px] sm:w-[350px] md:w-[400px] shadow-lg"
                >
                  <div className="flex flex-col items-center text-center">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-20 h-20 rounded-full mb-4 border-4 border-pink-600 object-cover"
                    />
                    <p className="text-gray-300 italic mb-4">
                      “{testimonial.text}”
                    </p>
                    <h4 className="text-pink-500 font-semibold text-lg">
                      {testimonial.name}
                    </h4>
                  </div>
                </div>
              ))}
            </AnimatePresence>
          </div>

          {/* Right Arrow */}
          <button
            onClick={nextSlide}
            className="absolute right-0 md:-right-8 bg-pink-600 hover:bg-pink-700 text-white p-3 rounded-full z-10"
          >
            <ChevronRight size={24} />
          </button>
        </div>
      </div>
    </section>
  );
}
