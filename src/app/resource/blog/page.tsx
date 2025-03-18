"use client";
import React, { useState } from "react";
import Banner from "@/components/Blog/Banner";
import Left from "@/components/Blog/LeftP";
import Right from "@/components/Blog/RightP";
import Pagination from "@/components/Blog/Pagnation";
import Layout from "@/components/Layout";

const Blog = () => {
  const [currentPage, setCurrentPage] = useState(1);
  return (
    <div className="relative overflow-hidden">
      <div
        style={{
          backdropFilter: "blur(267.44708251953125px)",
        }}
        className="hide-z-10 absolute left-[-300px] top-[300px] min-w-[500px] min-h-[500px] rounded-full opacity-20 bg-[linear-gradient(90deg,#E0FFCC_0%,#CCFFEC_100%)]"></div>{" "}
      <Banner />
      <Layout
        left={<Left currentPage={currentPage} />}
        right={<Right />}
        pagination={
          <Pagination totalPages={10} onPageChange={setCurrentPage} />
        }
      />
      <div
        style={{
          backdropFilter: "blur(267.44708251953125px)",
        }}
        className="hide -z-10 absolute right-[-350px] bottom-[20px] min-w-[500px] min-h-[500px] rounded-full opacity-30 bg-gradient-to-l from-[#E0FFCC] to-[#CCFFEC] backdrop-blur-[267px]]"></div>{" "}
    </div>
  );
};

export default Blog;
