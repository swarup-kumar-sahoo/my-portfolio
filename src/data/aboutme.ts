export interface AboutMe {
  name: string;
  title: string;
  institution: string;
  description: string;
  email: string;
  imageUrl: string;
  blogUrl?: string;
  cvUrl?: string;
  googleScholarUrl?: string;
  twitterUsername?: string;
  githubUsername?: string;
  linkedinUsername?: string;
  funDescription?: string; // Gets placed in the left sidebar
  secretDescription?: string; // Gets placed in the bottom
  altName?: string;
  institutionUrl?: string;
}

export const aboutMe: AboutMe = {
  name: "Swarup Kumar Sahoo",
  title: "BTech Computer Science,",
  institution: "Gandhi Institute Of Technological Advancement",
  // Note that links work in the description
  description:
  "I am a final-year student at GITA Autonomous College, exploring web, mobile, and AI development. I work with Next.js, React.js, Express.js, MongoDB, Python, Flask, and React Native, while currently learning Spring Boot. My main focus is on building projects and growing my knowledge in Artificial Intelligence.",
  email: "kumarswarup7272@gmail.com",
  imageUrl:
    "/mypicture-swarup.jpg",
  githubUsername: "swarup-kumar-sahoo",
  linkedinUsername: "swarup-kumar-sahoo-2460b3242",
  twitterUsername: "jarvisbee_",
  blogUrl: "https://x.com/jarvisbee_",
  cvUrl: "https://drive.google.com/file/d/1I9cHRAonJBFOYinqEb9xP-eYQiKFPGMr/view?usp=sharing",
  institutionUrl: "https://www.stanford.edu",
  // altName: "",
  // secretDescription: "I like dogs.",
};
