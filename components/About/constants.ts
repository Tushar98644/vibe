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

const portfolioData: PortfolioData = {
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
      job: "Started a job as a Software Developer at [Aphex](https://aphex.co/)",
      skills: [
        "Learned how to create cross-platform apps using [Flutter](https://flutter.dev/) and [Dart](https://dart.dev/)",
        "Learned how to integrate CI/CD pipelines using [Github Actions](https://docs.github.com/en/actions)",
        "Worked at [Create](https://create.xyz/) as a part time Software Engineer",
        "Worked on awesome projects such as [Spoken](https://www.spoken.io/) and [Topography Health](https://www.jointopo.com/)",
      ],
    },
    "2022": {
      skills: [
        "Learned [Next.js](https://nextjs.org/), [Headless](https://headlessui.com/) UI, [Floating](https://floating-ui.com/) UI, and [NX](https://nx.dev/) Build System",
        "Successfully migrated our Multi-Repo app into a Monorepo. I wrote a blog about it [here](https://www.dalelarroder.com/blog/how-to-merge-a-repository-into-nx) so I won't forget lol",
        "Successfully implemented [ArcGIS](https://www.arcgis.com/home/index.html) into our awesome app",
        "Created my first ever npm package. It's a React component library, my little [playground](https://playground.dalelarroder.com/)",
        "Created this portfolio website and [open-sourced](https://github.com/dlarroder/dalelarroder) it. I didn't expect it to have any stars tbh",
      ],
    },
    "2021": {
      skills: [
        "Learned how to create custom npm packages",
        "Learned [Storybook](https://storybook.js.org/) and how to create your own component library",
        "Contributed in creating the [aphex-design](https://aphex-design.web.app/) component library",
        "Learned how to work in a Multi-Repo setup with different packages for design and api which are to be consumed by different apps",
        "Learned [Jest](https://jestjs.io/), [Firebase](https://firebase.google.com/), and [Tailwind CSS](https://tailwindcss.com/)",
      ],
    },
    "2020": {
      skills: [
        "Started Freelancing during the pandemic",
        "Created APIs for the City of Taguig's [Tax Payment App](https://payment.taguig.gov.ph/)",
        "Learned payment gateways such as [eGHL](https://e-ghl.com/) and [Paymaya](https://www.paymaya.com/)",
        "Started a job as a Software Engineer at [Cell 5](https://www.cell5.co.uk/)",
        "Learned [ReactJS](https://reactjs.org/), [TypeScript](https://www.typescriptlang.org/), [Redux](https://redux.js.org/), and [Ant Design](https://ant.design/)",
      ],
    },
    "2019": {
      skills: [
        "Graduated from Ateneo de Zamboanga University with a Bachelor's Degree in Information Technology major in Web Development",
        "Started a job as a Junior Backend Developer at [Code and Theory](https://www.codeandtheory.com/)",
      ],
    },
  },
};
