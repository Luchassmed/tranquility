import React from "react";
import { useEffect, useState } from "react";
import { ChevronDownIcon } from "@heroicons/react/24/outline";
import { motion } from "framer-motion";

export default function Button() {
  const [toBottomButton, setToBottomButton] = useState(true);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY == 0) {
        setToBottomButton(true);
      } else {
        setToBottomButton(false);
      }
    });
  }, []);

  const scrollDown = () => {
    window.scrollTo({
      top: 1000,
      behavior: "smooth",
    });
  };
  return (
    <div>
      <div className="flex flex-col justify-end items-center pt:10 xl:pt-24">
        {toBottomButton && (
          <motion.button
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 2,
              delay: 3,
            }}
            initial={{ opacity: 0, scale: 1 }}
            onClick={scrollDown}
          >
            <p>
              <ChevronDownIcon className="text-white h-10 animate-bounce" />
            </p>
          </motion.button>
        )}
      </div>
    </div>
  );
}
