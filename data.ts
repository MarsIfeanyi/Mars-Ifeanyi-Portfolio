import {
  Briefcase,
  Cloud,
  Code2,
  Coffee,
  Cpu,
  Database,
  GitBranch,
  Globe,
  GraduationCap,
  Layers,
  Layout,
  Mail,
  MapPin,
  Palette,
  Phone,
  Server,
  Smartphone,
  Terminal,
} from "lucide-react";

import { FaGithub, FaLinkedin, FaLinkedinIn, FaTwitter } from "react-icons/fa6";

export const stats = [
  { label: "Years Experience", value: "5+" },
  { label: "Projects Completed", value: "50+" },
  { label: "Happy Clients", value: "30+" },
  { label: "Students Taught", value: "1000+" },
];

export const highlights = [
  { icon: MapPin, text: "Based in San Francisco, CA" },
  { icon: Briefcase, text: "Open for freelance work" },
  { icon: GraduationCap, text: "CS Graduate from Stanford" },
  { icon: Coffee, text: "Powered by coffee & curiosity" },
];

export const userReviewData = [
  {
    id: 1,
    name: "John Doe",
    profession: "Real Estate Agent",
    userImage: "/images/u1.jpg",
    review:
      "A wonderful experience! The platform made it easy to find exactly what I needed. lorem ipsum dolor sit ame",
  },
  {
    id: 2,
    name: "Mike Smith",
    profession: "Business Owner",
    userImage: "/images/u2.jpg",
    review:
      "Great selection of properties and seamless process. Highly recommended for anyone looking to invest.",
  },
  {
    id: 3,
    name: "Alex Johnson",
    profession: "Web developer",
    userImage: "/images/u3.jpg",
    review:
      "The website helped me find my dream home quickly and hassle-free. Exceptional service!",
  },
  {
    id: 4,
    name: "Emily Clark",
    profession: "Interior Designer",
    userImage: "/images/u4.jpg",
    review:
      "Fantastic range of properties with clear details. The best platform for home and design inspiration!",
  },
];

export const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "hello@johndoe.dev",
    href: "mailto:hello@johndoe.dev",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+1 (555) 123-4567",
    href: "tel:+15551234567",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "San Francisco, CA",
    href: "#",
  },
];

export const socialLinks = [
  { icon: FaGithub, href: "https://github.com", label: "GitHub" },
  { icon: FaLinkedinIn, href: "https://linkedin.com", label: "LinkedIn" },
  { icon: FaTwitter, href: "https://twitter.com", label: "Twitter" },
];

export const experiences = [
  {
    type: "work",
    title: "Senior Full-Stack Developer",
    company: "TechCorp Inc.",
    period: "2022 - Present",
    description:
      "Leading development of enterprise SaaS products. Mentoring junior developers and implementing best practices.",
    technologies: ["React", "Node.js", "AWS", "TypeScript"],
  },
  {
    type: "work",
    title: "Full-Stack Developer",
    company: "StartupXYZ",
    period: "2020 - 2022",
    description:
      "Built and maintained multiple web applications. Collaborated with design team to implement responsive UIs.",
    technologies: ["Vue.js", "Python", "PostgreSQL", "Docker"],
  },
  {
    type: "education",
    title: "Master of Computer Science",
    company: "Stanford University",
    period: "2018 - 2020",
    description:
      "Specialized in distributed systems and machine learning. Thesis on scalable microservices architecture.",
    technologies: ["Research", "AI/ML", "Distributed Systems"],
  },
  {
    type: "work",
    title: "Junior Developer",
    company: "WebAgency Co.",
    period: "2018 - 2020",
    description:
      "Developed client websites and e-commerce platforms. Gained experience in agile methodologies.",
    technologies: ["JavaScript", "PHP", "MySQL", "WordPress"],
  },
  {
    type: "education",
    title: "Bachelor of Computer Science",
    company: "UC Berkeley",
    period: "2014 - 2018",
    description:
      "Strong foundation in algorithms, data structures, and software engineering principles.",
    technologies: ["Computer Science", "Mathematics", "Problem Solving"],
  },
];

export const footerSocialLinks = [
  { icon: FaGithub, href: "https://github.com", label: "GitHub" },
  { icon: FaLinkedin, href: "https://linkedin.com", label: "LinkedIn" },
  { icon: FaTwitter, href: "https://twitter.com", label: "Twitter" },
  { icon: Mail, href: "mailto:hello@example.com", label: "Email" },
];

