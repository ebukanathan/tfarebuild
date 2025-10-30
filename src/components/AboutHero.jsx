import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

export default function AboutUs() {
  const [index, setIndex] = useState(0);

  // Gallery images - finished products & training
  const gallery = [
    "https://images.unsplash.com/photo-1600185365483-26d7a4c6a941?auto=format&fit=crop&w=1600&q=80", // shoemaking tools
    "https://images.unsplash.com/photo-1577401239170-897942555fb2?auto=format&fit=crop&w=1600&q=80", // shoes on table
    "https://images.unsplash.com/photo-1621886650136-9690c2a9810d?auto=format&fit=crop&w=1600&q=80", // cobbler workshop
    "https://images.unsplash.com/photo-1586363104860-8f0b7de86b9b?auto=format&fit=crop&w=1600&q=80", // footwear display
  ];

  // Auto slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % gallery.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [gallery.length]);

  return (
    <main className="w-full text-gray-800">
      {/* ======= INTRO VIDEO SECTION ======= */}
      <section className="relative w-full h-[70vh] flex items-center justify-center overflow-hidden text-white">
        <video
          className="absolute inset-0 w-full h-full object-cover"
          src="https://cdn.coverr.co/videos/coverr-shoemaker-polishing-shoes-9057/1080p.mp4"
          autoPlay
          loop
          muted
          playsInline
        />
        <div className="absolute inset-0 bg-black/60" />
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative z-10 text-center px-6"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-3">
            About{" "}
            <span className="text-yellow-400">LIVYN Footwear Academy</span>
          </h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto text-gray-200">
            Crafting excellence from sole to soul — empowering the next
            generation of world-class shoemakers.
          </p>
        </motion.div>
      </section>

      {/* ======= OUR ACTIVITIES SECTION ======= */}
      <section className="py-16 px-6 md:px-20 bg-gray-50">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-5 text-gray-900">
              Our Activities
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              At LIVYN Footwear Academy, we provide hands-on training in modern
              shoemaking, leather craft, and footwear design. Our programs
              combine creativity with technical expertise to help students
              master both traditional and digital footwear production.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              Activities include pattern drafting, stitching, sole fitting, and
              business development sessions that equip our trainees to become
              successful entrepreneurs in the fashion and footwear industry.
            </p>
            <button className="mt-3 bg-yellow-500 hover:bg-yellow-600 text-white px-6 py-3 rounded-lg font-semibold shadow">
              Learn More
            </button>
          </motion.div>

          <motion.img
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.7 }}
            src="https://images.unsplash.com/photo-1600185365483-26d7a4c6a941?auto=format&fit=crop&w=1000&q=80"
            alt="shoemaking"
            className="rounded-2xl shadow-lg"
          />
        </div>
      </section>

      {/* ======= OUR ALUMNI SECTION ======= */}
      <section className="py-20 bg-gray-900 text-white text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-3xl md:text-5xl font-bold mb-8"
        >
          Our Alumni
        </motion.h2>

        <p className="max-w-2xl mx-auto mb-10 text-gray-300">
          Our graduates have gone on to build thriving footwear brands, export
          quality products, and train others in the art of shoemaking.
        </p>

        <div className="flex flex-wrap justify-center gap-6 px-6">
          {[
            {
              name: "Chioma Daniels",
              desc: "Founder of ChiDan Footwears, Lagos",
            },
            {
              name: "Samuel Nwachukwu",
              desc: "Exports handcrafted shoes to the UK & Ghana",
            },
            {
              name: "Amaka Obi",
              desc: "Leads footwear design workshops across Africa",
            },
          ].map((alum, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              className="bg-gray-800 p-6 rounded-xl w-72 shadow-lg"
            >
              <h3 className="text-xl font-semibold mb-2 text-yellow-400">
                {alum.name}
              </h3>
              <p className="text-gray-300">{alum.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ======= SLIDING IMAGE GALLERY ======= */}
      <section className="relative h-[65vh] bg-black overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.img
            key={gallery[index]}
            src={gallery[index]}
            alt="Footwear training or finished product"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.8 }}
            className="absolute inset-0 w-full h-full object-cover"
          />
        </AnimatePresence>

        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center z-10">
          <h2 className="text-3xl md:text-5xl font-bold mb-3">
            Our Creations & Trainings
          </h2>
          <p className="text-gray-300 max-w-xl px-4">
            Explore the artistry behind every stitch, every sole, and every
            handcrafted masterpiece.
          </p>
        </div>

        {/* Navigation dots */}
        <div className="absolute bottom-5 flex justify-center w-full z-10 space-x-2">
          {gallery.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              className={`w-3 h-3 rounded-full transition ${
                i === index ? "bg-yellow-400" : "bg-gray-400/60"
              }`}
            />
          ))}
        </div>
      </section>
    </main>
  );
}
