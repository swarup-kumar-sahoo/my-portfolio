export interface Education {
  year: string;
  institution: string;
  degree: string;
  advisor?: string;
  thesis?: string;
  thesisUrl?: string;
}

export const educationData: Education[] = [
  {
    year: "2022—2026",
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
   {
    year: "2020",
    institution: "ST. Xavier's High School",
    degree: "Secondary education",
    // thesis: "Physics, Chemistry, Mathmatics & IT",
    // Optional links to thesis
    // thesisUrl: "https://dspace.mit.edu/handle/1721.1/149111"
  },
];
