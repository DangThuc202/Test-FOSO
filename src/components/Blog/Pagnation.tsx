"use client";
import React, { useState } from "react";
import "@/styles/styles.css";
import { useTranslation } from "react-i18next";

interface PaginationProps {
  totalPages: number;
  onPageChange: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({
  totalPages,
  onPageChange,
}) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [expanded, setExpanded] = useState(false);

  const { t } = useTranslation();

  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
      onPageChange(page);
      setExpanded(page === 3);
    }
  };

  const renderPages = () => {
    let pages: (number | string)[] = [];

    if (totalPages <= 7) {
      pages = Array.from({ length: totalPages }, (_, i) => i + 1);
    } else if (expanded) {
      pages = [1, 2, 3, 4, 5, 6, 7, "...", totalPages];
    } else if (currentPage <= 3) {
      pages = [1, 2, 3, "...", totalPages];
    } else if (currentPage >= totalPages - 2) {
      pages = [
        1,
        "...",
        totalPages - 4,
        totalPages - 3,
        totalPages - 2,
        totalPages - 1,
        totalPages,
      ];
    } else {
      pages = [
        1,
        "...",
        currentPage - 1,
        currentPage,
        currentPage + 1,
        "...",
        totalPages,
      ];
    }

    return pages.map((page, index) => (
      <button
        key={index}
        onClick={() => typeof page === "number" && handlePageChange(page)}
        className={`px-3 py-1 hover  rounded ${
          page === currentPage
            ? "bg-[#D1F7EA] text-[#052B1E] bold"
            : "bg-white text-[#809FB8]"
        }`}
        disabled={page === "..."}>
        {page}
      </button>
    ));
  };

  return (
    <div className="flex items-center justify-between">
      <button
        onClick={() => handlePageChange(currentPage - 1)}
        className="flex gap-2 hover text-[#B3C5D4]"
        disabled={currentPage === 1}>
        ← <span className="hide">{t("previous")}</span>
      </button>
      <div>{renderPages()}</div>
      <button
        onClick={() => handlePageChange(currentPage + 1)}
        className="flex hover gap-2 text-[#B3C5D4]"
        disabled={currentPage === totalPages}>
        <span className="hide">{t("next")}</span> →
      </button>
    </div>
  );
};

export default Pagination;
