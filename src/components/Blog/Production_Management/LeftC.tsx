"use client";
import React from "react";
import { useTranslation } from "react-i18next";
import "@/styles/styles.css";
import data from "@/data/data";
import Figure from "./components/Figure";
import Rate from "./components/Rate";
import Path from "@/components/Path";

const Highlight5S: React.FC<{ text: string }> = ({ text }) => {
  if (!text) return null;

  const formattedText = text.replace(
    /5S/g,
    '<span class="special-text">5</span>S'
  );

  return <span dangerouslySetInnerHTML={{ __html: formattedText }} />;
};

const HighlightText: React.FC<{ text: string }> = ({ text }) => {
  if (!text) return null;

  const formattedText = text.replace(
    /(• Seiri|• Seiso|• Seiton|• Shitsuke|• Seiketsu)/g,
    '<span class="text-[#15AA7A]">$1</span>'
  );

  return <span dangerouslySetInnerHTML={{ __html: formattedText }} />;
};

const generateId = (title: string) => title.toLowerCase().replace(/\s+/g, "-");

const Left = () => {
  const { t } = useTranslation();
  return (
    <div className="flex flex-col gap-12">
      <Path />
      {data.map((data, index) => (
        <div key={index} className="flex flex-col gap-4">
          <div className="bg-[#E2F0FE] text-[#0F4F9E] text12 py-1 px-2 w-fit rounded-[8px]">
            {t("production.management")}
          </div>

          <div className="text36">{t(data.bigTitle)}</div>

          <div className="flex justify-between items-center">
            <div className="flex gap-3 text-center">
              <img src="/icons/logo.svg" className="logoC1" />
              <div className="flex flex-col justify-center text-left  ">
                <div className="text-[#667F93] text14">{t("author")}</div>
                <div className="bold">{data.author}</div>
              </div>
            </div>

            <div>
              <div className="flex h-auto gap-12 infoC1">
                <div className="flex gap-2 text-[#667F93]">
                  <img src="/icons/calendar.svg" className="iconC1" />
                  <span>
                    {t("update.on")} {data.updated}
                  </span>
                </div>
                <div className="flex gap-2 text-[#667F93]">
                  <img src="/icons/clock.svg" className="iconC1" />
                  <span>{t("10.min.read")}</span>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-6">
            <Figure img={data.img} desc={t(data.desc)} />
            <div className="flex text-center relative">
              <img src="/icons/a.svg" className="absolute imgC1" />
              <div className="text20 text-[#33404A] italic px-[61px] pt-3 pb-2 descC1">
                {t("content")}
              </div>
            </div>
          </div>

          {data.children.map((child, index) => (
            <div key={index} className="mb-6">
              <div className="mb-8">
                <Figure img={child?.img || ""} desc={t(child?.desc || "")} />
              </div>
              <div className="title mb-6" id={generateId(child.title)}>
                <Highlight5S text={t(child.title)} />
              </div>
              <div className="flex flex-col gap-6">
                {child.content.map((item, index) => {
                  if (typeof item === "string") {
                    if (item === "content1-2") {
                      const textWithLink = t(item).replace(
                        "5S",
                        `<a href="https://vi.wikipedia.org/wiki/5S" target="_blank" class="underline ">
                          <span class="special-text">5</span>S
                        </a>`
                      );

                      return (
                        <p
                          key={index}
                          dangerouslySetInnerHTML={{ __html: textWithLink }}
                        />
                      );
                    }

                    return (
                      <p key={index}>
                        <Highlight5S text={t(item)} />
                      </p>
                    );
                  } else if (Array.isArray(item)) {
                    const hasListItems = item.some(
                      (subItem) =>
                        typeof subItem === "object" &&
                        "li" in subItem &&
                        subItem.li
                    );

                    if (hasListItems) {
                      return (
                        <ul key={index} className="list-disc pl-5">
                          {item.map((subItem, subIndex) => {
                            if (
                              typeof subItem === "object" &&
                              "li" in subItem &&
                              subItem.li
                            ) {
                              return (
                                <li key={subIndex}>
                                  <HighlightText text={t(subItem.content)} />
                                </li>
                              );
                            }
                            return null;
                          })}
                        </ul>
                      );
                    }

                    return (
                      <div key={index} className="flex flex-col gap-4">
                        {item.map((subItem, subIndex) => {
                          if (typeof subItem === "string") {
                            return (
                              <div key={subIndex}>
                                <HighlightText text={t(subItem)} />
                              </div>
                            );
                          } else if (typeof subItem === "object") {
                            return (
                              <div
                                key={subIndex}
                                className={
                                  ("css" in subItem ? subItem.css : "") || ""
                                }>
                                {"title" in subItem && (
                                  <h3
                                    className="text-[#15AA7A]"
                                    id={generateId(subItem.title)}>
                                    {t(subItem.title)}
                                  </h3>
                                )}
                                <HighlightText text={t(subItem.content)} />
                              </div>
                            );
                          }
                          return null;
                        })}
                      </div>
                    );
                  }
                  return null;
                })}
              </div>
            </div>
          ))}
        </div>
      ))}

      <div className="flex">
        <Rate />
      </div>
    </div>
  );
};

export default Left;
