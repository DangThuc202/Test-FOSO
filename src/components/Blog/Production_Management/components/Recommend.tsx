import React from "react";
import items from "@/data/items";
import { useTranslation } from "react-i18next";

const Recommend = () => {
  const { t } = useTranslation();
  return (
    <div className="">
      <div className="text36 mb-6">{t("recommend")}</div>
      <div className="flex gap-8 recommend">
        {items.slice(0, 3).map((item, index) => (
          <div key={index} className="flex flex-col gap-4 hover w-fit">
            <img
              src={item.img}
              alt={item.title}
              className="w-full rounded-[24px]"
            />
            <div className="bg-[#E2F0FE] py-1 px-2 text12 text-[#0F4F9E] w-fit mt-6">
              {t(item.tag)}
            </div>
            <div className="text24z ">{t(item.title)}</div>
            <div className="flex gap-6 infoC1">
              <p className="text-sm text-gray-500 flex gap-2 items-center">
                <img src="/icons/calendar.svg" /> {item.date}
              </p>
              <p className="text-sm text-[#667F93] flex gap-2 items-center">
                <img src="/icons/clock.svg" /> {t(item.time)}
              </p>
            </div>
            <button className="flex gap-4 items-center hover">
              {t(item.more)} <img src="/icons/right-arrow.svg" />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Recommend;
