import React from "react";
import FirstSlideText from "./FirstSlideText";
import NavButton from "./NavButton";

const ThirdSlideText = () => {
  return (
    <div className="flex-col ">
      <FirstSlideText
        text1={" Meet up with locals in a new environment"}
        text2={
          "It's not the best feeling to be the “new kid” on the block, but with Circue, you get recommendations from locals who know the nooks and crannies of your destination and make you feel right at home."
        }
      />
      <div className="text-center py-3">
        {" "}
        <NavButton text={"Learn more"} />
      </div>
    </div>
  );
};

export default ThirdSlideText;
