// components/Header.tsx

import Link from "next/link";
import React from "react";

import UserButton from "@/components/user-button";
import ServerComponent from "@/components/server-component";

const Header = () => {
	return (
		<header
			className="p-2"
			style={{ background: "linear-gradient(to right, #64B5F6, #2196F3)" }}
		>
			<div className="flex justify-between">
				<ServerComponent />
				<div className="flex">
					<Link className="mx-5 my-3 underline text-xl text-white" href={"/"}>
						Home
					</Link>
					<Link
						className="mx-5 my-3 underline text-xl text-white"
						href={"/dashboard"}
					>
						dashboard
					</Link>
					<UserButton />
				</div>
			</div>
		</header>
	);
};

export default Header;
