import React, { useState, useEffect } from "react";
import { Navbar } from "flowbite-react";

const Header = () => {
  const [lastScrollTop, setLastScrollTop] = useState(0);
  const [isScrollingUp, setIsScrollingUp] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollTop =
        window.pageYOffset || document.documentElement.scrollTop;
      setIsScrollingUp(currentScrollTop < lastScrollTop);
      setLastScrollTop(currentScrollTop <= 0 ? 0 : currentScrollTop);
    };

    window.addEventListener("scroll", handleScroll, false);
    return () => window.removeEventListener("scroll", handleScroll, false);
  }, [lastScrollTop]);

  return (
    <div
      className={`p-2 sticky ${
        isScrollingUp ? "show" : "hide"
      } style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }`}
    >
      <Navbar fluid rounded className="p-3 glassy">
        <Navbar.Brand
          href="https://flowbite-react.com"
          className="flex items-center space-x-2 text-blue-500"
        >
          <img
            src="https://png.pngtree.com/png-vector/20230531/ourlarge/pngtree-boy-s-face-outline-coloring-page-vector-png-image_6787401.png" // replace with your image URL
            className="mr-3 h-6 sm:h-9 animate-bounce"
            alt="Flowbite React Logo"
          />
          <span className="self-center whitespace-nowrap text-xl font-semibold">
            Flowbite React
          </span>
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse>
          <Navbar.Link
            href="#"
            active
            className="text-blue-500 hover:underline"
          >
            Home
          </Navbar.Link>
          <Navbar.Link href="#" className="text-blue-500 hover:underline">
            About
          </Navbar.Link>
          <Navbar.Link href="#" className="text-blue-500 hover:underline">
            Services
          </Navbar.Link>
          <Navbar.Link href="#" className="text-blue-500 hover:underline">
            Pricing
          </Navbar.Link>
          <Navbar.Link href="#" className="text-blue-500 hover:underline">
            Contact
          </Navbar.Link>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default Header;
