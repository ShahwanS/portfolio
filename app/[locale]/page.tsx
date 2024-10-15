"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Code,
  Briefcase,
  User,
  Mail,
  ChevronDown,
  Github,
  Linkedin,
  Twitter,
  FileText,
  ExternalLink,
} from "lucide-react";
import LocaleSwitcher from "@/components/LocaleSwitcher";

interface Section {
  id: string;
  icon: React.ElementType;
}

interface Project {
  title: string;
  description: string;
  image: string;
  livePreview: string;
}

interface Position {
  title: string;
  company: string;
  dates: string;
  responsibilities: string[];
}

const sections: Section[] = [
  { id: "home", icon: User },
  { id: "about", icon: User },
  { id: "projects", icon: Code },
  { id: "experience", icon: Briefcase },
  { id: "contact", icon: Mail },
];

const projects: Project[] = [
  {
    title: "E-commerce Platform",
    description:
      "A full-featured e-commerce solution built with React, Node.js, and MongoDB.",
    image: "https://source.unsplash.com/random/800x600?ecommerce",
    livePreview: "https://example-ecommerce.com",
  },
  {
    title: "Social Media Dashboard",
    description:
      "A real-time dashboard for social media analytics using React, Socket.io, and D3.js.",
    image: "https://source.unsplash.com/random/800x600?dashboard",
    livePreview: "https://example-dashboard.com",
  },
  {
    title: "Task Management App",
    description:
      "A collaborative task management application built with Vue.js and Firebase.",
    image: "https://source.unsplash.com/random/800x600?tasks",
    livePreview: "https://example-taskmanager.com",
  },
];

export default function Home() {
  const [activeSection, setActiveSection] = useState("home");
  const t = useTranslations("home");

  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Access each skill individually
  const skills = [
    t("about.skillsList.skill1"),
    t("about.skillsList.skill2"),
    t("about.skillsList.skill3"),
    t("about.skillsList.skill4"),
    t("about.skillsList.skill5"),
    t("about.skillsList.skill6"),
  ];

  const experiencePositions = [
    {
      title: t("experience.position1.title"),
      company: t("experience.position1.company"),
      dates: t("experience.position1.dates"),
      responsibilities: [
        t("experience.position1.responsibility1"),
        t("experience.position1.responsibility2"),
        t("experience.position1.responsibility3"),
      ],
    },
    {
      title: t("experience.position2.title"),
      company: t("experience.position2.company"),
      dates: t("experience.position2.dates"),
      responsibilities: [
        t("experience.position2.responsibility1"),
        t("experience.position2.responsibility2"),
        t("experience.position2.responsibility3"),
      ],
    },
    {
      title: t("experience.position3.title"),
      company: t("experience.position3.company"),
      dates: t("experience.position3.dates"),
      responsibilities: [
        t("experience.position3.responsibility1"),
        t("experience.position3.responsibility2"),
        t("experience.position3.responsibility3"),
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-sm">
        <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
          <ul className="flex space-x-4">
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
          <LocaleSwitcher />
        </nav>
      </header>

      <main className="container mx-auto px-4">
        {/* Hero Section */}
        <section
          id="home"
          className="min-h-screen flex items-center justify-center"
        >
          <div className="text-center">
            <h1 className="text-5xl font-bold mb-4">{t("hero.title")}</h1>
            <p className="text-2xl text-muted-foreground mb-8">
              {t("hero.subtitle")}
            </p>
            <div className="space-x-4">
              <Button size="lg" onClick={() => scrollTo("about")}>
                {t("hero.learnMore")}
                <ChevronDown className="ml-2 h-4 w-4" />
              </Button>
              <Button size="lg" variant="outline">
                <FileText className="mr-2 h-4 w-4" />
                {t("hero.downloadCV")}
              </Button>
            </div>
          </div>
        </section>

        {/* About Section */}

        <section id="about" className="py-20">
          <Card>
            <CardHeader>
              <CardTitle>{t("about.title")}</CardTitle>
              <CardDescription>{t("about.subtitle")}</CardDescription>
            </CardHeader>

            <CardContent>
              <div className="space-y-6">
                {skills.map((skill, index) => (
                  <div key={index}>
                    <h3 className="text-xl font-semibold">{skill}</h3>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-20">
          <h2 className="text-3xl font-bold mb-8 text-center">
            {t("projects.title")}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card key={index}>
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover"
                />
                <CardHeader>
                  <CardTitle>{project.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">
                    {project.description}
                  </p>
                  <Button asChild>
                    <a
                      href={project.livePreview}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {t("projects.livePreview")}{" "}
                      <ExternalLink className="ml-2 h-4 w-4" />
                    </a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
        {/* Experience Section */}
        <section id="experience" className="py-20">
          <Card>
            <CardHeader>
              <CardTitle>{t("experience.title")}</CardTitle>
              <CardDescription>{t("experience.subtitle")}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {Object.values(experiencePositions).map((position, index) => (
                  <div key={index}>
                    <h3 className="text-xl font-semibold">{position.title}</h3>
                    <p className="text-muted-foreground">
                      {position.company} | {position.dates}
                    </p>
                    <ul className="list-disc pl-5 mt-2">
                      {position.responsibilities &&
                        position.responsibilities.map(
                          (responsibility, respIndex) => (
                            <li key={respIndex}>{responsibility}</li>
                          )
                        )}
                    </ul>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </section>
        {/* Contact Section */}
        <section id="contact" className="py-20">
          <Card>
            <CardHeader>
              <CardTitle>{t("contact.title")}</CardTitle>
              <CardDescription>{t("contact.subtitle")}</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="mb-4">{t("contact.description")}</p>
              <div className="space-y-4">
                <div className="flex items-center">
                  <Mail className="mr-2 h-5 w-5" />
                  <a
                    href={`mailto:${t("contact.email")}`}
                    className="text-primary hover:underline"
                  >
                    {t("contact.email")}
                  </a>
                </div>
                <div className="flex items-center">
                  <Linkedin className="mr-2 h-5 w-5" />
                  <a
                    href="#"
                    className="text-primary hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {t("contact.linkedin")}
                  </a>
                </div>
                <div className="flex items-center">
                  <Github className="mr-2 h-5 w-5" />
                  <a
                    href="#"
                    className="text-primary hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {t("contact.github")}
                  </a>
                </div>
                <div className="flex items-center">
                  <Twitter className="mr-2 h-5 w-5" />
                  <a
                    href="#"
                    className="text-primary hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {t("contact.twitter")}
                  </a>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>
      </main>

      <footer className="bg-muted py-4 text-center">
        <p>{t("footer.copyright")}</p>
      </footer>
    </div>
  );
}
