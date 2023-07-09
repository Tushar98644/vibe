import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  blockchain,
  next,
  django,
  C4GT,
  SWC,
  Translead,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Flutter Developer",
    icon: mobile,
  },
  {
    title: "Game Developer",
    icon: backend,
  },
];

const technologies = [
  // {
  //   name: "HTML 5",
  //   icon: html,
  // },
  // {
  //   name: "CSS 3",
  //   icon: css,
  // },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Next JS",
    icon: next,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Django",
    icon: django,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
];

const experiences = [
  {
    title: "Student Developer",
    company_name: "Code for Govtech(C4GT)",
    icon: C4GT,
    iconBg: "#383E56",
    date: "July 2023 - Present",
    points: [
      "Working on the uci-web-channel turborepo to refactor the broken eslint and Prettier configuration and setup Husky for pre-commit hooks",
      "Refactor the entire codebase to make it configurable and setup unit tests with jest/Cypress"
    ],
  },
  {
    title: "Web Developer",
    company_name: "Student’s Web Committee",
    icon: SWC,
    iconBg: "#383E56",
    date: "Nov 2022 - Present",
    points: [
      "Built the entire backend of the campus Gymkhana portal using Django web framework",
      "Added the feature of comparing the placement data of two years and displaying it in a chart in the Placement Statistics Portal",
      "Built all models for the backend of the Student Affairs portal in strapi",
    ],
  },
  {
    title: "Flutter Developer",
    company_name: "Protofac",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "June 2023 - July 2023",
    points: [
      "Developed the entire interface of the app, intergrated with Firebase backend for real time data fetching and updates from Firestore",
    ],
  },
  {
    title: "Web Developer",
    company_name: "Translead",
    icon: Translead,
    iconBg: "#E6DEDD",
    date: "June 2023 - July 2023",
    points: [
     "Initiated & coordinated with a design intern to develop the etntire website from scratch using Next.js and deploying to vercel",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "TESTIMONIAL 1",
    name: "Sara Lee",
    designation: "CFO",
    company: "Apple",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "TESTIMONIAL 2",
    name: "Chris Brown",
    designation: "COO",
    company: "Google",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "TESTIMONIAL 3",
    name: "Lisa Wang",
    designation: "CTO",
    company: "Microsoft",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: " ProjectHub",
    description:
      "Web-based comprehensive platform that integrates various AI-powered tools and useful websites for people's everyday needs.",
    tags: [
      {
        name: "next",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Event Manager",
    description:
      "Web application serving as a one-stop solution for students to organize, manage, and process the data for the club. Students have the option of saving event photographs to see later in a lovely gallery.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "django",
        color: "green-text-gradient",
      },
      {
        name: "material-ui",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "flutter",
        color: "blue-text-gradient",
      },
      {
        name: "firebase",
        color: "green-text-gradient",
      },
      {
        name: "figma",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
