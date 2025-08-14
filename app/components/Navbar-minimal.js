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
      <div className="flex text-sm items-center justify-between py-1 gap-6 container mx-auto max-w-5xl">
        <Link className="flex items-center gap-2" href="/">
          <Image
            src="/Artisan-logo.png"
            alt="Artisan Logo"
            width={40}
            height={40}
          />
          <span>Artisan Linkup</span>
        </Link>
      </div>
    </nav>
  );
}
