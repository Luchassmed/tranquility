import React from "react";
import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import { Bars3Icon } from "@heroicons/react/24/outline";

export default function Socials() {
  return (
    <div className="absolute top-0 right-0 pr-48 pt-48">
      <Menu as="div" className="relative inline-block text-left">
        <div>
          <Menu.Button className="inline-flex justify-center rounded-full bg-amber-400 p-2 text-white">
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
          <Menu.Items className="absolute right-0 w-56 mt-2 origin-top-right bg-transparent rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
            <div className="py-1">
              <Menu.Item>
                <a href="#">Account settings</a>
              </Menu.Item>
              <Menu.Item>
                <a href="#">Support</a>
              </Menu.Item>
              <Menu.Item>
                <a href="#">License</a>
              </Menu.Item>
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  );
}
