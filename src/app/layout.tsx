import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
			<body>
				<div className="mx-auto flex min-h-screen w-full flex-col">
					<Header />
					<main className="flex-grow">
						<div>{children}</div>
					</main>
				</div>
			</body>
		</html>
  );
}
