import React from "react";
import NavlinksText from "./NavlinksText";

const Navlinks = () => {
  return (
    <div>
      <ul className="flex flex-col cursor-pointer md:flex-row shadow-md lg:gap-[40px] md:gap-[10px]  gap-3  mt-2 md:rounded-full rounded-md bg-white lg:px-10 px-10 md:px-5  py-3 text-m">
        <li>
          <NavlinksText text1={"Why Circue"} text2={"Why us"} />
        </li>
        <li>
          {" "}
          <NavlinksText text1={"How it works"} text2={" How it Works"} />
        </li>
        <li>
          {" "}
          <NavlinksText text1={"About Circue"} text2={" About Us"} />
        </li>
        <li>
          {" "}
          <NavlinksText text1={"FAQs"} text2={" Our FAQ"} />
        </li>
      </ul>
    </div>
  );
};

export default Navlinks;
