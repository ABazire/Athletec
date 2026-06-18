export type ClubRecord = {
  category: "PISTE" | "CONCOURS" | "SAUT";
  event: string;
  value: string;
  athlete: string;
  initials: string;
  color: string;
  competition: string;
  date: string;
};

export const records: ClubRecord[] = [
  {
    category: "PISTE",
    event: "100m",
    value: "10.61",
    athlete: "James Okafor",
    initials: "JO",
    color: "#ec5a24",
    competition: "Championnats départementaux",
    date: "6 juin 2026",
  },
  {
    category: "PISTE",
    event: "200m",
    value: "21.30",
    athlete: "James Okafor",
    initials: "JO",
    color: "#ec5a24",
    competition: "Ligue municipale J2",
    date: "30 mai 2026",
  },
  {
    category: "PISTE",
    event: "800m",
    value: "1:52.30",
    athlete: "Daniel Costa",
    initials: "DC",
    color: "#6b5b2e",
    competition: "Ligue municipale J2",
    date: "30 mai 2026",
  },
  {
    category: "PISTE",
    event: "1500m",
    value: "3:54.20",
    athlete: "Daniel Costa",
    initials: "DC",
    color: "#6b5b2e",
    competition: "Championnats départementaux",
    date: "6 juin 2026",
  },
  {
    category: "PISTE",
    event: "110m haies",
    value: "14.60",
    athlete: "Carlos Mendez",
    initials: "CM",
    color: "#2f6b3d",
    competition: "Championnats départementaux",
    date: "6 juin 2026",
  },
  {
    category: "CONCOURS",
    event: "Longueur",
    value: "6.85 m",
    athlete: "Liam Walsh",
    initials: "LW",
    color: "#5b3fa0",
    competition: "Championnats départementaux",
    date: "6 juin 2026",
  },
  {
    category: "CONCOURS",
    event: "Triple saut",
    value: "13.92 m",
    athlete: "Liam Walsh",
    initials: "LW",
    color: "#5b3fa0",
    competition: "Ligue municipale J2",
    date: "30 mai 2026",
  },
  {
    category: "SAUT",
    event: "Hauteur",
    value: "1.78 m",
    athlete: "Grace Muller",
    initials: "GM",
    color: "#1f4e8c",
    competition: "Championnats départementaux",
    date: "6 juin 2026",
  },
  {
    category: "CONCOURS",
    event: "Poids",
    value: "15.85 m",
    athlete: "Noah Schmidt",
    initials: "NS",
    color: "#7a4a1f",
    competition: "Meeting nocturne",
    date: "13 juin 2026",
  },
  {
    category: "CONCOURS",
    event: "Javelot",
    value: "58.40 m",
    athlete: "Noah Schmidt",
    initials: "NS",
    color: "#7a4a1f",
    competition: "Championnats départementaux",
    date: "6 juin 2026",
  },
];
