import { Button } from "@/components/ui/button";
import {
	NavigationMenu,
	NavigationMenuContent,
	NavigationMenuItem,
	NavigationMenuLink,
	NavigationMenuList,
	NavigationMenuTrigger,
	navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import Routes from "@/constants/routes";
import Link from "next/link";
import type React from "react";

const Navbar: React.FC = () => {
	return (
		<nav className="fixed w-full max-w-4xl mt-2.5 flex justify-between items-center p-4 bg-background rounded-lg shadow-xs filter:backdrop-blur">
			<Link href={Routes.landing.visitor}>brand</Link>

			<NavigationMenu>
				<NavigationMenuList>
					<NavigationMenuItem>
						<NavigationMenuTrigger>Nos services</NavigationMenuTrigger>

						<NavigationMenuContent>
							<NavigationMenuLink>Link</NavigationMenuLink>
						</NavigationMenuContent>
					</NavigationMenuItem>

					<NavigationMenuItem>
						<NavigationMenuTrigger>Nos projets</NavigationMenuTrigger>

						<NavigationMenuContent>
							<NavigationMenuLink>Link</NavigationMenuLink>
						</NavigationMenuContent>
					</NavigationMenuItem>

					<Link href="/docs" legacyBehavior passHref>
						<NavigationMenuLink className={navigationMenuTriggerStyle()}>
							Le studio
						</NavigationMenuLink>
					</Link>
				</NavigationMenuList>
			</NavigationMenu>

			<Button variant={"outline"}>Nous contacter</Button>
		</nav>
	);
};

export default Navbar;
