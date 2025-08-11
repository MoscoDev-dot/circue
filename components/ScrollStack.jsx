"use client";
import { Container } from "@mui/material";
import Image from "next/image";
import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { AuroraText } from "./magicui/aurora-text";

const ScrollStack = ({ text1, text2, text3, text4, ImageSrc }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"], // fade in when enters, fade out when leaves
  });

  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);

  return (
    <motion.div
      ref={ref}
      style={{ opacity }}
      className="h-screen flex items-center justify-center sticky top-0"
    >
      <Container>
        <div className="bg-red-50 rounded-[4vw] p-8 lg:mt-40 md:mt-20 mb-15 mt-10 mx-auto shadow-md">
          <p className="text-center text-[#000000] md:pt-10 md:text-3xl text-xl font-bold pt-5">
           <AuroraText>{text1}</AuroraText> 
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 md:mx-10 mx-5 mt-0 md:mt-10 lg:mt-0 gap-10 items-center">

            <div className=" md:hidden mt-10">
              <Image
                src={ImageSrc}
                alt="scroll stack image"
                width={500}
                height={300}
              />
            </div>

            {/* Left Text */}
            <div>
              <p className="text-[#000000] font-semibold text-2xl md:text-3xl lg:text-4xl">
                {text2} <br /> {text3}
              </p>
              <p className="text-[#000000] opacity-75 text-lg md:text-xl my-6">
                {text4}
              </p>
            </div>

            {/* Right Image */}
            <div className="hidden md:block">
              <Image
                src={ImageSrc}
                alt="scroll stack image"
                width={500}
                height={300}
              />
            </div>
          </div>
        </div>
      </Container>
    </motion.div>
  );
};

export default ScrollStack;
