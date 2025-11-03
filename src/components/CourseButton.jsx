import React, { useState } from "react";
import EnrollModal from "./EnrolModal.jsx";

const CoursePage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section className=" text-center">
      <button
        onClick={() => setIsModalOpen(true)}
        className="inline-block bg-amber-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-amber-700 transition-all duration-300"
      >
        Enroll Now
      </button>

      <EnrollModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </section>
  );
};

export default CoursePage;
