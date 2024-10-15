"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Code,
  Database,
  Server,
  Cloud,
  Globe,
  LucideIcon,
  Github,
  Terminal,
  FileCode,
  Figma,
  Cpu,
  Coffee,
} from "lucide-react";
import { useTranslations } from "next-intl";

interface Skill {
  name: string;
  icon: LucideIcon;
  skills: { name: string; icon: LucideIcon }[];
}

const skillCategories = (t: any): Skill[] => [
  {
    name: t("skills.frontend"),
    icon: Globe,
    skills: [
      { name: "React", icon: Code },
      { name: "Next.js", icon: Server },
      { name: "TypeScript", icon: FileCode },
      { name: "Tailwind CSS", icon: Cpu },
      { name: "Framer Motion", icon: Coffee },
    ],
  },
  {
    name: t("skills.backend"),
    icon: Server,
    skills: [
      { name: "Node.js", icon: Terminal },
      { name: "Express", icon: Server },
    ],
  },
  {
    name: t("skills.database"),
    icon: Database,
    skills: [
      { name: "PostgreSQL", icon: Database },
      { name: "MongoDB", icon: Database },
    ],
  },
  {
    name: t("skills.DevOps"),
    icon: Cloud,
    skills: [
      { name: "Docker", icon: Cloud },
      { name: "AWS", icon: Cloud },
    ],
  },
  {
    name: t("skills.languages"),
    icon: Code,
    skills: [
      { name: "JavaScript", icon: FileCode },
      { name: "TypeScript", icon: FileCode },
      { name: "Java", icon: Coffee },
    ],
  },
  {
    name: t("skills.tools"),
    icon: Code,
    skills: [
      { name: "Git", icon: Github },
      { name: "VS Code", icon: Code },
      { name: "Postman", icon: Server },
      { name: "Figma", icon: Figma },
    ],
  },
];

const SkillCategory: React.FC<{ category: Skill; index: number }> = ({ category, index }) => {
  return (
    <motion.div
    initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    className="bg-gradient-to-br from-secondary to-background p-4 md:p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
  >
    <h3 className="text-xl md:text-2xl font-bold mb-4 flex items-center text-primary">
      <category.icon className="mr-3 h-6 w-6 md:h-8 md:w-8" />
      {category.name}
    </h3>
    <div className="grid grid-cols-2 gap-3 mt-6 md:mt-10">
      {category.skills.map((skill, skillIndex) => (
        <motion.div
          key={skillIndex}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3, delay: skillIndex * 0.05 }}
          className="flex items-center text-foreground transition-colors duration-200"
        >
          <skill.icon className="mr-2 h-4 w-4 md:h-5 md:w-5 text-primary" />
          <span className="text-xs md:text-sm">{skill.name}</span>
        </motion.div>
      ))}
    </div>
  </motion.div>
  );
};

export default function Skills() {
  const t = useTranslations("home");
  return (
    <section className="py-16 md:py-20" id="skills">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-5xl font-extrabold text-center mb-12 md:mb-16 text-foreground"
        >
          Skills
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {skillCategories(t).map((category, index) => (
            <SkillCategory
              key={index}
              category={category}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}