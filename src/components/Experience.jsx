import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown, CheckCircle2, Diamond } from "lucide-react";

/* 🔎 Keywords to emphasize inline */
const HIGHLIGHTS = [
  "Excel",
  "KPI",
  "Dashboard",
  "Telecom",
  "Data Analysis",
  "Reporting",
  "SQL",
  "Python",
  "Pandas",
  "Trend Analysis",
  "Data Cleaning",
  "Regulatory Research",
];

function Emph({ text }) {
  const esc = (s) => s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  const re = new RegExp(`(${HIGHLIGHTS.map(esc).join("|")})`, "g");
  return (
    <>
      {text.split(re).map((part, i) =>
        HIGHLIGHTS.includes(part) ? (
          <strong key={i} className="font-semibold text-yellow-600">
            {part}
          </strong>
        ) : (
          <span key={i}>{part}</span>
        )
      )}
    </>
  );
}

function Bullet({ children }) {
  return (
    <li className="flex gap-2 leading-relaxed text-[15px]">
      <Diamond className="mt-1 h-4 w-4 shrink-0 text-blue-600" />
      <span>
        <Emph text={children} />
      </span>
    </li>
  );
}

function ImpactBullet({ children }) {
  return (
    <li className="flex gap-2 leading-relaxed text-[15px]">
      <CheckCircle2 className="mt-1 h-4 w-4 shrink-0 text-green-600" />
      <span>
        <Emph text={children} />
      </span>
    </li>
  );
}

/* ✅ Jobs Updated for Purvi Bhatia */
const JOBS = [
  {
    company: "Novo Niti LLP",
    badge: "NN",
    role: "Assistant Manager – IT and Analysis",
    period: "Aug 2025 – Present",
    sub: "Hybrid",
    bullets: [
      "Managed telecom performance datasets including wireless and wireline KPIs for specialized reporting.",
      "Cleaned, validated, and structured large datasets (10,000+ rows) for regulatory and internal reporting.",
      "Created Excel-based dashboards to visualize network performance trends and key business metrics.",
      "Conducted trend analysis to identify performance gaps and provide actionable business insights.",
      "Developed structured reports and briefs for senior management and regulatory bodies.",
      "Supported IT data architecture and metadata management for improved data recovery and accessibility.",
      "Performed regulatory research to maintain compliance with evolving telecom standards.",
    ],
    impactTitle: "Key Achievements",
    impactBullets: [
      "Automated reporting workflows, reducing manual data entry time by 25%.",
      "Improved data accuracy by implementing stricter validation rules for KPI tracking.",
    ],
  },
  {
    company: "Adore Technosoft (OPC) Private Limited",
    badge: "AT",
    role: "Full-stack Developer Intern",
    period: "Internship",
    sub: "Remote",
    bullets: [
      "Collaborated with the development team to resolve software bugs and optimize application performance.",
      "Implemented new functionalities and features within the existing codebase.",
      "Participated in code reviews and team meetings to ensure software quality and alignment with project goals.",
    ],
  },
];

export default function Experience() {
  const [open, setOpen] = useState(() => new Set([0]));
  const toggle = (idx) =>
    setOpen((prev) => {
      const next = new Set(prev);
      next.has(idx) ? next.delete(idx) : next.add(idx);
      return next;
    });

  return (
    <section id="experience" className="py-24">
      <div className="mx-auto w-[min(1100px,94vw)]">
        {/* Header */}
        <div className="w-full flex justify-center mb-10">
          <div className="inline-block border-2 border-black bg-white px-6 py-2 shadow-[6px_6px_0_#000]">
            <h2 className="text-2xl font-extrabold tracking-wide">
              EXPERIENCE
            </h2>
          </div>
        </div>

        <div className="space-y-9">
          {JOBS.map((job, i) => {
            const isOpen = open.has(i);
            const bodyId = `job-${i}-body`;

            return (
              <div
                key={i}
                className="border-2 border-black bg-white shadow-[8px_8px_0_rgba(0,0,0,0.18)]"
              >
                {/* Card header */}
                <button
                  type="button"
                  onClick={() => toggle(i)}
                  aria-expanded={isOpen}
                  aria-controls={bodyId}
                  className="w-full text-left p-4 md:p-5 border-b-2 border-black focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2"
                >
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-3 md:gap-4">
                    {/* Left group */}
                    <div className="flex items-start gap-3 md:gap-4 flex-1 min-w-0">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border-2 border-black overflow-hidden flex items-center justify-center bg-white shrink-0">
                        {job.logo ? (
                          <img
                            src={job.logo}
                            alt={`${job.company} logo`}
                            className="w-full h-full object-cover"
                            loading="lazy"
                          />
                        ) : (
                          <span className="font-extrabold">{job.badge}</span>
                        )}
                      </div>

                      <div className="min-w-0">
                        <div className="text-lg sm:text-xl font-extrabold leading-tight break-words">
                          {job.company}
                        </div>
                        <div className="font-mono text-teal-700 font-semibold mt-0.5">
                          {job.role}
                        </div>
                        {job.sub && (
                          <div className="text-xs mt-1 text-gray-600">
                            {job.sub}
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Right group */}
                    <div className="flex items-center justify-between md:justify-end gap-2 md:gap-3">
                      <div className="font-mono text-xs sm:text-sm">
                        {job.period}
                      </div>
                      <span
                        className={`border-2 border-black bg-white p-1 shadow-[4px_4px_0_#000] transition-transform ${isOpen ? "rotate-180" : ""
                          }`}
                        aria-hidden="true"
                      >
                        <ChevronDown className="h-4 w-4" />
                      </span>
                    </div>
                  </div>
                </button>

                {/* Collapsible body */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      id={bodyId}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25 }}
                      className="overflow-hidden"
                    >
                      <div className="p-4 md:p-5">
                        {/* Main bullets */}
                        <div className="pl-3 md:pl-4 border-l-4 border-red-500">
                          <ul className="list-none mt-2 space-y-2">
                            {job.bullets.map((b, idx) => (
                              <Bullet key={idx}>{b}</Bullet>
                            ))}
                          </ul>
                        </div>

                        {/* Optional Impact section */}
                        {job.impactBullets?.length ? (
                          <div className="mt-5">
                            <div className="inline-flex items-center gap-2 rounded-md border-2 border-black bg-white px-3 py-1 shadow-[4px_4px_0_#000]">
                              <CheckCircle2 className="h-4 w-4 text-green-700" />
                              <span className="text-sm font-extrabold">
                                {job.impactTitle || "Impact"}
                              </span>
                            </div>
                            <ul className="list-none mt-3 space-y-2">
                              {job.impactBullets.map((b, idx) => (
                                <ImpactBullet key={idx}>{b}</ImpactBullet>
                              ))}
                            </ul>
                          </div>
                        ) : null}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
