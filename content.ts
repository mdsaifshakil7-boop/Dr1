import type { Program, Trainer, Plan, Testimonial, ClassSlot } from "./gym";

import heroImg from "@/assets/hero-clinic.jpg";
import gymImg1 from "@/assets/reception.jpg";
import gymImg2 from "@/assets/treatment-room.jpg";
import strengthImg from "@/assets/laser.jpg";
import muscleImg from "@/assets/aesthetic.jpg";
import cardioImg from "@/assets/skin-glow.jpg";
import trainerImg1 from "@/assets/doctor.jpg";
import trainerImg2 from "@/assets/hair.jpg";
import trainerImg3 from "@/assets/hero-clinic.jpg";

export const images = { heroImg, gymImg1, gymImg2, strengthImg, muscleImg, cardioImg, trainerImg1, trainerImg2, trainerImg3 };

export const stats = [
  { value: "12K+", label: "Active Members" },
  { value: "45+", label: "Weekly Classes" },
  { value: "24", label: "Expert Coaches" },
  { value: "8", label: "Years Strong" },
];

export const programs: Program[] = [
  {
    id: "strength-training",
    name: "Strength Training",
    category: "Strength",
    duration: "60 min",
    intensity: "High",
    description: "Progressive barbell and dumbbell programming designed to build raw power and structural balance.",
    image: strengthImg,
  },
  {
    id: "hiit-conditioning",
    name: "HIIT Conditioning",
    category: "Conditioning",
    duration: "45 min",
    intensity: "High",
    description: "High-intensity interval circuits that torch calories and build cardiovascular endurance fast.",
    image: cardioImg,
  },
  {
    id: "hypertrophy",
    name: "Hypertrophy",
    category: "Muscle Building",
    duration: "75 min",
    intensity: "Medium",
    description: "Volume-driven splits focused on muscle growth, time-under-tension, and recovery science.",
    image: muscleImg,
  },
  {
    id: "functional-fitness",
    name: "Functional Fitness",
    category: "Mobility",
    duration: "50 min",
    intensity: "Medium",
    description: "Kettlebells, sleds, and bodyweight flows that build real-world strength and movement quality.",
    image: gymImg2,
  },
  {
    id: "powerlifting",
    name: "Powerlifting",
    category: "Strength",
    duration: "90 min",
    intensity: "High",
    description: "Squat, bench, and deadlift coaching with periodized peaking for competition and PRs.",
    image: strengthImg,
  },
  {
    id: "olympic-lifting",
    name: "Olympic Lifting",
    category: "Strength",
    duration: "75 min",
    intensity: "High",
    description: "Snatch and clean-and-jerk technique work with mobility progressions and accessory lifts.",
    image: strengthImg,
  },
];

export const trainers: Trainer[] = [
  {
    id: "marcus-reed",
    name: "Marcus Reed",
    specialty: "Head Strength Coach",
    bio: "Former national powerlifter with 15 years coaching elite lifters from beginner to podium.",
    certifications: ["NSCA-CSCS", "USAW Level 2", "Precision Nutrition L1"],
    image: trainerImg1,
  },
  {
    id: "elena-vasquez",
    name: "Elena Vasquez",
    specialty: "Conditioning & Mobility",
    bio: "Ex-collegiate athlete blending metabolic conditioning with deep mobility and recovery work.",
    certifications: ["NASM-CPT", "FRC Mobility Specialist", "CrossFit L2"],
    image: trainerImg2,
  },
  {
    id: "james-okoye",
    name: "James Okoye",
    specialty: "Hypertrophy & Body Recomp",
    bio: "Natural bodybuilding champion focused on evidence-based muscle building and sustainable fat loss.",
    certifications: ["ACE-CPT", "PN Level 2", "Bodybuilding Federation Member"],
    image: trainerImg3,
  },
];

export const plans: Plan[] = [
  {
    id: "starter",
    name: "Starter",
    price: 39,
    cadence: "/month",
    description: "Everything you need to get moving with confidence.",
    features: ["Full gym floor access", "2 group classes / week", "Locker room & showers", "Fitness assessment", "Mobile app access"],
  },
  {
    id: "athlete",
    name: "Athlete",
    price: 79,
    cadence: "/month",
    description: "For members who want coaching and unlimited training.",
    features: ["Unlimited gym access", "Unlimited group classes", "1 personal training session / month", "Nutrition starter guide", "Recovery zone access", "Guest passes (2/month)"],
    popular: true,
  },
  {
    id: "elite",
    name: "Elite",
    price: 149,
    cadence: "/month",
    description: "Premium coaching for serious results and competition.",
    features: ["Everything in Athlete", "4 personal training sessions / month", "Custom programming", "Body composition tracking", "Priority class booking", "Recovery sauna & ice bath"],
  },
];

