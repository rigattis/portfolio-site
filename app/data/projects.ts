export type Project = {
  title: string;
  skills: string;
  description: string;

  image?: string; // path from /public
  video?: string;

  url?: string;
  urlDescription?: string;

  date: string; // ISO date for sorting
};

export const projects: Project[] = [
  {
    title: "This Website!",
    skills: "Next.js, HTML, CSS",
    description: "Designed and built a personal portfolio website to showcase projects and experience.",
    image: "/images/logo.png",
    url: "https://github.com/rigattis/personal_site",
    urlDescription: "View Source Code on GitHub",
    date: "2025-12-30",
  },
  {
    title: "Hatchery Makerspace Project",
    skills: "Django, Figma, HTML, CSS, Render",
    description: "I worked on a team to develop a full-stack software solution for the Boston College Makerspace. Manage the spaces and machines associated with the Makerspace, integrated Google OAuth authentication and account access, set up user groups, machine types, necessary training certificates, and prioritized a user-friendly interface to improve usability.",
    video: "/videos/404-Founders_demo.mov",
    url: "https://github.com/rigattis/hatchery_project/tree/main",
    urlDescription: "View Source Code on Github",
    date: "2025-12-10"
  },
  {
    title: "Investigating the Aerial Extent and Revegetation of Hurricane Michael Overwash Deposits on St. George Island, Florida, USA.",
    skills: "ArcGIS, Drone Survey, Scientific Writing",
    description: "Ongoing team project with the Boston College Earth and Environmental Science Department for my Senior Capstone Environmental Geoscience Project. Utilizing ArcGIS pro, NOAA Digital Coast, and Excel to perform data analysis of how the extent of vegetation has changed following major storms in the area. The goal of the project is to quantify the aerial extent of the overwash features resulting from Hurricane Michael and to visualize the revegetation and natural dune reconstruction processes using a digital analysis of aerial imagery for two sections of the island’s State Park.",
    video: "/videos/IMG_6348.mov",
    url: "",
    urlDescription: "Download most recent research proposal",
    date: "2025-10-23"
  }
]