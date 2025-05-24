import Header from "@/components/header";
import React from "react";

export default function Layout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<div className="layout">
			<Header />
			<main className="content">{children}</main>
		</div>
	);
}
