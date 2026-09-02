import Image from "next/image";
import Link from "next/link";
import React from "react";

const Logo = () => {
  return (
    <Link href="/" aria-label="Go to homepage" className="pt-4">
      <Image
        src="/images/mars.jpg"
        alt="Mars Ifeanyi Logo"
        width={70}
        height={70}
        priority
        className="rounded-full shadow-2xl cursor-pointer"
      />
    </Link>
  );
};

export default Logo;
