import ROUTES from "@constants/routes";
import { Project } from "@typeDefs/project";

const projects: Project[] = [
  // {
  //   title: "Twitter Smooth Extension",
  //   desc: "projects.list.twittersmooth.desc",
  //   link: "https://github.com/onRuntime/twitter-smooth-extension",
  //   thumbnail_url: "/static/images/projects/twitter-smooth-extension.jpg",
  //   tags: ["Open Source", "Extension"],
  // },
  {
    title: "Tonight Pass",
    desc: "projects.list.tonightpass.desc",
    link: "https://tonightpass.com",
    thumbnail_url: "/static/images/projects/tonightpass.jpg",
    tags: ["Semi Open Source", "Booking Service"],
    featured: true,
  },
  {
    title: "Open Graph Image",
    desc: "projects.list.opengraphimage.desc",
    link: "https://github.com/onRuntime/onruntime-og-image",
    thumbnail_url: "/static/images/projects/open-graph-image.png",
    tags: ["Open Source", "Open Graph", "Image Generator"],
  },
  {
    title: "@onruntime/next-link",
    desc: "projects.list.nextlink.desc",
    link: "https://github.com/onRuntime/next-link",
    thumbnail_url: "/static/images/projects/next-link.png",
    tags: ["Open Source", "Package"],
  },
  {
    title: "Instagram Dark Extension",
    desc: "projects.list.instagramdark.desc",
    link: ROUTES.PROJECTS_INSTAGRAM_DARK,
    thumbnail_url: "/static/images/projects/instagram-dark-extension.jpg",
    tags: ["Open Source", "Extension", "+50k downloads"],
  },
  // {
  //   title: "Clock App",
  //   desc: "projects.list.clockapp.desc",
  //   link: "https://github.com/onRuntime/clock-app",
  //   thumbnail_url: "/static/images/projects/clockapp.webp",
  //   tags: ["Open Source"],
  // },
  // {
  //   title: "UltraD.JS",
  //   desc: "projects.list.ultradjs.desc",
  //   link: "https://github.com/onRuntime/ultrad.js",
  //   thumbnail_url: "/static/images/projects/ultradjs.jpg",
  //   tags: ["Open Source", "Discord"],
  // },
  // {
  //   title: "RVBY",
  //   desc: "projects.list.rvby.desc",
  //   link: "https://rvby.store/",
  //   thumbnail_url: "/static/images/projects/rvby.jpg",
  //   tags: ["Closed Source"],
  // },
  // {
  //   title: "NetflixAddicts",
  //   desc: "projects.list.netflixaddicts.desc",
  //   link: "https://github.com/onRuntime?q=netflixaddicts",
  //   thumbnail_url: "https://picsum.photos/seed/picsum/1920/1080",
  //   tags: ["Open Source"],
  // },
  // {
  //   title: "BerryGames",
  //   desc: "projects.list.berrygames.desc",
  //   link: "https://github.com/onRuntime/?q=berrygames",
  //   thumbnail_url: "/static/images/projects/berrygames.png",
  //   tags: ["Open Source", "Minecraft"],
  // },
  // {
  //   title: "FaruGames",
  //   desc: "projects.list.farugames.desc",
  //   link: "https://github.com/onRuntime/?q=farugames",
  //   thumbnail_url: "/static/images/projects/farugames.jpg",
  //   tags: ["Open Source", "Minecraft"],
  // },
];

export default projects;
