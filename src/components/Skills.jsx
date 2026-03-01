// src/components/Skills.jsx
import {
  FaPython,
  FaGithub,
  FaDatabase,
  FaChartLine,
  FaChartBar,
  FaFileExcel,
  FaSearch,
  FaLanguage,
  FaTools,
  FaTable,
  FaBookOpen,
  FaMagic,
} from "react-icons/fa";
import { SiMongodb } from "react-icons/si";

const skills = [
  {
    icon: <FaFileExcel className="text-green-700" />,
    name: "Advanced Excel",
    desc: "Pivot Tables, XLOOKUP, Dashboards",
  },
  {
    icon: <FaChartLine className="text-blue-600" />,
    name: "Data Analysis",
    desc: "KPI Tracking & Trend Analysis",
  },
  {
    icon: <FaTools className="text-gray-600" />,
    name: "Data Cleaning",
    desc: "Validation & Structuring large datasets",
  },
  {
    icon: <FaPython className="text-blue-500" />,
    name: "Python",
    desc: "Pandas for basic data handling",
  },
  {
    icon: <FaDatabase className="text-indigo-600" />,
    name: "SQL",
    desc: "Basic Queries & Data Extraction",
  },
  {
    icon: <FaDatabase className="text-blue-800" />,
    name: "MySQL",
    desc: "Relational Database Management",
  },
  {
    icon: <SiMongodb className="text-green-600" />,
    name: "MongoDB",
    desc: "NoSQL Database Management",
  },
  {
    icon: <FaBookOpen className="text-orange-600" />,
    name: "Jupyter Notebook",
    desc: "Interactive Data Exploration",
  },
  {
    icon: <FaChartBar className="text-blue-500" />,
    name: "Reporting",
    desc: "Structured Reports & Briefs",
  },
  {
    icon: <FaGithub className="text-black" />,
    name: "GitHub",
    desc: "Version control & collaboration",
  },
  {
    icon: <FaMagic className="text-sky-500" />,
    name: "Canva",
    desc: "Visual aids & documentation",
  },
  {
    icon: <FaSearch className="text-red-600" />,
    name: "Research",
    desc: "Regulatory research support",
  },
  {
    icon: <FaLanguage className="text-green-500" />,
    name: "Languages",
    desc: "Fluent in Hindi & English",
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-12">
      <div className="mx-auto w-[min(1100px,94vw)] text-center">
        <div className="inline-block border-2 border-black bg-white px-5 py-2 shadow-[6px_6px_0_#000] rounded-none mb-8">
          <h2 className="font-extrabold text-xl tracking-wide">SKILLS</h2>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {skills.map((skill, idx) => (
            <div
              key={idx}
              className="group border-2 border-black bg-white p-4 rounded-none
                         shadow-[6px_6px_0_#000] transition-transform
                         hover:translate-x-0.5 hover:-translate-y-0.5"
            >
              <div className="text-3xl mb-2 flex justify-center">
                {skill.icon}
              </div>
              <h3 className="font-mono font-bold text-sm">{skill.name}</h3>
              <p className="mt-1 text-xs text-gray-600 group-hover:text-gray-900 transition-colors">
                {skill.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
