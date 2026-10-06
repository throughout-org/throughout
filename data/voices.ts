export interface Voice {
  name: string;
  role: string;
  /** One line shown on the card; keep it to what the person actually says. */
  title: string;
  src: string;
  poster: string;
  duration: string;
}

// Add new videos here; the "In their own words" section picks them up automatically.
export const voices: Voice[] = [
  {
    name: "Amrith Shylendra",
    role: "Sales Executive",
    title: "What I've learned working at Throughout",
    src: "/videos/amrith-review.mp4",
    poster: "/videos/amrith-review-poster.jpg",
    duration: "0:51",
  },
];
