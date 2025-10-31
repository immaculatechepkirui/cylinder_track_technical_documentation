import Image from "next/image";
import NavBar from "../shared-components/NavBar";
import React from "react";
import Footer from "../shared-components/footer";

const leftSteps = [
  {
    number: "01",
    title: "Prepared our Project Locally",
    desc: "Verified package.json contains build and start scripts for the frontend (CRA/Vite/Next).",
    color: "bg-[#5B80AC]",
  },
  {
    number: "02",
    title: "Connected Repository to Hosting",
    desc: "Connect your repo to Firebase Hosting or Netlify for quick deployment.",
    color: "bg-[#36496E]",
  },
  {
    number: "03",
    title: "Configure Build Settings",
    desc: "Set the Build Command (npm run build) and Output Directory (build or .next) and ensure Node version compatibility.",
    color: "bg-[#5B80AC]",
  },
  {
    number: "04",
    title: "Added Environment Variables",
    desc: "Add required variables (FIREBASE_API_KEY, PROJECT_ID) in hosting settings to enable realtime connections.",
    color: "bg-[#36496E]",
  },
  {
    number: "05",
    title: "Deployed Application",
    desc: "Deploy automatically on push or via CLI: firebase deploy --only hosting",
    color: "bg-[#5B80AC]",
  },
];

const rightSteps = [
  {
    number: "06",
    title: "Monitor Build Logs",
    desc: "Watch hosting dashboard for build errors and runtime issues.",
    color: "bg-[#5B80AC]",
  },
  {
    number: "07",
    title: "Final Testing and Validation",
    desc: "Visit the live URL, verify map updates, and simulate orders to validate end-to-end flow.",
    color: "bg-[#36496E]",
  },
];

