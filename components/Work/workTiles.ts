export type WorkTile = {
  title: string;
  description: string;
  image: {
    src: string;
    width: number;
    height: number;
  };
};

export const workTiles: WorkTile[] = [
  {
    description: `Here are things`,
    title: `I've worked on`,
    image: {
      src: "/static/images/project/ribo-replicator.png",
      width: 600,
      height: 770,
    },
  },
  {
    description: "I built",
    title: "ProjectHub",
    image: {
      src: "/static/images/project/projecthub.png",
      width: 600,
      height: 554,
    },
  },
  {
    description: `I built`,
    title: "Ribo Replicator",
    image: {
      src: "/static/images/project/ribo-replicator.png",
      width: 600,
      height: 717,
    },
  },
  {
    description: `I built`,
    title: "OpsBox",
    image: {
      src: "/static/images/project/projecthub.png",
      width: 600,
      height: 717,
    },
  },
];
