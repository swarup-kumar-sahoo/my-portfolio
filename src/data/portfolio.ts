export interface Portfolio {
  title: string;
  description: string;
  technologies?: string[];
  imageUrl?: string;
  projectUrl?: string;
  codeUrl?: string;
}

export const portfolioData: Portfolio[] = [
  // Example entry
  {
    title: "Jinsafe - Mobile Application",
    description:
      "This is a React Native application designed for users to report safety observations, conduct safety interactions, and perform line walks, all from their mobile devices.",
    technologies: ["React-Native", "Typescript", "Android"],
    projectUrl: "https://github.com/swarup-kumar-sahoo/jinsafe-application",
    imageUrl:
      "/jinsafe-mobile-app.jpg",
    codeUrl: "https://github.com/username/project",
  },
];
