import logo from "../assets/logo.svg";
import iconClose from "../assets/icon-close.svg";
import iconHamburger from "../assets/icon-hamburger.svg";
import CTA from "./CTA";
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className="relative flex justify-between gap-6 items-center mb-16 ">
      <img src={logo} />
      {isOpen && (
        <img
          src={iconClose}
          className="block md:hidden cursor-pointer"
          onClick={() => setIsOpen(!isOpen)}
        />
      )}
      {!isOpen && (
        <img
          src={iconHamburger}
          className="block md:hidden cursor-pointer"
          onClick={() => setIsOpen(!isOpen)}
        />
      )}
      {isOpen && (
        <ul className="md:hidden absolute top-10 flex flex-col items-center p-10 gap-6 w-full bg-white rounded-md shadow-2xl text-very-dark-blue">
          <li className="hover:text-dark-grayish-blue">
            <a href="#">Pricing</a>
          </li>
          <li className="hover:text-dark-grayish-blue">
            <a href="#">Product</a>
          </li>
          <li className="hover:text-dark-grayish-blue">
            <a href="#">About Us</a>
          </li>
          <li className="hover:text-dark-grayish-blue">
            <a href="#">Careers</a>
          </li>
          <li className="hover:text-dark-grayish-blue">
            <a href="#">Community</a>
          </li>
        </ul>
      )}
      <ul className="hidden md:block md:flex items-center gap-4 lg:gap-8 text-very-dark-blue">
        <li className="hover:text-dark-grayish-blue">
          <a href="#">Pricing</a>
        </li>
        <li className="hover:text-dark-grayish-blue">
          <a href="#">Product</a>
        </li>
        <li className="hover:text-dark-grayish-blue">
          <a href="#">About Us</a>
        </li>
        <li className="hover:text-dark-grayish-blue">
          <a href="#">Careers</a>
        </li>
        <li className="hover:text-dark-grayish-blue">
          <a href="#">Community</a>
        </li>
      </ul>
      <div className="hidden md:block">
        <CTA />
      </div>
    </nav>
  );
};
export default Navbar;
