import React, { useEffect, useState } from "react";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import SpainFlag from "/src/assets/es.svg";
import UKFlag from "/src/assets/uk.svg";
import { useTranslation } from "react-i18next";

const lang = [
  {
    name: "Español",
    alt: "es",
    icon: SpainFlag,
  },
  {
    name: "English",
    alt: "en",
    icon: UKFlag,
  },
];

function Nav() {
  const { i18n } = useTranslation();
  const [selectedLng, setselectedLng] = useState({});

  const handleChangeLng = (lng) => {
    i18n.changeLanguage(lng);
    localStorage.setItem("lng", lng);
  };

  useEffect(() => {
    const initialLng = lang.find((lng) => lng.alt === i18n.language);
    setselectedLng(initialLng);
  }, []);

  return (
    <div className="bg-sky-500 px-5 py-2 flex justify-between items-center h-14 select-none">
      <h1 className="font-bold text-white text-2xl">Desafío MINEXUS</h1>
      <Menu>
        <MenuButton className="flex items-cemter text-sm bg-sky-700 rounded-full px-2.5 py-2 hover:cursor-pointer hover:bg-sky-800 hover:scale-110 transition ease-in-out duration-100">
          <img
            src={selectedLng.icon}
            alt={selectedLng.alt}
            className="size-6"
          />
        </MenuButton>
        <MenuItems
          anchor="bottom end"
          transition
          className="backdrop-blur-sm text-md mt-1 px-1 py-1 rounded-lg flex flex-col gapy-1"
        >
          {lang.map((lng) => {
            return (
              <MenuItem key={lng.name}>
                <button
                  className="flex items-center justify-start gap-1 p-1 px-2 rounded-lg hover:bg-blue-900 hover:text-white hover:cursor-pointer"
                  onClick={() => {
                    handleChangeLng(lng.alt);
                    setselectedLng(lng);
                  }}
                >
                  <img src={lng.icon} alt={lng.alt} className="size-6" />
                  {lng.name}
                </button>
              </MenuItem>
            );
          })}
        </MenuItems>
      </Menu>
    </div>
  );
}

export default Nav;
