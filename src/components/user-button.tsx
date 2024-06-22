import { auth, signIn, signOut } from "@/lib/auth";

export default async function UserButton() {
	const session = await auth();
	return (
		<div>
			{!session && (
				<form
					action={async () => {
						"use server";
						await signIn("GitHub");
					}}
				>
					<button
						type="submit"
						className="mx-5 my-3 rounded bg-white px-4 py-2 font-bold text-black hover:bg-blue-400"
					>
						Sign in
					</button>
				</form>
			)}
			{session && (
				<form
					action={async () => {
						"use server";
						await signOut();
					}}
				>
					<button
						type="submit"
						className="mx-5 my-3 rounded bg-white px-4 py-2 font-bold text-black text-xl hover:bg-blue-400"
					>
						Sign out
					</button>
				</form>
			)}
		</div>
	);
}
