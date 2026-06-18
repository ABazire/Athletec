export type Athletes = {
  initials: string;
  name: string;
  color: string;
  category: string;
  gender: string;
  results: number;
  events: number;
  mainEvent: string;
};

export const athletes: Athletes[] = [
  {
    initials: "JO",
    name: "James Okafor",
    color: "#ec5a24",
    category: "Senior",
    gender: "Hommes",
    results: 3,
    events: 2,
    mainEvent: "100m",
  },
  {
    initials: "SB",
    name: "Sofia Bianchi",
    color: "#2f6b5e",
    category: "Senior",
    gender: "Femmes",
    results: 3,
    events: 2,
    mainEvent: "800m",
  },
  {
    initials: "LW",
    name: "Liam Walsh",
    color: "#5b3fa0",
    category: "U18",
    gender: "Hommes",
    results: 3,
    events: 2,
    mainEvent: "Longueur",
  },
  {
    initials: "AR",
    name: "Aisha Rahman",
    color: "#1f5a6b",
    category: "U18",
    gender: "Femmes",
    results: 3,
    events: 3,
    mainEvent: "100m",
  },
  {
    initials: "NS",
    name: "Noah Schmidt",
    color: "#7a4a1f",
    category: "Senior",
    gender: "Hommes",
    results: 3,
    events: 2,
    mainEvent: "Poids",
  },
  {
    initials: "GM",
    name: "Grace Muller",
    color: "#1f4e8c",
    category: "U20",
    gender: "Femmes",
    results: 3,
    events: 2,
    mainEvent: "Hauteur",
  },
  {
    initials: "DC",
    name: "Daniel Costa",
    color: "#6b5b2e",
    category: "Senior",
    gender: "Hommes",
    results: 3,
    events: 2,
    mainEvent: "1500m",
  },
  {
    initials: "EL",
    name: "Emma Larsson",
    color: "#7a2e3a",
    category: "U17",
    gender: "Femmes",
    results: 2,
    events: 2,
    mainEvent: "100m",
  },
  {
    initials: "CM",
    name: "Carlos Mendez",
    color: "#2f6b3d",
    category: "U20",
    gender: "Hommes",
    results: 3,
    events: 2,
    mainEvent: "110m haies",
  },
  {
    initials: "JC",
    name: "Jerome Cochet",
    color: "#2f6b3d",
    category: "Senior",
    gender: "Hommes",
    results: 3,
    events: 2,
    mainEvent: "Marathon",
  },
];
