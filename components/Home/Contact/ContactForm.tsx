import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Send } from "lucide-react";

const ContactForm = () => {
  return (
    <div
      data-aos="fade-left"
      data-aos-delay="150"
      data-aos-anchor-placement="top-center"
    >
      <form className="bg-white dark:bg-gray-800 rounded-2xl p-8 space-y-6">
        {/* Name and Email */}
        <div className="grid sm:grid-cols-2 gap-4">
          <div className="space-y-2">
            <label htmlFor="name" className="text-sm font-medium">
              Name
            </label>

            <Input
              id="name"
              name="name"
              placeholder="your name"
              required
              className="bg-gray-100 dark:bg-gray-700 py-5"
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="email" className="text-sm font-medium">
              Email
            </label>

            <Input
              id="email"
              name="email"
              type="email"
              placeholder="your email"
              required
              className="bg-gray-100 dark:bg-gray-700 py-5"
            />
          </div>
        </div>

        {/* Subject */}
        <div className="space-y-2">
          <label htmlFor="subject" className="text-sm font-medium">
            Subject
          </label>

          <Input
            id="subject"
            name="subject"
            placeholder="your inquiry"
            required
            className="bg-gray-100 dark:bg-gray-700 py-5"
          />
        </div>

        {/* Message */}
        <div className="space-y-2">
          <label htmlFor="message" className="text-sm font-medium">
            Message
          </label>

          <Textarea
            id="message"
            name="message"
            placeholder="Tell me more about your project, collaboration, or opportunity..."
            rows={5}
            required
            className="bg-gray-100 dark:bg-gray-700 h-40"
          />
        </div>

        {/* Submit Button */}
        <Button type="submit" size="lg" className="w-full cursor-pointer">
          <Send className="w-4 h-4 mr-2" />
          Send Message
        </Button>
      </form>
    </div>
  );
};

export default ContactForm;
