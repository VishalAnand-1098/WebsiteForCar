import React from "react";
import NavbarDesktop from "./NavbarDesktop";
import NavbarMobile from "./NavbarMobile";

const Navbar = () => {
  return (
    <div>
      {/* Desktop Navbar - show from md and above */}
      <div className="hidden md:block">
        <NavbarDesktop />
      </div>

      {/* Mobile Navbar - show below md */}
      <div className="block md:hidden sm:block">
        <NavbarMobile />
      </div>
    </div>
  );
};

export default Navbar;
