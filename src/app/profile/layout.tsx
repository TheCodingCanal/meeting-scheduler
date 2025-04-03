"use client";

import React from "react";
import Header from "@/components/header";

// The layout component that wraps the profile page and others
const ProfileLayout = ({ children }: { children: React.ReactNode }) => {
	return (
		<div>
			<Header />
			<main>{children}</main>
		</div>
	);
};

export default ProfileLayout;
