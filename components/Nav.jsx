"use client";
import React, { useState } from "react";
import Navlinks from "./Navlinks";
import NavButton from "./NavButton";
import NavText from "./NavText";
import { Container, IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

const Nav = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="w-full fixed top-0 bg-red-100 pb-3 shadow-md z-50">
      <Container
        maxWidth={false}
        className="flex  items-center justify-between py-3 px-6 relative"
      >
        {/* Left: Brand / Text */}
        <div className="flex-shrink-0">
          <NavText />
        </div>

        {/* Center: Desktop Links */}
        <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2">
          <Navlinks />
        </div>

        {/* Right: Desktop Button */}
        <div className="hidden md:flex flex-shrink-0">
          <NavButton text={'Download app'} />
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <IconButton onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <CloseIcon /> : <MenuIcon />}
          </IconButton>
        </div>
      </Container>

      {/* Mobile Menu Dropdown */}
      {menuOpen && (
        <div className="md:hidden flex flex-col items-center bg-red-100 py-4 space-y-4 shadow-lg">
          <Navlinks />
          <NavButton text={'Download app'} />
        </div>
      )}
    </nav>
  );
};

export default Nav;
