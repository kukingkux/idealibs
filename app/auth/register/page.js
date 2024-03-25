"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import axiosInstance from "@/app/axios";
import bg from "../../../public/images/Img-Login.png";

export default function Register() {
	const [username, setUsername] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [conpassword, setConpassword] = useState("");

	const userData = JSON.parse(localStorage.getItem("user"));
	const router = useRouter();

	const handleSubmit = async (e) => {
		e.preventDefault();

		if (conpassword == password) {
			const res = await axiosInstance.post(
				"https://idealibs.cyclic.app/users/signup",
				{
					username: username,
					email: email,
					password: password,
					confirmPassword: conpassword,
				}
			);

			if (res.status == 200) {
				localStorage.setItem("user", JSON.stringify(res.data));
				router.push("/");
			}
		} else {
			const err = "Confirm password doesn't match";
		}
	};

	useEffect(() => {
		if (userData) {
			router.push("/home");
		}
	});

	return (
		<main className="flex min-h-screen flex-col bg-i01">
			<div className="flex flex-row">
				<div className="basis-2/3 hidden md:inline-block w-full">
					<div
						className="flex flex-col justify-between p-12 h-screen bg-cover"
						style={{ backgroundImage: `url(${bg.src})` }}
					>
						<img
							className="w-32"
							src="/images/Logo-Nav-Desktop.png"
							alt="Img-Login"
						/>
						<p className="z-10">
							Embark on your creative journey. Enter your realm of design with a
							few clicks. Let the inspiration unfold as you log in to your
							colorful canvas of possibilities.
						</p>
					</div>
					<div className="bg-gradient-to-t from-gray-950 opacity-90 absolute w-full h-64 z-0 bottom-0 hidden lg:block"></div>
				</div>
				<div className="flex flex-col grow justify-center basis 1/3 h-screen bg-i01 z-10 px-8 pb-8">
					<form onSubmit={handleSubmit}>
						<div className="">
							<img
								className="h-8 w-7 aspect-square"
								src="/images/Logo-Nav-Mobile.png"
								alt="Idealibs Logo"
							/>
						</div>
						<div className="w-full mt-2">
							<p className="font-bold my-2">Create an account</p>
							<p className="mt-2 mb-8">
								Get ready to explore a world full of ideas.
							</p>
						</div>
						<div className="mb-4">
							<p className="mb-2">Username</p>
							<div className="flex items-center ps-6 gap-4 rounded-lg w-full h-14 bg-i03 border border-i04">
								<svg
									width="24"
									height="24"
									viewBox="0 0 24 24"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										fillRule="evenodd"
										clipRule="evenodd"
										d="M21.375 11.5156C17.015 10.3916 13.608 6.98456 12.484 2.62456L12 0.747559L11.516 2.62456C10.392 6.98456 6.98505 10.3916 2.62505 11.5156L0.748047 11.9996L2.62505 12.4846C6.98505 13.6086 10.392 17.0156 11.516 21.3746L12 23.2526L12.484 21.3746C13.608 17.0156 17.015 13.6086 21.375 12.4846L23.252 11.9996L21.375 11.5156Z"
										fill="#FEFEFE"
									/>
									<path
										fillRule="evenodd"
										clipRule="evenodd"
										d="M18.7511 7.74697C18.7511 6.58497 20.0251 5.24797 21.2501 5.24797C20.0711 5.24797 18.7511 3.89697 18.7511 2.74997C18.7511 3.89697 17.4431 5.24797 16.2531 5.24797C17.3981 5.24797 18.7511 6.57797 18.7511 7.74697Z"
										fill="#FEFEFE"
									/>
								</svg>

								<input
									type="text"
									value={username}
									onChange={(e) => setUsername(e.target.value)}
									placeholder="Enter your username"
									className="w-full bg-i03 focus:outline-none"
								/>
							</div>
						</div>
						<div className="mb-4">
							<p className="mb-2">Email</p>
							<div className="flex items-center ps-6 gap-4 rounded-lg w-full h-14 bg-i03 border border-i04">
								<svg
									width="24"
									height="24"
									viewBox="0 0 20 20"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										fillRule="evenodd"
										clipRule="evenodd"
										d="M16.2666 16.1592C15.4199 13.4817 13.1449 11.9475 10.0224 11.9475H9.99991C6.86908 11.93 4.58241 13.475 3.73408 16.1592L3.63574 16.4709L3.91408 16.6409C5.54574 17.6359 7.58074 18.14 9.96074 18.14C9.98741 18.14 10.0141 18.14 10.0399 18.14C12.4532 18.14 14.4316 17.6492 16.0866 16.6409L16.3649 16.4709L16.2666 16.1592Z"
										fill="#FEFEFE"
									/>
									<path
										fillRule="evenodd"
										clipRule="evenodd"
										d="M10.0003 10.0907C12.2695 10.0907 14.1162 8.24486 14.1162 5.9757C14.1162 3.7057 12.2695 1.85986 10.0003 1.85986C7.73118 1.85986 5.88535 3.7057 5.88535 5.9757C5.88535 8.24486 7.73118 10.0907 10.0003 10.0907Z"
										fill="#FEFEFE"
									/>
								</svg>
								<input
									type="email"
									value={email}
									onChange={(e) => setEmail(e.target.value)}
									placeholder="Enter your email"
									className="w-full bg-i03 focus:outline-none"
								/>
							</div>
						</div>
						<div className="mb-4">
							<p className="mb-2">Password</p>
							<div className="flex items-center ps-6 gap-4 rounded-lg w-full h-14 bg-i03 border border-i04">
								<svg
									width="20"
									height="20"
									viewBox="0 0 20 20"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										fillRule="evenodd"
										clipRule="evenodd"
										d="M13.1745 7.50198H6.82454V6.17448C6.82788 5.32948 7.16038 4.53531 7.76204 3.93948C8.36038 3.34698 9.15121 3.02114 9.99454 3.02114H10.0079C11.7545 3.02114 13.1745 4.44198 13.1745 6.18864V7.50198ZM9.25788 14.4161H10.5079V11.3153H9.25788V14.4161ZM14.4245 7.50198V6.18864C14.4245 3.75281 12.4429 1.77114 10.0104 1.77114C8.84121 1.74698 7.72038 2.22114 6.88288 3.05114C6.04371 3.88198 5.57954 4.98948 5.57454 6.18864V7.50198H3.24121V18.2295H16.7579V7.50198H14.4245Z"
										fill="#FEFEFE"
									/>
								</svg>
								<input
									type="password"
									value={password}
									onChange={(e) => setPassword(e.target.value)}
									placeholder="Enter your password"
									className="w-full bg-i03 focus:outline-none"
								/>
							</div>
						</div>
						<div className="mb-4">
							<p className="mb-2">Confirm Password</p>
							<div className="flex items-center ps-6 gap-4 rounded-lg w-full h-14 bg-i03 border border-i04">
								<svg
									width="20"
									height="20"
									viewBox="0 0 20 20"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										fillRule="evenodd"
										clipRule="evenodd"
										d="M13.1745 7.50198H6.82454V6.17448C6.82788 5.32948 7.16038 4.53531 7.76204 3.93948C8.36038 3.34698 9.15121 3.02114 9.99454 3.02114H10.0079C11.7545 3.02114 13.1745 4.44198 13.1745 6.18864V7.50198ZM9.25788 14.4161H10.5079V11.3153H9.25788V14.4161ZM14.4245 7.50198V6.18864C14.4245 3.75281 12.4429 1.77114 10.0104 1.77114C8.84121 1.74698 7.72038 2.22114 6.88288 3.05114C6.04371 3.88198 5.57954 4.98948 5.57454 6.18864V7.50198H3.24121V18.2295H16.7579V7.50198H14.4245Z"
										fill="#FEFEFE"
									/>
								</svg>
								<input
									type="password"
									value={conpassword}
									onChange={(e) => setConpassword(e.target.value)}
									placeholder="Confirm your password"
									className="w-full bg-i03 focus:outline-none"
								/>
							</div>
						</div>
						<button
							type="submit"
							className="flex justify-center items-center rounded-iform w-full h-14 bg-gradient-to-r from-iorange to-ipink my-4"
						>
							Sign up
						</button>
						<div className="mt-4 text-center">
							<p>
								Do you have account?{" "}
								<Link
									href="/auth/login"
									className="bg-gradient-to-r from-iorange to-ipink text-transparent bg-clip-text font-semibold"
								>
									Sign in
								</Link>
							</p>
						</div>
					</form>
				</div>
			</div>
		</main>
	);
}
