import SectionHeading from "@/components/Helper/SectionHeading";
import { highlights, stats } from "@/data";
import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <div className="py-16 bg-gray-100 dark:bg-gray-900 ">
      {/* Section Heading */}
      <SectionHeading title_1="About" title_2="Me" />

      <div className="grid w-[80%] mx-auto lg:grid-cols-2 gap-12 items-center">
        {/* Image */}
        <div className="relative">
          <div
            data-aos="fade-right"
            data-aos-delay="0"
            data-aos-anchor-placement="top-center"
            className="aspect-square rounded-2xl overflow-hidden p-2"
          >
            <Image
              src={"/images/mars.jpg"}
              alt="Profile"
              width={700}
              height={700}
              priority
              className="w-full h-full object-center rounded-xl"
            />
          </div>
        </div>
        {/* Content */}
        <div
          data-aos="fade-left"
          data-aos-delay="150"
          data-aos-anchor-placement="top-center"
          className="space-y-6  text-lg"
        >
          <p className="text-muted-foreground leading-relaxed  ">
            Multidisciplinary engineer and technology professional with a
            background spanning electrical and electronics engineering, energy
            systems, software engineering, data & analytics engineering, and
            financial markets.{" "}
            <span className="block mt-1">
              My interests lie at the intersection of engineering, technology,
              and intelligent systems. I&apos;m passionate about understanding
              complex systems and using software, data, and quantitative methods
              to develop solutions that improve decision-making, efficiency,
              reliability, and value creation.
            </span>
            <span className="block mt-1">
              My engineering background has developed my interest in energy
              systems, power and renewable energy, and the application of
              technology to address modern energy challenges.
            </span>
            <span className="block mt-1">
              My journey into software and data has led me to explore Software
              Engineering, Data Engineering, Artificial Intelligence, Machine
              Learning, and Computer Science, particularly their application to
              real-world engineering, business, and technical problems.
            </span>
            <span className="block mt-1">
              I&apos;m also interested in quantitative finance and financial
              markets, where I explore data-driven and algorithmic approaches to
              market analysis, risk management, and systematic trading.
            </span>
          </p>

          {/* Highlights */}
          {/* <div className='grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4' >
        {
          highlights.map((item) => {
            return (
              <div 
               key={item.text}
               className='flex items-center gap-3 text-sm'>
               
               <div className='w-8 h-8 rounded-lg bg-blue-500/10 flex items-center justify-center' >
               <item.icon className='w-4 h-4 text-blue-500' />
               </div> 
               <span className='text-muted-foreground'>
                {item.text}
               </span>
              </div>
            )
          })
        }
      </div> */}
        </div>
      </div>
      {/* Stats */}
      <div className="mt-16 w-[80%] mx-auto">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat) => {
            return (
              <div
                data-aos="zoom-in"
                data-aos-delay="200"
                data-aos-anchor-placement="top-center"
                key={stat.label}
                className="bg-white dark:bg-gray-800 shadow rounded-xl p-6 text-center"
              >
                <div className="text-3xl md:text-4xl font-bold text-blue-700 mb-2 dark:text-yellow-500">
                  {" "}
                  {stat.value}{" "}
                </div>

                <div className="text-sm text-muted-foreground">
                  {" "}
                  {stat.label}{" "}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default About;
