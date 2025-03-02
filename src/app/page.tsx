import { Button } from "@/components/ui/button";
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import HomePage from "./home/HomePage";

export default function Home() {
    const user = null;
    return (
        <div className="container mx-auto p-4">
            {user == null ? (
                <div className="flex gap-4">
                    <Button asChild>
                        <Link href="/sign-in">Sign In</Link>
                    </Button>
                    <Button asChild>
                        <Link href="/sign-up">Sign Up</Link>
                    </Button>
                </div>
            ) : (
                <HomePage/>
            )}
        </div>
    );
}
