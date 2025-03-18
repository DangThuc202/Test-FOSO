import React from "react";

interface IFigure {
  img?: string;
  desc: string;
}

const Figure: React.FC<IFigure> = ({ img, desc }) => {
  return (
    <div>
      {img && <img src={img} className="rounded-[8px] mb-2" />}
      <div className="text-[#667F93] text-center">{desc}</div>
    </div>
  );
};

export default Figure;
