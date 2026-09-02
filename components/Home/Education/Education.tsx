import SectionHeading from "@/components/Helper/SectionHeading";
import { education } from "@/data";
import { GraduationCap } from "lucide-react";
import React from "react";

const Education = () => {
  return (
    <section id="education" className="bg-white py-16 dark:bg-gray-900">
      <SectionHeading
        title_1="Education & "
        title_2="Academic Background"
        description="My academic journey and the foundation of my multidisciplinary expertise."
      />

      <div className="relative mx-auto max-w-4xl px-6">
        {/* Timeline line */}
        <div className="absolute bottom-0 left-4 top-0 w-px bg-gradient-to-b from-blue-400 to-blue-900 md:left-1/2 md:-translate-x-px" />

        {education.map((item, index) => (
          <div
            key={index}
            data-aos="zoom-in"
            data-aos-delay={index * 100}
            data-aos-anchor-placement="top-center"
            className={`relative mb-12 flex flex-col gap-8 md:flex-row ${
              index % 2 === 0 ? "md:flex-row-reverse" : ""
            }`}
          >
            {/* Timeline node */}
            <div className="absolute left-4 z-10 flex h-8 w-8 -translate-x-1/2 items-center justify-center rounded-full border-2 border-blue-500 bg-white dark:bg-gray-900 md:left-1/2">
              <GraduationCap className="h-4 w-4 text-blue-500" />
            </div>

            {/* Content */}
            <div className="ml-16 md:ml-0 md:w-[calc(50%-2rem)]">
              <div className="rounded-xl bg-gray-50 p-6 shadow-md transition-all duration-300 hover:scale-105 dark:bg-gray-950">
                <div className="mb-2 flex items-center gap-2 text-sm text-blue-500">
                  <span className="rounded-full bg-blue-600/10 px-3 py-1 font-medium">
                    {item.period}
                  </span>
                </div>

                <h3 className="mb-1 text-xl font-semibold">{item.degree}</h3>

                <p className="mb-3 text-sm font-semibold text-muted-foreground">
                  {item.institution}
                </p>

                <ul className="space-y-2 text-sm text-muted-foreground">
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
            <div className="hidden md:block md:w-[calc(50%-2rem)]" />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;