export const projects = [

  {
    title: "Bale Store",
    description:
      "Bale Store is a Decentralized e-commerce thrift platform that provides customers and vendors with a convenient and sustainable solution to the problem of finding affordable and sustainable clothing options, while ensuring secure shopping for all users.",
    image: "/images/balestore.png",
    techStack: ["TypeScript", "Solidity", "Next.Js", "MongoDB"],
    demoUrl: "https://balestore.vercel.app/",
    githubUrl: "https://balestore.vercel.app/about-us",
  },



{
    title: "WasteWise Protocol",
    description:
      "WasteWise protocol is a green chain, sustainable environment-first (Waste to Wealth) blockchain-powered platform designed to incentivize recycling and responsible waste(plastic) disposal, contributing significantly to the creation of cleaner, more sustainable environments for all.The circular economy is at the core of our approach—reusing, and recycling plastic bottles to reduce waste in landfills",
    image: "/images/wastewiseprotocol.png",
    techStack: [
      'Solidity',
      'Next.Js',
  'TypeScript',
  'Tailwind CSS',],
    demoUrl: "https://docs.google.com/document/d/1ku2YX2gRcuGEeaSHJQGQsD6MTjmuzblbhW4ebuSgsG8/edit?usp=sharing",
    githubUrl: "https://github.com/MarsIfeanyi/WasteWise-Protocol",
  },


{
    title: "Farm Trust Finance",
    description:
      "Farm Trust Finance offers digital banking services to smallholder farmers through providing services like Parametric insurance, lending, borrowing, cross-chain asset transfer, saving, Agricultural best practices, location-based disaster notification, Marketplace, and climate risk management.",
    image: "/images/farmtrust.png",
    techStack: [
      'Solidity',
       'TypeScript',
      'Next.js',
  'Tailwind CSS',
  'Ethereum',
  ,],
    demoUrl: "https://farmtrustfinance.vercel.app/",
    githubUrl: "https://github.com/Farm-Trust-Finance-FTF/frontend",
  },

  

  {
    title: "Bottle Innovate Recycle Cycle",
    description:
      "Bottle Innovate Recycle Cycle (BIRC) offers convenient and sustainable waste disposal solutions for individuals and businesses. Our innovative rewards program incentivizes users to dispose of their plastic waste with us by offering USDC as a reward. Our experienced team is committed to promoting sustainability and reducing waste. Let's work together to create a cleaner and more sustainable future!",
    image: "/images/birc.png",
    techStack: ["Vue.js", "Node.js", "MongoDB", "Maps API"],
    demoUrl: "https://birc.netlify.app/",
    githubUrl: "https://birc.netlify.app/#contact-us",
  },
  
  {
    title: "Realties",
    description:
      "Real Estate platform where you can save your rent,pay your rent and earn accountability with your landlord",
    image: "/images/realties.png",
    techStack: ["TypeScript", "Next.js",  "TailwindCSS", "MongoDB"],
    demoUrl: "https://realties.vercel.app/",
    githubUrl: "https://github.com/realties-team/Realties-Webites",
  },


  {
    title: "ThirdSpace",
    description:
      "Next Gen Web3 and AI powered All-in-One workspace for Web3 companies and DAOS.",
    image: "/images/thirdspace.png",
    techStack: ['Solidity',
  'Next.js',
  'TypeScript',
  'Tailwind CSS',
  'Prisma',
  ],
    demoUrl: "https://0xthirdspace.vercel.app/",
    githubUrl: "https://github.com/MarsIfeanyi/0xThirdspace",
  },


];

export const skillCategories = [
  {
    title: "Frontend",
    skills: [
      { name: "React", icon: Code2 },
      { name: "Next.js", icon: Globe },
      { name: "TypeScript", icon: Terminal },
      { name: "Tailwind CSS", icon: Palette },
      { name: "React Native", icon: Smartphone },
      { name: "Vue.js", icon: Layout },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Node.js", icon: Server },
      { name: "Express", icon: Layers },
      { name: "MongoDB", icon: Database },
      { name: "PostgreSQL", icon: Database },
      { name: "GraphQL", icon: Cpu },
      { name: "REST APIs", icon: Cloud },
    ],
  },
  {
    title: "Tools & Others",
    skills: [
      { name: "Git", icon: GitBranch },
      { name: "Docker", icon: Server },
      { name: "AWS", icon: Cloud },
      { name: "Linux", icon: Terminal },
      { name: "Figma", icon: Palette },
      { name: "CI/CD", icon: Cpu },
    ],
  },
];
