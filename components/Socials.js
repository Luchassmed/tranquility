import React from "react";
import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import { Bars3Icon } from "@heroicons/react/24/outline";
import { AiFillLinkedin, AiFillGithub, AiFillMail } from "react-icons/ai";

export default function Socials() {
  return (
    <div className="absolute top-0 right-0 pr-48 pt-48">
      <Menu as="div" className="relative inline-block text-left">
        <div>
          <Menu.Button className="inline-flex justify-center rounded-full bg-[#001A38] p-2 text-white">
            <Bars3Icon className="h-6 w-6" />
          </Menu.Button>
        </div>

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
                  className=""
                  href="https://www.linkedin.com/in/luchas-schmidt/"
                  target="_blank"
                >
                  <AiFillLinkedin className="w-12 h-12 text-white" />
                </a>
              </Menu.Item>
              <Menu.Item>
                <a
                  className=""
                  href="https://github.com/Luchassmed"
                  target="_blank"
                >
                  <AiFillGithub className="w-12 h-12 text-white" />
                </a>
              </Menu.Item>
              <Menu.Item>
                <a className="" href="mailto: kapot@live.dk" target="_blank">
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
