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

import {
  ReactIcon,
  NextjsIcon,
  TypeScriptIcon,
  TailwindIcon,
  JavaScriptIcon,
  NodejsIcon,
  ExpressIcon,
  MongoDBIcon,
  PostgreSQLIcon,
  GraphQLIcon,
  RestApiIcon,
  GitIcon,
  DockerIcon,
  AWSIcon,
  LinuxIcon,
  FigmaIcon,
  CICDIcon,
  AirflowIcon,
  DatabricksIcon,
  PySparkIcon,
  SnowflakeIcon,
  PythonIcon,
  SqlIcon,
  ExcelIcon,
  PowerBIIcon,
  DbtIcon,
  SolidityIcon,
  EthereumIcon,
  EthersJsIcon,
  HardhatIcon,
  Web3JsIcon,
  RustIcon,
  SolanaIcon,
} from "@/components/ui/brandon-icons";

import {
  FaGithub,
  FaLinkedin,
  FaLinkedinIn,
  FaTwitter,
  FaWhatsapp,
  FaYoutube,
} from "react-icons/fa6";

export const stats = [
  { label: "Years Experience", value: "5+" },
  { label: "Projects Completed", value: "30+" },
  { label: "Happy Clients", value: "25+" },
  { label: "Students Taught", value: "2000+" },
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
    value: "marschalice@gmail.com",
    href: "mailto:marschalice@gmail.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+2347064643074",
    href: "tel:+2347064643074",
  },
  // {
  //   icon: MapPin,
  //   label: "Location",
  //   value: "San Francisco, CA",
  //   href: "#",
  // },
];

export const socialLinks = [
  { icon: FaGithub, href: "https://github.com/MarsIfeanyi", label: "GitHub" },
  {
    icon: FaLinkedin,
    href: "https://www.linkedin.com/in/marcellus-ifeanyi",
    label: "LinkedIn",
  },
  { icon: FaTwitter, href: "https://x.com/Mars_Energy", label: "Twitter" },
  {
    icon: FaYoutube,
    href: "https://www.youtube.com/@marsifeanyi",
    label: "YouTube",
  },
  {
    icon: FaWhatsapp,
    href: " https://wa.me/+2347064643074",
    label: "WhatsApp",
  },
];

export const experiences = [
  {
    title: "Data & IT Support Engineer",
    company: "Mease Energy Nigeria Limited",
    period: "2026 - Present",
    description: [
      "Building and supporting data workflows for seismic data acquisition, processing, and interpretation.",
      "Managing computing systems, data workflows, and technical infrastructure supporting geophysical operations.",
      "Providing IT support and troubleshooting technical issues to maintain reliable systems and data availability.",
    ],
  },

  {
    title: "Data & Analytics Engineer",
    company: "Hugo Mars Capitals Limited",
    period: "2023 - Present",
    description: [
      "Designing and developing data pipelines, analytics solutions, and data-driven systems to transform complex datasets into actionable insights.",
      "Working across data engineering, analytics engineering, and quantitative analysis to support financial decision-making, risk management, and business intelligence.",
    ],
  },

  {
    title: "Data Analyst",
    company: "Transmission Company of Nigeria (TCN)",
    period: "2024 - 2025",
    description: [
      "Analyzed power system operational data to monitor grid performance and support operational decision-making.",
      "Prepared reports and analyzed trends in generation, transmission, load demand, and system frequency.",
      "Monitored power system parameters to identify anomalies and support efficient grid operations.",
    ],
  },

  {
    title: "Software Engineer Intern (Blockchain)",
    company: "Web3Bridge",
    period: "2023 - 2024",
    description: [
      "Contributed to product requirements and smart contract design.",
      "Participated in smart contract code reviews and security auditing.",
      "Contributed to improving smart contract logic for secure and reliable decentralized applications.",
      "Participated in UX and frontend decisions for blockchain applications.",
    ],
  },

  {
    title: "Software Engineer Intern (Blockchain)",
    company: "Genesys Tech Hub",
    period: "2022 - 2023",
    description: [
      "Developed and deployed smart contracts.",
      "Built decentralized applications using blockchain technologies.",
      "Integrated smart contracts with frontend applications.",
      "Collaborated with cross-functional engineering and product teams.",
    ],
  },

  {
    title: "Graduate Trainee Engineer (NYSC)",
    company: "Transmission Company of Nigeria (TCN)",
    period: "2021 - 2022",
    description: [
      "Worked on power system operations and control.",
      "Gained practical experience in power system protection, control, and metering.",
      "Supported electrical maintenance activities within transmission facilities.",
      "Gained exposure to high-voltage transmission systems and operations.",
    ],
  },
];

