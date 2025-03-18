import React from "react";

interface LayoutProps {
  left: React.ReactNode;
  right: React.ReactNode;
  pagination?: React.ReactNode;
  recommend?: React.ReactNode;
  link?: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({
  left,
  right,
  pagination,
  recommend,
  link,
}) => {
  return (
    <div className="grid grid-cols-[1fr_6fr_1fr] relative w-full no-grid">
      <div className="flex justify-center mt-[250px]">{link}</div>
      <div className="">
        <div className="grid grid-cols-[3fr_1fr] gap-6 mb-[72px] layout">
          {left}
          {right}
        </div>
        <div>
          {pagination ? pagination : <div></div>}
          {recommend ? recommend : <div></div>}
        </div>
      </div>
    </div>
  );
};

export default Layout;
