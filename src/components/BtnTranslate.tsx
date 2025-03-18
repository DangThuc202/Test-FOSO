import React, { useRef, useState } from "react";
import { useTranslation } from "react-i18next";

const BtnTranslate = () => {
  const { i18n } = useTranslation();
  const [language, setLanguage] = useState("vi");
  const dropdownRef = useRef<HTMLDivElement | null>(null);

  const toggleDropdown = () => {
    if (dropdownRef.current) {
      dropdownRef.current.classList.toggle("hidden");
    }
  };

  const changeLanguage = (lang: string) => {
    i18n.changeLanguage(lang);
    setLanguage(lang);
    if (dropdownRef.current) {
      dropdownRef.current.classList.add("hidden");
    }
  };

  return (
    <div>
      <button
        onClick={toggleDropdown}
        style={{
          borderImageSource:
            "linear-gradient(360deg, rgba(9,9,11,0.05) 0%, rgba(9,9,11,0.1) 100%)",
          borderImageSlice: "1",
        }}
        className="flex pointer items-center text14 rounded40 px-3 py-2 bg-gradient-to-t from-[rgba(9,9,11,0.05)] to-[rgba(9,9,11,0.1)]">
        <img
          src={
            language === "vi"
              ? "https://res.cloudinary.com/thucdang/image/upload/v1742029150/Navbar/s0w0gfn05ebg46fiwxqq.png"
              : "https://res.cloudinary.com/thucdang/image/upload/v1742029179/Navbar/fykbsnloykte3gvdznfv.png"
          }
          alt={language}
          className="h-6 w-6 rounded-[50%] mr-2"
        />
        {language === "vi" ? "VI" : "EN"}
        <img src="/icons/down-arrow.svg" className="ml-[3px]" />
      </button>

      <div
        ref={dropdownRef}
        className="absolute left-0 top-[100%] bg-white border rounded-md shadow-md hidden">
        <button
          className="flex py-2 px-2 pointer "
          onClick={() => changeLanguage(language === "vi" ? "en" : "vi")}>
          <img
            src={
              language === "vi"
                ? "https://res.cloudinary.com/thucdang/image/upload/v1742029179/Navbar/fykbsnloykte3gvdznfv.png"
                : "https://res.cloudinary.com/thucdang/image/upload/v1742029150/Navbar/s0w0gfn05ebg46fiwxqq.png"
            }
            className="w-6 h-6 rounded-[50%] mr-2"
          />
          {language === "vi" ? "EN" : "VI"}
        </button>
      </div>
    </div>
  );
};

export default BtnTranslate;
