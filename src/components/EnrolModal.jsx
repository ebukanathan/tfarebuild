import React, { useState } from "react";
import emailjs from "emailjs-com";

const EnrollModal = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    course: "",
  });
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "service_abf1zuk", // from EmailJS
        "template_4hj6nxt",
        formData,
        "gO7DF-gU3BSDuSzAZ" // public key
      )
      .then(
        () => {
          setStatus("✅ Enrollment request sent successfully!");
          setTimeout(() => {
            setStatus("");
            onClose();
          }, 2500);
        },
        (error) => {
          setStatus("❌ Failed to send. Please try again.");
          console.error("Error:", error);
        }
      );
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-60 flex justify-center items-center z-50">
      <div className="bg-white rounded-xl shadow-xl w-full max-w-md p-6 relative">
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-500 hover:text-black"
        >
          ✖
        </button>

        <h2 className="text-2xl font-bold text-center mb-4">
          Enroll in a Course
        </h2>

        {status ? (
          <p className="text-center text-green-600 font-medium">{status}</p>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
              className="border border-gray-300 rounded-lg p-3"
            />

            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
              className="border border-gray-300 rounded-lg p-3"
            />

            <select
              name="course"
              value={formData.course}
              onChange={handleChange}
              required
              className="border border-gray-300 rounded-lg p-3"
            >
              <option value="">Select a Course</option>
              <option value="Shoemaking">Shoemaking</option>
              <option value="Bag Making">Bag Making</option>
              <option value="Leather Craft">Leather Craft</option>
            </select>

            <button
              type="submit"
              className="bg-amber-600 text-white font-semibold py-3 rounded-lg hover:bg-amber-700 transition"
            >
              Submit
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default EnrollModal;
