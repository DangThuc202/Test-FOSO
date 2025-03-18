"use client";
import React from "react";
import "@/styles/styles.css";
import { useTranslation } from "react-i18next";
import Path from "../Path";

const Banner = () => {
  const { t } = useTranslation();
  return (
    <div className="flex justify-center items-center mb-[96px] banner">
      <div className="min-h-[268px] max-w-[292px] pl-[43px] flex items-center banner-img">
        <img
          src="https://res.cloudinary.com/thucdang/image/upload/v1742043421/Navbar/cdfffb36b1833b8a6828c5ce85910382_rgbhrv.png"
          className="w-fit "
        />
      </div>
      <div className="min-w-2/3 flex flex-col g8 items-center">
        <Path />
        <div className="text-center text64">
          Blog {""}
          <span className=" bold bg-[linear-gradient(90deg,#53B086_0%,rgba(83,176,134,0.99)_27.5%),radial-gradient(ellipse_at_center,rgba(84,171,177,0)_0%,rgba(84,171,177,0.409)_34.38%,rgba(133,238,179,0.71)_51.52%,rgba(84,171,177,0)_100%)] bg-clip-text text-transparent">
            FOSO
          </span>{" "}
          –
          <br />
          {t("update.news")} <span className="latest">{t("latest")}</span>
        </div>
        <div className=" mb-4 text-center">{t("banner.text")}</div>
      </div>
      <div className="max-h-[251px] max-w-[320px] pr-[63px] flex items-center banner-img">
        <img
          src="https://res.cloudinary.com/thucdang/image/upload/v1742043529/Navbar/30cd70aca236d986b8828bb5ad1ed8a5_fvaeeq.png"
          className="w-fit "
        />
      </div>
    </div>
  );
};

export default Banner;
