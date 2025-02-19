import React from "react";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import SpainFlag from "/src/assets/es.svg";
import UKFlag from "/src/assets/uk.svg";

const lang = {
  es: {
    icon: SpainFlag,
    name: "Español",
    alt: "ES",
  },
  en: {
    icon: UKFlag,
    name: "English",
    alt: "EN",
  },
};

function Nav() {
  return (
    <div className="bg-sky-500 px-5 py-2 flex justify-between h-10 select-none">
      <h1 className="font-bold text-white">Desafío MINEXUS</h1>
      <Menu>
        <MenuButton className="flex items-cemter text-xs bg-sky-700 rounded-full px-2 py-1 hover:cursor-pointer hover:bg-sky-800 hover:scale-110 transition ease-in-out duration-100">
          <img src={lang.es.icon} alt={lang.es.alt} className="size-4" />
        </MenuButton>
        <MenuItems
          anchor="bottom end"
          transition
          className="backdrop-blur-sm text-xs mt-1 px-1 py-1 rounded-lg flex flex-col gapy-1"
        >
          <MenuItem>
            <button className="flex gap-1 p-1 rounded-lg hover:bg-blue-900 hover:text-white hover:cursor-pointer">
              <img src={lang.es.icon} alt={lang.es.alt} className="size-4" />
              {lang.es.name}
            </button>
          </MenuItem>
          <MenuItem>
            <button className="flex gap-1 p-1 rounded-lg hover:bg-blue-900 hover:text-white hover:cursor-pointer">
              <img src={lang.en.icon} alt={lang.en.alt} className="size-4" />
              {lang.en.name}
            </button>
          </MenuItem>
        </MenuItems>
      </Menu>
    </div>
  );
}

export default Nav;
