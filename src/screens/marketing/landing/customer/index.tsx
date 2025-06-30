import CustomerService from "@/components/marketing/landing/customer/customer-service";
import Featured from "@/components/marketing/landing/customer/featured";
import type { NextPage } from "next";
import React from "react";

const CustomerLanding: NextPage = () => {
  return (
    <>
      <Featured />
      <CustomerService />
    </>
  );
};

export default CustomerLanding;
