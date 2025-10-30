import { motion } from "framer-motion";

export default function OnlineTrainingSection() {
  return (
    <section className="w-full bg-gray-900 text-white py-20">
      <div className="max-w-6xl mx-auto px-6 flex flex-col lg:flex-row items-center gap-12">
        {/* Left: Image */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true }}
          className="flex-1"
        >
          <img
            src="../src/assets/onlinecourses.jpg"
            alt="Online Training"
            className="rounded-2xl shadow-lg w-full object-cover bg-center"
          />
        </motion.div>

        {/* Right: Text + CTA */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true }}
          className="flex-1 text-center lg:text-left"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Learn Smarter. Anytime. Anywhere.
          </h2>
          <p className="text-gray-300 text-lg mb-8 max-w-md mx-auto lg:mx-0">
            Join our virtual fitness sessions and access customized programs,
            real-time coaching, and progress tracking — all from your home or
            gym.
          </p>
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="https://selar.com/m/thefootwearacademy"
            className="inline-block bg-pink-600 hover:bg-pink-700 text-white px-8 py-3 rounded-lg font-semibold transition"
          >
            Start Online Training
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
