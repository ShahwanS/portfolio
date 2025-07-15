import React from "react";
import { motion } from "framer-motion";
import { Mail, Linkedin, Github, Twitter, FileText } from "lucide-react";
import { useTranslations } from "next-intl";
import { Button } from "@/components/ui/button";

const ContactItem = ({ icon: Icon, text, href, download }: { icon: any; text: string; href: string; download?: boolean }) => {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ scale: 1.05 }}
      className="flex items-center space-x-4 p-3 md:p-4 bg-secondary rounded-lg hover:bg-secondary/80 transition-colors duration-300"
    >
      <Icon className="h-6 w-6 md:h-8 md:w-8 text-primary" />
      <span className="text-sm md:text-lg text-foreground">
        {text}
      </span>
    </motion.a>
  );
};

export default function Contact() {
  const t = useTranslations("home");

  return (
    <section id="contact" className="py-16 md:py-32 bg-gradient-to-b from-background to-secondary rounded my-6 md:my-10">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-6xl font-extrabold text-center mb-12 md:mb-20 text-foreground"
        >
          {t("contact.title")}
        </motion.h2>
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-gradient-to-br from-secondary to-background p-6 md:p-12 rounded-3xl shadow-2xl backdrop-blur-sm"
          >
            <p className="text-muted-foreground text-base md:text-xl mb-8 md:mb-10 text-center">{t("contact.description")}</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6 mb-8 md:mb-10">
              <ContactItem icon={Mail} text={t("contact.email")} href={`mailto:${t("contact.email")}`} />
              <ContactItem icon={Linkedin} text={t("contact.linkedin")} href="https://www.linkedin.com/in/seif-shahwan-94bb0a1a6/" />
              <ContactItem icon={Github} text={t("contact.github")} href="https://github.com/shahwans" />
              <ContactItem icon={FileText} text={t("contact.downloadCV")} href={t("hero.cv")} download />
            </div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mt-8 md:mt-12"
            >
              <Button
                className="w-full bg-primary hover:bg-primary/80 text-primary-foreground text-base md:text-lg font-bold py-3 md:py-4 px-6 md:px-8 rounded-full transition-all duration-300 transform hover:scale-105"
                onClick={() => window.location.href = `mailto:${t("contact.email")}`}
              >
                {t("contact.sendMessage")}
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}