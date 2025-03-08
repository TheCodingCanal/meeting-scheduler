import Link from "next/link";
import { RegisterForm } from "./registerForm";

export default function RegisterPage() {
	return (
		<div className="h-screen w-screen flex justify-center items-center bg-slate-100">
			<div className="shadow-xl px-8 pb-8 pt-12 bg-white rounded-xl space-y-12">
				<h1 className="font-semibold text-4xl text-center">
					Create your Account
				</h1>
				<RegisterForm />
			</div>
		</div>
	);
}
