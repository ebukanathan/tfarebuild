import React from "react";

function Blogcard({ blog }) {
  const imgUrl = "http://127.0.0.1:1337" + blog?.img?.url;
  return (
    <div className="rounded-lg shadow-md p-2">
      <img
        src={imgUrl}
        alt="Blog Post"
        className="w-full h-48 object-cover rounded-t-lg"
      />
      <div className="p-4">
        <h2 className="text-xl font-semibold mb-2">{blog.Title}</h2>
        <p className="text-gray-600 mb-4">{blog.Description}</p>
        <a href="/blog/post-url" className="text-pink-500 hover:underline">
          Read More
        </a>
      </div>
    </div>
  );
}

export default Blogcard;
