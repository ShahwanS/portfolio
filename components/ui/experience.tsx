import React from "react";
import { motion } from "framer-motion";
import { Briefcase, Calendar } from "lucide-react";
import { useTranslations } from "next-intl";
import { experiencePositions } from "@/constants/ExperiencePositions";

const ExperienceItem = ({ position, index }: { position: any; index: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-gradient-to-br from-secondary to-background p-4 md:p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
    >
      <h3 className="text-xl md:text-2xl font-bold mb-2 flex items-center text-primary">
        <Briefcase className="mr-3 h-5 w-5 md:h-6 md:w-6" />
        {position.title}
      </h3>
      <p className="text-sm md:text-base text-muted-foreground mb-4 flex items-center">
        <Calendar className="mr-2 h-4 w-4" />
        {position.company} | {position.dates}
      </p>
      <ul className="space-y-2">
        {position.responsibilities.map((responsibility: string, respIndex: number) => (
          <motion.li
            key={respIndex}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, delay: respIndex * 0.05 }}
            className="text-sm md:text-base text-gray-300 hover:text-white transition-colors duration-200"
          >
            • {responsibility}
          </motion.li>
        ))}
      </ul>
    </motion.div>
  );
};

export default function Experience() {
  const t = useTranslations("home");

  return (
    <section className="py-16 md:py-20" id="experience">
    <div className="container mx-auto px-4">
      <motion.h2
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-3xl md:text-5xl font-extrabold text-center mb-12 md:mb-16 text-foreground"
      >
        {t("experience.title")}
      </motion.h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
        {Object.values(experiencePositions(t)).map((position, index) => (
          <ExperienceItem key={index} position={position} index={index} />
        ))}
      </div>
    </div>
  </section>
  );
}