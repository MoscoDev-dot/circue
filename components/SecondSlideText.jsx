import React from "react";
import FirstSlideText from "./FirstSlideText";
import NavButton from "./NavButton";

const SecondSlideText = () => {
  return (
    <div className="flex-col ">
      <FirstSlideText
        text1={" Connect and help others who share similar interests"}
        text2={
          "Create group chats, plan meetups and connect with new and old friends by leaving honest reviews, and answering questions from Cricue newbies to help them make the most of their experience."
        }
      />
      <div className="text-center py-3">
        {" "}
        <NavButton text={"Learn more"} />
      </div>
    </div>
  );
};

export default SecondSlideText;
