import { motion } from "framer-motion";
import React from "react";
import Button from "./Button";
import Highlight from "./Highlight";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-black text-white">
      <div className="container mx-auto px-6 lg:px-12 xl:px-24 py-24">
        <div className="max-w-4xl mx-auto">
          {/* Text Content */}
          <div className="space-y-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-8"
            >
              <div className="border-4 border-white p-8 inline-block">
                <p className="text-sm font-bold uppercase tracking-widest mb-4">
                  Hello, I&apos;m
                </p>
                <h1 className="text-6xl md:text-7xl lg:text-8xl font-black leading-none">
                  LUCHAS
                  <br />
                  SCHMIDT
                </h1>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="space-y-6 pt-4"
            >
              <div className="bg-white text-black p-6 border-4 border-white">
                <div className="space-y-4 text-lg leading-relaxed font-medium">
                  <p>
                    Junior Consultant at{" "}
                    <Highlight
                      text="The Tech Collective, powered by Implement Consulting Group"
                      link="https://thetechcollective.eu/"
                    />
                  </p>
                  <p>
                    Computer Science and Engineering MSc student at{" "}
                    <Highlight
                      text="Technical University of Denmark"
                      link="https://www.dtu.dk/english/"
                    />
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Scroll Button */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <Button />
      </div>
    </section>
  );
}
