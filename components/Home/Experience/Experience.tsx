import SectionHeading from "@/components/Helper/SectionHeading";
import { experiences } from "@/data";
import { Briefcase, GraduationCap } from "lucide-react";
import React from "react";

const Experience = () => {
  return (
    <div id="experience" className="py-16 bg-gray-100 dark:bg-gray-950">
      <SectionHeading
        title_1="Experience & "
        title_2="Education"
        description="My Professional Journey and Academic Background"
      />

      <div className="relative px-6 max-w-4xl mx-auto">
        {/* Timeline line */}
        <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-linear-to-b from-blue-400 to-blue-900 md:-translate-x-px"></div>

        {experiences.map((item, index) => {
          return (
            <div
              data-aos="zoom-in"
              data-aos-delay={`${index * 100}`}
              data-aos-anchor-placement="top-center"
              key={index}
              className={`relative flex flex-col md:flex-row gap-8 mb-12 ${
                index % 2 === 0 ? "md:flex-row-reverse" : ""
              }`}
            >
              {/* Time node */}
              <div className="absolute left-4 md:left-1/2 w-8 h-8 -translate-x-1/2 rounded-full bg-white border-2 border-blue-500 flex items-center justify-center z-10">
                {item.type === "work" ? (
                  <Briefcase className="w-4 h-4 text-blue-500" />
                ) : (
                  <GraduationCap className="w-4 h-4 text-blue-500" />
                )}
              </div>

              {/* Content */}
              <div className="ml-16 md:ml-0 md:w-[calc(50%-2rem)]">
                <div className="bg-white dark:bg-gray-900 shadow-md rounded-xl p-6 hover:scale-105 transition-all duration-300">
                  <div className="flex items-center gap-2 text-sm text-blue-500 mb-2">
                    <span className="px-3 py-1 rounded-full bg-blue-600/10 font-medium">
                      {item.period}
                    </span>
                  </div>

                  <h3 className="text-xl font-semibold mb-1">{item.title}</h3>

                  <p className="text-muted-foreground text-sm mb-3 font-semibold">
                    {item.company}
                  </p>

                  {/* Description */}
                  <ul className="space-y-2 text-muted-foreground text-sm">
                    {item.description.map((description, descriptionIndex) => (
                      <li
                        key={descriptionIndex}
                        className="flex items-start gap-2"
                      >
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-500" />
                        <span>{description}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Spacer */}
              <div className="hidden md:block md:w-[calc(50%-2rem)]"></div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Experience;
