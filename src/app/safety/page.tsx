"use client";
import Image from "next/image";
import DocsNavBar from "../shared-components/NavBar";
import React from "react";
import Footer from "../shared-components/footer";
import clsx from "clsx";
import { useState } from "react";

import {
  FaStore,
  FaFileAlt,
  FaDollarSign,
  FaCogs,
  FaBullhorn,
  FaRocket,
  FaDatabase,
  FaProjectDiagram,
  FaCloudDownloadAlt,
  FaCheckCircle,
  FaRegFilePdf,
  FaPython,
  FaChartLine,
  FaRobot,
  FaCode,
} from "react-icons/fa";
import {
  SiPandas,
  SiNumpy,
  SiLangchain,
  SiGooglecloud,
  SiPostgresql,
  SiScikitlearn,
  SiSqlalchemy,
} from "react-icons/si";


const pipelineSteps = [
  {
    icon: <FaCloudDownloadAlt />,
    title: "Data Collection",
    step: 1,
    description: (
      <>
        Aggregates and centralizes operational datasets (JSON, CSV, logs) into a unified repository.<br />
        Automated ingestion from cloud and realtime streams, with systematic file naming and organization for reproducibility and downstream processing.
      </>
    ),
    details: (
      <div className="text-xs md:text-sm mt-2 mb-2 text-left">
        <span className="font-bold text-[#05192F]">Data Sources:</span>
        <ul className="list-disc ml-25 text-[#05192F] my-4">
          <li>Customer orders (Firestore)</li>
          <li>Simulated driver GPS streams</li>
          <li>Inventory counters and returns logs</li>
          <li>Operational events (assignments, status changes)</li>
        </ul>
      </div>
    ),
    frameworks: [
      { name: "Firestore / Realtime DB", icon: <FaDatabase /> },
      { name: "CSV/JSON", icon: <FaRegFilePdf /> },
      { name: "Node script (simulator)", icon: <FaCode /> },
      { name: "Leaflet/OpenStreetMap", icon: <FaProjectDiagram /> },
    ],
  },
  {
    icon: <FaCheckCircle />,
    title: "Data Cleaning & Preprocessing",
    step: 2,
    description: (
      <>
        Converts raw operational events into normalized, analysis-ready structures.<br />
        Includes validation, deduplication, and enrichment with metadata (timestamps, order IDs, driver IDs).
      </>
    ),
    frameworks: [
      { name: "Client-side validation", icon: <FaCode /> },
      { name: "Server/Cloud functions", icon: <FaCloudDownloadAlt /> },
    ],
  },
  {
    icon: <FaRegFilePdf />,
    title: "Text Extraction & Chunking",
    step: 3,
    description: (
      <>
        Extracts and normalizes freeform inputs (notes, delivery instructions) to attach to orders and events for auditability.
      </>
    ),
    frameworks: [{ name: "Firestore", icon: <FaDatabase /> }],
  },
  {
    icon: <FaProjectDiagram />,
    title: "Embedding Generation",
    step: 4,
    description: (
      <>
        (Not applicable) — CylinderTrack is operational and realtime; no machine-learning embeddings are used in the MVP.
      </>
    ),
    frameworks: [{ name: "N/A (MVP)", icon: <FaRegFilePdf /> }],
  },
  {
    icon: <FaDatabase />,
    title: "Vector Database Storage",
    step: 5,
    description: (
      <>
        Operational data is stored in Firestore (or a hosted database) with simple counters and indexing for fast queries.
      </>
    ),
    frameworks: [
      { name: "Firestore", icon: <FaDatabase /> },
      { name: "Realtime Updates", icon: <FaCloudDownloadAlt /> },
    ],
  },
  {
    icon: <FaCogs />,
    title: "Orchestration & Monitoring",
    step: 6,
    description: (
      <>
        Orchestrates simulated driver flows, order lifecycle transitions and exposes realtime endpoints for the frontend dashboard.
      </>
    ),
    frameworks: [
      { name: "Firebase Functions", icon: <FaCloudDownloadAlt /> },
      { name: "Node.js simulator", icon: <FaCode /> },
    ],
  },
];

