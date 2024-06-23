import type { Session } from "next-auth";

import { auth } from "@/lib/auth";

export default async function ServerComponent() {
	const session: Session | null = await auth();

	return (
		<div className="text-left">
			{session ? (
				<div>
					<img
						src={session.user?.image ?? ""}
						alt=""
						style={{ borderRadius: "50px", width: "70px", float: "left" }}
					/>
				</div>
			) : (
				<div className="mt-4 text-2xl text-white">user: not signed in</div>
			)}
		</div>
	);
}
