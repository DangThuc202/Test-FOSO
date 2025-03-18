import data from "@/data/data";
import { generateId } from "@/utils/utils";
import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import "@/styles/styles.css";

const Right = () => {
  const [t] = useTranslation();
  const [isOpen, setIsOpen] = useState(true);

  const handleScroll = (title: string) => {
    const element = document.getElementById(generateId(title));
    element?.scrollIntoView({ behavior: "smooth", block: "center" });
  };

  return (
    <div className="flex flex-col gap-6 hide">
      <div>
        <div className="text24 pb-6 flex items-center justify-between">
          {t("article.content")}
          <span
            onClick={() => setIsOpen(!isOpen)}
            className="text-[20px] cursor-pointer text-[#15AA7A]">
            {isOpen ? "∧" : "∨"}
          </span>
        </div>
        {isOpen &&
          data.map((item, index) => (
            <div key={index}>
              {item.children.map((child, childIndex) => (
                <div key={childIndex}>
                  <h2
                    className="hover hover:text-[#15AA7A]"
                    onClick={() => handleScroll(child.title)}>
                    {t(child.title)}
                  </h2>

                  {Array.isArray(child.content) &&
                    child.content.map((contentItem, contentIndex) => (
                      <div key={contentIndex}>
                        {Array.isArray(contentItem) &&
                          contentItem.map((subItem, subIndex) => (
                            <div key={subIndex}>
                              {typeof subItem === "object" &&
                                "title" in subItem && (
                                  <div
                                    className="ml-4 hover hover:text-[#15AA7A]"
                                    onClick={() => handleScroll(subItem.title)}>
                                    {t(subItem.title)}
                                  </div>
                                )}
                            </div>
                          ))}
                      </div>
                    ))}
                </div>
              ))}
            </div>
          ))}
      </div>
      <div className="">
        <img className="hover" src="/icons/img1.svg" />
      </div>
      <div className="">
        <img className="hover" src="/icons/img2.svg" />
      </div>
    </div>
  );
};

export default Right;