const steping = [
  {
    icon: <FaStore size={28} className="text-white" />,
    title: "MVP Planning",
    subtitle: "STEP 1",
    description:
      "Define minimal customer flows: order form, confirmation, status updates, and driver simulation.",
  },
  {
    icon: <FaFileAlt size={28} className="text-white" />,
    title: "Rapid Frontend",
    subtitle: "STEP 2",
    description:
      "Build a mobile-first PWA using React or Next.js to capture orders and show live map tracking.",
  },
  {
    icon: <FaDollarSign size={28} className="text-white" />,
    title: "Realtime Backend",
    subtitle: "STEP 3",
    description:
      "Implement Firestore / Realtime DB to hold orders and driver positions, enabling instantaneous updates.",
  },
  {
    icon: <FaCogs size={28} className="text-white" />,
    title: "Driver Simulation",
    subtitle: "STEP 4",
    description:
      "Create a script that writes simulated GPS points to Firestore so maps and status changes can be demonstrated.",
  },
  {
    icon: <FaBullhorn size={28} className="text-white" />,
    title: "Deploy & Demo",
    subtitle: "STEP 5",
    description:
      "Host frontend on Firebase Hosting or Netlify and present the MVP with a demo video showing an end-to-end order and delivery.",
  },
  {
    icon: <FaRocket size={28} className="text-white" />,
    title: "Iterate",
    subtitle: "STEP 6",
    description:
      "Collect feedback and add features such as notifications, real SMS integration, and improved driver assignment logic.",
  },
];

const steps = [
  {
    title: "Create Dockerfile (optional for simulator)",
    code: `FROM node:20-alpine
WORKDIR /app
COPY package*.json ./
RUN npm ci --production
COPY . .
CMD ["node", "simulator.js"]`,
    desc: "Containerize the driver simulator for reliable demo runs.",
  },
  {
    title: "Create .dockerignore",
    code: `node_modules/
.env
dist/
*.log`,
    desc: "Exclude unnecessary files to keep images small.",
  },
  {
    title: "Set Environment Variables",
    code: `env:
 FIREBASE_PROJECT_ID: \${{ secrets.FIREBASE_PROJECT_ID }}
 FIREBASE_API_KEY: \${{ secrets.FIREBASE_API_KEY }}
 SIMULATOR_SPEED: 1`,
    desc: "Use CI/CD secrets or .env for sensitive keys and config.",
  },
  {
    title: "Build Frontend",
    code: `# using Vite or CRA
npm run build`,
    desc: "Generate optimized static assets for hosting.",
  },
  {
    title: "Run Simulator Locally",
    code: `node simulator.js --project my-firebase-project`,
    desc: "Start writing simulated GPS points to Firestore to test map updates.",
  },
  {
    title: "Deploy to Firebase Hosting",
    code: `firebase deploy --only hosting,functions`,
    desc: "Host the web app and optional cloud functions for production demos.",
  },
];

