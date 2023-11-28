import React from "react";
import { Link } from "react-router-dom";
import { FaUser } from "react-icons/fa";

const BlogCard = ({ blogs }) => {
  const filteredBlogs = blogs;
  return (
    <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8">
      {filteredBlogs.map((blog) => (
        <Link
          to={`/blogs/${blog.id}`}
          key={blog.id}
          className="p-5 shadow-lg rounded cursor-pointer">
          <div>
            <img src={blog.image} alt="" className="w-full" />
          </div>
          <h3 className="mt-4 mb-2 font-bold hover:text-blue-600 cursor-pointer">
            {blog.title}
          </h3>
          <p className="mb-2 text-gray-600">
            {blog.authorPic ? (
              <img
                src={blog.authorPic}
                alt="authour image"
                className="inline-flex items-center mr-2 w-[25px] h-[25px] rounded-full"
              />
            ) : (
              <FaUser className="inline-flex items-center mr-2" />
            )}
            {blog.author}
          </p>
          <p className="text-sm text-gray-500">
            Published: <span className="pl-2">{blog.published_date}</span>
          </p>
        </Link>
      ))}
    </div>
  );
};

export default BlogCard;
