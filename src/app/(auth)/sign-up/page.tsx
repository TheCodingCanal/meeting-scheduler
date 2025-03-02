import { SignUpForm } from "@/authentication/nextjs/components/SignUpForm";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import React from "react";

export default function SignUp() {
    return (
        <div>
            <Card>
                <CardHeader>
                    <CardTitle>Sign-up Page</CardTitle>
                    <CardDescription>Description</CardDescription>
                </CardHeader>
                <CardContent>
                    <SignUpForm/>
                </CardContent>
                <CardFooter>
                    <p>Card Footer</p>
                </CardFooter>
            </Card>
        </div>
    );
}
