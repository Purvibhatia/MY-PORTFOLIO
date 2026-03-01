import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

const education = [
  {
    school: "Ajay Kumar Garg Engineering College",
    degree: "B.Tech (Information Technology)",
    period: "2021 – 2025",
    badge: "AKG",
    address: "Ghaziabad, Uttar Pradesh, India",
    url: "https://www.akgec.ac.in",
    logo: "",
    percentage: "70%",
  },
  {
    school: "Sophia Girls’ School",
    degree: "Class 12th (Senior Secondary)",
    period: "2020 – 2021",
    badge: "SGS",
    address: "Meerut, Uttar Pradesh, India",
    url: "",
    logo: "",
    percentage: "90%",
  },
  {
    school: "Sophia Girls’ School",
    degree: "Class 10th (Secondary)",
    period: "2018 – 2019",
    badge: "SGS",
    address: "Meerut, Uttar Pradesh, India",
    url: "",
    logo: "",
    percentage: "91%",
  },
];

export default function Education() {
  return (
    <section id="education" className="relative py-24 text-white grid-bg">
      <div className="mx-auto w-[min(1100px,94vw)]">
        {/* Heading */}
        <div className="flex justify-center mb-12">
          <h2 className="uppercase font-extrabold tracking-tight border-2 border-black bg-white text-black px-6 py-2 shadow-[6px_6px_0_#000]">
            Education
          </h2>
        </div>

        <div className="space-y-8">
          {education.map((edu, idx) => {
            return (
              <div
                key={idx}
                className="border-2 border-black bg-white text-black shadow-[8px_8px_0_rgba(0,0,0,0.18)]"
              >
                <div className="p-4 md:p-5">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-3 md:gap-4">
                    {/* Left group */}
                    <div className="flex items-start gap-4 flex-1 min-w-0">
                      <div className="w-12 h-12 rounded-full border-2 border-black overflow-hidden flex items-center justify-center bg-yellow-400 shrink-0">
                        <span className="font-extrabold uppercase text-sm">
                          {edu.badge}
                        </span>
                      </div>

                      <div className="min-w-0">
                        {edu.url ? (
                          <a
                            href={edu.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block text-lg sm:text-xl font-extrabold leading-tight underline decoration-2 decoration-yellow-300 underline-offset-2 hover:opacity-90 break-words"
                          >
                            {edu.school}
                          </a>
                        ) : (
                          <span className="block text-lg sm:text-xl font-extrabold leading-tight break-words">
                            {edu.school}
                          </span>
                        )}

                        <div className="font-mono font-semibold text-teal-700 mt-0.5">
                          {edu.degree}
                        </div>
                        <div className="text-xs mt-1 text-gray-700">
                          {edu.address}
                        </div>
                      </div>
                    </div>

                    {/* Right group */}
                    <div className="flex flex-col items-start md:items-end gap-1">
                      <div className="font-mono text-xs sm:text-sm font-bold">
                        {edu.period}
                      </div>
                      <div className="bg-black text-white px-2 py-0.5 text-xs font-mono font-bold shadow-[2px_2px_0_#FFD600]">
                        Result: {edu.percentage}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
