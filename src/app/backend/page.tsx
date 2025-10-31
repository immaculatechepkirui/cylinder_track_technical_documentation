import Image from "next/image";
import DocsNavBar from "../shared-components/NavBar";
import React from "react";
import Footer from "../shared-components/footer";

const leftSteps = [
  {
    number: "01",
    title: "Prepared the Project for Hosting",
    desc: "Ensure dependencies for Firebase Functions or Node hosting are declared. Create any necessary Procfile for alternate hosts.",
    color: "bg-[#5B80AC]",
  },
  {
    number: "02",
    title: "Specified Node Runtime",
    desc: "Set the Node.js runtime (e.g., engines.node in package.json) to ensure compatibility with cloud functions.",
    color: "bg-[#36496E]",
  },
  {
    number: "03",
    title: "Configured for Production",
    desc: "Move sensitive settings like API keys into environment variables using your hosting provider (Firebase project settings, Netlify environment variables).",
    color: "bg-[#5B80AC]",
  },
  {
    number: "04",
    title: "Installed and Authenticated Firebase CLI",
    desc: "Install Firebase CLI and run firebase login to connect the local environment to your Firebase project.",
    color: "bg-[#36496E]",
  },
  {
    number: "05",
    title: "Created Project Resources",
    desc: "Set up your Firebase project, Firestore database, and hosting site using the Firebase console or CLI.",
    color: "bg-[#5B80AC]",
  },
];

const rightSteps = [
  {
    number: "06",
    title: "Provisioned Firestore Database",
    desc: "Enable Firestore and configure rules for read/write access appropriate to your demo and security needs.",
    color: "bg-[#5B80AC]",
  },
  {
    number: "07",
    title: "Set Environment Variables",
    desc: "Add critical environment variables in hosting or function settings (FIREBASE_API_KEY, PROJECT_ID, etc.).",
    color: "bg-[#36496E]",
  },
  {
    number: "08",
    title: "Deployed Backend Code",
    desc: "Deploy cloud functions and hosting using: firebase deploy --only hosting,functions",
    color: "bg-[#5B80AC]",
  },
  {
    number: "09",
    title: "Triggered Build and Launch",
    desc: "The deploy will publish the frontend and functions; verify endpoints and realtime updates.",
    color: "bg-[#36496E]",
  },
  {
    number: "10",
    title: "Tested API Endpoints",
    desc: "Use Postman or curl to test functions and ensure Firestore writes from simulator show up in realtime.",
    color: "bg-[#36496E]",
  },
];

