"use client";
import acmeLogo from "@/assets/logo-acme.png";
import echoLogo from "@/assets/logo-echo.png";
import quantumLogo from "@/assets/logo-quantum.png";
import celestialLogo from "@/assets/logo-celestial.png";
import apexLogo from "@/assets/logo-apex.png";
import pulseLogo from "@/assets/logo-pulse.png";
import Image from "next/image";
import { motion } from "framer-motion";

export const LogoTicker = () => {
  const images = [
    {
      src: acmeLogo,
      alt: "Acme Logo",
    },
    {
      src: echoLogo,
      alt: "Echo Logo",
    },
    {
      src: quantumLogo,
      alt: "Quantum Logo",
    },
    {
      src: celestialLogo,
      alt: "Celestial Logo",
    },
    {
      src: apexLogo,
      alt: "Apex Logo",
    },
    {
      src: pulseLogo,
      alt: "Pulse Logo",
    },
  ];

  return (
    <div className="py-8 bg-white md:py-12 md:px-0 ">
      <div className="flex flex-1 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black,transparent)]">
        <motion.div
          className="flex gap-14 flex-none pr-14 -translate-x-1/2"
          initial={{ translateX: "-50%" }}
          animate={{ translateX: "0%" }}
          transition={{
            duration: 9,
            repeat: Infinity,
            ease: "linear",
            repeatType: "loop",
          }}
        >
          {[...images, ...images].map((item, index) => (
            <Image
              src={item.src}
              key={index}
              alt={item.alt}
              className="logo-ticker-image"
            />
          ))}
        </motion.div>
      </div>
    </div>
  );
};
