import Link from "next/link";
import React from "react";

const NavButton = ({ text }) => {
  return (
    <div>
      <Link href='#' >
      <button
        
        type="button"
        className="rounded-full cursor-pointer hover:bg-neutral-200  text-[#000000] font-semibold shadow-lg py-3 px-8 lg:px-8 md:px-6 mt-3 bg-white"
      >
        {text}
      </button>
      </Link>
    </div>
  );
};

export default NavButton;