export const education = [
  {
    degree: "Master of Science, Financial Engineering",
    institution: "WorldQuant University",
    period: "2026 - 2028 (In View)",
    description: [
      "Developing advanced quantitative and computational skills in financial engineering.",
      "Focused on financial data analysis, econometrics, stochastic modeling, derivatives pricing, machine learning, deep learning, portfolio optimization, and risk management.",
      "Applying Python, statistical methods, and mathematical models to real-world financial and market problems.",
    ],
  },

  {
    degree: "Diploma in Computer Science (Software Engineering)",
    institution: "Holberton School",
    period: "2022 - 2023",
    description: [
      "Computer science fundamentals, programming, data structures, algorithms, and software engineering.",
      "Hands-on development using C, Python, JavaScript, SQL, Linux/Unix, Git, and web technologies.",
      "Built practical projects involving systems programming, backend development, databases, APIs, and software architecture.",
      "Applied testing, debugging, version control, technical documentation, and collaborative project-based development.",
    ],
  },

  {
    degree: "MiniMBA, Venture in Management Programme",
    institution: "Lagos Business School, Pan-Atlantic University",
    period: "2022 - 2022",
    description: [
      "Developed foundational knowledge in business management, leadership, entrepreneurship, and strategic decision-making.",
      "Gained practical exposure to strategy, finance, marketing, operations, and organisational management.",
      "Applied business concepts through case studies, collaborative projects, and real-world problem-solving exercises.",
      "Strengthened critical thinking, communication, teamwork, and leadership skills for addressing complex business challenges.",
    ],
  },

  {
    degree:
      "Bachelor of Engineering (B.Eng.), Electrical & Electronics Engineering",
    institution: "Federal University of Technology, Owerri (FUTO)",
    period: "2014 - 2019",
    description: [
      "Power systems and electrical machines.",
      "Instrumentation and control systems.",
      "Electronics and renewable energy.",
      "Robotics and automation.",
      "Engineering economics and analysis.",
    ],
  },
];

