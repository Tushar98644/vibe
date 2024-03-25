interface TimelineYear {
  job?: string;
  skills: string[];
}

interface Timeline {
  [year: string]: TimelineYear;
}

interface PortfolioData {
  name: string;
  avatar: string;
  occupation: string;
  company: string;
  email: string;
  twitter: string;
  linkedin: string;
  github: string;
  bio: string;
  timeline: Timeline;
}

export const portfolioData: PortfolioData = {
  name: "Tushar Banik",
  avatar: "/static/images/projects/ribo-replicator.png",
  occupation: "Software Developer at",
  company: "Aphex",
  email: "evilden982@gmail.com",
  twitter: "https://twitter.com/dalelarroder",
  linkedin: "https://www.linkedin.com/in/dale-larroder/",
  github: "https://github.com/Tushar98644",
  bio: "I am currently a Software Developer at [Aphex](https://aphex.co/). I was previously a Jr. Backend Developer at Code and Theory Manila where I mostly used PHP to create back-end APIs for the front-ends to consume. Now I am more focused on JavaScript and the front-end side of things where I am using ReactJS to create beautiful and reusable user interfaces.",
  timeline: {
    "2023": {
      skills: ["demo"],
    },
    "2022": {
      skills: ["demo"],
    },
    "2021": {
      skills: ["demo"],
    },
    "2020": {
      skills: ["demo"],
    },
    "2019": {
      skills: ["demo"],
    },
  },
};
