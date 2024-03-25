const siteMetadata = {
  title: "Tushar Banik",
  author: "Tushar Banik",
  headerTitle: "Tushar Banik",
  description: "Software Developer at Aphex",
  language: "en-us",
  theme: "dark", // system, dark or light
  siteUrl: "https://Tushar Banik.com",
  siteRepo: "https://github.com/Tushar-Banik-blog",
  siteLogo: "/static/images/logo.png",
  image: "/static/images/avatar.webp",
  socialBanner: "/static/images/twitter-card.png",
  email: "evilden982@gmail.com",
  github: "https://github.com/Tushar98644",
  twitter: "https://twitter.com/Tushar Banik",
  facebook: "https://facebook.com/",
  linkedin: "https://www.linkedin.com/in/",
  spotify: "https://open.spotify.com/user/12162121994?si=e685b3546f414967",
  steam: "https://steamcommunity.com/id/",
  locale: "en-US",
  comment: {
    provider: "giscus",
    giscusConfig: {
      repo: process.env.NEXT_PUBLIC_GISCUS_REPO || "",
      repositoryId: process.env.NEXT_PUBLIC_GISCUS_REPOSITORY_ID || "",
      category: process.env.NEXT_PUBLIC_GISCUS_CATEGORY || "",
      categoryId: process.env.NEXT_PUBLIC_GISCUS_CATEGORY_ID || "",
      mapping: "pathname",
      reactions: "1",
      metadata: "0",
      theme: "light",
      darkTheme: "transparent_dark",
      themeURL: "",
    },
  },
};

module.exports = siteMetadata;