export const footerSocialLinks = [
  { icon: FaGithub, href: "https://github.com/MarsIfeanyi", label: "GitHub" },
  {
    icon: FaLinkedin,
    href: "https://www.linkedin.com/in/marcellus-ifeanyi",
    label: "LinkedIn",
  },
  { icon: FaTwitter, href: "https://x.com/Mars_Energy", label: "Twitter" },
  {
    icon: FaYoutube,
    href: "https://www.youtube.com/@marsifeanyi",
    label: "YouTube",
  },
  {
    icon: FaWhatsapp,
    href: " https://wa.me/+2347064643074",
    label: "WhatsApp",
  },
  { icon: Mail, href: "mailto:marschalice@gmail.com", label: "Email" },
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
    techStack: ["Solidity", "Next.Js", "TypeScript", "Tailwind"],
    demoUrl: "https://wastewise-protocol.vercel.app/",
    githubUrl: "https://github.com/MarsIfeanyi/WasteWise-Protocol",
  },

  {
    title: "Farm Trust Finance",
    description:
      "Farm Trust Finance offers digital banking services to smallholder farmers through providing services like Parametric insurance, lending, borrowing, cross-chain asset transfer, saving, Agricultural best practices, location-based disaster notification, Marketplace, and climate risk management.",
    image: "/images/farmtrust.png",
    techStack: ["Solidity", "TypeScript", "Next.js", "Tailwind"],
    demoUrl: "https://farmtrustfinance.vercel.app/",
    githubUrl: "https://github.com/Farm-Trust-Finance-FTF/frontend",
  },

  {
    title: "Bottle Innovate Recycle Cycle",
    description:
      "Bottle Innovate Recycle Cycle (BIRC) offers convenient and sustainable waste disposal solutions for individuals and businesses. Our innovative rewards program incentivizes users to dispose of their plastic waste with us by offering USDC as a reward. Our experienced team is committed to promoting sustainability and reducing waste. Let's work together to create a cleaner and more sustainable future!",
    image: "/images/birc.png",
    techStack: ["React", "Node.js", "MongoDB", "TpeScript"],
    demoUrl: "https://birc.netlify.app/",
    githubUrl: "https://github.com/Sheila-a/Circle-WMS",
  },

  {
    title: "Realties",
    description:
      "Real Estate platform where you can save your rent,pay your rent and earn accountability with your landlord",
    image: "/images/realties.png",
    techStack: ["TypeScript", "Next.js", "TailwindCSS"],
    demoUrl: "https://realties.vercel.app/",
    githubUrl: "https://github.com/realties-team/Realties-Webites",
  },

  {
    title: "ThirdSpace",
    description:
      "Next Gen Web3 and AI powered All-in-One workspace for Web3 companies and DAOS.",
    image: "/images/thirdspace.png",
    techStack: ["Solidity", "Next.js", "TypeScript", "Tailwind"],
    demoUrl: "https://0xthirdspace.vercel.app/",
    githubUrl: "https://github.com/MarsIfeanyi/0xThirdspace",
  },
];

export const skillCategories = [
  {
    title: "Frontend Development",
    skills: [
      { name: "JavaScript", icon: JavaScriptIcon },
      { name: "TypeScript", icon: TypeScriptIcon },
      { name: "React", icon: ReactIcon },
      { name: "Next.js", icon: NextjsIcon },
      { name: "Tailwind CSS", icon: TailwindIcon },
      { name: "Figma", icon: FigmaIcon },
    ],
  },

  {
    title: "Data & Analytics Engineering",
    skills: [
      { name: "SQL", icon: SqlIcon },
      { name: "Python", icon: PythonIcon },
      { name: "PySpark", icon: PySparkIcon },
      { name: "PostgreSQL", icon: PostgreSQLIcon },
      { name: "AWS", icon: AWSIcon },
      { name: "Airflow", icon: AirflowIcon },
      { name: "dbt", icon: DbtIcon },
      { name: "Databricks", icon: DatabricksIcon },
      { name: "Snowflake", icon: SnowflakeIcon },
      { name: "Docker", icon: DockerIcon },
      { name: "Excel", icon: ExcelIcon },
      { name: "Power BI", icon: PowerBIIcon },
    ],
  },

  {
    title: "Blockchain Development",
    skills: [
      { name: "Solidity", icon: SolidityIcon },
      { name: "Ethereum", icon: EthereumIcon },
      { name: "Ethers.js", icon: EthersJsIcon },
      { name: "Web3.js", icon: Web3JsIcon },
      { name: "Hardhat", icon: HardhatIcon },
      { name: "Rust", icon: RustIcon },
      { name: "Solana", icon: SolanaIcon },
    ],
  },
  {
    title: "Others",
    skills: [
      { name: "Git", icon: GitIcon },
      { name: "Linux", icon: LinuxIcon },
      { name: "CI/CD", icon: CICDIcon },
      { name: "MongoDB", icon: MongoDBIcon },
      { name: "GraphQL", icon: GraphQLIcon },
    ],
  },
];

// {
//     title: "Backend",
//     skills: [
//       { name: "Node.js", icon: NodejsIcon },
//       { name: "Express", icon: ExpressIcon },
//       { name: "MongoDB", icon: MongoDBIcon },
//       { name: "PostgreSQL", icon: PostgreSQLIcon },
//       { name: "GraphQL", icon: GraphQLIcon },
//       { name: "REST APIs", icon: RestApiIcon },
//     ],
//   },
