import React from "react";
import { useTranslation } from "react-i18next";
import "@/styles/styles.css";

const Link = () => {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col gap-2 hide">
      <div className="bold">{t("share")}</div>
      <div className="share">
        <img src="/icons/zalo.svg" />
      </div>
      <div className="share">
        <img src="/icons/fb.svg" />
      </div>{" "}
      <div className="share">
        <img src="/icons/twitter.svg" />
      </div>{" "}
      <div className="share">
        <img src="/icons/likedin.svg" />
      </div>{" "}
      <div className="share">
        <img src="/icons/face.svg" />
      </div>
    </div>
  );
};

export default Link;
