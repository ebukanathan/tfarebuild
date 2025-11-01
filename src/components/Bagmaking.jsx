import {
  FaUserTie,
  FaGraduationCap,
  FaBusinessTime,
  FaHome,
} from "react-icons/fa";

export default function BagMakingCourse() {
  return (
    <main className="bg-gray-50 text-gray-800">
      {/* ===== COURSE INTRODUCTION ===== */}
      {/* <section className="bg-white py-20 px-6 md:px-16">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-amber-700 mb-6">
              Learn the Art of Bag Making
            </h1>
            <p className="text-lg text-gray-600 mb-4">
              Transform your creativity into a profitable craft! At{" "}
              <strong>The Footwear & Bag Academy</strong>, we teach you how to
              design, cut, stitch, and brand unique handcrafted bags that meet
              global standards.
            </p>
            <p className="text-lg text-gray-600 mb-6">
              Whether you want to start a bag brand, expand your fashion skills,
              or simply learn a rewarding craft, this course gives you all the
              practical experience you need.
            </p>
            <a
              href="#online-training"
              className="inline-block bg-amber-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-amber-700 transition-all duration-300"
            >
              Get Started
            </a>
          </div>

          <div>
            <img
              src="/images/bagmaking-training.jpg"
              alt="Bag Making Training"
              className="rounded-2xl shadow-lg"
            />
          </div>
        </div>
      </section> */}

      {/* ===== WHO THE COURSE IS FOR ===== */}
      <section className="bg-amber-50 py-20 px-6 md:px-16">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-amber-700">
            Who This Course Is For
          </h2>
          <p className="text-gray-600 mb-12 max-w-2xl mx-auto">
            Our Bag Making Course is designed for passionate learners who want
            to create, innovate, and grow in the fashion accessories industry.
          </p>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                icon: (
                  <FaGraduationCap className="text-4xl text-amber-600 mb-3" />
                ),
                title: "Beginners & Students",
                text: "No prior experience needed — start from the basics and learn step-by-step from professionals.",
              },
              {
                icon: <FaUserTie className="text-4xl text-amber-600 mb-3" />,
                title: "Fashion Entrepreneurs",
                text: "Expand your product line by learning how to produce quality handcrafted bags for your brand.",
              },
              {
                icon: (
                  <FaBusinessTime className="text-4xl text-amber-600 mb-3" />
                ),
                title: "Startup Founders",
                text: "Get practical knowledge to establish a profitable bag production business.",
              },
              {
                icon: <FaHome className="text-4xl text-amber-600 mb-3" />,
                title: "Creative Hobbyists",
                text: "Turn your creativity into a side hustle or personal passion project that earns income.",
              },
            ].map((person, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 shadow-md hover:shadow-lg transition-all duration-300"
              >
                <div className="flex flex-col items-center text-center">
                  {person.icon}
                  <h3 className="text-xl font-semibold mb-2">{person.title}</h3>
                  <p className="text-gray-600 text-sm">{person.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== ONLINE TRAINING SECTION ===== */}
      <section
        id="online-training"
        className="relative py-24 px-6 md:px-16 bg-cover bg-center"
        style={{
          backgroundImage: "url('/images/online-training-bg.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="relative z-10 max-w-4xl mx-auto text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Join Our Online Bag Making Training
          </h2>
          <p className="text-lg mb-8 leading-relaxed">
            Learn bag design and production from anywhere! Our online classes
            are interactive, practical, and flexible — designed for your
            schedule. You’ll receive expert guidance, video tutorials, and
            one-on-one mentorship.
          </p>
          <a
            href="#"
            className="inline-block bg-amber-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-amber-700 transition-all duration-300"
          >
            Enroll for Online Training
          </a>
        </div>
      </section>
    </main>
  );
}
