import React from "react";

const FirstSlideText = ({ text1, text2 }) => {
  return (
    <div className="mt-10  text-white md:px-10 px-2  text-center">
      <p className="font-black md:text-[40px] text-[20px] lg:px-70 md:px-10 px-0 py-10">{text1}</p>
      <p className="font-semibold opacity-75 lg:px-30 md:px-10 px-5 text-[15px] md:text-[30px]">{text2}</p>
    </div>
  );
};

export default FirstSlideText;
