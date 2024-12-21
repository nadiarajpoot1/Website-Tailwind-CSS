"use client"

import React, { useState } from 'react';
import Link from 'next/link';
import { FaShoppingCart } from 'react-icons/fa';
import { HiMenuAlt3 } from 'react-icons/hi'; //Hamburger icon
import { HiX } from 'react-icons/hi'; //close icon

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen); //Toggle menu open/close
    };

    const closeMenu = () => {
        setIsMenuOpen(false); //close the menu
    };

    return (
  <header className="bg-red-700 text-white py-5 flex justify-between items-center px-10 relative z-10">
  <h1 className="text-2xl font-bold">Cars World</h1>

  {/* Desktop Navbar */}
  <nav className="hidden md:flex gap-10 text-white font-bold" >
    <Link  href="/" onClick={closeMenu}>Home</Link>
    <Link href="/about" onClick={closeMenu}>About</Link>
    <Link href="/cars" onClick={closeMenu}>Cars</Link>
    <Link href="/contact" onClick={closeMenu}>Contact</Link>
    <FaShoppingCart className="text-white text-xl"/>
  </nav>

  {/*Mobile Navbar (Hamburger Menu)*/}
  <div className="md: hidden flex items-center">
    <HiMenuAlt3
    className="text-white text-3xl cursor-pointer"
    onClick={toggleMenu} //toggle menu on click
      />
  </div>

  {/* Mobile Menu */}
  <div
    className={ `${
      isMenuOpen ? 'block' : 'hidden'
    } absolute top-0 left-0 w-full h-full bg-red-700 p-5 md:hidden z-20`}
  >
    {/*close Button */}
    <div className="flex justify-end">
      <HiX 
      className="text-white text-3xl cursor-pointer"
      onClick={toggleMenu} // close menu when clicked
      />
  </div>

  <nav className="flex flex-row items-center gap-3 text-white font-bold">
    <Link href="/"onClick={closeMenu}>Home</Link> 
    <Link href="/about" onClick={closeMenu}>About</Link>  
    <Link href="/cars" onClick={closeMenu}>Cars</Link> 
    <Link href="/contact" onClick={closeMenu}>Contact</Link> 
    <FaShoppingCart className="text-white text-xl" />
  </nav>
  </div>
  </header>
    );
};

export default Header;