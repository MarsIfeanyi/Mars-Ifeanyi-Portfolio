import { Navlinks } from "@/constants/constant";
import { X } from "lucide-react";
import Link from "next/link";
import React from "react";

type Props = {
  showNav: boolean;
  closeNav: () => void;
};

const MobileNav = ({ closeNav, showNav }: Props) => {
  return (
    <>
      {/* =========================
          OVERLAY
      ========================== */}
      <div
        onClick={closeNav}
        aria-hidden="true"
        className={`fixed inset-0 z-1002 bg-black/70 backdrop-blur-sm transition-all duration-300 ${
          showNav
            ? "pointer-events-auto visible opacity-100"
            : "pointer-events-none invisible opacity-0"
        }`}
      />

      {/* =========================
          MOBILE NAVIGATION
      ========================== */}
      <div
        role="dialog"
        aria-modal="true"
        aria-label="Mobile navigation menu"
        className={`fixed left-1/2 top-1/2 z-1050 w-[90%] max-w-md -translate-x-1/2 rounded-2xl bg-gray-900 p-8 text-white shadow-2xl transition-all duration-300 ease-in-out ${
          showNav
            ? "-translate-y-1/2 scale-100 opacity-100"
            : "translate-y-[-45%] scale-95 opacity-0 pointer-events-none"
        }`}
      >
        {/* =========================
            CLOSE BUTTON
        ========================== */}
        <button
          type="button"
          onClick={closeNav}
          aria-label="Close navigation menu"
          className="absolute right-5 top-5 rounded-full p-2 text-white transition-all duration-200 hover:bg-white/10 hover:text-gray-300"
        >
          <X className="h-6 w-6" />
        </button>

        {/* =========================
            NAVIGATION LINKS
        ========================== */}
        <nav className="mt-8 flex flex-col items-center justify-center gap-6">
          {Navlinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={closeNav}
              className="border-b-2 border-transparent pb-1 text-xl font-medium transition-all duration-200 hover:border-white hover:text-gray-300 sm:text-2xl"
            >
              {link.name}
            </Link>
          ))}
        </nav>
      </div>
    </>
  );
};

export default MobileNav;
