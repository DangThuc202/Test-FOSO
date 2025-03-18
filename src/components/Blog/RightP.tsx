import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import Sidebar from "../Sidebar";

const Right = () => {
  const { t } = useTranslation();
  const [navOpen, setNavOpen] = useState(false);

  const categories = [
    {
      title: t("all"),
      quantity: 108,
    },
    {
      title: t("website.design"),
      quantity: 36,
    },
    {
      title: t("app.mobile.design"),
      quantity: 13,
    },
    {
      title: t("production.management"),
      quantity: 25,
      link: "/resource/blog/production-management",
    },
    {
      title: t("sales.management"),
      quantity: 22,
    },
    {
      title: t("press.about.FOSO"),
      quantity: 7,
    },
    {
      title: t("FOSO.news"),
      quantity: 5,
    },
  ];

  return (
    <>
      <div className="flex flex-col gap-8 hide">
        <div className="flex flex-col gap-6">
          <div className="text24">{t("search")}</div>
          <div className="relative flex w-full items-center">
            <input
              placeholder={t("search.for.articles")}
              className="py-6 pl-6 shadow-[0px_12px_24px_-4px_#919EAB29] w-full relative"
            />
            <button className="bg-[#15AA7A] p-3 rounded-[12px] absolute right-3 hover">
              <img src="/icons/search.svg" />
            </button>
          </div>
        </div>
        <div className="flex flex-col gap-6">
          <div className="text24">{t("category")}</div>
          <div className="flex flex-col gap-4">
            {categories.map((category, index) => (
              <a
                key={index}
                href={category.link}
                className="flex justify-between text18 text-[#667F93] border-b border-[#F1F5F7] pb-2 hover">
                <div className="">{category.title}</div>
                <div className="">{category.quantity}</div>
              </a>
            ))}
          </div>
        </div>
        <div>
          <img src="/icons/img1.svg" className="hover" />
        </div>
        <div>
          <img src="/icons/img2.svg" className="hover" />
        </div>
      </div>

      <button
        className="show my-3 ml-2 py-1 px-3 border-[1px] relative text-[16px] h-fit"
        onClick={() => setNavOpen(!navOpen)}>
        ☰
      </button>

      <Sidebar isOpen={navOpen} setOpen={setNavOpen} position="right">
        <div className="flex flex-col gap-8">
          <div className="flex flex-col gap-6">
            <div className="text24">{t("search")}</div>
            <div className="relative flex w-full items-center">
              <input
                placeholder={t("search.for.articles")}
                className="py-6 pl-6 shadow-[0px_12px_24px_-4px_#919EAB29] w-full input"
              />
              <button className="bg-[#15AA7A] p-3 rounded-[4px] absolute right-3 button">
                <img src="/icons/search.svg" className="h-[15px] w-[15px]" />
              </button>
            </div>
          </div>
          <div className="flex flex-col gap-6">
            <div className="text24">{t("category")}</div>
            <div className="flex flex-col gap-4">
              {categories.map((category, index) => (
                <a
                  key={index}
                  href={category.link}
                  className="flex justify-between text18 text-[#667F93] border-b border-[#F1F5F7] pb-2">
                  <div>{category.title}</div>
                  <div>{category.quantity}</div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </Sidebar>
    </>
  );
};

export default Right;