export default function RoutingCardsPage() {
  return (
    <main className="min-h-screen bg-[#151E31] pt-32">
      <DocsNavBar variant="dark" />
      <div className="w-full max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <h1 className="inline-block text-4xl md:text-6xl font-bold text-[#151E31] mb-10 mt-10 bg-[#D3D7DF] px-4 py-2 rounded">
          Backend Documentation
        </h1>
        <h1 className="text-3xl md:text-4xl font-bold text-[#D3D7DF] mb-10 mt-5">
          Overview
        </h1>
        <p className="text-base md:text-lg text-[#D3D7DF] mb-12">
          The backend for CylinderTrack is designed to be realtime-first and lightweight for rapid implementation. The MVP uses Firebase Firestore for realtime data (orders, driver positions, inventory counters) and optional Firebase Functions for automation (assignments, notifications). This design reduces setup time and enables instantaneous updates to the frontend and admin dashboard.
        </p>

        <h1 className="text-3xl md:text-4xl font-bold text-[#D3D7DF] mb-10 mt-10">
          Tech Stack
        </h1>
        <div className="w-full flex justify-center mb-12">
          <Image
            src="/pics/back-tech-stack (1).png"
            alt="Tech Stack"
            width={1600}
            height={500}
            className="w-full max-w-7xl h-auto rounded-xl shadow-2xl"
            priority
          />
        </div>
      </div>

      <section className="w-full py-12 md:py-16 px-4 md:px-6 lg:px-8 bg-[#151E31]">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12">
            <div className="flex-1 w-full">
              <p className="text-sm md:text-base text-[#D3D7DF] mb-2">
                Layout and modular design of the backend services
              </p>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[#D3D7DF] font-montserrat">
                Coding Structure
              </h2>
              <div className="flex flex-col md:flex-row items-start gap-4">
                <div className="hidden md:flex flex-col items-center pt-1 md:pt-2">
                  <div className="w-3 h-3 md:w-4 md:h-4 bg-[#D3D7DF] rounded-full mb-1" />
                  <div className="w-1 h-24 md:h-36 bg-[#D3D7DF] rounded" />
                </div>
                <div>
                  <p className="text-[#D3D7DF] text-sm md:text-base mb-4 max-w-prose">
                    The backend is intentionally minimal: Firestore collections for orders, drivers, and returns. Optional cloud functions handle scheduled tasks, notifications (mocked in the MVP), and any server-side validation or counters.
                  </p>
                  <p className="text-[#D3D7DF] text-sm md:text-base max-w-prose">
                    This lightweight setup supports fast iteration and easy deployment for hackathon or prototype demos.
                  </p>
                </div>
              </div>
            </div>

            <div className="flex-1 w-full flex justify-center">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                <pre className="bg-[#D3D7DF] text-[#151E31] text-xs sm:text-sm rounded-xl px-3 sm:px-4 md:px-6 py-3 md:py-4 leading-relaxed font-mono overflow-x-auto w-full shadow-xl">
{`functions/
├── index.js (cloud functions)
simulator/
├── simulator.js
frontend/
└── (React/Next.js app)`}
                </pre>
                <pre className="bg-[#D3D7DF] text-[#151E31] text-xs sm:text-sm rounded-xl px-3 sm:px-4 md:px-6 py-3 md:py-4 leading-relaxed font-mono overflow-x-auto w-full shadow-xl">
{`Firestore Collections:
- orders
- drivers
- returns
- metrics`}
                </pre>
                <pre className="bg-[#D3D7DF] text-[#151E31] text-xs sm:text-sm rounded-xl px-3 sm:px-4 md:px-6 py-3 md:py-4 leading-relaxed font-mono overflow-x-auto w-full shadow-xl">
{`Deployment:
- Firebase Hosting (frontend)
- Firestore (realtime DB)
- Firebase Functions (optional)`}
                </pre>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="w-full max-w-7xl mx-auto px-4 md:px-6 lg:px-8 mt-16 md:mt-20">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[#D3D7DF]">
          Entity Relationship Overview
        </h2>
        <p className="text-base md:text-lg text-[#D3D7DF] mb-12 ">
          CylinderTrack stores order documents with status fields, driver documents with current GPS coordinates, and return records to account for cylinder inventory. This simple relational model supports clear traceability for each delivery and return event.
        </p>
        <div className="w-full flex justify-center mb-12">
          <Image
            src="/pics/erdd.png"
            alt="CylinderTrack Entity Relationship Diagram"
            width={1400}
            height={700}
            className="w-full max-w-6xl h-auto"
          />
        </div>
      </div>

      <div className="w-full py-12 md:py-16 bg-[#D3D7DF] flex flex-col items-center px-4 md:px-6 lg:px-8">
        <div className="max-w-7xl w-full flex flex-col md:flex-row gap-8 md:gap-12 items-center justify-center">
          <div className="bg-[#151E31] rounded-2xl shadow-lg p-6 md:p-8 w-full max-w-md">
            <h2 className="text-xl md:text-2xl font-bold text-[#D3D7DF] mb-4">
              Steps to set up CylinderTrack backend locally
            </h2>
            <ol className="space-y-3">
              <li className="flex items-start gap-3">
                <span className="bg-[#D3D7DF] text-[#151E31] font-bold w-6 h-6 flex items-center justify-center rounded-full text-sm flex-shrink-0 mt-0.5">
                  1
                </span>
                <span className="text-[#D3D7DF] text-sm md:text-base">
                  Create a Firebase project and enable Firestore
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="bg-[#D3D7DF] text-[#151E31] font-bold w-6 h-6 flex items-center justify-center rounded-full text-sm flex-shrink-0 mt-0.5">
                  2
                </span>
                <span className="text-[#D3D7DF] text-sm md:text-base">
                  Install Firebase CLI and login
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="bg-[#D3D7DF] text-[#151E31] font-bold w-6 h-6 flex items-center justify-center rounded-full text-sm flex-shrink-0 mt-0.5">
                  3
                </span>
                <span className="text-[#D3D7DF] text-sm md:text-base">
                  Run simulator to write GPS points
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="bg-[#D3D7DF] text-[#151E31] font-bold w-6 h-6 flex items-center justify-center rounded-full text-sm flex-shrink-0 mt-0.5">
                  4
                </span>
                <span className="text-[#D3D7DF] text-sm md:text-base">
                  Deploy hosting and functions with firebase deploy
                </span>
              </li>
            </ol>
          </div>

          <div className="w-full max-w-lg">
            <h2 className="text-3xl md:text-4xl font-bold text-[#151E31] mb-4 mt-8 md:mt-0">
              Setup Instructions
            </h2>
            <div className="relative">
              <div className="bg-[#E6E9EF] rounded-b-xl rounded-tr-xl px-4 py-4 md:px-6 md:py-6 shadow-lg font-mono text-sm md:text-base text-[#151E31] leading-relaxed">
                <div>
                  <span className="font-bold">CT: $</span> firebase login
                </div>
                <div>
                  <span className="font-bold">CT: /project$</span> firebase init
                </div>
                <div>
                  <span className="font-bold">CT: /simulator$</span> node simulator.js --project <em>your-firebase-project</em>
                </div>
                <div>
                  <span className="font-bold">CT: /frontend$</span> npm run build && firebase deploy --only hosting,functions
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