import Featured from "@/components/marketing/landing/visitor/featured";
import Projects from "@/components/marketing/landing/visitor/projects";
import Team from "@/components/marketing/landing/visitor/team";
import Tonightpass from "@/components/marketing/landing/visitor/tonightpass";
import type { NextPage } from "next";
import React from "react";

const VisitorLanding: NextPage = () => {
  return (
    <>
      <Featured />
      <Tonightpass />
      <Team />
      <Projects />
    </>
  );
};

export default VisitorLanding;
