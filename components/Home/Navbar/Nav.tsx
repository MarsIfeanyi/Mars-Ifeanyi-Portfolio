"use client";

import Logo from "@/components/Helper/Logo";
import ThemeToggler from "@/components/Helper/ThemeToggler";
import { Navlinks } from "@/constants/constant";
import { MenuIcon } from "lucide-react";
import Link from "next/link";
import React, { useEffect, useState } from "react";

type Props = {
  openNav: () => void;
};

const Nav = ({ openNav }: Props) => {
  const [navBg, setNavBg] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setNavBg(window.scrollY >= 90);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`
        fixed left-0 top-0 z-1000 w-full
    h-22
        transition-all duration-300 pb-4
        ${
          navBg
            ? "bg-white/95 shadow-md backdrop-blur-md dark:bg-gray-900/95"
            : "bg-transparent"
        }
      `}
    >
      <div className="mx-auto flex h-full w-[90%] items-center justify-between xl:w-[80%]">
        {/* LOGO */}

        <Logo />

        {/* DESKTOP NAVIGATION */}
        <nav className="hidden items-center space-x-10 lg:flex">
          {Navlinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="
                font-semibold
                text-black
                transition-all duration-200
                hover:text-blue-600
                dark:text-white
                dark:hover:text-yellow-400
              "
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* RIGHT SIDE */}
        <div className="flex items-center space-x-4">
          {/* THEME TOGGLER */}
          <ThemeToggler />

          {/* MOBILE MENU BUTTON */}
          <button
            type="button"
            onClick={openNav}
            aria-label="Open navigation menu"
            className="
              flex h-10 w-10
              items-center justify-center
              rounded-md
              transition-colors
              hover:bg-black/5
              dark:hover:bg-white/10
              lg:hidden
            "
          >
            <MenuIcon className="h-6 w-6 text-black dark:text-white" />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Nav;
