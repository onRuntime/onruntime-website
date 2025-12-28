import Featured from "@/components/marketing/landing/visitor/featured";
import Projects from "@/components/marketing/landing/visitor/projects";
import Team from "@/components/marketing/landing/visitor/team";
import type { NextPage } from "next";
import React from "react";

const VisitorLanding: NextPage = () => {
  return (
    <>
      <Featured />
      <Team />
      <Projects />
    </>
  );
};

export default VisitorLanding;
