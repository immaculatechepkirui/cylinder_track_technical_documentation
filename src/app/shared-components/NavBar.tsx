'use client';
import React, { useState } from 'react';
import { FaMapMarkerAlt, FaFacebookF, FaInstagram, FaBars, FaTimes } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const navLinks = [
  { name: "HOME", href: "/landing" },
  { name: "FRONTEND", href: "/frontend" },
  { name: "BACKEND", href: "/backend" },
  { name: "SAFETY", href: "/safety" },
];

const Zeno_MAP_URL = "https://www.google.com/maps/place/AkiraChix/@-1.28333,36.81667,15z";

export default function NavBar({
  variant = "light",
}: {
  variant?: "light" | "dark";
}) {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const logoSrc = variant === "dark" ? "/pics/logoo.png" : "/pics/blue-logo.png";
  const bg = variant === "dark" ? "bg-[#151E31]" : "bg-[#D3D7DF]";
  const text = variant === "dark" ? "text-[#D3D7DF]" : "text-[#05192F]";
  const border = variant === "dark" ? "border-[#D3D7DF]" : "border-[#05192F]";
  const hoverColor = variant === "dark" ? "text-[#7ba6e0]" : "text-[#4471a1]";
  const shadow = variant === "dark"
    ? "shadow-[0_4px_24px_2px_rgba(255,255,255,0.25)]"
    : "shadow-xl";

  const isActive = (href: string) => pathname === href;

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <nav className={`${bg} py-8 px-4 md:px-10 fixed top-0 left-0 right-0 z-50 `}>
      <div className={`border ${border} rounded-none flex items-center justify-between h-20 ${shadow}`}>
        <div className="flex items-center h-full ">
          <Link href="/landing" onClick={closeMenu}>
            <Image
              src={logoSrc}
              alt="Logo"
              width={70}
              height={70}
              className="object-contain"
              priority
            />
          </Link>

          <div className="hidden md:flex space-x-10 px-8 h-full items-center">
            {navLinks.map((link) => {
              const isActiveLink = isActive(link.href);
              const linkColorClass = isActiveLink
                ? hoverColor
                : `${text} hover:${hoverColor.split(' ')[0]}`;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`text-base font-semibold tracking-wide transition ${linkColorClass}`}
                  onClick={closeMenu}
                >
                  {link.name}
                </Link>
              );
            })}
          </div>
        </div>

        <div className="hidden md:flex items-center h-full">
          <div className={`flex items-center px-6 h-full`}>
            <a
              href={Zeno_MAP_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="AkiraChix Location"
              className={`flex items-center ${text} text-xs uppercase font-semibold mr-3`}
            >
              CONTACT US
            </a>
            <a
              href={Zeno_MAP_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="AkiraChix Location"
            >
              <FaMapMarkerAlt className={`${text} text-lg mx-1 hover:${hoverColor.split(" ")[0]}`} />
            </a>
          </div>
          <div className={`h-full border-l ${border} mx-3`}></div>
          <div className="flex items-center space-x-4 px-6 h-full">
            <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
              <FaXTwitter className={`${text} text-lg hover:${hoverColor.split(" ")[0]}`} />
            </a>
            <a href="https://facebook.com/" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
              <FaFacebookF className={`${text} text-lg hover:${hoverColor.split(" ")[0]}`} />
            </a>
            <a href="https://instagram.com/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <FaInstagram className={`${text} text-lg hover:${hoverColor.split(" ")[0]}`} />
            </a>
          </div>
        </div>

        <button
          className="md:hidden text-2xl flex items-center pr-4"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <FaTimes className={text} /> : <FaBars className={text} />}
        </button>
      </div>

      {isMenuOpen && (
        <div className={`mt-4 p-6 rounded border ${border} ${bg} ${shadow} md:hidden`}>
          <div className="flex flex-col space-y-5">
            {navLinks.map((link) => {
              const isActiveLink = isActive(link.href);
              const linkColorClass = isActiveLink
                ? hoverColor
                : `${text} hover:${hoverColor.split(' ')[0]}`;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`text-lg font-semibold tracking-wide ${linkColorClass}`}
                  onClick={closeMenu}
                >
                  {link.name}
                </Link>
              );
            })}
            <div className="pt-4 border-t border-gray-600">
              <a
                href={Zeno_MAP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center ${text} font-semibold`}
              >
                <FaMapMarkerAlt className="mr-2" /> Contact Us
              </a>
              <div className="flex space-x-4 mt-4">
                <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
                  <FaXTwitter className={`${text} text-xl hover:${hoverColor.split(' ')[0]}`} />
                </a>
                <a href="https://facebook.com/" target="_blank" rel="noopener noreferrer">
                  <FaFacebookF className={`${text} text-xl hover:${hoverColor.split(' ')[0]}`} />
                </a>
                <a href="https://instagram.com/" target="_blank" rel="noopener noreferrer">
                  <FaInstagram className={`${text} text-xl hover:${hoverColor.split(' ')[0]}`} />
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
