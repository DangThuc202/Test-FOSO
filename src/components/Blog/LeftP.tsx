import React from "react";
import { useTranslation } from "react-i18next";
import items from "@/data/items";

interface LeftProps {
  currentPage: number;
}

const Left: React.FC<LeftProps> = ({ currentPage }) => {
  const { t } = useTranslation();

  const getPaginatedData = () => {
    const itemsPerPage = 6;
    const startIndex = (currentPage - 1) * itemsPerPage;
    return items.slice(startIndex, startIndex + itemsPerPage);
  };

  return (
    <div>
      <div className="text36 mb-6">{t("all.posts")}</div>
      <div className="py-[25px] items-center grid grid-cols-[1.5fr_1fr] overflow-hidden textWhite rounded40 bg-[linear-gradient(78deg,#013DA0_12%,#0142A9_21%,#0148B3_29%,#024EBC_38%,#0254C5_47%,#025ACE_56%,#0261D7_65%,#0267E1_73%,#036EEA_82%,#0375F3_91%)] w-full">
        <div className="ml-[59px] mt-5 leftP1">
          <div className="text36 mb-8 ">{t("join...")}</div>
          <button className="py-2 px-6 border-2 border-white rounded40 flex gap-8 items-center text14 bold hover">
            {t("join.now")}
            <img src="/icons/top-right-arrow2.svg" />
          </button>
        </div>
        <div>
          <img
            src="/icons/people.svg"
            className="transform translate-y-[25px] translate-x-[-25px]"
          />
        </div>
      </div>

      <div className="mt-12">
        <div className="grid grid-cols-[1fr_1fr] gap-x-8 gap-y-12">
          {getPaginatedData().map((item, index) => (
            <div key={index} className="flex flex-col gap-4 hover">
              <img
                src={item.img}
                alt={item.title}
                className="w-full rounded-[24px]"
              />
              <div className="bg-[#E2F0FE] py-1 px-2 text12 text-[#0F4F9E] w-fit mt-6">
                {t(item.tag)}
              </div>
              <div className="text24">{t(item.title)}</div>
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
    </div>
  );
};

export default Left;
