import React from "react";
import { TypingAnimation } from "./magicui/typing-animation";
import { FlipText } from "./magicui/flip-text";
import { TextAnimate } from "@/components/magicui/text-animate";

const FirstSlideText = ({ text1, text2 }) => {
  return (
    <div className="mt-10  text-white md:px-10 px-2  text-center">
      <div className="font-black md:text-[40px] text-[20px] lg:px-70 md:px-10 px-0 py-10"><TypingAnimation>{text1}</TypingAnimation></div>
      <div className="font-semibold opacity-75 lg:px-30 md:px-10 px-5 text-[15px] md:text-[30px]"> <TextAnimate animation="blurInUp" by="character" once>{text2}</TextAnimate></div>
    </div>
  );
};

export default FirstSlideText;
