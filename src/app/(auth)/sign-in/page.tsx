import { SignInForm } from "@/authentication/nextjs/components/SignInForm";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import React from "react";

export default function SignIn() {
    return (
        <div>
            <Card>
                <CardHeader>
                    <CardTitle>Sign-in Page</CardTitle>
                    <CardDescription>Description</CardDescription>
                </CardHeader>
                <CardContent>
                    <SignInForm/>
                </CardContent>
                <CardFooter>
                    <p>Card Footer</p>
                </CardFooter>
            </Card>
        </div>
    );
}
