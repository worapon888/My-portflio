import React, { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import LiIcon from "./liIcon";

const Details = ({ type, time, place, info }) => {
  const ref = useRef(null);
  return (
    <li
      ref={ref}
      className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col item-start justify-between md:w-[80%]"
    >
      <LiIcon reference={ref} />
      <motion.div
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5, type: "spring" }}
      >
        <h3 className="capitalize font-bold text-2xl  sm:text-xl xs:text-lg">
          {type}&nbsp;
        </h3>
        <span className="capitalize font-medium text-dark/75 dark:text-light/75  xs:text-sm">
          {time} | {place}
        </span>
        <p className="font-medium w-full md:text-sm">{info}</p>
      </motion.div>
    </li>
  );
};

const Education = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });
  return (
    <div className="my-64">
      <h2 className="font-bold text-8xl mb-32 w-full text-center md:text-6xl xs:text-4xl md:mb-16">
        Education
      </h2>
      <div ref={ref} className="w-[75%] mx-auto relative lg:w-[90%]  md:w-full">
        <motion.div
          style={{ scaleY: scrollYProgress }}
          className="absolute left-9 top-3 w-[4px] h-full bg-dark origin-top dark:bg-light
          md:w-[2px] md:top-4 md:left-[22px]  xs:left-[14px] xs:top-6"
        />
        <ul className="w-full flex flex-col items-start justify-between ml-4  xs:ml-2">
          <Details
            type="Bachelor Communication Arts"
            time="(2009-2012)"
            place="Siam University"
            info="Masters in Digital Media"
          />
          <Details
            type="Computer Bussiness"
            time="(2007-2009)"
            place="Siam technology"
            info="business administration"
          />
          {/* <Details
            type="Bachelor Communication Arts"
            time="(2009-2012)"
            place="Siam University"
            info="Masters in Digital Media"
          /> */}
        </ul>
      </div>
    </div>
  );
};

export default Education;
