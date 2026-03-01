import { useState, useRef, useEffect } from "react";
import {
  Play,
  Pause,
  ExternalLink,
  Github,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

// Featured Projects - Data Analysis Focus
const FEATURED_PROJECTS = [
  {
    id: 1,
    title: "Telecom KPI Comparative Analysis",
    subtitle: "Data Analysis & KPI Tracking",
    blurb:
      "A comprehensive comparative analysis of telecom performance metrics. Identified performance gaps and growth trends using structured Excel models and KPI tracking to provide actionable business insights.",
    tech: ["Excel", "KPI Tracking", "Trend Analysis", "Data Visualization"],
    image: "/telecom.png",
    video: "",
    repo: "https://github.com/Purvibhatia",
    demo: "",
  },
  {
    id: 2,
    title: "Social Media Data Mining",
    subtitle: "Inference & Pattern Recognition",
    blurb:
      "Extracted and analyzed large volumes of social media data to uncover patterns and user behaviors. Focused on transforming unstructured data into actionable strategic insights.",
    tech: ["Python", "Data Mining", "Pandas", "Analysis"],
    image: "/social-mining.png",
    video: "",
    repo: "https://github.com/Purvibhatia",
    demo: "",
  },
];

// Smaller Projects from GitHub
const SMALL_PROJECTS = [
  {
    id: 3,
    title: "Travel-Buddy",
    blurb: "Companion finding app for solo travelers",
    tech: ["JavaScript", "HTML5", "CSS3"],
    image: "/travel.png",
    video: "",
    repo: "https://github.com/Purvibhatia/Travel-Buddy",
    demo: "",
  },
  {
    id: 4,
    title: "Prodigy-Task",
    blurb: "Interactive web components development",
    tech: ["HTML", "CSS", "JavaScript"],
    image: "/web-task.png",
    video: "",
    repo: "https://github.com/Purvibhatia/Prodigy-Task",
    demo: "",
  },
  {
    id: 5,
    title: "Codsoft Web Tasks",
    blurb: "Collection of internship projects",
    tech: ["React", "JavaScript", "Responsive Design"],
    image: "/codsoft.png",
    video: "",
    repo: "https://github.com/Purvibhatia/Codsoft-Task-2",
    demo: "",
  },
];

function TechStack({ tech }) {
  return (
    <div className="flex flex-wrap gap-1">
      {tech.map((t, idx) => (
        <span
          key={idx}
          className="inline-block border border-black px-2 py-0.5 text-xs font-mono bg-yellow-200 shadow-[2px_2px_0_rgba(0,0,0,0.6)]"
        >
          {t}
        </span>
      ))}
    </div>
  );
}

function ActionButton({ href, children, variant = "primary", icon: Icon }) {
  const base =
    "inline-flex items-center gap-1 border-2 border-black font-semibold px-3 py-1.5 text-sm transition-all shadow-[3px_3px_0_rgba(0,0,0,0.8)] hover:shadow-[4px_4px_0_rgba(0,0,0,0.8)] hover:-translate-x-0.5 hover:-translate-y-0.5";
  const variants = {
    primary: "bg-yellow-300 hover:bg-yellow-400",
    secondary: "bg-white hover:bg-gray-50",
  };
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className={`${base} ${variants[variant]}`}
    >
      {Icon && <Icon className="w-4 h-4" />}
      {children}
    </a>
  );
}

function VideoPlayer({
  src,
  poster,
  title,
  isPlaying,
  onPlayPause,
  className = "",
}) {
  const videoRef = useRef(null);

  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    if (isPlaying) {
      v.play().catch(() => { });
    } else {
      v.pause();
    }
  }, [isPlaying]);

  return (
    <div className={`relative group ${className}`}>
      {/* Project Title Overlay */}
      <div className="absolute top-3 left-3 z-10 border-2 border-black bg-white px-2 py-1 text-[10px] font-black uppercase tracking-wider shadow-[3px_3px_0_#000] pointer-events-none group-hover:bg-yellow-400 transition-colors">
        {title}
      </div>
      <video
        ref={videoRef}
        poster={poster}
        muted
        loop
        playsInline
        preload="none"
        className="w-full h-full object-cover"
        onError={(e) => {
          // hide video, show the next-sibling image fallback
          e.currentTarget.style.display = "none";
          if (e.currentTarget.nextSibling) {
            e.currentTarget.nextSibling.style.display = "block";
          }
        }}
      >
        <source src={src} type="video/mp4" />
      </video>

      {/* Image fallback (or poster placeholder) */}
      <img
        src={poster}
        alt={`${title} preview`}
        className="w-full h-full object-cover"
        style={{ display: "none" }}
        onError={(e) => {
          e.currentTarget.src =
            "data:image/svg+xml;utf8," +
            encodeURIComponent(
              `<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 300'>
                 <rect width='400' height='300' fill='white' stroke='black' stroke-width='4'/>
                 <text x='50%' y='50%' font-family='monospace' font-size='14' text-anchor='middle' font-weight='bold' fill='black'>${title}</text>
               </svg>`
            );
        }}
      />

      {/* Hover controls */}
      <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
        <button
          aria-label={isPlaying ? "Pause video" : "Play video"}
          onClick={onPlayPause}
          className="bg-white/20 backdrop-blur-sm border-2 border-white/30 rounded-full p-3 text-white hover:bg-white/30 transition-colors"
        >
          {isPlaying ? (
            <Pause className="w-5 h-5" />
          ) : (
            <Play className="w-5 h-5 ml-0.5" />
          )}
        </button>
      </div>
    </div>
  );
}

