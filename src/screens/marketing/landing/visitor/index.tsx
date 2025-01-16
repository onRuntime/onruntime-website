import { Button } from "@/components/ui/button";
import type { NextPage } from "next";
import Link from "next/link";
import React from "react";

const VisitorLanding: NextPage = () => {
	return (
		<section className={"bg-gray-100"}>
			<h1>Visitor</h1>
			<Link href={"/customer"}>
				<Button>Go to customer</Button>
			</Link>
		</section>
	);
};

export default VisitorLanding;
