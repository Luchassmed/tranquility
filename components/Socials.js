import React from "react";
import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import { motion } from "framer-motion";
import { Bars3Icon } from "@heroicons/react/24/outline";
import { AiFillLinkedin, AiFillGithub, AiFillMail } from "react-icons/ai";

export default function Socials() {
  return (
    <>
      <motion.h2
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 4,
          delay: 0.3,
        }}
        initial={{ opacity: 0, scale: 1 }}
      >
        <div className="absolute top-0 right-0 pr-6 pt-6 md:pr-12 xl:pr-48 md:pt-48">
          <Menu
            as="div"
            className="select-none relative inline-block text-left"
          >
            <motion.h3 whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
              <Menu.Button className="md:inline-flex justify-center rounded-full bg-[#5e6ad2] p-2 text-white hidden">
                <Bars3Icon className="h-6 w-6" />
              </Menu.Button>
            </motion.h3>

            <motion.h3 whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
              <Menu.Button className="inline-flex justify-center rounded-full bg-transparent p-2 text-white md:hidden">
                <img src="/avatar.png" className="h-16 w-16" />
              </Menu.Button>
            </motion.h3>

            <Transition
              as={Fragment}
              enter="transition ease-out duration-100"
              enterFrom="transform opacity-0 scale-95"
              enterTo="transform opacity-100 scale-100"
              leave="transition ease-in duration-75"
              leaveFrom="transform opacity-100 scale-100"
              leaveTo="transform opacity-0 scale-95"
            >
              <Menu.Items className="absolute ml-4 md:ml-0 w-10 mt-2 origin-top-right bg-transparent ">
                <div className="py-1 flex flex-col items-center gap-4">
                  <Menu.Item>
                    <a
                      className="transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-110 duration-300"
                      href="https://www.linkedin.com/in/luchas-schmidt/"
                      target="_blank"
                    >
                      <AiFillLinkedin className="h-8 w-8 md:w-12 md:h-12 text-white" />
                    </a>
                  </Menu.Item>
                  <Menu.Item>
                    <a
                      className="transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-110 duration-300"
                      href="https://github.com/Luchassmed"
                      target="_blank"
                    >
                      <AiFillGithub className="h-8 w-8 md:w-12 md:h-12 text-white" />
                    </a>
                  </Menu.Item>
                  <Menu.Item>
                    <a
                      className="transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-110 duration-300"
                      href="mailto: kapot@live.dk"
                      target="_blank"
                    >
                      <AiFillMail className="h-8 w-8 md:w-12 md:h-12 text-white" />
                    </a>
                  </Menu.Item>
                </div>
              </Menu.Items>
            </Transition>
          </Menu>
        </div>
      </motion.h2>
    </>
  );
}
