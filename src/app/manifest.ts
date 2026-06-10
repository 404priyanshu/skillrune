import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "SkillRune",
    short_name: "SkillRune",
    description: "Reusable skills for AI agents.",
    start_url: "/",
    display: "standalone",
    background_color: "#f5f4ed",
    theme_color: "#1B365D",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
    ],
  };
}
