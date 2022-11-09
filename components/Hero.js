import React from "react";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <div>
      <div className="bg-gradient-to-r from-[#000212] to-[#0E1532]">
        <div className="flex flex-row items-center justify-around">
          <div className="px-72 pt-72 pb-24">
            <motion.h1
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 2,
                delay: 0.3,
              }}
              initial={{ opacity: 0, scale: 1 }}
            >
              <p className="text-6xl font-extrabold leading-relaxed text-transparent bg-clip-text bg-gradient-to-br from-gray-100 to-[#8C8F99]">
                hi, i'm <br /> luchas schmidt
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
                  WHAT DO I DO? I AM A ...
                </p>
                <h3 className="text-white font-bold text-lg pb-2">
                  Junior Development Specialsit at DaxMedia
                </h3>
                <h3 className="text-white font-bold text-lg">
                  Computer Science and Informatics B.Sc student at Roskilde
                  University
                </h3>
              </div>
            </motion.h3>
          </div>
          <div className="px-10 pt-10">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={{
                hidden: { scale: 0.8, opacity: 0 },
                visible: { scale: 1, opacity: 1, transition: { delay: 2 } },
              }}
            >
              <img src="/avatar.png" className="" />
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
