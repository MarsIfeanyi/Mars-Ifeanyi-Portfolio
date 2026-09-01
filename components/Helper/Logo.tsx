import Image from "next/image";
import Link from "next/link";
import React from "react";

const Logo = () => {
  return (
    <Link href="/#home" aria-label="Go to homepage">
      <Image
        src="/images/mars.jpg"
        alt="Mars Ifeanyi Logo"
        width={80}
        height={80}
        priority
        className="rounded-full shadow-2xl cursor-pointer"
      />
    </Link>
  );
};

export default Logo;
