import { Github, Linkedin } from "lucide-react";

export default function SocialButtons() {
  const base =
    "border-2 border-black p-2 flex items-center justify-center transition transform hover:-translate-y-1";
  const hover = "hover:bg-yellow-400";

  return (
    <div className="flex gap-3">
      <a
        href="https://github.com/Purvibhatia"
        target="_blank"
        rel="noreferrer"
        className={`${base} ${hover}`}
        aria-label="GitHub"
      >
        <Github className="w-5 h-5" />
      </a>
      <a
        href="https://www.linkedin.com/in/purvi-bhatia-b55324248"
        target="_blank"
        rel="noreferrer"
        className={`${base} ${hover}`}
        aria-label="LinkedIn"
      >
        <Linkedin className="w-5 h-5" />
      </a>
    </div>
  );
}
