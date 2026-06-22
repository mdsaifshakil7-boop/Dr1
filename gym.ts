export const GYM = {
  name: "IronForge Fitness",
  tagline: "Forge Your Strongest Self",
  phone: "+1 (555) 820-4653",
  phoneRaw: "+15558204653",
  email: "hello@ironforgefitness.com",
  address: "1247 Riverside Avenue, Floor 3, Austin, TX 78704",
  hours: "Mon–Fri: 5:00 AM – 11:00 PM · Sat–Sun: 7:00 AM – 9:00 PM",
  hoursShort: "Mon–Fri 5AM–11PM · Sat–Sun 7AM–9PM",
  instagram: "https://instagram.com",
  facebook: "https://facebook.com",
  twitter: "https://twitter.com",
  mapsQuery: "IronForge+Fitness+Riverside+Avenue+Austin+TX+78704",
} as const;

export type Goal = {
  id: string;
  title: string;
  blurb: string;
  icon: string;
};

export const goals: Goal[] = [
  { id: "strength", title: "Build Strength", blurb: "Progressive overload programming and compound lifts.", icon: "Dumbbell" },
  { id: "weightloss", title: "Lose Weight", blurb: "High-intensity training and sustainable nutrition coaching.", icon: "Flame" },
  { id: "muscle", title: "Build Muscle", blurb: "Hypertrophy-focused splits and recovery protocols.", icon: "Dumbbell" },
  { id: "conditioning", title: "Conditioning", blurb: "Cardio capacity, mobility, and athletic endurance.", icon: "HeartPulse" },
];

export type Program = {
  id: string;
  name: string;
  category: string;
  duration: string;
  intensity: "Low" | "Medium" | "High";
  description: string;
  image: string;
};

export type Trainer = {
  id: string;
  name: string;
  specialty: string;
  bio: string;
  certifications: string[];
  image: string;
};

export type Plan = {
  id: string;
  name: string;
  price: number;
  cadence: string;
  description: string;
  features: string[];
  popular?: boolean;
};

export type Testimonial = {
  name: string;
  role: string;
  text: string;
  result: string;
  image: string;
};

export type ClassSlot = {
  day: string;
  time: string;
  className: string;
  trainer: string;
  duration: string;
};
