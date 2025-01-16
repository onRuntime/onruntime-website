import { Button } from "@/components/ui/button";
import type { NextPage } from "next";
import Link from "next/link";
import React from "react";

const CustomerLanding: NextPage = () => {
	return (
		<div>
			<h1>Customer</h1>
			<Link href={"/"}>
				<Button>Go to visitor</Button>
			</Link>
		</div>
	);
};

export default CustomerLanding;
