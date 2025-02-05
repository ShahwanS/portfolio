"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronRight,
  Terminal,
  Github,
  Linkedin,
  Mail,
  FileUser,
  Download,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { TypewriterEffect } from "./typewriter-effect";
import { useLocale, useTranslations } from "next-intl";
import Link from "next/link";
const TerminalComponent = () => {
  const locale = useLocale();
  const t = useTranslations("home");
  const [command, setCommand] = useState("");
  const [output, setOutput] = useState<string[]>([
    `$ ${locale === "de" ? "hilfe" : "help"}`,
    locale === "de"
      ? "Verfügbare Befehle: hilfe, über, fähigkeiten, projekte, kontakt, fenster leeren"
      : "Available commands: help, about, skills, projects, contact, clear window",
  ]);

  const handleCommand = (e: React.FormEvent) => {
    e.preventDefault();
    setOutput((prev) => [...prev, `$ ${command}`, executeCommand(command)]);
    setCommand("");
  };

  const executeCommand = (cmd: string): string => {
    const lowerCmd = cmd.toLowerCase();
    switch (lowerCmd) {
      case "help":
      case "hilfe":
        return t("hero.availableCommands");
      case "about":
      case "über":
        return t("about.description");
      case "skills":
      case "fähigkeiten":
        return `${t("about.skills")} ${t("about.skillsList.skill1")}, ${t(
          "about.skillsList.skill2"
        )}, ${t("about.skillsList.skill3")}, ${t(
          "about.skillsList.skill4"
        )}, ${t("about.skillsList.skill5")}, ${t("about.skillsList.skill6")}`;
      case "projects":
      case "projekte":
        return "GitHub: https://github.com/shahwans";
      case "contact":
      case "kontakt":
        return `${t(
          "contact.email"
        )} | LinkedIn: https://linkedin.com/in/seif-shahwan-94bb0a1a6`;
      case "clear window":
      case "fenster leeren":
        setOutput([
          `$ ${locale === "de" ? "hilfe" : "help"}`,
          locale === "de"
            ? "Verfügbare Befehle: hilfe, über, fähigkeiten, projekte, kontakt, fenster leeren"
            : "Available commands: help, about, skills, projects, contact, clear window",
        ]);
        return "";
      default:
        return t("hero.commandNotFound", { cmd: cmd });
    }
  };

  return (
    <div className="bg-gray-900 text-green-400 p-4 rounded-lg shadow-lg w-full max-w-lg font-mono text-sm">
      <div className="mb-4 h-40 overflow-y-auto">
        {output.map((line, index) => (
          <div key={index}>{line}</div>
        ))}
      </div>
      <form onSubmit={handleCommand} className="flex">
        <span className="mr-2">$</span>
        <input
          type="text"
          value={command}
          onChange={(e) => setCommand(e.target.value)}
          className="bg-transparent flex-grow focus:outline-none"
          placeholder={t("hero.typeACommand")}
        />
      </form>
    </div>
  );
};

const wordsname = [
  {
    text: "Seif",
  },
  {
    text: "Shahwan",
  },
];
export default function HeroSection() {
  const [currentTech, setCurrentTech] = useState(0);
  const t = useTranslations("home");
  const technologies = ["React", "Node.js", "TypeScript", "MongoDB", "AWS"];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTech((prev) => (prev + 1) % technologies.length);
    }, 2000);
    return () => clearInterval(interval);
  }, [technologies.length]);

  return (
    <section
      className="min-h-screen flex flex-col justify-center items-center text-foreground px-4 py-12 relative overflow-hidden"
      id="home"
    >
      <div className="mx-auto max-w-6xl relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="flex items-start justify-start text-4xl md:text-6xl font-bold mb-2">
                <TypewriterEffect
                  words={wordsname}
                  cursorClassName="item-start"
                />
              </h1>
              <h2 className="text-3xl md:text-5xl font-bold mr-16 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
                {t("hero.title")}
              </h2>
            </motion.div>

            <motion.p
              className="text-xl text-gray-300"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              {t("hero.subtitle")}
              <AnimatePresence mode="wait">
                <motion.span
                  key={currentTech}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  className="font-semibold text-blue-400"
                >
                  {technologies[currentTech]}
                </motion.span>
              </AnimatePresence>
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="space-y-4 sm:space-y-0 sm:space-x-4 flex flex-col sm:flex-row"
            >
              <Link href="#projects">
                <Button className="group bg-gradient-to-r from-primary to-accent hover:from-primary/80 hover:to-accent/80">
                  {t("hero.viewWork")}
                  <ChevronRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>

              <Link
                href="https://drive.google.com/file/d/12Bl2YD_sgneVLcdj5eBe4gd4NMDdS3hv/view?usp=sharing"
                target="_blank"
              >
                <Button
                  variant="outline"
                  className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                >
                  {t("hero.downloadCV")}
                  <Download size={20} className="ml-2" />
                </Button>
              </Link>
            </motion.div>
            <motion.div
              className="flex space-x-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              {[
                { icon: Github, href: "https://github.com/shahwans" },
                {
                  icon: Linkedin,
                  href: "https://linkedin.com/in/seif-shahwan-94bb0a1a6",
                },
                { icon: Mail, href: "mailto:saif.shahwan@icloud.com" },
              ].map(({ icon: Icon, href }, index) => (
                <motion.a
                  key={index}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Icon className="h-6 w-6 text-blue-400 hover:text-purple-400 transition-colors" />
                </motion.a>
              ))}
            </motion.div>
          </div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="bg-secondary p-6 rounded-lg shadow-2xl"
            id="about"
          >
            <h2 className="text-2xl font-semibold mb-4 flex items-center text-blue-400">
              <Terminal className="mr-2" /> {t("hero.interactiveTerminal")}
            </h2>
            <TerminalComponent />
          </motion.div>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1 }}
          className="mt-12 bg-secondary p-6 rounded-lg shadow-lg"
        >
          <h2 className="text-2xl font-semibold mb-4 text-blue-400">
            {t("about.title")}
          </h2>
          <p className="text-gray-300 mb-4">{t("about.description")}</p>
          <p className="text-gray-300 mb-4">{t("about.description2")}</p>
          <p className="text-gray-300">{t("about.description3")}</p>
        </motion.div>
      </div>
    </section>
  );
}