export default function RoutingCardsPage() {
  const [openIdx, setOpenIdx] = useState<number | null>(null);
  return (
    <main className="min-h-screen bg-[#D3D7DF] pt-32">
      <DocsNavBar />
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="inline-block text-4xl sm:text-5xl lg:text-6xl font-bold text-[#D3D7DF] mb-10 mt-10 bg-[#232C3B] px-4 py-2 rounded">
          Safety and Measures of Gas Documentation
        </h1>
        <h1 className="text-3xl sm:text-4xl font-bold text-[#232C3B] mb-10 mt-5">
          Overview
        </h1>
        <p className="text-base sm:text-lg text-[#05192F] mb-4">
          CylinderTrack is the real-time LPG delivery and return tracker that focuses on operational transparency and safety. The system provides customers with a fast mobile-first ordering experience and operations staff with realtime visibility into deliveries, driver locations (simulated in the MVP), and cylinder returns.
        </p>
        <p className="text-base sm:text-lg text-[#05192F] mb-12">
          This documentation covers the pipeline for operational data, deployment steps for the frontend and simulator, and safety-focused measures and checks that ensure cylinders are tracked and returned reliably.
        </p>

        <section className="w-full py-20 flex flex-col items-center font-sans">
          <div className="w-full max-w-6xl mx-auto px-4 sm:px-8">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#232C3B] mb-16 tracking-tight text-center">
              Data & Operational Pipeline
            </h2>
            <div className="relative">
              <div className="hidden md:block absolute top-0 left-1/2 -translate-x-1/2 h-full w-2 bg-[#232C3B]/10 z-0 rounded-full" />
              <div className="flex flex-col gap-0">
                {pipelineSteps.map((step, idx) => {
                  const isLeft = idx % 2 === 0;
                  const delay = (idx + 1) * 150;
                  return (
                    <div
                      key={idx}
                      className={`relative flex min-h-[260px] md:mb-0 md:items-center ${isLeft ? "md:justify-end" : "md:justify-start"} opacity-0 animate-fade-in-slide`}
                      style={{
                        animationDelay: `${delay}ms`,
                        animationFillMode: 'forwards',
                      }}
                    >
                      <div className="md:hidden flex w-full justify-center relative pb-10">
                        <div className="flex flex-col items-center w-full">
                          <div className="bg-[#05192F] text-white border-4 border-white shadow-xl rounded-full w-12 h-12 flex items-center justify-center mb-2 text-2xl">
                            {step.icon}
                          </div>
                          <div className="bg-white rounded-2xl shadow-xl border border-[#232C3B]/10 px-6 py-6 w-full text-left transition-all min-h-[180px]">
                            <div className="uppercase text-xs tracking-[.14em] text-[#05192F] font-bold mb-1">
                              STEP {step.step}
                            </div>
                            <div className="text-[#232C3B] font-extrabold text-2xl leading-tight mb-2">
                              {step.title}
                            </div>
                            <div className="text-[#232C3B] opacity-90 text-base leading-snug font-medium mb-2">
                              {step.description}
                            </div>
                            {step.details}
                            <div className="flex flex-wrap gap-2 mt-2">
                              {step.frameworks.map((fw, i) => (
                                <span
                                  key={i}
                                  className="inline-flex items-center gap-1 bg-[#F5F4FF] border border-[#05192F] text-[#05192F] px-3 py-1 rounded-full text-xs font-semibold shadow-sm transition-all hover:bg-[#ede9fe]"
                                >
                                  {fw.icon}
                                  {fw.name}
                                </span>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="hidden md:flex w-full items-center">
                        {isLeft && (
                          <>
                            <div className="w-1/2 flex justify-end relative">
                              <div className="absolute right-0 top-1/2 w-[60px] h-0 border-t-2 border-dotted border-[#05192F] z-10" />
                              <div className="absolute right-[-37px] top-1/2 -translate-y-1/2 z-20 bg-[#05192F] text-white border-4 border-white shadow-xl rounded-full w-14 h-14 flex items-center justify-center text-2xl">
                                {step.icon}
                              </div>
                              <div className="max-w-[500px] w-full bg-white rounded-2xl shadow-xl border border-[#232C3B]/10 px-8 py-8 text-right ml-auto mr-[48px]">
                                <div className="uppercase text-xs tracking-[.14em] text-[#05192F] font-bold mb-1">
                                  STEP {step.step}
                                </div>
                                <div className="text-[#232C3B] font-extrabold text-2xl leading-tight mb-2">
                                  {step.title}
                                </div>
                                <div className="text-[#232C3B] opacity-90 text-base leading-snug font-medium mb-2">
                                  {step.description}
                                </div>
                                {step.details}
                                <div className="flex flex-wrap gap-2 mt-2 justify-end">
                                  {step.frameworks.map((fw, i) => (
                                    <span
                                      key={i}
                                      className="inline-flex items-center gap-1 bg-[#F5F4FF] border border-[#05192F] text-[#05192F] px-3 py-1 rounded-full text-xs font-semibold shadow-sm transition-all hover:bg-[#ede9fe]"
                                    >
                                      {fw.icon}
                                      {fw.name}
                                    </span>
                                  ))}
                                </div>
                              </div>
                            </div>
                            <div className="w-1/2" />
                          </>
                        )}
                        {!isLeft && (
                          <>
                            <div className="w-1/2" />
                            <div className="w-1/2 flex justify-start relative">
                              <div className="absolute left-0 top-1/2 w-[60px] h-0 border-t-2 border-dotted border-[#05192F] z-10" />
                              <div className="absolute left-[-37px] top-1/2 -translate-y-1/2 z-20 bg-[#05192F] text-white border-4 border-white shadow-xl rounded-full w-14 h-14 flex items-center justify-center text-2xl">
                                {step.icon}
                              </div>
                              <div className="max-w-[500px] w-full bg-white rounded-2xl shadow-xl border border-[#232C3B]/10 px-8 py-8 text-left mr-auto ml-[48px]">
                                <div className="uppercase text-xs tracking-[.14em] text-[#05192F] font-bold mb-1">
                                  STEP {step.step}
                                </div>
                                <div className="text-[#232C3B] font-extrabold text-2xl leading-tight mb-2">
                                  {step.title}
                                </div>
                                <div className="text-[#232C3B] opacity-90 text-base leading-snug font-medium mb-2">
                                  {step.description}
                                </div>
                                {step.details}
                                <div className="flex flex-wrap gap-2 mt-2 justify-start">
                                  {step.frameworks.map((fw, i) => (
                                    <span
                                      key={i}
                                      className="inline-flex items-center gap-1 bg-[#F5F4FF] border border-[#05192F] text-[#05192F] px-3 py-1 rounded-full text-xs font-semibold shadow-sm transition-all hover:bg-[#ede9fe]"
                                    >
                                      {fw.icon}
                                      {fw.name}
                                    </span>
                                  ))}
                                </div>
                              </div>
                            </div>
                          </>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        <div className="mt-10 px-4">
          <div className="max-w-7xl mx-auto rounded-lg p-6 sm:p-8">
            <h1 className="text-3xl sm:text-4xl font-extrabold text-[#232C3B] mb-8 text-center">
              Operational Models used in CylinderTrack
            </h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
              <div className="relative bg-gradient-to-br from-[#232C3B] to-[#05192F] rounded-2xl shadow-xl p-6 text-white flex flex-col h-[400px]">
                <div className="absolute top-4 right-4 bg-[#D3D7DF] text-[#232C3B] rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">
                  1
                </div>
                <FaChartLine className="text-3xl mb-4 flex-shrink-0" />
                <h2 className="text-xl sm:text-2xl font-semibold mb-4">Realtime Order Lifecycle</h2>
                <div
                  className="space-y-4 text-sm sm:text-base overflow-y-auto pr-2 hide-scrollbar flex-grow"
                  style={{ WebkitOverflowScrolling: 'touch' }}
                >
                  <ul className="space-y-4">
                    <li className="flex flex-col">
                      <span className="font-medium">Status Flow</span>
                      <p className="opacity-80">
                        Orders progress through: Pending → Assigned → En Route → Delivered → Return scheduled. Each transition is timestamped and stored for auditability.
                      </p>
                      <span className="inline-flex items-center gap-1 bg-[#D3D7DF] text-[#232C3B] px-2 py-1 rounded-full text-xs font-semibold mt-2">
                        Realtime
                      </span>
                    </li>
                    <li className="flex flex-col">
                      <span className="font-medium">Driver Tracking</span>
                      <p className="opacity-80">
                        Simulated GPS points update driver's location so customers and admins can follow progress on a live map.
                      </p>
                      <span className="inline-flex items-center gap-1 bg-[#D3D7DF] text-[#232C3B] px-2 py-1 rounded-full text-xs font-semibold mt-2">
                        Map
                      </span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="relative bg-gradient-to-br from-[#232C3B] to-[#05192F] rounded-2xl shadow-xl p-6 text-white flex flex-col h-[400px]">
                <div className="absolute top-4 right-4 bg-[#D3D7DF] text-[#232C3B] rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">
                  2
                </div>
                <FaProjectDiagram className="text-3xl mb-4 flex-shrink-0" />
                <h2 className="text-xl sm:text-2xl font-semibold mb-4">Admin Operations</h2>
                <div
                  className="space-y-4 text-sm sm:text-base overflow-y-auto pr-2 hide-scrollbar flex-grow"
                  style={{ WebkitOverflowScrolling: 'touch' }}
                >
                  <ul className="space-y-4">
                    <li className="flex flex-col">
                      <span className="font-medium">Driver Assignment</span>
                      <p className="opacity-80">
                        Admins can assign drivers (simulated) to orders and mark cylinder returns to keep inventory accurate.
                      </p>
                      <span className="inline-flex items-center gap-1 bg-[#D3D7DF] text-[#232C3B] px-2 py-1 rounded-full text-xs font-semibold mt-2">
                        Operations
                      </span>
                    </li>
                  </ul>
                  <p className="mt-4 opacity-80">
                    Applications: Improve delivery success rates, track returns, and maintain inventory counters.
                  </p>
                </div>
              </div>
              <div className="relative bg-gradient-to-br from-[#232C3B] to-[#05192F] rounded-2xl shadow-xl p-6 text-white flex flex-col h-[400px]">
                <div className="absolute top-4 right-4 bg-[#D3D7DF] text-[#232C3B] rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">
                  3
                </div>
                <FaCogs className="text-3xl mb-4 flex-shrink-0" />
                <h2 className="text-xl sm:text-2xl font-semibold mb-4">Metrics & Monitoring</h2>
                <div
                  className="space-y-4 text-sm sm:text-base overflow-y-auto pr-2 hide-scrollbar flex-grow"
                  style={{ WebkitOverflowScrolling: 'touch' }}
                >
                  <ul className="space-y-4">
                    <li className="flex flex-col">
                      <span className="font-medium">KPI Panel</span>
                      <p className="opacity-80">
                        Track deliveries today, returns, average delivery time, and current inventory counts to help operations optimize resources.
                      </p>
                      <span className="inline-flex items-center gap-1 bg-[#D3D7DF] text-[#232C3B] px-2 py-1 rounded-full text-xs font-semibold mt-2">
                        Analytics
                      </span>
                    </li>
                  </ul>
                  <p className="mt-4 opacity-80">
                    Applications: Operations dashboards and lightweight analytics for the demo.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>


        <h1 className="text-3xl sm:text-4xl font-bold text-[#232C3B] mb-10 mt-10">
          Tech Stack
        </h1>
        <div className="w-full flex justify-center mb-12">
          <Image
            src="/pics/AI-tech-stack.png"
            alt="Tech Stack"
            width={1600}
            height={500}
            className="w-full max-w-7xl h-auto rounded-xl shadow-2xl"
            priority
          />
        </div>
      </div>
      <section className="w-full py-12 sm:py-16 px-4 sm:px-6 lg:px-8 bg-[#D3D7DF]">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12">
            <div className="flex-1 w-full">
              <p className="text-sm md:text-base text-[#232C3B] mb-2">
                Layout and Modular design of the system codebase and simulator
              </p>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[#232C3B] font-montserrat">
                Coding Structure
              </h2>
              <div className="flex flex-col md:flex-row items-start gap-4">
                <div className="hidden md:flex flex-col items-center pt-1 md:pt-2">
                  <div className="w-3 h-3 md:w-4 md:h-4 bg-[#232C3B] rounded-full mb-1" />
                  <div className="w-1 h-24 md:h-36 bg-[#232C3B] rounded" />
                </div>
                <div>
                  <p className="text-[#232C3B] text-sm md:text-base mb-4 max-w-prose">
                    The CylinderTrack repository uses a straightforward structure to separate frontend, simulator, and cloud functions. Core modules include the React app (orders, map, status UI), a simulator script that writes GPS points to Firestore, and optional cloud functions for status automation and notifications.
                  </p>
                  <p className="text-[#232C3B] text-sm md:text-base max-w-prose">
                    Deployment is targeted for Firebase Hosting (frontend) and Firestore for realtime updates, making the MVP quick to implement and demo.
                  </p>
                </div>
              </div>
            </div>
            <div className="flex-1 w-full flex justify-center">
              <div className="flex flex-col sm:flex-row gap-4 md:gap-6">
                <pre className="bg-[#232C3B] text-[#D3D7DF] text-xs sm:text-sm md:text-base rounded-xl px-3 sm:px-4 md:px-6 py-3 md:py-4 leading-relaxed font-mono overflow-x-auto w-full sm:max-w-[280px] md:max-w-[360px] shadow-xl">
{`cylindertrack/
├── frontend/
│   ├── src/
│   ├── public/
│   └── package.json
├── simulator/
│   ├── simulator.js
│   └── package.json
├── functions/
│   └── index.js
└── README.md`}
                </pre>
                <pre className="bg-[#232C3B] text-[#D3D7DF] text-[11px] sm:text-xs md:text-sm rounded-xl px-3 sm:px-4 md:px-6 py-3 md:py-4 leading-relaxed font-mono whitespace-pre-wrap break-words w-full sm:max-w-[260px] md:max-w-[320px] shadow-xl">
{`frontend/
├── src/
│   ├── pages/ or app/
│   ├── components/
│   │   ├── OrderForm/
│   │   ├── MapView/
│   │   └── AdminDashboard/
│   └── utils/
simulator/
└── simulator.js (writes GPS points to Firestore)
functions/
└── index.js (optional cloud functions for automation)`}
                </pre>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="w-full py-12 sm:py-16 bg-[#232C3B] flex flex-col items-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl w-full flex flex-col md:flex-row gap-8 md:gap-12 items-center justify-center">
          <div className="bg-[#D3D7DF] rounded-2xl shadow-lg p-6 md:p-8 w-full max-w-md">
            <h2 className="text-xl md:text-2xl font-bold text-[#232C3B] mb-2">
              CylinderTrack local setup
            </h2>
            <p className="text-[#232C3B] text-sm mb-4">
              Steps to run CylinderTrack locally for the frontend and simulator.
            </p>
            <ol className="space-y-3">
              <li className="flex items-start gap-3">
                <span className="bg-[#232C3B] text-white font-bold w-6 h-6 flex items-center justify-center rounded-full text-sm flex-shrink-0 mt-0.5">
                  1
                </span>
                <span className="text-[#232C3B] text-sm md:text-base">
                  Navigate to frontend directory
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="bg-[#232C3B] text-white font-bold w-6 h-6 flex items-center justify-center rounded-full text-sm flex-shrink-0 mt-0.5">
                  2
                </span>
                <span className="text-[#232C3B] text-sm md:text-base">
                  Install dependencies (npm install)
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="bg-[#232C3B] text-white font-bold w-6 h-6 flex items-center justify-center rounded-full text-sm flex-shrink-0 mt-0.5">
                  3
                </span>
                <span className="text-[#232C3B] text-sm md:text-base">
                  Start simulator (node simulator/simulator.js)
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="bg-[#232C3B] text-white font-bold w-6 h-6 flex items-center justify-center rounded-full text-sm flex-shrink-0 mt-0.5">
                  4
                </span>
                <span className="text-[#232C3B] text-sm md:text-base">
                  Run frontend (npm run dev)
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="bg-[#232C3B] text-white font-bold w-6 h-6 flex items-center justify-center rounded-full text-sm flex-shrink-0 mt-0.5">
                  5
                </span>
                <span className="text-[#232C3B] text-sm md:text-base">Open the app in browser</span>
              </li>
            </ol>
          </div>
          <div className="w-full max-w-lg">
            <h2 className="text-3xl md:text-4xl font-bold text-[#D3D7DF] mb-4 mt-8 md:mt-0">
              Setup Instructions
            </h2>
            <div className="relative">
              <div className="bg-[#D3D7DF] rounded-t-lg px-4 py-2">
                <span className="text-lg md:text-2xl text-[#232C3B] font-semibold">
                  CylinderTrack:
                </span>
              </div>
              <div className="bg-[#E6E9EF] rounded-b-xl rounded-tr-xl px-4 py-4 md:px-6 md:py-6 shadow-lg font-mono text-sm md:text-base text-[#232C3B] leading-relaxed">
                <div>
                  <span className="font-bold">CT: $</span> cd frontend
                </div>
                <div>
                  <span className="font-bold">CT: /frontend$</span> npm install
                </div>
                <div>
                  <span className="font-bold">CT: /frontend$</span> npm run dev
                </div>
                <div>
                  <span className="font-bold">CT: /simulator$</span> node simulator.js --project <em>your-firebase-project</em>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}