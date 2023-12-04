import React from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const ProjectCard = ({
  index,
  name,
  description,
  id,
  image,
}) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <div
        className='bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full  group'
      >
        <div className='relative w-full h-[230px]'>
          <img
            src={image}
            alt='project_image'
            className='w-full h-full object-cover rounded-2xl '
          />
           <div className="lg:inline-block absolute w-full h-full bg-green-200/50 rounded-md top-0 left-0 group-hover:bg-transparent duration-300"></div>
        </div>

        <div className='mt-5'>
          <h3 className='text-white font-bold sm:text-[24px] text-[16px]'>{name}</h3>
          <p className='mt-2 text-secondary sm:text-[18px] text-[12px]'>{description}</p>
        </div>

        <div className='mt-4 flex flex-wrap gap-2'>
          <p className="text-[14px] text-green-300">#{id}</p>
        </div>
      </div>
    </motion.div>
  );
};

const Authors = () => {
  return (
  <div id="authors">
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} `}>team Members</p>
        <h2 className={`${styles.sectionHeadText}`}>Authors</h2>
      </motion.div>

      <div className='w-full flex'>
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className='mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]'
        >
        This project's success is attributed to the dedicated team whose tireless efforts and collaborative spirit have been pivotal. Their collective commitment and hard work in crafting each article are evident in the project's overall success.
        </motion.p>
      </div>

      <div className='mt-20 flex flex-wrap gap-7'>
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
      </div>
  );
};

export default SectionWrapper(Authors, "");
