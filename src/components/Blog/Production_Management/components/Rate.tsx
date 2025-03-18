import React from "react";
import rate from "@/data/rate";
import { useTranslation } from "react-i18next";

const Rate = () => {
  const { t } = useTranslation();
  return (
    <div className="flex flex-col gap-6 items-center w-full py-6 shadow-[0px_1px_3px_0px_rgba(18,18,23,0.10)] p-4 bg-white mt-4 rounded-[24px]">
      <div className="text20 bold">{t("rate.title")}</div>
      <div>4 {t("response")}</div>
      <div className="flex gap-8 a">
        {rate.map((rate, index) => (
          <div
            key={index}
            className="flex flex-col gap-1 items-center text-center px-[21px] py-1 px">
            <>
              <img src={rate.img} className="w-[48px] h-[48px] rate" />
              <div className="text-[#33404A]">{rate.quantity}</div>
              <div className="text-[#33404A] text14">{t(rate.desc)}</div>
            </>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Rate;
