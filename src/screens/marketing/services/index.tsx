import ServicesGrid from "@/components/marketing/services/grid";
import Hero from "@/components/marketing/services/hero";
import { NextPage } from "next";
import React from "react";

const ServicesPage: NextPage = () => {
  return (
    <>
      <Hero />
      <ServicesGrid />
    </>
  );
};

export default ServicesPage;
