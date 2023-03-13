import { motion } from "framer-motion";
import React from "react";
import Button from "./Button";
import Highlight from "./Highlight";

export default function Hero() {
  return (
    <div className="bg-gradient-to-r from-[#000212] to-[#0E1532] min-h-screen">
      <div className="flex flex-row items-center justify-around">
        <div className="px-10 lg:px-24 pt-32 lg:pt-48 2xl:pt-72 pb-24">
          <motion.h1
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 2,
              delay: 0.3,
            }}
            initial={{ opacity: 0, scale: 1 }}
          >
            <p className="text-4xl md:text-6xl font-extrabold leading-relaxed text-transparent bg-clip-text bg-gradient-to-br from-gray-100 to-[#8C8F99]">
              hi, i&apos;m <br /> luchas schmidt
            </p>
          </motion.h1>

          <motion.h3
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 4,
              delay: 0.3,
            }}
            initial={{ opacity: 0, scale: 1 }}
          >
            <div>
              <p className="pt-10 pb-5 text-[#5e6ad2] font-bold text-lg">
                I&apos;M A ...
              </p>
              <h3 className="text-white font-light text-lg pb-2">
                Junior Development Specialist at{" "}
                <Highlight
                  text={"DaxMedia"}
                  link={"https://www.daxmedia.eu/"}
                />
              </h3>
              <h3 className="text-white font-light text-lg pt-2">
                Computer Science and Informatics B.Sc student at{" "}
                <Highlight
                  text={"Roskilde University"}
                  link={"https://ruc.dk/"}
                />
              </h3>
            </div>
          </motion.h3>
        </div>
        <div className="px-10 pt-10 md:pt-32 hidden md:block">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { scale: 0.8, opacity: 0 },
              visible: { scale: 1, opacity: 1, transition: { delay: 2 } },
            }}
          >
            <img src="/avatar.png" className="h-full" />
          </motion.div>
        </div>
      </div>
      <div>
        <Button />
      </div>
    </div>
  );
}
