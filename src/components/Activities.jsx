import {
  FaChalkboardTeacher,
  FaTools,
  FaUsers,
  FaIndustry,
} from "react-icons/fa";

export default function OurActivities() {
  const activities = [
    {
      id: 1,
      icon: <FaChalkboardTeacher className="text-4xl text-amber-600 mb-4" />,
      title: "Professional Training",
      description:
        "We offer intensive hands-on training programs that teach footwear design, pattern cutting, stitching, and finishing from scratch.",
    },
    {
      id: 2,
      icon: <FaTools className="text-4xl text-amber-600 mb-4" />,
      title: "Product Development",
      description:
        "Our students and experts collaborate to create high-quality handcrafted footwear using modern tools and techniques.",
    },
    {
      id: 3,
      icon: <FaUsers className="text-4xl text-amber-600 mb-4" />,
      title: "Community & Mentorship",
      description:
        "We build a supportive community where students receive ongoing mentorship and access to industry professionals.",
    },
    {
      id: 4,
      icon: <FaIndustry className="text-4xl text-amber-600 mb-4" />,
      title: "Entrepreneurship Support",
      description:
        "We guide our graduates on how to start and scale their footwear brands with business coaching and industry exposure.",
    },
  ];

  return (
    <section className="bg-gray-50 py-16 px-6 md:px-16">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
          Our Activities
        </h2>
        <p className="text-gray-600 mb-12 max-w-2xl mx-auto">
          At our Footwear Academy, we’re shaping the next generation of skilled
          shoemakers, entrepreneurs, and innovators through these core areas of
          impact.
        </p>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {activities.map((activity) => (
            <div
              key={activity.id}
              className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
            >
              <div className="flex flex-col items-center text-center">
                {activity.icon}
                <h3 className="text-xl font-semibold mb-2 text-gray-800">
                  {activity.title}
                </h3>
                <p className="text-gray-600 text-sm">{activity.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
