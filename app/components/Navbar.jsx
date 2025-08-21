"use client";
import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null); // no <HTMLUListElement> type
  const buttonRef = useRef(null); // no <HTMLButtonElement> type

  useEffect(() => {
    function handleClickOutside(event) {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target)
      ) {
        setMenuOpen(false);
      }
    }

    if (menuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [menuOpen]);

  return (
    <nav className="bg-white text-black p-4 fixed w-full z-50 shadow-md">
      <div className="flex text-sm items-center justify-between py-1 gap-6 container mx-auto lg:justify-center">
        <Link className="flex items-center gap-2" href="/">
          <Image
            src="/Artisan-logo.png"
            alt="Artisan Logo"
            width={40}
            height={40}
          />
          <span>Artisan Linkup</span>
        </Link>

        <div className="hidden lg:flex lg:gap-6 lg:items-center">
          <div className="relative">
            <button className="hover:text-primary">Categories</button>
          </div>
          <div className="flex gap-4">
            <Link href="/about" className="hover:text-primary">
              About Us
            </Link>
            <Link href="/contact" className="hover:text-primary">
              Contact Us
            </Link>
          </div>
        </div>

        <div className="text-sm gap-4 items-center hidden lg:flex">
          <Link href="/auth/login" className="hover:text-primary">
            Log in
          </Link>
          <Link
            href="/auth/option"
            className="hover:bg-orange-400 bg-primary text-white px-4 py-2 rounded-md"
          >
            Sign up
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          ref={buttonRef}
          className="lg:hidden cursor-pointer"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <Image src="/list.svg" width={20} height={20} alt="open menu" />
        </button>
      </div>

      {/* Mobile Menu */}
      <ul
        ref={menuRef}
        className={`fixed flex flex-col top-0 bottom-0 right-0 w-64 bg-white transition-transform duration-500 px-10
          gap-6 py-16 h-screen z-50 ${
            menuOpen ? "translate-x-0" : "translate-x-full"
          }`}
      >
        <div
          className="absolute top-6 right-10"
          onClick={() => setMenuOpen(false)}
        >
          <Image
            src="/assets/close.svg"
            width={20}
            height={20}
            className="cursor-pointer"
            alt="Close Menu"
          />
        </div>
        <li>
          <Link href="/auth/option">Sign up</Link>
        </li>
        <li>
          <Link href="/auth/login">Log in</Link>
        </li>
        <li>
          <Link href="/about">About Us</Link>
        </li>
        <li>
          <Link href="/contact">Contact Us</Link>
        </li>
      </ul>
    </nav>
  );
}
