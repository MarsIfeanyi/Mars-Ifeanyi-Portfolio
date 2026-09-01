import SectionHeading from "@/components/Helper/SectionHeading";
import { contactInfo, socialLinks } from "@/data";
import React from "react";
import ContactForm from "./ContactForm";

const Contact = () => {
  return (
    <div id="contact" className="py-16 bg-gray-100 dark:bg-gray-950 ">
      {/* Section Heading */}
      <div className="px-8">
        <SectionHeading
          title_1="Get In"
          title_2="Touch"
          description="Have a project or opportunity in mind? Let's connect and make it happen."
        />
      </div>
      <div className="w-[80%] mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Contact Info */}
          <div
            data-aos="fade-right"
            data-aos-delay="0"
            data-aos-anchor-placement="top-center"
          >
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-semibold mb-4">Let&apos;s talk</h3>

                <p className="text-muted-foreground">
                  I&apos;m Open to new projects, collaborations, and
                  opportunities across data, technology, and financial
                  engineering.
                </p>
              </div>

              {/* Contact Details */}
              <div className="space-y-4">
                {contactInfo.map((item) => {
                  return (
                    <a
                      href={item.href}
                      key={item.label}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-4 p-4 bg-white dark:bg-gray-800 shadow-md rounded-xl hover:scale-105 transition-all duration-300 group"
                    >
                      <div className="w-12 h-12 rounded-lg bg-blue-600/10 flex items-center justify-center group-hover:bg-blue-600/20 transition-colors">
                        <item.icon className="w-5 h-5 text-blue-500 dark:text-white" />
                      </div>

                      <div>
                        <p className="text-sm text-muted-foreground">
                          {item.label}
                        </p>

                        <p className="font-medium">{item.value}</p>
                      </div>
                    </a>
                  );
                })}
              </div>

              {/* Social Icons */}
              <div>
                <h4 className="text-lg font-medium mb-4">Follow Me</h4>

                <div className="flex gap-3">
                  {socialLinks.map((link) => {
                    return (
                      <a
                        href={link.href}
                        key={link.label}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-12 h-12 rounded-xl bg-white dark:bg-gray-800 flex items-center justify-center text-muted-foreground hover:text-blue-500 transition-colors"
                      >
                        <link.icon className="w-5 h-5" />
                      </a>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <ContactForm />
        </div>
      </div>
    </div>
  );
};

export default Contact;
