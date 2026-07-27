export type Testimonial = {
  id: string;
  quote: string;
  name: string;
  role: string;
  company: string;
  initials: string;
  rating: number;
  featured?: boolean;
};

// Example testimonial content for layout and design purposes.
// Replace with verified customer quotes before this site goes live publicly.
export const testimonials: Testimonial[] = [
  {
    id: "t1",
    quote:
      "Mirflow answers every call we used to miss. It paid for itself in the first month just from recovered emergency jobs.",
    name: "Example Testimonial",
    role: "Operations Director",
    company: "HVAC Services Company",
    initials: "OD",
    rating: 5,
    featured: true,
  },
  {
    id: "t2",
    quote:
      "Our front desk finally gets to focus on the client in the room instead of the phone ringing in the background.",
    name: "Example Testimonial",
    role: "Practice Manager",
    company: "Multi-Location Dental Group",
    initials: "PM",
    rating: 5,
    featured: true,
  },
  {
    id: "t3",
    quote:
      "We reclaimed hours of billable time every week that were quietly disappearing into intake calls and document review.",
    name: "Example Testimonial",
    role: "Managing Partner",
    company: "Regional Law Firm",
    initials: "MP",
    rating: 5,
    featured: true,
  },
  {
    id: "t4",
    quote:
      "Speed to lead went from hours to seconds. That alone changed how many showings we book every week.",
    name: "Example Testimonial",
    role: "Broker / Owner",
    company: "Real Estate Brokerage",
    initials: "BO",
    rating: 5,
  },
  {
    id: "t5",
    quote:
      "Support tickets stopped piling up. Two-thirds of our volume now gets resolved before an agent even sees it.",
    name: "Example Testimonial",
    role: "Head of Customer Experience",
    company: "DTC Ecommerce Brand",
    initials: "CX",
    rating: 5,
  },
  {
    id: "t6",
    quote:
      "The onboarding process was faster than any software vendor we've worked with. Mirflow felt like an extension of our team from week one.",
    name: "Example Testimonial",
    role: "VP of Operations",
    company: "Field Services Company",
    initials: "VO",
    rating: 5,
  },
  {
    id: "t7",
    quote:
      "It's the rare AI project that actually shipped on time and did what was promised, without a mountain of caveats.",
    name: "Example Testimonial",
    role: "Director of IT",
    company: "Manufacturing Company",
    initials: "IT",
    rating: 5,
  },
  {
    id: "t8",
    quote:
      "Our books close days faster now, and I trust the numbers because nothing gets manually keyed in anymore.",
    name: "Example Testimonial",
    role: "Controller",
    company: "Professional Services Firm",
    initials: "CO",
    rating: 5,
  },
  {
    id: "t9",
    quote:
      "We were skeptical about voice AI sounding robotic. Customers regularly ask if they're speaking with a person.",
    name: "Example Testimonial",
    role: "General Manager",
    company: "Restaurant Group",
    initials: "GM",
    rating: 5,
  },
];

export type VideoTestimonial = {
  id: string;
  name: string;
  role: string;
  company: string;
  duration: string;
  thumbnailLabel: string;
};

export const videoTestimonials: VideoTestimonial[] = [
  {
    id: "v1",
    name: "Example Video Testimonial",
    role: "Operations Director",
    company: "HVAC Services Company",
    duration: "1:42",
    thumbnailLabel: "Recovered $38K/mo in missed calls",
  },
  {
    id: "v2",
    name: "Example Video Testimonial",
    role: "Practice Manager",
    company: "Dental Group",
    duration: "2:05",
    thumbnailLabel: "Cut no-shows by 18%",
  },
  {
    id: "v3",
    name: "Example Video Testimonial",
    role: "Head of CX",
    company: "Ecommerce Brand",
    duration: "1:58",
    thumbnailLabel: "68% of tickets resolved by AI",
  },
];
