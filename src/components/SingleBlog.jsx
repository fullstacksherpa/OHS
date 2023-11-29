import React from "react";
import { FaClock, FaUser } from "react-icons/fa";
import { blogData } from "../constants";
import { useParams } from "react-router-dom";
import { RiArrowGoBackFill } from "react-icons/ri";
import { Link } from "react-router-dom";
import { threetable } from "../assets";


const SingleBlog = () => {
  const { id } = useParams();
  const blog = blogData.find((blog) => blog.id === parseInt(id));

  // Check if a blog with the given id exists
  if (!blog) {
    return <div>Blog not found</div>;
  }
  const {
    title,
    image,
    author,
    published_date,
    tabletwo,
    reading_time,
    table,
    content,
    authorPic,
    tablethree,
    tablefour,
  } = blog;
  return (
    <>
      <div className="max-w-7xl mx-auto my-8">
        <div className="lg:w-3/4 mx-auto">
          <div>
            <img
              src={image}
              alt="blog image"
              className="w-2/3 mx-auto rounded"
            />
          </div>
          <h2 className="text-3xl mt-8 font-bold mb-4 text-blue-500 cursor-pointer">
            {title}
          </h2>
          <p className="mb-3 text-gray-600">
            {authorPic ? (
              <img
                src={authorPic}
                alt="authour image"
                className="inline-flex items-center mr-2 w-[25px] h-[25px] rounded-full"
              />
            ) : (
              <FaUser className="inline-flex items-center mr-2" />
            )}
            {author} | {published_date}
          </p>
          <p className="mb-3 text-gray-600">
            <FaClock className="inline-flex items-center mr-2" />
            {reading_time}
          </p>
          <p className="text-base text-gray-500 mb-12">{content}</p>
          {table && <div>{table}</div>}
          {tabletwo && <div>{tabletwo}</div>}
          {tablethree && <div>{tablethree}</div>}
          {tablefour && <div>{tablefour}</div>}
        </div>
      </div>
      <div className="fixed bottom-12 left-12 transition-transform transform hover:text-orange hover:scale-125">
        <Link to="/#home">
          <RiArrowGoBackFill className="text-5xl text-white cursor-pointer" />
        </Link>
      </div>
    </>
  );
};

export default SingleBlog;
