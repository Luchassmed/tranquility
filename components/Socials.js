import { motion } from "framer-motion";
import React from "react";
import { AiFillGithub, AiFillLinkedin, AiFillMail } from "react-icons/ai";

export default function Socials() {
  const socialLinks = [
    {
      name: "LinkedIn",
      icon: AiFillLinkedin,
      href: "https://www.linkedin.com/in/luchas-schmidt/",
    },
    {
      name: "GitHub",
      icon: AiFillGithub,
      href: "https://github.com/Luchassmed",
    },
    {
      name: "Email",
      icon: AiFillMail,
      href: "mailto:kapot@live.dk",
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, delay: 0.5 }}
      className="fixed top-6 right-6 md:top-8 md:right-8 z-50"
    >
      <div className="flex flex-col gap-3">
        {socialLinks.map((social, index) => {
          const Icon = social.icon;
          return (
            <motion.a
              key={social.name}
              href={social.href}
              target="_blank"
              rel="noreferrer"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: 0.6 + index * 0.1 }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white border-4 border-white p-3 hover:bg-black hover:text-white transition-all duration-200"
              aria-label={social.name}
            >
              <Icon className="w-5 h-5" />
            </motion.a>
          );
        })}
      </div>
    </motion.div>
  );
}
