import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

const Path = () => {
  const { t } = useTranslation();
  const [pathSegments, setPathSegments] = useState<string[]>([]);

  useEffect(() => {
    setPathSegments(window.location.pathname.split("/").filter(Boolean));
  }, []);

  return (
    <div>
      {t("home")} &gt;{" "}
      {pathSegments.map((segment, index) => {
        const isLast = index === pathSegments.length - 1; // Kiểm tra phần tử cuối
        return (
          <span key={index}>
            {isLast ? <strong>{t(segment)}</strong> : t(segment)}
            {index < pathSegments.length - 1 && " > "}
          </span>
        );
      })}
    </div>
  );
};

export default Path;