// Small Project Card
function SmallProjectCard({ project, isPlaying, onPlayPause }) {
  return (
    <div className="border-2 border-black bg-white shadow-[4px_4px_0_rgba(0,0,0,0.8)] w-72 flex-shrink-0">
      <div className="relative aspect-video border-b-2 border-black">
        <VideoPlayer
          src={project.video}
          poster={project.image}
          title={project.title}
          isPlaying={isPlaying}
          onPlayPause={onPlayPause}
          className="h-full"
        />
      </div>

      <div className="p-4">
        <h4 className="font-extrabold mb-1 text-base">{project.title}</h4>
        <p className="text-xs text-gray-600 mb-3">{project.blurb}</p>

        <div className="mb-3">
          <TechStack tech={project.tech} />
        </div>

        <div className="flex gap-2">
          <ActionButton
            href={project.demo}
            variant="primary"
            icon={ExternalLink}
          >
            Demo
          </ActionButton>
          <ActionButton href={project.repo} variant="secondary" icon={Github}>
            Code
          </ActionButton>
        </div>
      </div>
    </div>
  );
}

function SmallProjectsSlider({ projects }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [playingVideo, setPlayingVideo] = useState(null);

  // Card width math: w-72 (288) + gap-4 (16) = 304px per slide
  const SLIDE_PX = 304;

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % projects.length);
    setPlayingVideo(null);
  };
  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length);
    setPlayingVideo(null);
  };
  const handleVideoToggle = (projectId) => {
    setPlayingVideo(playingVideo === projectId ? null : projectId);
  };

  return (
    <div className="border-2 border-black bg-white/90 backdrop-blur-sm p-4 shadow-[4px_4px_0_rgba(0,0,0,0.8)]">
      <div className="flex justify-between items-center mb-4">
        <h3 className="font-bold">Other Projects</h3>
        <span className="font-mono text-xs text-gray-600">
          {currentIndex + 1} of {projects.length}
        </span>
      </div>

      <div className="overflow-hidden mb-4">
        <div
          className="flex gap-4 transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * SLIDE_PX}px)` }}
        >
          {projects.map((project) => (
            <SmallProjectCard
              key={project.id}
              project={project}
              isPlaying={playingVideo === project.id}
              onPlayPause={() => handleVideoToggle(project.id)}
            />
          ))}
        </div>
      </div>

      <div className="flex justify-between items-center">
        <button
          onClick={prevSlide}
          className="flex items-center gap-1 border-2 border-black bg-white px-3 py-1 text-sm font-semibold shadow-[2px_2px_0_rgba(0,0,0,0.8)] hover:-translate-y-0.5 transition-all"
          aria-label="Previous"
        >
          <ChevronLeft className="w-4 h-4" />
          Previous
        </button>

        <div className="flex gap-1">
          {projects.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setCurrentIndex(index);
                setPlayingVideo(null);
              }}
              aria-label={`Go to slide ${index + 1}`}
              className={`w-2 h-2 border border-black ${index === currentIndex ? "bg-yellow-400" : "bg-white"
                }`}
            />
          ))}
        </div>

        <button
          onClick={nextSlide}
          className="flex items-center gap-1 border-2 border-black bg-white px-3 py-1 text-sm font-semibold shadow-[2px_2px_0_rgba(0,0,0,0.8)] hover:-translate-y-0.5 transition-all"
          aria-label="Next"
        >
          Next
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}

export default function Projects() {
  const [playingVideo, setPlayingVideo] = useState(null);

  const handleVideoToggle = (projectId) => {
    setPlayingVideo(playingVideo === projectId ? null : projectId);
  };

  return (
    <section id="projects" className="py-16">
      <div className="mx-auto w-[min(1100px,94vw)]">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-block border-2 border-black bg-white px-6 py-2 shadow-[6px_6px_0_rgba(0,0,0,0.7)]">
            <h2 className="text-2xl font-extrabold tracking-wide">PROJECTS</h2>
          </div>
        </div>

        {/* Featured Projects */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {FEATURED_PROJECTS.map((project) => (
            <div
              key={project.id}
              className="border-2 border-black bg-white shadow-[6px_6px_0_rgba(0,0,0,0.8)]"
            >
              {/* Video */}
              <div className="relative aspect-video border-b-2 border-black">
                <VideoPlayer
                  src={project.video}
                  poster={project.image}
                  title={project.title}
                  isPlaying={playingVideo === project.id}
                  onPlayPause={() => handleVideoToggle(project.id)}
                  className="h-full"
                />
              </div>

              {/* Content */}
              <div className="p-5">
                <h4 className="text-lg font-extrabold mb-1">{project.title}</h4>
                <p className="text-teal-700 font-semibold mb-3 text-sm">
                  {project.subtitle}
                </p>
                <p className="text-gray-700 text-sm leading-relaxed mb-4">
                  {project.blurb}
                </p>

                <div className="mb-4">
                  <TechStack tech={project.tech} />
                </div>

                <div className="flex gap-2">
                  <ActionButton
                    href={project.demo}
                    variant="primary"
                    icon={ExternalLink}
                  >
                    Live Demo
                  </ActionButton>
                  <ActionButton
                    href={project.repo}
                    variant="secondary"
                    icon={Github}
                  >
                    Code
                  </ActionButton>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Small Projects Slider */}
        <div className="mb-12">
          <SmallProjectsSlider projects={SMALL_PROJECTS} />
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="inline-block border-2 border-black bg-yellow-300 px-6 py-3 shadow-[4px_4px_0_rgba(0,0,0,0.8)]">
            <p className="font-semibold mb-2">More projects on GitHub</p>
            <a
              href="https://github.com/Purvibhatia"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 bg-black text-white px-4 py-2 font-bold hover:bg-gray-800 transition-colors text-sm"
            >
              <Github className="w-4 h-4" />
              View All
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
