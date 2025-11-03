import React from "react";
import { motion } from "framer-motion";

const GroupTraining = () => {
  return (
    <div className="bg-gray-50 text-gray-800">
      {/* ===== INTRO SECTION ===== */}
      <section
        className="relative min-h-[80vh] flex items-center justify-center bg-cover bg-center text-center px-6"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1620121684840-edffc1dc6005?auto=format&fit=crop&w=1600&q=80')",
        }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <motion.div
          className="relative z-10 max-w-3xl mx-auto text-white"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-4xl mt-4 md:text-6xl font-bold mb-4">
            Group Training for Aspiring Footwear Designers
          </h1>
          <p className="text-lg md:text-xl mb-6">
            Learn, collaborate, and create alongside passionate learners in an
            inspiring environment — our group training combines mentorship,
            teamwork, and practical experience to bring your creative dreams to
            life.
          </p>
          {/* <a
            href="#why"
            className="bg-amber-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-amber-600 transition"
          >
            Discover Why It’s Worth It
          </a> */}
        </motion.div>
      </section>

      {/* ===== WHY CHOOSE GROUP TRAINING ===== */}
      <section id="why" className="py-20 bg-white px-6 md:px-12">
        <div className="max-w-6xl mx-auto text-center">
          <motion.h2
            className="text-3xl md:text-4xl font-bold mb-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            Why Choose Our Group Training
          </motion.h2>
          <p className="text-lg text-gray-600 mb-12">
            Our group sessions are designed to help you learn faster, build
            confidence, and network with other creative minds.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                title: "Team Synergy",
                desc: "Foster a culture of creativity and teamwork within your organization.",
              },
              {
                title: "Customized Learning",
                desc: "Tailor your group training to meet your specific needs",
              },
              {
                title: "Hands-On Projects",
                desc: "Work on real-world projects, engage in practical exercises.",
              },
              {
                title: "Networking Opportunities",
                desc: " Connect with peers, industry experts, and potential collaborators.",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                className="bg-amber-50 p-6 rounded-2xl shadow-md hover:shadow-lg transition"
                whileHover={{ scale: 1.03 }}
              >
                <h3 className="text-xl font-semibold mb-3 text-amber-700">
                  {item.title}
                </h3>
                <p className="text-gray-600">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== WHO CAN BENEFIT ===== */}
      <section className="py-20 bg-amber-100 px-6 md:px-12">
        <div className="max-w-6xl mx-auto text-center">
          <motion.h2
            className="text-3xl md:text-4xl font-bold mb-6 text-amber-800"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Who Can Benefit from This Training
          </motion.h2>
          <p className="text-lg text-gray-700 mb-12">
            Whether you’re a beginner or experienced artisan, our group training
            is tailored for diverse goals and backgrounds.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {[
              {
                title: "Aspiring Designers",
                desc: "Individuals who want to learn how to craft professional footwear and bags from scratch.",
              },
              {
                title: "Small Business Owners",
                desc: "Entrepreneurs looking to expand their brand with custom-made leather products.",
              },
              {
                title: "Creative Professionals",
                desc: "Artists and creators seeking a hands-on, collaborative environment to boost their skills.",
              },
            ].map((benefit, i) => (
              <motion.div
                key={i}
                className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition"
                whileHover={{ scale: 1.05 }}
              >
                <h3 className="text-xl font-semibold text-amber-700 mb-3">
                  {benefit.title}
                </h3>
                <p className="text-gray-600">{benefit.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== ENROLL NOW / CTA SECTION ===== */}
      <section className="py-20 bg-gradient-to-r from-amber-500 to-yellow-400 text-white text-center px-6">
        <motion.div
          className="max-w-4xl mx-auto"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Join Our Group Training?
          </h2>
          <p className="text-lg md:text-xl mb-8">
            Don’t miss your chance to learn shoemaking and bag design from
            industry experts in a collaborative and inspiring setting.
          </p>
          <a
            href="https://wa.me/2348012345678"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-amber-600 px-8 py-4 rounded-full font-semibold shadow-lg hover:bg-gray-100 transition"
          >
            Enroll Now on WhatsApp
          </a>
        </motion.div>
      </section>
    </div>
  );
};

export default GroupTraining;
