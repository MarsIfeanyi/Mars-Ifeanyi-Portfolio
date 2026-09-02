"use client";
import { Button } from "@/components/ui/button";
import { Download, FolderOpen } from "lucide-react";
import { TypeAnimation } from "react-type-animation";
const Hero = () => {
  return (
    <div
      id="home"
      className=" relative min-h-[calc(100vh-7rem)] flex items-center justify-center overflow-hidden bg-[radial-gradient(circle_476px_at_54.8%_51.5%,rgba(168,229,253,1)_0%,rgba(244,244,254,1)_42.3%,rgba(244,244,254,1)_100.2%)] dark:bg-[radial-gradient(circle_476px_at_54.8%_51.5%,rgba(30,64,175,0.35)_0%,rgba(17,24,39,0.9)_55%,rgba(17,24,39,1)_100%)] "
    >
      {" "}
      {/* Content */}{" "}
      <div className="relative z-10 px-6 pt-24 text-center sm:pt-0">
        {" "}
        {/* Main Title */}{" "}
        <h1
          data-aos="fade-up"
          data-aos-delay="100"
          className=" mb-6 text-4xl font-bold sm:text-5xl md:text-6xl lg:text-7xl "
        >
          {" "}
          Hi, I&apos;m{" "}
          <span className="text-blue-700 dark:text-yellow-500">
            {" "}
            Marcellus Ifeanyi{" "}
          </span>{" "}
        </h1>{" "}
        {/* Professional Titles */}{" "}
        <div
          data-aos="fade-up"
          data-aos-delay="200"
          className=" mb-4 h-12 text-xl font-semibold text-black dark:text-white sm:mb-8 sm:text-2xl md:text-3xl "
        >
          {" "}
          <TypeAnimation
            sequence={[
              "Electrical & Electronics Engineer",
              2200,
              "Software Engineer",
              2200,
              "Data & Analytics Engineer",
              2200,
              "AI & Machine Learning Engineer",
              2200,
              "Blockchain Developer",
              2200,
              "Quantitative Finance Enthusiast",
              2200,
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
            className="font-mono"
          />{" "}
        </div>{" "}
        {/* Professional Description */}{" "}
        <p
          data-aos="fade-up"
          data-aos-delay="300"
          className="mx-auto mb-10 max-w-2xl text-xl text-muted-foreground dark:text-gray-200 leading-10"
        >
          Multidisciplinary Engineer, Technology & Data Professional
          <br />
          Building intelligent solutions at the intersection of engineering,
          <br />
          energy systems, software, AI, data, and quantitative finance.
        </p>
        {/* Buttons */}{" "}
        {/* <div data-aos="fade-up" data-aos-delay="400" className="flex flex-col justify-center gap-4 sm:flex-row" > <Button size="lg" className="mx-auto w-fit sm:mx-0"> <FolderOpen className="mr-2 h-5 w-5" /> View Projects </Button> <Button size="lg" className="mx-auto w-fit sm:mx-0"> <Download className="mr-2 h-5 w-5" /> Download CV </Button> </div> */}{" "}
      </div>{" "}
    </div>
  );
};
export default Hero;
