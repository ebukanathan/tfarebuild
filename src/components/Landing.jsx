import React from "react";

import { motion } from "framer-motion";
import { useEffect } from "react";
import landone from "../assets/shoe-making-eleven.webp";
import landtwo from "../assets/shoe-making-one.webp";

function Landing() {
  const images = [landone, landtwo];
  useEffect(() => {
    const img1 = document.getElementById("slide1");
    const img2 = document.getElementById("slide2");

    let showingFirst = true;
    const intervalId = setInterval(() => {
      if (showingFirst) {
        img1?.classList.add("opacity-0");
        img2?.classList.remove("opacity-0");
      } else {
        img1?.classList.remove("opacity-0");
        img2?.classList.add("opacity-0");
      }
      showingFirst = !showingFirst;
    }, 4000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <>
      <section class="flex flex-col md:flex-row items-center justify-between max-w-7xl mx-auto py-16 px-4 gap-8">
        {/* <!-- Image Slider (Left Side) --> */}
        <div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          class="relative w-full md:w-1/2 h-[400px] rounded-2xl overflow-hidden shadow-lg"
        >
          <img
            id="slide1"
            src={images[0].src}
            alt="Product image 1"
            class="absolute inset-0 w-full h-full object-cover object-center transition-opacity duration-1000 ease-in-out"
          />
          <img
            id="slide2"
            src={images[1].src}
            alt="Product image 2"
            class="absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out opacity-0"
          />
        </div>

        {/* <!-- Text Section (Right Side) --> */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          viewport={{ once: true }}
          class="w-full md:w-1/2 text-center md:text-left space-y-4"
        >
          <h2 class="text-3xl md:text-4xl font-bold text-gray-800">
            Welcome to The Footwear Academy.
          </h2>
          <p class="text-gray-600 text-lg leading-relaxed">
            At The Footwear Academy, we equip young people with a core focus on
            women, to produce export standard leatherworks products. Our mission
            is to reduce poverty, unemployment, and foster socio-economic
            development in Nigeria.
          </p>
          <p class="text-gray-600 text-lg leading-relaxed">
            Our ambition for Africa is to equip indigenous leatherworks brands
            with the necessary skills that will enable them to compete globally.
          </p>
          <a
            href="/product"
            class="inline-block mt-4 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition"
          >
            Learn More
          </a>
        </motion.div>
      </section>
      <h1>Landing</h1>
    </>
  );
}

export default Landing;
