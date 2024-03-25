interface TimelineYear {
  job?: string;
  skills: object;
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
  occupation: "Student at IIT Guwahati",
  company: "IIT Guwahati",
  email: "evilden982@gmail.com",
  twitter: "https://twitter.com/",
  linkedin: "https://www.linkedin.com/in/",
  github: "https://github.com/Tushar98644",
  bio: "I am currently a Student Developer at IIT Guwahati.",
  timeline: {
    "2023": {
      skills: [
        {
          name: "demo",
          link: "/",
        },
      ],
    },
    "2022": {
      skills: [
        {
          name: "demo",
          link: "/",
        },
      ],
    },
    "2021": {
      skills: [
        {
          name: "demo",
          link: "/",
        },
      ],
    },
    "2020": {
      skills: [
        {
          name: "demo",
          link: "/",
        },
      ],
    },
    "2019": {
      skills: [
        {
          name: "demo",
          link: "/",
        },
      ],
    },
  },
};
