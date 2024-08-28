"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { aboutMeData } from "@/contexts/data/aboutMeData";

const About = () => {
  // Variants for animations
  const imageVariants = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0 },
  };

  const textVariants = {
    hidden: { opacity: 0, y: 100 },
    visible: { opacity: 1, y: 0 },
  };

  // Hover and tap effects
  const hoverEffects = {
    scale: 1.05,
    boxShadow: "0px 12px 24px rgba(0, 0, 0, 0.2)",
    transition: { duration: 0.3 },
  };

  const tapEffects = {
    scale: 0.98,
    boxShadow: "0px 8px 16px rgba(0, 0, 0, 0.2)",
    transition: { duration: 0.2 },
  };

  return (
    <div className="bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]">
      <div className="container m-auto flex flex-col md:flex-row items-center gap-10 md:items-start p-4">
        <motion.div
          className="w-full "
          initial="hidden"
          animate="visible"
          variants={textVariants}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
          whileHover={hoverEffects}
          whileTap={tapEffects}
        >
          <div className="flex justify-between items-center bg-gray-200 dark:bg-zinc-800 py-1 px-3 rounded-t-lg">
            <div className="flex space-x-2">
              <div
                className="w-3 h-3 rounded-full bg-red-500"
                aria-label="Close"
                role="button"
              ></div>
              <div
                className="w-3 h-3 rounded-full bg-yellow-500"
                aria-label="Minimize"
                role="button"
              ></div>
              <div
                className="w-3 h-3 rounded-full bg-green-500"
                aria-label="Maximize"
                role="button"
              ></div>
            </div>
            <p className="text-purple-500 font-semibold">About Me</p>
          </div>
          <div className="p-4 text-xl text-purple-600 font-thin">
            <h2 className="text-2xl font-bold ">{aboutMeData.fullName}</h2>
            {aboutMeData.aboutText}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
