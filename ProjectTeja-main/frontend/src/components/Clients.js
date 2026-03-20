"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const logos = [
  "/clients/joshtalks-logo.png",
  "/clients/kukufm-logo.png",
  // "/clients/pocketfm-logo.jpg",
  "/clients/gienteach-logo.png",
  "/clients/bayantech-logo.png",
  "/clients/pocket-logo.png",
];

export default function Clients() {
  // duplicate logos for seamless infinite scroll
  const duplicated = [...logos, ...logos];

  return (
    <section className="relative w-full overflow-hidden bg-white py-24">
      {/* Heading */}
      <div className="text-center mb-14">
        <h3 className="text-black text-sm tracking-[0.3em] uppercase">
          Trusted by innovators worldwide
        </h3>
      </div>

      {/* Gradient fade edges */}
      

      {/* Moving strip */}
      <motion.div
        className="flex gap-20 w-max"
        animate={{ x: ["0%", "-50%"] }}
        transition={{
          ease: "linear",
          duration: 20,
          repeat: Infinity,
        }}
      >
        {duplicated.map((logo, index) => (
          <div
            key={index}
            
          >
            <Image
              src={logo}
              alt="client logo"
              width={140}
              height={60}
              
            />
          </div>
        ))}
      </motion.div>
    </section>
  );
}