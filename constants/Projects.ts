import { StaticImageData } from "next/image";
import photoGenie from "@/public/images/photogenie.png";
import jammy from "@/public/images/jammy.png";
import uniGuesser from "@/public/images/uniguesser.png";
import GameSprout from "@/public/images/GameSproute.png";
interface Project {
  title: string;
  description: string;
  image: StaticImageData;
  livePreview: string;
  sourceCode: string;
}

export const projects = (t: any): Project[] => [
  {
    title: "GameSprout",
    description: t("projects.GameSproutDescription"),
    image: GameSprout,
    livePreview: "https://www.gamesprout.app",
    sourceCode: ""
  },
  {
    title: "Jammy",
    description: t("projects.JammyDescription"),
    image: jammy,
    livePreview: "https://spotify-jam.stormyfocus.cloud",
    sourceCode: "",
  },
  {
    title: "Photogenie",
    description: t("projects.PhotogenieDescription"),
    image: photoGenie,
    livePreview: "https://photogenie.stormyfocus.cloud",
    sourceCode: "https://github.com/ShahwanS/Photogenie",
  },
  {
    title: "UniGuesser",
    description: t("projects.UniguesserDescription"),
    image: uniGuesser,
    livePreview: "https://uniguesser.de",
    sourceCode: "https://github.com/ShahwanS/UniGuesser",
  },

];
