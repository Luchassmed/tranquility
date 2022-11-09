import React from "react";
import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import { motion } from "framer-motion";
import { Bars3Icon } from "@heroicons/react/24/outline";
import { AiFillLinkedin, AiFillGithub, AiFillMail } from "react-icons/ai";

export default function Socials() {
  return (
    <div className="absolute top-0 right-0 pr-48 pt-48">
      <Menu as="div" className="relative inline-block text-left">
        <motion.h3 whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
          <Menu.Button className="inline-flex justify-center rounded-full bg-[#5e6ad2] p-2 text-white">
            <Bars3Icon className="h-6 w-6" />
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
          <Menu.Items className="absolute w-10 mt-2 origin-top-right bg-transparent ">
            <div className="py-1 flex flex-col items-center gap-4">
              <Menu.Item>
                <a
                  className="transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-110 duration-300"
                  href="https://www.linkedin.com/in/luchas-schmidt/"
                  target="_blank"
                >
                  <AiFillLinkedin className="w-12 h-12 text-white" />
                </a>
              </Menu.Item>
              <Menu.Item>
                <a
                  className="transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-110 duration-300"
                  href="https://github.com/Luchassmed"
                  target="_blank"
                >
                  <AiFillGithub className="w-12 h-12 text-white" />
                </a>
              </Menu.Item>
              <Menu.Item>
                <a
                  className="transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-110 duration-300"
                  href="mailto: kapot@live.dk"
                  target="_blank"
                >
                  <AiFillMail className="w-12 h-12 text-white" />
                </a>
              </Menu.Item>
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  );
}
