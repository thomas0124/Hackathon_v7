import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";

const inter = Inter({ subsets: ["latin"] });

export const dynamic = "force-dynamic";

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="ja">
			<meta property="og:type" content="website" />
			<meta property="og:title" content="リサーチナビ" />
			<meta
				property="og:description"
				content="論文の検索や管理をサポートするアプリ"
			/>
			<meta
				property="og:url"
				content="https://hackathon-v7.vercel.app/"
			/>
			<meta property="og:site_name" content="リサーチナビ" />
			<meta
				property="og:image"
				content="https://hackathon-v7.vercel.app/opengraph-image.png"
			/>
			<meta property="og:image:type" content="image/png" />
			<meta property="og:image:width" content="1200" />
			<meta property="og:image:height" content="630" />
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
