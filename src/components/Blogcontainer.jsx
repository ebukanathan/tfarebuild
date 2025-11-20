import React from "react";
import Blogcard from "./Blogcard.jsx";

async function fetchPosts() {
  const options = {
    headers: {
      authorization: `Bearer ${import.meta.env.STRAPI_API_TOKEN}`,
    },
  };

  try {
    const response = await fetch("http://127.0.0.1:1337/api/Blogs?populate=*");

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching posts:", error);
    return [];
  }
}

async function Blogcontainer() {
  const Blogs = await fetchPosts();

  console.log(Blogs);

  return (
    <div class="flex flex-col  items-center min-h-screen py-8 bg-gray-100">
      <h1>Blog Page</h1>

      <p>Welcome to the blog page!</p>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
        {Blogs?.data?.map((blog) => (
          <Blogcard blog={blog} key={blog.id} />
        ))}
      </div>
    </div>
  );
}

export default Blogcontainer;
