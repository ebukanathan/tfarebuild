import {
  FaChalkboardTeacher,
  FaTools,
  FaUsers,
  FaCertificate,
} from "react-icons/fa";

export default function ShoemakingCourse() {
  return (
    <main className="bg-gray-50 text-gray-800">
      {/* ===== COURSE INTRODUCTION ===== */}
      <section className="bg-white py-20 px-6 md:px-16">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-amber-700 mb-6">
              Master the Art of Shoemaking
            </h1>
            <p className="text-lg text-gray-600 mb-4">
              Learn the craft, creativity, and business behind professional
              shoemaking. At <strong>The Footwear Academy</strong>, we guide you
              from raw ideas to finished footwear,turning passion into skill,
              and skill into income.
            </p>
            <p className="text-lg text-gray-600 mb-6">
              Whether you’re a beginner or an aspiring entrepreneur, our
              comprehensive hands-on course is designed to equip you with
              everything you need to build a profitable footwear brand.
            </p>
            <a
              href="#plans"
              className="inline-block bg-amber-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-amber-700 transition-all duration-300"
            >
              Enroll Now
            </a>
          </div>

          <div>
            <img
              src="/images/shoemaking-training.jpg"
              alt="Shoemaking Training"
              className="rounded-2xl shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* ===== WHY CHOOSE US ===== */}
      <section className="bg-amber-50 py-20 px-6 md:px-16">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-amber-700">
            Why Choose Us
          </h2>
          <p className="text-gray-600 mb-12 max-w-2xl mx-auto">
            Our academy is more than a training center — it’s a launchpad for
            your creativity and success in the footwear industry.
          </p>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                icon: (
                  <FaChalkboardTeacher className="text-4xl text-amber-600 mb-3" />
                ),
                title: "Expert Instructors",
                text: "Learn directly from skilled shoemakers with years of experience in design and production.",
              },
              {
                icon: <FaTools className="text-4xl text-amber-600 mb-3" />,
                title: "Hands-On Training",
                text: "We focus on real-world practice, ensuring you master each process step by step.",
              },
              {
                icon: <FaUsers className="text-4xl text-amber-600 mb-3" />,
                title: "Community & Mentorship",
                text: "Join a network of professionals and alumni who support and inspire your journey.",
              },
              {
                icon: (
                  <FaCertificate className="text-4xl text-amber-600 mb-3" />
                ),
                title: "Certification & Support",
                text: "Receive a recognized certificate and business guidance to help you start your own brand.",
              },
            ].map((reason, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 shadow-md hover:shadow-lg transition-all duration-300"
              >
                <div className="flex flex-col items-center text-center">
                  {reason.icon}
                  <h3 className="text-xl font-semibold mb-2">{reason.title}</h3>
                  <p className="text-gray-600 text-sm">{reason.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== COURSE PLANS ===== */}
      <section id="plans" className="bg-white py-20 px-6 md:px-16">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-amber-700">
            Course Plans
          </h2>
          <p className="text-gray-600 mb-12 max-w-2xl mx-auto">
            Choose a training plan that fits your goals — from beginners to
            advanced artisans.
          </p>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                name: "Beginner's Class",
                price: "₦80,000",
                duration: "4 Weeks",
                features: [
                  //   "Basic Shoemaking Skills",
                  //   "Pattern Cutting & Stitching",
                  //   "1 Pair of Finished Footwear",
                  //   "Certificate of Completion",
                  "This course lasts for one month, providing an immersive experience in slipper and sandal crafting.",
                ],
              },
              {
                name: "Next Level Plan",
                price: "₦150,000",
                duration: "8 Weeks",
                features: [
                  //   "Advanced Design Techniques",
                  //   "Machine Operation",
                  //   "Multiple Footwear Styles",
                  //   "Branding & Marketing Tips",
                  "you'll explore slipper making, sandal crafting, and master the art of creating stylish oxfords.",
                ],
              },
              {
                name: "Master Class",
                price: "₦250,000",
                duration: "16 Weeks",
                features: [
                  //   "Custom Footwear Production",
                  //   "Business & Brand Training",
                  //   "Mentorship Program",
                  //   "Launch Support & Promotion",
                  "This comprehensive four-month program allows you to excel in slipper and sandal making, while also becoming proficient in crafting Oxford, Derby, Loafers, and Decollete shoes. It's a holistic journey into the world of shoe design!",
                ],
              },
            ].map((plan, index) => (
              <div
                key={index}
                className="bg-amber-50 border border-amber-200 rounded-2xl p-8 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
              >
                <h3 className="text-2xl font-bold text-amber-700 mb-2">
                  {plan.name}
                </h3>
                <p className="text-gray-600 mb-4">{plan.duration}</p>
                {/* <p className="text-3xl font-extrabold text-gray-800 mb-6">
                  {plan.price}
                </p> */}
                <ul className="text-gray-600 space-y-2 mb-6 text-sm">
                  {plan.features.map((feature, i) => (
                    <li key={i}>• {feature}</li>
                  ))}
                </ul>
                <a
                  href="#"
                  className="inline-block bg-amber-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-amber-700 transition-all duration-300"
                >
                  Enroll Now
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
