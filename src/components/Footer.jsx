import React from "react";
import { useTranslation } from "react-i18next";

function Footer() {
  const { t } = useTranslation(["footer", "common"]);
  return (
    <div className="w-full h-10 box-border bg-stone-800 flex justify-center">
      <span className="text-white text-sm self-center">
        © 2025 Ignacio Orellano. {t("rights")}.
      </span>
    </div>
  );
}

export default Footer;
