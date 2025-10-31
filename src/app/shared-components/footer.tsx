import Image from "next/image";
import Link from "next/link";
import { FaMapMarkerAlt, FaEnvelope, FaPhone } from "react-icons/fa";

export default function Footer() {
  const hoverColor = "hover:text-[#7ba6e0]";

  return (
    <footer className="relative z-10 bg-[rgb(11,24,47)] text-white px-4 sm:px-8 md:px-12 py-8 sm:py-10">
      <div className="flex flex-col md:flex-row gap-8 md:gap-16 lg:gap-24 xl:gap-62 items-start max-w-screen-2xl mx-auto w-full">
        <div className="flex-[2] w-full">
          <Link href="/landing">
            <Image
              src="/pics/zeno-logo.png"
              alt="CylinderTrack Logo"
              width={182}
              height={80}
              className="w-22 sm:w-40 md:w-38 lg:w-36 xl:w-26 2xl:w-26"
            />
          </Link>
          <p className="text-gray-300 mt-4 sm:mt-6 text-base sm:text-lg md:text-lg max-w-xs xl:max-w-sm lg:text-[17px]">
            Our team combines deep expertise in AI, software engineering, and econometrics.
          </p>
        </div>

        <div className="flex-1 w-full">
          <h2 className="font-bold mb-3 sm:mb-4 text-xl sm:text-2xl md:text-[17px] lg:text-[20px] xl:text-[20px] 2xl:text-[25px]">
            Quick Navigation
          </h2>
          <ul className="space-y-2 text-gray-300 text-base sm:text-lg md:text-lg lg:text-[17px]">
            <li>
              <Link href="/landing" className={hoverColor}>
                Home
              </Link>
            </li>
            <li>
              <Link href="/frontend" className={hoverColor}>
                Frontend
              </Link>
            </li>
            <li>
              <Link href="/backend" className={hoverColor}>
                Backend
              </Link>
            </li>
            <li>
              <Link href="/ai" className={hoverColor}>
                AI
              </Link>
            </li>
          </ul>
        </div>

        <div className="flex-1 w-full">
          <h2 className="font-bold mb-3 sm:mb-4 text-xl sm:text-2xl md:text-[17px] lg:text-[20px] xl:text-[20px] 2xl:text-[25px]">
            Get in touch
          </h2>
          <ul className="space-y-3 text-gray-300 text-base sm:text-lg md:text-lg lg:text-[17px]">
            <li className="flex items-center gap-2">
              <FaMapMarkerAlt className="text-cyan-200 flex-shrink-0" />
              <a
                href="https://maps.google.com/?q=AkiraChix, Nairobi, Kenya"
                target="_blank"
                rel="noopener noreferrer"
                className={hoverColor}
              >
                AkiraChix, Nairobi, Kenya
              </a>
            </li>
            <li className="flex items-center gap-2">
              <FaEnvelope className="text-cyan-200 flex-shrink-0" />
              <a href="mailto:cylindertrack@gmail.com" className={hoverColor}>
                cylindertrack@gmail.com
              </a>
            </li>
            <li className="flex items-center gap-2">
              <FaPhone className="text-cyan-200 scale-x-[-1] flex-shrink-0" />
              <a href="tel:+254766784320" className={hoverColor}>
                +254766784320
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-gray-600 mt-8 sm:mt-10 pt-4 sm:pt-6 text-center text-gray-400 text-sm sm:text-base md:text-[15px] max-w-screen-2xl mx-auto w-full">
        <p>&copy;2025 CylinderTrack. All Rights Reserved</p>
      </div>
    </footer>
  );
}