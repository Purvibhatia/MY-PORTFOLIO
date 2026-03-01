"use client";
import { useRef, useState } from "react";
import { X, Download, ExternalLink } from "lucide-react";
import {
  FaGithub,
  FaLinkedin,
  FaGlobe,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";

const RESUME_URL = "/Purvi_Bhatia_Resume.pdf";
const DOWNLOAD_NAME = "Purvi_Bhatia_Resume.pdf";
export default function Resume({ onClose }) {
  const resumeRef = useRef(null);
  const [downloading, setDownloading] = useState(false);

  const handlePrint = () => window.print();

  const handleDownload = async () => {
    if (downloading) return;
    setDownloading(true);

    const supportsDownloadAttr = (() => {
      const a = document.createElement("a");
      return "download" in a;
    })();

    try {
      const res = await fetch(RESUME_URL, { cache: "no-store" });
      if (!res.ok) throw new Error(`HTTP ${res.status}`);

      const blob = await res.blob();
      const url = window.URL.createObjectURL(blob);

      if (supportsDownloadAttr) {
        const a = document.createElement("a");
        a.href = url;
        a.download = DOWNLOAD_NAME;
        document.body.appendChild(a);
        a.click();
        a.remove();
      } else {
        // Mobile/Safari fallback: open in new tab so user can save
        window.open(RESUME_URL, "_blank", "noopener,noreferrer");
      }

      window.URL.revokeObjectURL(url);
    } catch (e) {
      console.error("Download failed, opening in a new tab.", e);
      window.open(RESUME_URL, "_blank", "noopener,noreferrer");
    } finally {
      setDownloading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center p-4 overflow-y-auto">
      <div className="relative w-full max-w-5xl bg-white border-2 border-black shadow-[8px_8px_0_rgba(0,0,0,0.3)]">
        {/* Header Controls */}
        <div className="sticky top-0 z-10 bg-yellow-300 border-b-2 border-black p-3 flex justify-between items-center print:hidden">
          <h2 className="font-extrabold text-lg">RESUME</h2>
          <div className="flex gap-2">
            <button
              onClick={handleDownload}
              disabled={downloading}
              className="flex items-center gap-2 px-3 py-1 bg-white border-2 border-black shadow-[3px_3px_0_#000] hover:shadow-[4px_4px_0_#000] hover:-translate-y-0.5 transition-all text-sm font-semibold disabled:opacity-60 disabled:hover:translate-y-0 disabled:hover:shadow-[3px_3px_0_#000]"
            >
              <Download className="w-4 h-4" />
              {downloading ? "Downloading…" : "Download PDF"}
            </button>
            <button
              onClick={handlePrint}
              className="flex items-center gap-2 px-3 py-1 bg-white border-2 border-black shadow-[3px_3px_0_#000] hover:shadow-[4px_4px_0_#000] hover:-translate-y-0.5 transition-all text-sm font-semibold"
            >
              Print
            </button>
            <button
              onClick={onClose}
              className="p-2 bg-white border-2 border-black shadow-[3px_3px_0_#000] hover:shadow-[4px_4px_0_#000] hover:-translate-y-0.5 transition-all"
              aria-label="Close resume"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* (Optional) print helpers */}
        <style>{`
          @media print { .print\\:hidden { display: none !important; } }
          .break-before { page-break-before: always; }
          .break-after  { page-break-after:  always; }
          .avoid-break  { page-break-inside: avoid; }
        `}</style>

        {/* Resume Content (UI only; download uses the static PDF) */}
        <div
          ref={resumeRef}
          className="resume-content max-h-[80vh] overflow-y-auto bg-white"
          style={{
            fontFamily: "Inter, sans-serif",
            fontSize: "11px",
            lineHeight: "1.4",
            color: "#333",
          }}
        >
          <div className="p-8">
            {/* Header */}
            <div className="text-center mb-6 border-b-2 border-blue-600 pb-4">
              <h1 className="text-4xl font-bold text-blue-800 mb-1 tracking-tight">
                Purvi Bhatia
              </h1>
              <div className="text-lg text-gray-600 font-medium mb-3">
                Assistant Manager – IT and Analysis
              </div>
              <div className="flex justify-center flex-wrap gap-5 text-sm">
                <span className="flex items-center gap-2">
                  <FaMapMarkerAlt className="text-blue-600" />
                  Meerut, India
                </span>
                <a
                  href="mailto:purvisophia7@gmail.com"
                  className="flex items-center gap-2 text-blue-600 hover:underline"
                >
                  <FaEnvelope />
                  purvisophia7@gmail.com
                </a>
                <a
                  href="https://www.linkedin.com/in/purvi-bhatia-b55324248"
                  className="flex items-center gap-2 text-blue-600 hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaLinkedin />
                  LinkedIn
                </a>
                <a
                  href="https://github.com/Purvibhatia"
                  className="flex items-center gap-2 text-blue-600 hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaGithub />
                  GitHub
                </a>
                <span className="flex items-center gap-2 text-gray-700">
                  <span className="font-bold text-blue-600">Tel:</span>
                  9528678487
                </span>
              </div>
            </div>

            {/* Professional Summary */}
            <div className="mb-5">
              <h2 className="text-lg font-bold text-blue-800 mb-3 pb-1 border-b border-gray-300 uppercase tracking-wide">
                Professional Summary
              </h2>
              <p className="text-justify leading-relaxed text-gray-600">
                Assistant Manager– IT and Analysis with 6 months of experience
                in telecom data analytics, KPI performance tracking, and
                structured reporting. Skilled in data cleaning, Excel-based
                dashboard creation, trend analysis, and regulatory research
                support. Strong analytical mindset with the ability to transform
                complex datasets into actionable business insights.
              </p>
            </div>

            {/* Work Experience */}
            <div className="mb-5">
              <h2 className="text-lg font-bold text-blue-800 mb-3 pb-1 border-b border-gray-300 uppercase tracking-wide">
                Work Experience
              </h2>

              {/* Novo Niti LLP */}
              <div className="mb-4 avoid-break">
                <div className="mb-2">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-sm font-semibold text-gray-800">
                        Assistant Manager – IT and Analysis
                      </h3>
                      <div className="text-sm text-gray-600 italic">
                        Novo Niti LLP
                      </div>
                    </div>
                    <span className="text-xs text-gray-600 font-medium">
                      Aug 2025 – Present
                    </span>
                  </div>
                </div>
                <ul className="list-none ml-0 space-y-1">
                  <li className="relative pl-4 text-xs leading-relaxed text-gray-700">
                    <span className="absolute left-0 text-blue-600 font-bold">
                      ▪
                    </span>
                    Managed telecom performance datasets including wireless and
                    wireline KPIs.
                  </li>
                  <li className="relative pl-4 text-xs leading-relaxed text-gray-700">
                    <span className="absolute left-0 text-blue-600 font-bold">
                      ▪
                    </span>
                    Cleaned, validated, and structured large datasets (10,000+
                    rows) for regulatory and internal reporting.
                  </li>
                  <li className="relative pl-4 text-xs leading-relaxed text-gray-700">
                    <span className="absolute left-0 text-blue-600 font-bold">
                      ▪
                    </span>
                    Designed Excel dashboards using Pivot Tables, XLOOKUP, and
                    data visualization tools.
                  </li>
                  <li className="relative pl-4 text-xs leading-relaxed text-gray-700">
                    <span className="absolute left-0 text-blue-600 font-bold">
                      ▪
                    </span>
                    Conducted trend and comparative analysis for telecom policy
                    evaluation.
                  </li>
                  <li className="relative pl-4 text-xs leading-relaxed text-gray-700">
                    <span className="absolute left-0 text-blue-600 font-bold">
                      ▪
                    </span>
                    Prepared analytical briefs and performance summaries for
                    senior management.
                  </li>
                  <li className="relative pl-4 text-xs leading-relaxed text-gray-700">
                    <span className="absolute left-0 text-blue-600 font-bold">
                      ▪
                    </span>
                    Coordinated IT-related data structuring and documentation
                    processes.
                  </li>
                  <li className="relative pl-4 text-xs leading-relaxed text-gray-700">
                    <span className="absolute left-0 text-blue-600 font-bold">
                      ▪
                    </span>
                    Supported quarterly data submissions and research-based
                    reports.
                  </li>
                </ul>
              </div>

              {/* Adore Technosoft */}
              <div className="mb-4 avoid-break">
                <div className="mb-2">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-sm font-semibold text-gray-800">
                        Intern
                      </h3>
                      <div className="text-sm text-gray-600 italic">
                        Adore Technosoft (OPC)
                      </div>
                    </div>
                  </div>
                </div>
                <ul className="list-none ml-0 space-y-1">
                  <li className="relative pl-4 text-xs leading-relaxed text-gray-700">
                    <span className="absolute left-0 text-blue-600 font-bold">
                      ▪
                    </span>
                    Collaborated with the development team to resolve bugs and
                    implement new functionalities.
                  </li>
                </ul>
              </div>
            </div>

            {/* Education */}
            <div className="mb-5 avoid-break">
              <h2 className="text-lg font-bold text-blue-800 mb-3 pb-1 border-b border-gray-300 uppercase tracking-wide">
                Education & Training
              </h2>
              <div className="space-y-3">
                <div>
                  <div className="text-sm font-semibold text-gray-800">
                    B.Tech (Information Technology)
                  </div>
                  <div className="text-xs text-gray-600 italic">
                    Ajay Kumar Garg Engineering College — 2021 to 2025 (Expected)
                  </div>
                  <div className="text-xs text-blue-600 font-bold mt-1">
                    70% Aggregate
                  </div>
                </div>
                <div>
                  <div className="text-sm font-semibold text-gray-800">
                    Class 12th
                  </div>
                  <div className="text-xs text-gray-600 italic">
                    Sophia Girls’ School, Meerut, India — 2020 to 2021
                  </div>
                  <div className="text-xs text-blue-600 font-bold mt-1">
                    90%
                  </div>
                </div>
                <div>
                  <div className="text-sm font-semibold text-gray-800">
                    Class 10th
                  </div>
                  <div className="text-xs text-gray-600 italic">
                    Sophia Girls’ School, Meerut, India — 2018 to 2019
                  </div>
                  <div className="text-xs text-blue-600 font-bold mt-1">
                    91%
                  </div>
                </div>
              </div>
            </div>

            {/* Technical Skills */}
            <div className="mb-5 avoid-break">
              <h2 className="text-lg font-bold text-blue-800 mb-3 pb-1 border-b border-gray-300 uppercase tracking-wide">
                Technical Skills
              </h2>
              <div className="grid grid-cols-2 gap-3">
                <div className="bg-blue-50 p-3 rounded border-l-4 border-blue-600">
                  <div className="text-xs font-semibold text-blue-800 mb-2">
                    Data Analysis
                  </div>
                  <div className="text-xs text-gray-600">
                    Advanced MS Excel (Pivot Tables, XLOOKUP, Data Cleaning,
                    Charts, Conditional Formatting), KPI Tracking, Trend
                    Analysis, Data Validation and Structuring
                  </div>
                </div>
                <div className="bg-blue-50 p-3 rounded border-l-4 border-blue-600">
                  <div className="text-xs font-semibold text-blue-800 mb-2">
                    Programming
                  </div>
                  <div className="text-xs text-gray-600">
                    Python (Pandas – basic data handling), SQL (Basic Queries)
                  </div>
                </div>
                <div className="bg-blue-50 p-3 rounded border-l-4 border-blue-600">
                  <div className="text-xs font-semibold text-blue-800 mb-2">
                    Database Management
                  </div>
                  <div className="text-xs text-gray-600">
                    MySQL, MongoDB
                  </div>
                </div>
                <div className="bg-blue-50 p-3 rounded border-l-4 border-blue-600">
                  <div className="text-xs font-semibold text-blue-800 mb-2">
                    Tools
                  </div>
                  <div className="text-xs text-gray-600">
                    GitHub, Canva, Excel, Jupyter Notebook
                  </div>
                </div>
                <div className="bg-blue-50 p-3 rounded border-l-4 border-blue-600">
                  <div className="text-xs font-semibold text-blue-800 mb-2">
                    Languages
                  </div>
                  <div className="text-xs text-gray-600">
                    Hindi (Fluent), English (Fluent)
                  </div>
                </div>
              </div>
            </div>

            {/* Key Projects */}
            <div className="mb-5 avoid-break">
              <h2 className="text-lg font-bold text-blue-800 mb-3 pb-1 border-b border-gray-300 uppercase tracking-wide">
                Key Projects
              </h2>
              <div className="space-y-4">
                <div className="bg-blue-50 p-3 rounded border-l-4 border-blue-600">
                  <h3 className="text-sm font-semibold text-gray-800 mb-1">
                    Telecom KPI Comparative Analysis
                  </h3>
                  <div className="text-xs text-gray-600 leading-relaxed">
                    Conducted comparative analysis of telecom performance
                    metrics across reporting periods. Identified performance
                    gaps and growth trends using structured Excel models.
                  </div>
                </div>

                <div className="bg-blue-50 p-3 rounded border-l-4 border-blue-600">
                  <h3 className="text-sm font-semibold text-gray-800 mb-1">
                    Data Mining on Social Media
                  </h3>
                  <div className="text-xs text-gray-600 leading-relaxed">
                    Data mining on social media involves extracting and
                    analyzing large volumes of data from social media platforms
                    to uncover patterns, trends, insights, and user behaviors.
                  </div>
                </div>
              </div>
            </div>

            {/* Soft Skills */}
            <div className="mb-5 avoid-break">
              <h2 className="text-lg font-bold text-blue-800 mb-3 pb-1 border-b border-gray-300 uppercase tracking-wide">
                Soft Skills
              </h2>
              <div className="grid grid-cols-2 gap-2">
                <div className="bg-blue-50 p-2 rounded">
                  <div className="text-xs font-semibold text-blue-800 mb-1">
                    Extracurricular Activities
                  </div>
                  <div className="text-xs text-gray-700">
                    Class Representative - Acted as a liaison between students
                    and faculty, ensuring clear communication of academic and
                    administrative updates.
                  </div>
                </div>
              </div>
            </div>

            {/* References */}
            <div className="mb-5 avoid-break">
              <h2 className="text-lg font-bold text-blue-800 mb-3 pb-1 border-b border-gray-300 uppercase tracking-wide">
                References
              </h2>
              <p className="text-xs text-gray-600">Available upon request.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
