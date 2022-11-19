import React from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { motion } from "framer-motion";

export default function Portfolio({ repos }) {
  const [sliderRef, instanceRef] = useKeenSlider({
    loop: true,
    slides: {
      perView: 1,
    },
  });

  console.log(repos);

  return (
    <div>
      <div className="md:grid grid-cols-3 ">
        <div className="bg-white">
          <div className="flex flex-row pl-10 py-12 xl:pl-72 xl:py-24">
            <div ref={sliderRef} className="keen-slider pb-10">
              {repos.map((repo, i) => {
                return (
                  <a
                    href={repo.url}
                    target="_blank"
                    className="keen-slider__slide number-slide1"
                    key={i}
                  >
                    <div className="flex flex-row items-center gap-8 pb-4">
                      <div>
                        <p className="text-[#3B41F1] font-bold">{i + 1}</p>
                      </div>
                      <div>
                        <h3 className="text-[#8C8F99] texl-lg font-medium">
                          {repo.name}
                        </h3>
                      </div>
                    </div>
                    <p className="font-bold">{repo.description}</p>
                  </a>
                );
              })}
            </div>
          </div>
        </div>
        <div className="bg-white md:py-24 flex items-center md:block">
          <div className="flex px-10 md:justify-end md:px-48 pb-8">
            <h3 className="text-[#003367] font-bold">
              Portfolio{" "}
              <span className="text-[#8C8F99] font-normal">carousel:</span>
            </h3>
          </div>
          <div className=" xl:pl-16 flex md:justify-end gap-1 md:gap-3 pb-8 md:pb-0 md:px-48">
            <motion.h3 whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
              <div
                className="select-none rounded-full bg-[#003367]  hover:bg-blue-800 cursor-pointer flex justify-center items-center h-8 w-8 md:w-12 md:h-12 duration-150 text-center"
                onClick={(e) =>
                  e.stopPropagation() || instanceRef.current?.prev()
                }
              >
                <img
                  className="w-1/3"
                  src="https://cdn.shopify.com/s/files/1/0089/5015/3274/files/back.png?v=1645804157"
                />
              </div>
            </motion.h3>
            <motion.h3 whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
              <div
                className="select-none rounded-full bg-[#5e6ad2]  hover:bg-blue-400 cursor-pointer flex justify-center items-center h-8 w-8 md:w-12 md:h-12 duration-150 text-center"
                onClick={(e) =>
                  e.stopPropagation() || instanceRef.current?.next()
                }
              >
                <img
                  className="w-1/3"
                  src="https://cdn.shopify.com/s/files/1/0089/5015/3274/files/next_2.png?v=1645804157"
                />
              </div>
            </motion.h3>
          </div>
        </div>
        <div className="bg-[#5e6ad2] py-12 lg:py-0 px-10 md:12 lg:px-32">
          <a
            href="https://github.com/Luchassmed/cs-course/tree/master/WITS22"
            target="_blank"
            className=""
          >
            <div className="flex flex-row gap-8 pb-4 lg:py-24">
              <div>
                <p className="text-[#003367] font-bold">01</p>
              </div>
              <div>
                <h3 className="text-gray-300 texl-lg font-medium pb-4">
                  Website carousel:
                </h3>
                <p className="font-bold">To be announced!</p>
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}
