import { LucideIcon } from "lucide-react";

export interface TestimonialProps {
  name: string;
  text: string;
  avatar: string;
}

export interface BenefitProps {
  title: string;
  description: string;
  Icon: LucideIcon;
}

export interface FaqItem {
  question: string;
  answer: string;
}