"use client";

import { useState, useEffect } from "react";
import { useTranslations } from "next-intl";
import { Button } from "@/components/ui/button";
import {
  User,
  Mail,
  Code,
  Briefcase,
  GraduationCap,
  Menu,
} from "lucide-react";
import LocaleSwitcher from "@/components/LocaleSwitcher";
import HeroSection from "@/components/ui/Hero";
import { ProjectCard } from "@/components/ui/projectCard";
import { projects } from "@/constants/Projects";
import Skills from "@/components/ui/skills";
import Experience from "@/components/ui/experience";
import Contact from "@/components/ui/contact";

interface Section {
  id: string;
  icon: React.ElementType;
}

const sections: Section[] = [
  { id: "home", icon: User },
  { id: "about", icon: User },
  { id: "skills", icon: GraduationCap },
  { id: "projects", icon: Code },
  { id: "experience", icon: Briefcase },
  { id: "contact", icon: Mail },
];

export default function Home() {
  const [activeSection, setActiveSection] = useState("home");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const t = useTranslations("home");

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-sm">
        <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
          {isMobile ? (
            <>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                <Menu className="h-6 w-6" />
              </Button>
              {isMenuOpen && (
                <div className="absolute top-full left-0 right-0 bg-background shadow-md">
                  <ul className="flex flex-col">
                    {sections.map((section) => (
                      <li key={section.id}>
                        <Button
                          variant={activeSection === section.id ? "default" : "ghost"}
                          className="w-full justify-start"
                          onClick={() => {
                            scrollTo(section.id);
                            setActiveSection(section.id);
                          }}
                        >
                          <section.icon className="mr-2 h-4 w-4" />
                          {t(`nav.${section.id}`)}
                        </Button>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </>
          ) : (
            <ul className="flex space-x-2">
              {sections.map((section) => (
                <li key={section.id}>
                  <Button
                    variant={activeSection === section.id ? "default" : "ghost"}
                    size="sm"
                    onClick={() => {
                      scrollTo(section.id);
                      setActiveSection(section.id);
                    }}
                  >
                    <section.icon className="mr-2 h-4 w-4" />
                    {t(`nav.${section.id}`)}
                  </Button>
                </li>
              ))}
            </ul>
          )}
          <LocaleSwitcher />
        </nav>
      </header>

      <main className="container mx-auto px-4">
        <HeroSection />
        <Skills />
        <section id="projects" className="py-20">
          <h2 className="text-3xl md:text-5xl font-extrabold text-center mb-8 md:mb-16 text-foreground">
            {t("projects.title")}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
            {projects(t).map((project, index) => (
              <ProjectCard key={index} {...project} t={t} />
            ))}
          </div>
        </section>
        <Experience />
        <Contact />
      </main>

      <footer className="bg-muted py-4 text-center text-muted-foreground">
        <p>{t("footer.copyright")}</p>
      </footer>
    </div>
  );
}