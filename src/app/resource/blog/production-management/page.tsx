"use client";
import Link from "@/components/Blog/Production_Management/components/Link";
import Recommend from "@/components/Blog/Production_Management/components/Recommend";
import Left from "@/components/Blog/Production_Management/LeftC";
import Right from "@/components/Blog/Production_Management/RightC";
import Layout from "@/components/Layout";
import React from "react";

const page = () => {
  return (
    <Layout
      link={<Link />}
      left={<Left />}
      right={<Right />}
      recommend={<Recommend />}
    />
  );
};

export default page;
