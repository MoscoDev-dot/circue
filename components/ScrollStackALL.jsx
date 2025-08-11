import React from "react";
import ScrollStack from "./ScrollStack";

const ScrollStackALL = () => {
  return (
    <div className="">
      <ScrollStack
        text1={"Why Circue"}
        text2={"Personalized"}
        text3={"Experience"}
        text4={
          "Circue allows you to customize your feed based on your interests, so you only get to see relevant posts on your feed. "
        }
        ImageSrc={"/iPhone 13.webp"}
      />

      <ScrollStack
        text1={"Why Circue"}
        text2={"No hablas español?"}
        text3={"No Worries!"}
        text4={
          "By helping you translate unfamiliar words, phrases and expressions, traveling to foreign places can become a much more wholesome experience. "
        }
        ImageSrc={"/iPhone132.webp"}
      />

      <ScrollStack
        text1={"Why Circue"}
        text2={"Stay connect with"}
        text3={"Your Circue"}
        text4={
          "Circue allows you to be a part of your friends’ lives, either through sharing their live locations or day-to-day activities. "
        }
        ImageSrc={"/iPhone133.webp"}
      />
    </div>
  );
};

export default ScrollStackALL;
