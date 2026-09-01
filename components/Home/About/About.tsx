import SectionHeading from "@/components/Helper/SectionHeading";
import { highlights, stats } from "@/data";
import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <div id="about" className="pb-16 bg-gray-100 dark:bg-gray-900 ">
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
          className="space-y-6"
        >
          {/* <h3 className="text-2xl font-semibold ">
            A passionate developer who loves to create
          </h3> */}
          <p className="text-muted-foreground leading-relaxed">
            Electrical & Electronics Engineer, Software Engineer, Data & IT
            Professional, Quant, and Chartered Trader with expertise spanning
            technology, data, and global financial markets.
            <span className="block mt-1">
              I&apos;m passionate about leveraging data, technology, and
              quantitative analysis to solve complex problems, support informed
              decision-making, manage risk, and create sustainable value.
            </span>
          </p>
          <p className="text-muted-foreground leading-relaxed">
            My long-term vision is to become a Quantitative Trader, Analyst, and
            Researcher, and ultimately a Hedge Fund Manager, designing
            sophisticated trading, portfolio, and risk management systems for
            global markets.
            <span className="block mt-1">
              I&apos;m committed to continuously advancing my expertise in Data
              Engineering, Data Analytics Engineering, Quantitative Finance, and
              Algorithmic Trading to build innovative, scalable solutions for
              the financial industry.
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