export default function Frontend() {
  return (
    <div className="min-h-screen bg-[#D3D7DF] pt-32">
      <NavBar />
      <div className="w-full max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <h1 className="inline-block text-4xl md:text-6xl font-bold text-[#D3D7DF] mb-10 mt-10 bg-[#232C3B] px-4 py-2 rounded">
          Frontend Documentation
        </h1>
        <h1 className="text-3xl md:text-4xl font-bold text-[#232C3B] mb-10 mt-5">
          Overview
        </h1>
        <p className="text-base md:text-lg text-[#05192F] mb-12">
          The frontend of CylinderTrack is a mobile-first web application (PWA) built with React or Next.js. It provides customers with a simple order flow (order form, confirmation, order ID), realtime status updates, and a live map view showing simulated driver progress. The admin dashboard lists orders, allows simulated driver assignment, and supports marking cylinder returns to maintain inventory.
        </p>

        <h1 className="text-3xl md:text-4xl font-bold text-[#232C3B] mb-10 mt-10">
          Tech Stack
        </h1>
        <div className="w-full flex justify-center mb-12">
          <Image
            src="/pics/tech-stack.png"
            alt="Tech Stack"
            width={1600}
            height={500}
            className="w-full max-w-7xl h-auto rounded-xl shadow-2xl"
            priority
          />
        </div>
      </div>

      <section className="w-full py-12 md:py-16 px-4 md:px-6 lg:px-8 bg-[#D3D7DF]">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12">
            <div className="flex-1 w-full">
              <p className="text-sm md:text-base text-[#232C3B] mb-2">
                Layout and modular design of the frontend
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
                    The frontend is organized under src/ with feature modules for orders, map, admin dashboard, and shared UI components (OrderForm, MapView, AdminPanel). This structure keeps customer flows and admin tooling separated and easy to maintain.
                  </p>
                  <p className="text-[#232C3B] text-sm md:text-base max-w-prose">
                    The application is optimized for mobile-first interactions and progressive web app behavior to serve customers on low-bandwidth or mobile devices.
                  </p>
                </div>
              </div>
            </div>

            <div className="flex-1 w-full flex justify-center">
              <div className="flex flex-col sm:flex-row gap-4 md:gap-6">
                <pre className="bg-[#232C3B] text-[#D3D7DF] text-xs sm:text-sm rounded-xl px-3 sm:px-4 md:px-6 py-3 md:py-4 leading-relaxed font-mono overflow-x-auto w-full sm:max-w-[280px] md:max-w-[360px] shadow-xl">
{`src/
├── components/
│   ├── OrderForm/
│   ├── MapView/
│   └── AdminDashboard/
├── pages/ or app/
├── utils/
└── public/`}
                </pre>
                <pre className="bg-[#232C3B] text-[#D3D7DF] text-xs sm:text-sm rounded-xl px-3 sm:px-4 md:px-6 py-3 md:py-4 leading-relaxed font-mono overflow-x-hidden w-full sm:max-w-[280px] md:max-w-[360px] shadow-xl">
{`Important pages/components:
- /order (Order form, confirmation)
- /track (Live map + status)
- /admin (Orders list, assign driver, mark return)
- /simulator (optional dev tools)`}
                </pre>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="w-full py-12 md:py-16 bg-[#232C3B] flex flex-col items-center px-4 md:px-6 lg:px-8">
        <div className="max-w-7xl w-full flex flex-col md:flex-row gap-8 md:gap-12 items-center justify-center">
          <div className="bg-[#D3D7DF] rounded-2xl shadow-lg p-6 md:p-8 w-full max-w-md">
            <h2 className="text-xl md:text-2xl font-bold text-[#232C3B] mb-2">
              CylinderTrack locally set up
            </h2>
            <p className="text-[#232C3B] text-sm mb-4">
              Steps to run the frontend locally.
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
                  npm install
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="bg-[#232C3B] text-white font-bold w-6 h-6 flex items-center justify-center rounded-full text-sm flex-shrink-0 mt-0.5">
                  3
                </span>
                <span className="text-[#232C3B] text-sm md:text-base">
                  npm run dev
                </span>
              </li>
            </ol>
          </div>

          <div className="w-full max-w-lg">
            <h2 className="text-3xl md:text-4xl font-bold text-[#D3D7DF] mb-4">
              Setup Instructions
            </h2>
            <div className="relative">
              <div className="bg-[#D3D7DF] rounded-t-lg px-4 py-2">
                <span className="text-lg md:text-2xl text-[#232C3B] font-semibold">
                  CylinderTrack:
                </span>
              </div>
              <div className="bg-[#E6E9EF] rounded-b-xl rounded-tr-xl px-4 py-4 md:px-6 md:py-6 shadow-lg font-mono text-sm md:text-base text-[#232C3B] leading-relaxed">
                <div><span className="font-bold">CT: $</span> cd frontend</div>
                <div><span className="font-bold">CT: /frontend$</span> npm install</div>
                <div><span className="font-bold">CT: /frontend$</span> npm run dev</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full max-w-7xl mx-auto px-4 md:px-6 lg:px-8 my-16">
        <h1 className="text-3xl md:text-4xl font-bold text-[#232C3B] mb-10">
          Code Standard
        </h1>
        <div className="w-full flex justify-center">
          <Image
            src="/pics/code-standard.png"
            alt="Code standard"
            width={1400}
            height={700}
            className="w-full max-w-6xl h-auto"
          />
        </div>
      </div>

      <div className="bg-[#D3D7DF] pt-12 md:py-16 px-4 md:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row gap-8 md:gap-12">
            <div className="flex-1 min-w-0">
              <h1 className="text-3xl md:text-4xl font-bold text-[#232C3B] mb-6 font-montserrat">
                Routes
              </h1>
              <p className="text-base md:text-lg text-[#232C3B] max-w-prose">
                The frontend routes reflect the main user journeys: order creation, live tracking, and the admin dashboard. Shared components live in reusable directories to promote consistency and speed of development.
              </p>
            </div>

            <div className="flex-1 min-w-0">
              <div className="bg-[#D3D7DF] border-2 border-[#232C3B] rounded-2xl p-6 md:p-8 shadow-lg">
                <h2 className="text-2xl md:text-3xl font-semibold text-[#232C3B] mb-4">
                  CylinderTrack Users
                </h2>
                <div className="space-y-3">
                  <div className="flex flex-col sm:flex-row gap-2 sm:gap-4">
                    <span className="bg-[#F2F4F8] border border-[#232C3B] rounded px-3 py-1 font-mono text-sm md:text-base text-[#232C3B] whitespace-nowrap">
                      /order
                    </span>
                    <span className="text-sm md:text-base text-[#232C3B]">
                      Customer order form and confirmation
                    </span>
                  </div>
                  <div className="flex flex-col sm:flex-row gap-2 sm:gap-4">
                    <span className="bg-[#F2F4F8] border border-[#232C3B] rounded px-3 py-1 font-mono text-sm md:text-base text-[#232C3B] whitespace-nowrap">
                      /track
                    </span>
                    <span className="text-sm md:text-base text-[#232C3B]">
                      Live map showing driver and order status
                    </span>
                  </div>
                  <div className="flex flex-col sm:flex-row gap-2 sm:gap-4">
                    <span className="bg-[#F2F4F8] border border-[#232C3B] rounded px-3 py-1 font-mono text-sm md:text-base text-[#232C3B] whitespace-nowrap">
                      /admin
                    </span>
                    <span className="text-sm md:text-base text-[#232C3B]">
                      Admin dashboard for assignments and returns tracking
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-10 md:mt-12 bg-[#D3D7DF] border-2 border-[#232C3B] rounded-2xl p-6 md:p-8 shadow-lg max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-semibold text-[#232C3B] mb-4 font-montserrat">
              Admin Features
            </h2>
            <div className="space-y-3">
              <div className="flex flex-col sm:flex-row gap-2 sm:gap-4">
                <span className="bg-[#F2F4F8] border border-[#232C3B] rounded px-3 py-1 font-mono text-sm md:text-base text-[#232C3B] whitespace-nowrap">
                  /admin/orders
                </span>
                <span className="text-sm md:text-base text-[#232C3B]">
                  List orders with statuses, assign drivers, and mark returns
                </span>
              </div>
              <div className="flex flex-col sm:flex-row gap-2 sm:gap-4">
                <span className="bg-[#F2F4F8] border border-[#232C3B] rounded px-3 py-1 font-mono text-sm md:text-base text-[#232C3B] whitespace-nowrap">
                  /admin/metrics
                </span>
                <span className="text-sm md:text-base text-[#232C3B]">
                  KPI panel: deliveries today, returns, average time, inventory counter
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}