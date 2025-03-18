"use client";
import "@/styles/styles.css";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import BtnTranslate from "./BtnTranslate";
import Sidebar from "./Sidebar";

const Navbar = () => {
  const { t } = useTranslation();

  const items = [
    {
      title: t("about.us"),
    },
    {
      title: t("solution"),
      children: [],
    },
    {
      title: t("resource"),
      children: [
        {
          title: "Blog",
          link: "/resource/blog",
        },
      ],
    },
    {
      title: t("contact"),
    },
  ];

  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const [selectedItem, setSelectedItem] = useState<string | null>(null);
  const [activeTitle, setActiveTitle] = useState<string | null>(null);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [open, setOpen] = useState(false);
  const toggleSubMenu = (title: string) => {
    setActiveTitle(activeTitle === title ? null : title);
  };

  const toggleMenu = (title: string) => {
    setOpenMenu(openMenu === title ? null : title);
  };

  const [navOpen, setNavOpen] = useState(false);

  return (
    <>
      <div className="min-w-2/3 mb-6 sticky top-0 z-100">
        <div className=" bg-[#FFFFFFA6] shadow-[1px_-1px_0px_0px_#F0F0F0] mt-6 mb-6 backdrop-blur-[25px] px-5 rounded40 hide">
          <div className="flex py-3 gap-16 items-center justify-center">
            <div className="">
              <img
                src="https://res.cloudinary.com/thucdang/image/upload/v1742025925/Navbar/6e981218d4aee7968a13351e9bc8d935_b1wog0.png"
                className="w-[134px]"
              />
            </div>

            <ul className="flex">
              {items.map((item) => (
                <li key={item.title} className="relative ">
                  <button
                    onClick={() => {
                      setSelectedItem(item.title);
                      if (item.children) toggleMenu(item.title);
                    }}
                    className={`flex items-center px-2 hover ${
                      selectedItem === item.title ? "font-bold" : ""
                    }`}>
                    {item.title}{" "}
                    {item.children ? (
                      <img src="/icons/down-arrow.svg" className="px-2" />
                    ) : (
                      ""
                    )}
                  </button>
                  {item.children && openMenu === item.title && (
                    <ul className="absolute left-0 mt-2 bg-gray-100 p-2 shadow-md">
                      {item.children.map((child) => (
                        <a href={child.link} key={child.title} className="p-2">
                          {child.title}
                        </a>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ul>

            <div className="relative flex g8">
              <BtnTranslate />

              <div>
                <button className="flex bg-[#1AD598] py-[8.5px] px-3 rounded40 text14 bold g12 hover">
                  {t("become.a.customer")}{" "}
                  <img src="/icons/top-right-arrow.svg" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <button
        className="show my-3 ml-2 py-1 px-3 border-[1px] relative text-[16px]"
        onClick={() => setNavOpen(!navOpen)}>
        ☰
      </button>

      <Sidebar isOpen={navOpen} setOpen={setNavOpen} position="left">
        {" "}
        <ul className="p-5 flex flex-col justify-center">
          <div className="flex justify-center">
            <img
              className="w-[100px] h-[50px] mb-4"
              src="https://res.cloudinary.com/thucdang/image/upload/v1742025925/Navbar/6e981218d4aee7968a13351e9bc8d935_b1wog0.png"
            />
          </div>
          {items.map((item) => (
            <li key={item.title} className="py-2 border-b">
              <button
                className="w-full text-left flex justify-between items-center"
                onClick={() =>
                  item.children ? toggleSubMenu(item.title) : setOpen(false)
                }>
                {item.title}
                {item.children && (
                  <span>{activeTitle === item.title ? "▲" : "▼"}</span>
                )}
              </button>

              {item.children && activeTitle === item.title && (
                <ul className="ml-4 mt-2 border-l pl-4">
                  {item.children.map((child) => (
                    <a href={child.link} key={child.title} className="py-1">
                      {child.title}
                    </a>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </Sidebar>
    </>
  );
};

export default Navbar;
