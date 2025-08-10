export interface Education {
  year: string;
  institution: string;
  degree: string;
  advisor?: string;
  thesis?: string;
  thesisUrl?: string;
}

export const educationData: Education[] = [
  // If you don't want to show education, just make the array empty.
  {
    year: "2022—Present",
    institution: "Gandhi Institute Of Technological Advancement",
    degree: "BTech. in Computer Science",
    advisor: "Operating System, Java, DBMS, etc.",
  },
  {
    year: "2020—2022",
    institution: "Nalanda Public School",
    degree: "Higher secondary education",
    thesis: "Physics, Chemistry, Mathmatics & IT",
    // Optional links to thesis
    // thesisUrl: "https://dspace.mit.edu/handle/1721.1/149111"
  },
];
