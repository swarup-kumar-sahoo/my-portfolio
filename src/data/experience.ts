export interface Experience {
  date: string;
  title: string;
  company: string;
  description?: string;
  advisor?: string;
  manager?: string;
  companyUrl?: string;
}

export const experienceData: Experience[] = [
  {
    date: "June 2025 - October 2025",
    title: "App Dev Intern",
    company: "Jindal Steel",
    description:
      "Developed safety reporting and management app for Jindal Steel in React Native.",
    // advisor: "Tej Prakash",
    companyUrl: "https://deepmind.com",
  },
  // {
  //   date: "Summer 2022",
  //   title: "Research Intern",
  //   company: "Google Research",
  //   description:
  //     "Worked on improving robustness of large language models to distribution shifts",
  //   manager: "Elise Brown",
  //   companyUrl: "https://google.com",
  // },
];