export const testimonials: Testimonial[] = [
  { name: "Sarah M.", role: "Lost 38 lbs", text: "I went from dreading the gym to looking forward to every session. The coaches actually care and the programming just works.", result: "-38 lbs · 9 months", image: trainerImg2 },
  { name: "David K.", role: "Deadlift PR", text: "Hit a 500lb deadlift after 14 months here. The strength coaching is world-class and the community pushes you to show up.", result: "500 lb DL PR", image: trainerImg1 },
  { name: "Priya R.", role: "First Competition", text: "Never thought I'd compete. The trainers believed in me before I did. Placed top 5 in my first meet.", result: "Top 5 Meet", image: trainerImg3 },
  { name: "Tom B.", role: "Muscle Gain", text: "Gained 14 lbs of lean mass in 6 months. The hypertrophy programming and nutrition guidance changed my life.", result: "+14 lb LBM", image: trainerImg1 },
  { name: "Lisa C.", role: "Marathon Ready", text: "The conditioning classes built my engine. Ran my first sub-4 marathon this year. Forever grateful.", result: "3:58 Marathon", image: trainerImg2 },
  { name: "Marcus T.", role: "Pain-Free Training", text: "Years of back pain from bad form. The mobility coaching fixed it. I move better now at 40 than I did at 25.", result: "Pain-Free", image: trainerImg3 },
];

export const schedule: ClassSlot[] = [
  { day: "Monday", time: "6:00 AM", className: "Strength Foundations", trainer: "Marcus Reed", duration: "60 min" },
  { day: "Monday", time: "12:00 PM", className: "HIIT Conditioning", trainer: "Elena Vasquez", duration: "45 min" },
  { day: "Monday", time: "6:00 PM", className: "Hypertrophy",
    trainer: "James Okoye", duration: "75 min" },
  { day: "Tuesday", time: "7:00 AM", className: "Functional Fitness", trainer: "Elena Vasquez", duration: "50 min" },
  { day: "Tuesday", time: "5:30 PM", className: "Powerlifting", trainer: "Marcus Reed", duration: "90 min" },
  { day: "Wednesday", time: "6:00 AM", className: "Olympic Lifting", trainer: "Marcus Reed", duration: "75 min" },
  { day: "Wednesday", time: "12:00 PM", className: "HIIT Conditioning", trainer: "Elena Vasquez", duration: "45 min" },
  { day: "Wednesday", time: "6:00 PM", className: "Hypertrophy", trainer: "James Okoye", duration: "75 min" },
  { day: "Thursday", time: "7:00 AM", className: "Mobility & Recovery", trainer: "Elena Vasquez", duration: "45 min" },
  { day: "Thursday", time: "5:30 PM", className: "Strength Foundations", trainer: "Marcus Reed", duration: "60 min" },
  { day: "Friday", time: "6:00 AM", className: "Conditioning Circuit", trainer: "Elena Vasquez", duration: "45 min" },
  { day: "Friday", time: "6:00 PM", className: "Hypertrophy", trainer: "James Okoye", duration: "75 min" },
  { day: "Saturday", time: "8:00 AM", className: "Weekend Warrior WOD", trainer: "James Okoye", duration: "60 min" },
  { day: "Saturday", time: "10:00 AM", className: "Beginners Strength", trainer: "Marcus Reed", duration: "60 min" },
  { day: "Sunday", time: "9:00 AM", className: "Mobility & Recovery", trainer: "Elena Vasquez", duration: "45 min" },
];

export const posts = [
  { title: "5 principles of progressive overload every lifter needs", cat: "Strength", date: "Jun 2026", excerpt: "The science behind getting stronger week after week, without burning out or getting injured.", image: strengthImg, readTime: "6 min" },
  { title: "How to eat for muscle growth on a busy schedule", cat: "Nutrition", date: "May 2026", excerpt: "Practical meal prep strategies that actually work when life gets chaotic.", image: cardioImg, readTime: "8 min" },
  { title: "The truth about cardio and muscle loss", cat: "Conditioning", date: "May 2026", excerpt: "Cardio won't kill your gains if you do it right. Here's the evidence.", image: muscleImg, readTime: "5 min" },
  { title: "Beginner's guide to your first powerlifting meet", cat: "Powerlifting", date: "Apr 2026", excerpt: "Everything you need to know from training to meet day prep.", image: strengthImg, readTime: "10 min" },
  { title: "Mobility routines that actually improve your squat", cat: "Mobility", date: "Apr 2026", excerpt: "Targeted drills to fix the most common squat limitations.", image: gymImg2, readTime: "7 min" },
  { title: "Recovery science: sleep, sauna, and muscle repair", cat: "Recovery", date: "Mar 2026", excerpt: "How to recover faster and train harder using proven methods.", image: cardioImg, readTime: "9 min" },
];
