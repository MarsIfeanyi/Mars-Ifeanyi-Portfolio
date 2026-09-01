"use client";

import { Button } from "@/components/ui/button";
import { Download, FolderOpen } from "lucide-react";
import { TypeAnimation } from "react-type-animation";

const Hero = () => {
  return (
    <div
      id="home"
      className="
        relative
        min-h-[calc(100vh-7rem)]
        flex
        items-center
        justify-center
        overflow-hidden
  
        bg-[radial-gradient(circle_476px_at_54.8%_51.5%,rgba(168,229,253,1)_0%,rgba(244,244,254,1)_42.3%,rgba(244,244,254,1)_100.2%)]
        dark:bg-[radial-gradient(circle_476px_at_54.8%_51.5%,rgba(30,64,175,0.35)_0%,rgba(17,24,39,0.9)_55%,rgba(17,24,39,1)_100%)]
      "
    >
      {/* Content */}

      <div className="relative z-10 text-center px-6 pt-24 sm:pt-0">
        {/* Sub title */}
        <div data-aos="fade-up" className="sm:mb-6">
          <span className="inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-white dark:bg-gray-600 text-muted-foreground dark:text-gray-200 text-xs sm:text-sm mb-8 max-w-[92vw]">
            <span className="w-2 h-2 rounded-full bg-green-500 shrink-0"></span>
            Available for Opportunities
          </span>
        </div>

        {/* Title */}
        <h1
          data-aos="fade-up"
          data-aos-delay="100"
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6"
        >
          Hi, I&apos;m{" "}
          <span className="text-blue-700 dark:text-yellow-500">
            Marcellus Ifeanyi
          </span>
        </h1>

        {/* Typewriter effect */}
        <div
          data-aos="fade-up"
          data-aos-delay="200"
          className="text-xl sm:text-2xl md:text-3xl text-black dark:text-white font-semibold mb-4 sm:mb-8 h-12"
        >
          <TypeAnimation
            sequence={[
              "Data Engineer",
              2000,
              "Software Engineer",
              2000,
              "Data Analytics Engineer",
              2000,
              "IT Support Engineer",
              2000,
              "Quant and Chartered Trader",
              2000,
              "Full Stack Blockchain Developer",
              2000,
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
            className="font-mono"
          />
        </div>

        {/* Description */}
        <p
          data-aos="fade-up"
          data-aos-delay="300"
          className="text-xl text-muted-foreground dark:text-gray-200 max-w-2xl mx-auto mb-10"
        >
          Multidisciplinary engineer, IT and data professional with experience
          spanning power systems, data analytics, data engineering, software
          engineering, blockchain technology, and quantitative finance.
        </p>

        {/* Buttons */}
        {/*
        <div
          data-aos="fade-up"
          data-aos-delay="400"
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Button size="lg" className="w-fit mx-auto sm:mx-0">
            <FolderOpen className="w-5 h-5 mr-2" />
            View Projects
          </Button>

          <Button size="lg" className="w-fit mx-auto sm:mx-0">
            <Download className="w-5 h-5 mr-2" />
            Download CV
          </Button>
        </div>
        */}
      </div>
    </div>
  );
};

export default Hero;
