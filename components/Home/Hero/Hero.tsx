"use client"


import { Button } from "@/components/ui/button";
import { Download, FolderOpen } from "lucide-react";
import { TypeAnimation } from "react-type-animation";

const Hero = () => {
  return (
    <div
      className="
        relative
        min-h-screen
        flex
        items-center
        justify-center
        overflow-hidden
        bg-[radial-gradient(circle_476px_at_54.8%_51.5%,rgba(168,229,253,1)_0%,rgba(244,244,254,1)_42.3%,rgba(244,244,254,1)_100.2%)]
        dark:bg-[radial-gradient(circle_farthest-corner_at_50.3%_47.3%,rgba(113,42,92,1)_0.1%,rgba(40,25,46,1)_90%)]
   "
   >

    {/*Content  */}

  <div className="relative z-10 text-center px-6">
    {/* sub title */}
      <div className="sm:mb-6">
         <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white dark:bg-gray-600 text-xl text-muted-foreground dark:text-gray-200 mb-8 ">
          <span className="w-2 h-2 rounded-full bg-green-500"></span>
          Available for Opportunites
         </span>
</div>
{/* Title */}
<h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
  Hi, I&apos;m {" "} <span className="text-blue-600 dark:text-yellow-300">Marcellus Ifeanyi</span>
</h1>
{/* Typewrite effects */}
<div className="text-xl sm:text-2xl md:text-3xl text-black dark:text-white font-semibold mb-4 sm:mb-8 h-12">
<TypeAnimation
sequence={
  [
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
2000
]}
wrapper="span"
speed={50}
repeat={Infinity}
className="font-mono"
/>
</div>

{/* Description */}
<p className="text-xl text-muted-foreground dark:text-gray-200 max-w-2xl mx-auto mb-10" >
Multidisciplinary engineer, IT and data professional with experience spanning power systems, data analytics,data engineering, software engineering, blockchain, and quantitative finance. 
</p>

{/* Button */}
{/* <div className="flex flex-col sm:flex-row gap-4 justify-center">
<Button size={"lg"} className='w-fit mx-auto sm:mx-0'>
  <a href="#">
    <FolderOpen className="w-5 h-5 mr-2" />
  </a>
  View Projects
</Button>

<Button size={"lg"} className='w-fit mx-auto sm:mx-0'>
  <a href="#">
    <Download className="w-5 h-5 mr-2" />
  </a>
  Download CV
</Button>

</div> */}




    </div>






    </div>
  );
};

export default Hero;

// Gradient Generator: https://cssgradient.io/