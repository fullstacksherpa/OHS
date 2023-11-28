import React from "react";

import Type from "./TypeAnimation";

const Footer = () => {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <div className="flex  flex-col -mb-14">
      <div className="bg-white w-[89%] h-1 mx-auto" />
      <div className="text-center text-white flex flex-col md:flex-row md:justify-around -mt-12 mb-0">
        <h3>
          Copyright © {year} &#124;{" "}
          <span className="tracking-widest">
            {" "}
            Work<span className="text-orange">Safe</span>
          </span>
        </h3>
        <h3>
          website developed and designed by{" "}
          <a
            href="https://ongchen.com"
            className="hover:text-orange green-text-gradient font-bold leading-4 tracking-widest inline-block hover:scale-125">
            <Type />
          </a>
        </h3>
      </div>
    </div>
  );
};

export default Footer;
