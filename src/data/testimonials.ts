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

// Only verified, named customer quotes (with written permission) belong here.
// Intentionally empty until founding-client testimonials are collected.
export const testimonials: Testimonial[] = [];

export type VideoTestimonial = {
  id: string;
  name: string;
  role: string;
  company: string;
  duration: string;
  thumbnailLabel: string;
};

export const videoTestimonials: VideoTestimonial[] = [];
