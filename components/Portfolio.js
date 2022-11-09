import React from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";

export default function Portfolio() {
  const [sliderRef, instanceRef] = useKeenSlider({
    loop: true,
    slides: {
      perView: 1,
    },
  });
  return (
    <div>
      <div className="grid grid-cols-3 ">
        <div className="bg-white">
          <div className="flex flex-row pl-72 py-24">
            <div ref={sliderRef} className="keen-slider pb-10">
              <a
                href="https://github.com/Luchassmed/windy"
                target="_blank"
                className="keen-slider__slide number-slide1"
              >
                <div className="flex flex-row items-center gap-8 pb-4">
                  <div>
                    <p className="text-[#3B41F1] font-bold">01</p>
                  </div>
                  <div>
                    <h3 className="text-[#8C8F99] texl-lg font-medium">
                      Next.js web app
                    </h3>
                  </div>
                </div>
                <p className="font-bold">
                  This portfolio website made with Next.js and styled with
                  Tailwind CSS
                </p>
              </a>
              <a
                href="https://github.com/Luchassmed/react-api"
                target="_blank"
                className="keen-slider__slide number-slide2"
              >
                <div className="flex flex-row items-center gap-8 pb-4">
                  <div>
                    <p className="text-[#3B41F1] font-bold">02</p>
                  </div>
                  <div>
                    <h3 className="text-[#8C8F99] texl-lg font-medium">
                      ReactJS API
                    </h3>
                  </div>
                </div>
                <p className="font-bold">A todo-list made with ReactJS</p>
              </a>
              <a
                href="https://github.com/Luchassmed/cs-course/tree/master/EC21"
                target="_blank"
                className="keen-slider__slide number-slide3"
              >
                <div className="flex flex-row items-center gap-8 pb-4">
                  <div>
                    <p className="text-[#3B41F1] font-bold">03</p>
                  </div>
                  <div>
                    <h3 className="text-[#8C8F99]  texl-lg font-medium">
                      Tile-based game made with Java
                    </h3>
                  </div>
                </div>
                <p className="font-bold">CS-course project for exam</p>
              </a>
              <a
                href="https://github.com/Luchassmed/cs-course/tree/master/WITS22"
                target="_blank"
                className="keen-slider__slide number-slide4"
              >
                <div className="flex flex-row gap-8 pb-4">
                  <div>
                    <p className="text-[#3B41F1] font-bold">04</p>
                  </div>
                  <div>
                    <h3 className="text-[#8C8F99]  texl-lg font-medium">
                      Web based blogserver made with PHP, HTML and API
                    </h3>
                  </div>
                </div>
                <p className="font-bold">CS-course project for exam</p>
              </a>
            </div>
          </div>
        </div>
        <div className="bg-white py-24">
          <div className="flex justify-end px-48 pb-8">
            <h3 className="text-[#003367] font-bold">
              Portfolio{" "}
              <span className="text-[#8C8F99]  font-normal">carousel:</span>
            </h3>
          </div>
          <div className="xl:pl-16 flex justify-end gap-3 px-48">
            <div
              className="rounded-full bg-[#003367]  hover:bg-blue-800 cursor-pointer flex justify-center items-center w-12 h-12 duration-150 text-center"
              onClick={(e) =>
                e.stopPropagation() || instanceRef.current?.prev()
              }
            >
              <img
                className="w-1/3"
                src="https://cdn.shopify.com/s/files/1/0089/5015/3274/files/back.png?v=1645804157"
              />
            </div>
            <div
              className="rounded-full bg-[#5e6ad2]  hover:bg-blue-900 cursor-pointer flex justify-center items-center w-12 h-12 duration-150 text-center"
              onClick={(e) =>
                e.stopPropagation() || instanceRef.current?.next()
              }
            >
              <img
                className="w-1/3"
                src="https://cdn.shopify.com/s/files/1/0089/5015/3274/files/next_2.png?v=1645804157"
              />
            </div>
          </div>
        </div>
        <div className="bg-[#5e6ad2] px-32">
          <a
            href="https://github.com/Luchassmed/cs-course/tree/master/WITS22"
            target="_blank"
            className=""
          >
            <div className="flex flex-row gap-8 pb-4 py-24">
              <div>
                <p className="text-[#003367] font-bold">01</p>
              </div>
              <div>
                <h3 className="text-gray-300 texl-lg font-medium">
                  Website carousel:
                </h3>
              </div>
            </div>
            <p className="font-bold">To be announced!</p>
          </a>
        </div>
      </div>
    </div>
  );
}
