import type React from "react";

const LandingLayout = ({ children }: React.PropsWithChildren) => {
	return <main className="w-full">{children}</main>;
};

export default LandingLayout;
