import { User, Mail, Code, Briefcase, GraduationCap, Menu } from "lucide-react";

interface Section {
  id: string;
  icon: React.ElementType;
}

export const sections: Section[] = [
  { id: "home", icon: User },
  { id: "about", icon: User },
  { id: "skills", icon: GraduationCap },
  { id: "projects", icon: Code },
  { id: "experience", icon: Briefcase },
  { id: "contact", icon: Mail },
];
