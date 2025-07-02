import Featured from "@/components/marketing/landing/visitor/featured";
import Projects from "@/components/marketing/landing/visitor/projects";
import Team from "@/components/marketing/landing/visitor/team";
import Tonightpass from "@/components/marketing/landing/visitor/tonightpass";
import Services from "@/components/marketing/landing/visitor/services";
import type { NextPage } from "next";
import React from "react";
import Reviews from "@/components/marketing/landing/visitor/reviews";
import LucasTestimonial from "@/components/marketing/landing/visitor/testimonial";

const VisitorLanding: NextPage = () => {
  return (
    <>
      <Featured />
      <Tonightpass />
      <Services />
      <Team />
      <Reviews />
      <LucasTestimonial />
      <Projects />
    </>
  );
};

export default VisitorLanding;
