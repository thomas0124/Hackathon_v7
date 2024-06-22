// components/Header.tsx

import Link from "next/link";
import React from "react";

import UserButton from "@/components/user-button";
import ServerComponent from "@/components/server-component";

const Header = () => {
	return (
		<header className="p-2 bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% ">
			<div className="flex justify-between">
				<ServerComponent />
				<div className="flex">
					<Link className="mx-5 my-4 text-2xl text-white" href={"/"}>
						Home
					</Link>
					<Link className="mx-5 my-4 text-2xl text-white" href={"/dashboard"}>
						dashboard
					</Link>
					<UserButton />
				</div>
			</div>
		</header>
	);
};

export default Header;
