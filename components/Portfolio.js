import React from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { motion } from "framer-motion";

const websites = [
  {
    id: 1,
    name: "European Audiohire",
    url: "https://www.europeanaudiohire.com/",
  },
  {
    id: 2,
    name: "Colonzone",
    url: "https://colonzone.dk/",
  },
  {
    id: 3,
    name: "To be announced soon!",
    url: "#",
  },
];

export default function Portfolio({ repos }) {
  const [sliderRef, instanceRef] = useKeenSlider({
    loop: true,
    slides: {
      perView: 1,
    },
  });

  const [sliderRefSecond, instanceRefSecond] = useKeenSlider({
    loop: true,
    slides: {
      perView: 1,
    },
  });

  return (
    <div>
      <div className="md:grid grid-cols-3 ">
        <div className="bg-white">
          <div className="flex flex-row pl-8 py-12 lg:pl-40 2xl:pl-72 xl:py-24">
            <div ref={sliderRef} className="keen-slider pb-10">
              {repos.map((repo, i) => {
                return (
                  <a
                    href={repo.html_url}
                    target="_blank"
                    rel="noreferrer"
                    className="keen-slider__slide number-slide1"
                    key={i}
                  >
                    <div className="flex flex-row items-center gap-8 pb-4">
                      <div>
                        <p className="text-[#3B41F1] font-bold">0{i + 1}</p>
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
        <div className="bg-white md:py-12 flex items-center md:block">
          <div className="flex px-8 md:justify-end lg:px-24 pb-8 xl:pb-4 md:pb-4 lg:pb-4 xl:pt-12">
            <h3 className="text-[#003367] font-bold">
              Portfolio{" "}
              <span className="text-[#8C8F99] font-normal">carousel:</span>
            </h3>
          </div>
          <div className="xl:pl-16 flex md:justify-end md:px-10 gap-1 md:gap-3 pb-8 md:pb-0 lg:px-32 pl-16">
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
        <div className="bg-[#5e6ad2] py-12 lg:py-0 px-8 xl:px-10 2xl:px-32">
          <div ref={sliderRefSecond} className="keen-slider">
            {websites.map((website, i) => {
              return (
                <a
                  href={website.url}
                  target="_blank"
                  rel="noreferrer"
                  className="keen-slider__slide number-slide1"
                  key={i}
                >
                  <div className="flex flex-col lg:pt-12 xl:pt-24">
                    <div className="flex flex-row gap-8">
                      <p className="text-[#003367] font-bold">0{i + 1}</p>
                      <h3 className="text-gray-300 texl-lg font-medium pb-4">
                        {website.name}
                      </h3>
                    </div>
                  </div>
                </a>
              );
            })}
          </div>
          <div className="flex flex-row items-center gap-12 md:gap-16">
            <p className="font-bold"> Websites I&apos;ve made, carousel:</p>

            <motion.h3 whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
              <div
                className="select-none rounded-full bg-gray-100 hover:bg-[#8C8F99] cursor-pointer flex justify-center items-center h-8 w-8 md:w-12 md:h-12 duration-150 text-center"
                onClick={(e) =>
                  e.stopPropagation() || instanceRefSecond.current?.next()
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
      </div>
    </div>
  );
}
