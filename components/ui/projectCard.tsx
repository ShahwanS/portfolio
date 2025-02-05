"use client";
import React from "react";
import Image, { StaticImageData } from "next/image";
import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";

type ProjectCardProps = {
  title: string;
  description: string;
  image: StaticImageData;
  livePreview: string;
  sourceCode: string;
  t: any;
};
export function ProjectCard({
  title,
  description,
  image,
  livePreview,
  sourceCode,
  t,
}: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="group relative bg-gradient-to-br from-background to-secondary rounded-xl shadow-2xl overflow-hidden flex flex-col h-[500px] w-full transform transition-all duration-300 hover:scale-105 hover:shadow-primary/20"
    >
      <div className="relative h-[300px] overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition-transform duration-500 transform group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-black bg-opacity-60 transition-opacity duration-300 opacity-0 group-hover:opacity-100 flex items-center justify-center">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.1 }}
            className="space-x-4"
          >
            <Button
              className="bg-white text-gray-900 hover:bg-blue-400 hover:text-white transition-colors duration-300"
              onClick={() => window.open(livePreview, "_blank")}
            >
              {t("projects.viewLive")}
              <ExternalLink className="ml-2 h-4 w-4" />
            </Button>
            <Button
              className="bg-white text-gray-900 hover:bg-purple-400 hover:text-white transition-colors duration-300"
              onClick={() => window.open(sourceCode, "_blank")}
            >
              {t("projects.sourceCode")}
              <Github className="ml-2 h-4 w-4" />
            </Button>
          </motion.div>
        </div>
      </div>
      <div className="p-6 flex flex-col flex-grow bg-gradient-to-b from-secondary to-background">
        <h3 className="text-2xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
          {title}
        </h3>
        <p className="text-muted-foreground mb-4 flex-grow">{description}</p>
        <div className="mt-auto">
          <div className="w-full h-1 bg-gradient-to-r from-primary via-accent to-primary rounded-full transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
        </div>
      </div>
    </motion.div>
  );
}
