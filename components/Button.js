import { ChevronDownIcon } from "@heroicons/react/24/outline";
import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";

export default function Button() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY === 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToPortfolio = () => {
    const portfolioSection = document.querySelector("section:nth-of-type(2)");
    if (portfolioSection) {
      portfolioSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  if (!isVisible) return null;

  return (
    <motion.button
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 1 }}
      onClick={scrollToPortfolio}
      className="group border-4 border-white p-3 bg-white text-black hover:bg-black hover:text-white transition-all duration-200"
      aria-label="Scroll to portfolio"
    >
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <ChevronDownIcon className="w-6 h-6 font-black" />
      </motion.div>
    </motion.button>
  );
}
