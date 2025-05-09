import { StaticImageData } from "next/image";
import photoGenie from "@/public/images/photogenie.png";
import socialCodeLens from "@/public/images/SocialCodeLens.png";
import uniGuesser from "@/public/images/uniguesser.png";
import GameHub from "@/public/images/GameHub.png";
interface Project {
  title: string;
  description: string;
  image: StaticImageData;
  livePreview: string;
  sourceCode: string;
}

export const projects = (t: any): Project[] => [
  {
    title: "SocialCodeLens",
    description: t("projects.SocialCodeLensDescription"),
    image: socialCodeLens,
    livePreview: "https://www.socialcodelens.com",
    sourceCode: "https://github.com/ShahwanS/socialcodelens",
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
  {
    title: "GameHub",
    description: t("projects.GameHubDescription"),
    image: GameHub,
    livePreview: "https://gamehub-eight-orcin.vercel.app/",
    sourceCode: ""
  }
];
