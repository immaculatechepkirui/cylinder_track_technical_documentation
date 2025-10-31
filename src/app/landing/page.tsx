'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import DocsNavBar from '../shared-components/NavBar';
import Footer from '../shared-components/footer';

const platforms = [
  {
    src: "/pics/value.png",
    alt: "Customer App",
    href: "#/order",
    title: "Customer App (PWA)",
    desc: "Place orders quickly, receive confirmations, and track deliveries in realtime.",
  },
  {
    src: "/pics/dash.png",
    alt: "Admin Dashboard",
    href: "#/admin",
    title: "Admin Dashboard",
    desc: "Manage orders, assign drivers (simulated), and track returns and KPIs.",
  },
  {
    src: "/pics/chatp.png",
    alt: "Driver Simulator",
    href: "#/simulator",
    title: "Driver Simulator",
    desc: "Simulated driver movements write GPS points to the database to demonstrate live tracking.",
  },
];

function PlatformCard({
  platform,
  index,
  isActive,
  onMouseEnter,
  onMouseLeave,
  stacked,
}: {
  platform: (typeof platforms)[0];
  index: number;
  isActive: boolean;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
  stacked: boolean;
}) {
  if (stacked) {
    return (
      <a
        href={platform.href}
        target="_blank"
        rel="noopener noreferrer"
        className="mx-auto mb-5 last:mb-0 transition-transform duration-400 ease-in-out block"
        style={{
          width: '220px',
          height: '320px',
          boxShadow: isActive
            ? '0 20px 40px rgba(13, 42, 74, 0.6)'
            : '0 8px 15px rgba(13, 42, 74, 0.3)',
          transform: isActive ? 'scale(1.05)' : 'scale(1)',
          zIndex: isActive ? 30 : 10 - index,
        }}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
      >
        <div className="relative rounded-xl overflow-hidden shadow-lg bg-[#05192F] w-full h-full">
          <Image
            src={platform.src}
            alt={platform.alt}
            fill
            className="object-contain"
          />
          <div
            className={`absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-end p-4 transition-opacity duration-300 ${
              isActive ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <div className="text-white w-full">
              <h3 className="text-lg font-bold mb-1">{platform.title}</h3>
              <p className="text-xs mb-2">{platform.desc}</p>
              <button className="px-3 py-1.5 bg-[#0A1F36] text-[#D3D7DF] rounded-full text-xs font-semibold hover:bg-[#0D2A4A] transition-colors">
                Visit
              </button>
            </div>
          </div>
        </div>
      </a>
    );
  }
  const baseX = (index - 1) * 120;
  const baseY = (index - 1) * 40;
  const tiltAngle = isActive ? 0 : index % 2 === 0 ? -6 : 6;
  const zIndex = isActive ? 30 : 10 - index;

  return (
    <a
      href={platform.href}
      target="_blank"
      rel="noopener noreferrer"
      className="absolute top-1/2 left-1/2 transition-transform duration-400 ease-in-out will-change-transform"
      style={{
        zIndex,
        width: '400px',
        height: '520px',
        transform: `translate(calc(-50% + ${baseX}px), calc(-50% + ${baseY}px)) rotate(${tiltAngle}deg) scale(${isActive ? 1.1 : 1})`,
        boxShadow: isActive
          ? '0 20px 40px rgba(13, 42, 74, 0.6)'
          : '0 8px 15px rgba(13, 42, 74, 0.3)',
      }}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <div className="relative rounded-xl overflow-hidden shadow-lg bg-[#05192F] w-full h-full">
        <Image
          src={platform.src}
          alt={platform.alt}
          fill
          className="object-contain"
        />
        <div
          className={`absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-end p-4 transition-opacity duration-300 ${
            isActive ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <div className="text-white w-full">
            <h3 className="text-lg font-bold mb-1">{platform.title}</h3>
            <p className="text-xs mb-2">{platform.desc}</p>
            <button className="px-3 py-1.5 bg-[#0A1F36] text-[#D3D7DF] rounded-full text-xs font-semibold hover:bg-[#0D2A4A] transition-colors">
              Visit
            </button>
          </div>
        </div>
      </div>
    </a>
  );
}

export default function LandingPage() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [viewportWidth, setViewportWidth] = useState(
    typeof window !== 'undefined' ? window.innerWidth : 1024
  );

  useEffect(() => {
    function handleResize() {
      setViewportWidth(window.innerWidth);
    }
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-[#D3D7DF] overflow-hidden">
      <DocsNavBar variant="light" />
      <main className="flex-grow bg-[#D3D7DF] text-[#05192F] font-teachers py-36 sm:py-20 md:py-36 lg:py-40">
        <div className="w-full max-w-7xl mx-auto px-4 md:px-10 lg:px-10 xl:px-0">
          <section className="text-center mb-16">
            <h1 className="text-2xl sm:text-5xl md:text-4xl lg:text-5xl xl:text-5xl font-bold tracking-wide leading-tight">
              CylinderTrack — Real-time LPG Delivery & Return Tracker
            </h1>
            <div className="mt-6 flex justify-center">
              <span className="inline-block w-12 h-1 bg-[#05192F] rounded"></span>
            </div>
          </section>

          <section className="flex items-center justify-center mb-10">
            <div className="flex-grow border-t border-[#05192F]" />
            <span className="mx-6 text-xs font-semibold tracking-wide uppercase text-[#05192F]">
              Our MVP
            </span>
            <div className="flex-grow border-t border-[#05192F]" />
          </section>

          <section className="grid grid-cols-1 lg:grid-cols-3 gap-0 border border-[#05192F] divide-y lg:divide-y-0 lg:divide-x divide-[#05192F]">
            <div className="flex flex-col items-center justify-center py-8 px-4">
              <Image
                src="/pics/robot.png"
                width={250}
                height={420}
                alt="CylinderTrack Illustration"
                className="mb-6 drop-shadow-xl"
              />
            </div>
            <div className="flex flex-col items-center justify-center py-8 px-6 text-center">
              <h2 className="text-2xl font-bold tracking-wide mb-2 uppercase">
                About CylinderTrack
              </h2>
              <span className="inline-block w-10 h-1 bg-[#05192F] rounded mb-3"></span>
              <p className="text-[#05192F] mb-4 max-w-md mx-auto">
                CylinderTrack modernizes LPG delivery by combining a mobile-first ordering experience with a realtime operations dashboard. Customers place orders in seconds, receive clear status updates, and can track the driver on a live map. Admin users assign drivers (simulated), monitor deliveries, and track cylinder returns. The MVP uses React for the frontend and Firebase Firestore for realtime updates and hosting; driver movement is simulated to demonstrate live tracking and order lifecycle.
              </p>
            </div>
            <div className="flex flex-col items-center justify-center py-8 px-4 text-center">
              <div className="mb-8">
                <div className="uppercase tracking-widest text-xs mb-2">
                  Built for clear operational visibility.
                </div>
                <div className="text-4xl font-bold tracking-wider mt-6">
                  2025
                </div>
                <span className="inline-block w-8 h-1 bg-[#05192F] rounded"></span>
              </div>
            </div>
          </section>

          <div className="w-full max-w-7xl mx-auto px-2 md:px-2 lg:px-10 xl:px-15 2xl:px-15 pt-12 bg-[#D3D7DF]">
            <h1 className="text-2xl md:text-4xl font-bold text-[#05192F] mb-6">
              CylinderTrack System Architecture
            </h1>
            <p className="text-base md:text-lg text-[#05192F] mb-10 max-w-3xl">
              The architecture shows how the frontend, Firestore realtime backend, driver simulator, and hosting interact to deliver realtime order tracking and inventory monitoring.
            </p>
            <div className="w-full flex justify-center">
              <Image
                src="/pics/sys-arch.png"
                alt="CylinderTrack System Architecture Diagram"
                width={1400}
                height={700}
                className="w-full max-w-6xl h-auto rounded-lg shadow-xl"
                priority
              />
            </div>
          </div>
        </div>
      </main>

      <section className="px-6 md:px-12 lg:px-20 xl:px-15 pb-12 bg-[#D3D7DF]">
        <div className="w-full max-w-6xl mx-auto">
          <h1 className="text-2xl md:text-4xl font-bold text-[#05192F] mb-6">
            Explore CylinderTrack Platforms
          </h1>
          <p className="text-base md:text-lg text-[#05192F] mb-10 max-w-3xl">
            Discover the components that make up the CylinderTrack MVP: a customer PWA, an admin dashboard, and a driver simulator that demonstrates realtime tracking and cylinder return workflows.
          </p>
          <div
            className={`w-full flex items-center ${
              viewportWidth < 600 ? 'flex-col' : 'justify-center relative'
            }`}
            style={{
              height: viewportWidth < 600 ? `${platforms.length * 340}px` : '700px',
            }}
          >
            <div className={viewportWidth < 600 ? "w-full flex flex-col items-center" : "relative w-full h-full max-w-5xl"}>
              {platforms.map((platform, index) => (
                <PlatformCard
                  key={index}
                  platform={platform}
                  index={index}
                  isActive={hoveredIndex === index || (hoveredIndex === null && index === 0)}
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                  stacked={viewportWidth < 600}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}