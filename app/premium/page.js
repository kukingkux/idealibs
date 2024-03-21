"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";
import Link from "next/link";
import bg from "@/public/images/Img-Hero-Photo.png";

export default function Premium() {
	const [open, setOpen] = useState(1);

	const handleOpen = (value) => setOpen(open === value ? 0 : value);
	const router = useRouter();

	return (
		<main>
			<div className="sticky top-0 w-full bg-i02 py-6 px-7 z-20 md:px-24">
				<div className="flex justify-between items-center">
					<button
						className="bg-i03 p-3 rounded-full"
						onClick={() => {
							router.back();
						}}
					>
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
								d="M18 10C18 10.4142 17.6642 10.75 17.25 10.75L4.6599 10.75L6.76034 12.7004C7.06387 12.9823 7.08145 13.4568 6.79959 13.7603C6.51774 14.0639 6.04319 14.0815 5.73966 13.7996L2.23966 10.5496C2.08684 10.4077 2 10.2086 2 10C2 9.79145 2.08684 9.59232 2.23966 9.45041L5.73966 6.20041C6.04319 5.91856 6.51774 5.93613 6.79959 6.23966C7.08145 6.5432 7.06387 7.01775 6.76034 7.2996L4.6599 9.25L17.25 9.25C17.6642 9.25 18 9.58579 18 10Z"
								fill="#FEFEFE"
							/>
						</svg>
					</button>
					<div className="">
						<img
							className="h-8 md:hidden"
							src="/images/Logo-Nav-Mobile.png"
							alt="Idealibs Logo"
						/>
						<img
							className="hidden h-5 md:block"
							src="/images/Logo-Nav-Desktop.png"
							alt="Idealibs Logo"
						/>
					</div>
					<div>
						<img
							src="/images/Img-Profile.png"
							className="rounded-full w-10 h-10"
						/>
					</div>
				</div>
			</div>
			<div className="md:inline-block w-full">
				<div
					className="flex flex-col justify-between p-10 md:p-20 bg-cover"
					style={{
						backgroundImage: `url(${bg.src})`,
						backgroundPosition: "center",
					}}
				>
					<div className="flex justify-center">
						<img
							className="h-6"
							src="/images/Logo-Nav-Desktop.png"
							alt="Img-Login"
						/>
					</div>
					<div className="text-center">
						<p className="font-medium text-lg md:text-3xl pt-10 md:pt-10 md:mb-4">
							Upgrade to Idealibs Premium and unlock a world of limitless
							creativity!
						</p>
						<p className="font-regular text-md hidden mx-32 md:block">
							Enjoy unlimited downloads, exclusive access to advanced AI art
							generator. and ad-free browsing. Elevate your design experience
							with our premium features and make your creativity soar!
						</p>
					</div>
				</div>
			</div>
			<div className="bg-i01 p-7 md:px-24 w-full">
				<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
					<div className="rounded-lg border-2 border-i02 bg-i01 p-7">
						<div className="flex flex-col">
							<p className="text-left font-bold text-xl mb-3 md:text-2xl md:font-semibold md:mb-10">
								Free user
							</p>
							<div className="grid grid-cols-1 gap-4 md:gap-8">
								<div className="flex items-center">
									<div>
										<svg
											xmlns="http://www.w3.org/2000/svg"
											viewBox="0 0 24 24"
											fill="currentColor"
											className="fill-blue-500 h-5 w-5 md:h-7 md:w-7"
										>
											<path
												fillRule="evenodd"
												d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z"
												clipRule="evenodd"
											/>
										</svg>
									</div>
									<p className="text-left font-light text-sm ml-4 md:text-base md:ml-6">
										Access to limited stock photos and design resources
									</p>
								</div>
								<div className="flex items-center">
									<div>
										<svg
											xmlns="http://www.w3.org/2000/svg"
											viewBox="0 0 24 24"
											fill="currentColor"
											className="fill-blue-500 h-5 w-5 md:h-7 md:w-7"
										>
											<path
												fillRule="evenodd"
												d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z"
												clipRule="evenodd"
											/>
										</svg>
									</div>
									<p className="text-left font-light text-sm ml-4 md:text-base md:ml-6">
										Basic usage of mockups and templates features
									</p>
								</div>
								<div className="flex items-center">
									<div>
										<svg
											xmlns="http://www.w3.org/2000/svg"
											viewBox="0 0 24 24"
											fill="currentColor"
											className="fill-gray-500 h-5 w-5 md:h-7 md:w-7"
										>
											<path
												fillRule="evenodd"
												d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm-1.72 6.97a.75.75 0 1 0-1.06 1.06L10.94 12l-1.72 1.72a.75.75 0 1 0 1.06 1.06L12 13.06l1.72 1.72a.75.75 0 1 0 1.06-1.06L13.06 12l1.72-1.72a.75.75 0 1 0-1.06-1.06L12 10.94l-1.72-1.72Z"
												clipRule="evenodd"
											/>
										</svg>
									</div>
									<p className="text-left font-light text-sm ml-4 md:text-base md:ml-6">
										Full access to extensive high-quality resources
									</p>
								</div>
								<div className="flex items-center">
									<div>
										<svg
											xmlns="http://www.w3.org/2000/svg"
											viewBox="0 0 24 24"
											fill="currentColor"
											className="fill-gray-500 h-5 w-5 md:h-7 md:w-7"
										>
											<path
												fillRule="evenodd"
												d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm-1.72 6.97a.75.75 0 1 0-1.06 1.06L10.94 12l-1.72 1.72a.75.75 0 1 0 1.06 1.06L12 13.06l1.72 1.72a.75.75 0 1 0 1.06-1.06L13.06 12l1.72-1.72a.75.75 0 1 0-1.06-1.06L12 10.94l-1.72-1.72Z"
												clipRule="evenodd"
											/>
										</svg>
									</div>
									<p className="text-left font-light text-sm ml-4 md:text-base md:ml-6">
										Unlimited mockup and template usage
									</p>
								</div>
								<div className="flex items-center">
									<div>
										<svg
											xmlns="http://www.w3.org/2000/svg"
											viewBox="0 0 24 24"
											fill="currentColor"
											className="fill-gray-500 h-5 w-5 md:h-7 md:w-7"
										>
											<path
												fillRule="evenodd"
												d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm-1.72 6.97a.75.75 0 1 0-1.06 1.06L10.94 12l-1.72 1.72a.75.75 0 1 0 1.06 1.06L12 13.06l1.72 1.72a.75.75 0 1 0 1.06-1.06L13.06 12l1.72-1.72a.75.75 0 1 0-1.06-1.06L12 10.94l-1.72-1.72Z"
												clipRule="evenodd"
											/>
										</svg>
									</div>
									<p className="text-left font-light text-sm ml-4 md:text-base md:ml-6">
										Priority access to updates and new features
									</p>
								</div>
								<div className="flex items-center">
									<div>
										<svg
											xmlns="http://www.w3.org/2000/svg"
											viewBox="0 0 24 24"
											fill="currentColor"
											className="fill-gray-500 h-5 w-5 md:h-7 md:w-7"
										>
											<path
												fillRule="evenodd"
												d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm-1.72 6.97a.75.75 0 1 0-1.06 1.06L10.94 12l-1.72 1.72a.75.75 0 1 0 1.06 1.06L12 13.06l1.72 1.72a.75.75 0 1 0 1.06-1.06L13.06 12l1.72-1.72a.75.75 0 1 0-1.06-1.06L12 10.94l-1.72-1.72Z"
												clipRule="evenodd"
											/>
										</svg>
									</div>
									<p className="text-left font-light text-sm ml-4 md:text-base md:ml-6">
										Exclusive participation in premium tutorials
									</p>
								</div>
								<div className="flex items-center">
									<div>
										<svg
											xmlns="http://www.w3.org/2000/svg"
											viewBox="0 0 24 24"
											fill="currentColor"
											className="fill-gray-500 h-5 w-5 md:h-7 md:w-7"
										>
											<path
												fillRule="evenodd"
												d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm-1.72 6.97a.75.75 0 1 0-1.06 1.06L10.94 12l-1.72 1.72a.75.75 0 1 0 1.06 1.06L12 13.06l1.72 1.72a.75.75 0 1 0 1.06-1.06L13.06 12l1.72-1.72a.75.75 0 1 0-1.06-1.06L12 10.94l-1.72-1.72Z"
												clipRule="evenodd"
											/>
										</svg>
									</div>
									<p className="text-left font-light text-sm ml-4 md:text-base md:ml-6">
										High-resolution downloads and enhanced customer support
									</p>
								</div>
								<div className="flex items-center">
									<div>
										<svg
											xmlns="http://www.w3.org/2000/svg"
											viewBox="0 0 24 24"
											fill="currentColor"
											className="fill-gray-500 h-5 w-5 md:h-7 md:w-7"
										>
											<path
												fillRule="evenodd"
												d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm-1.72 6.97a.75.75 0 1 0-1.06 1.06L10.94 12l-1.72 1.72a.75.75 0 1 0 1.06 1.06L12 13.06l1.72 1.72a.75.75 0 1 0 1.06-1.06L13.06 12l1.72-1.72a.75.75 0 1 0-1.06-1.06L12 10.94l-1.72-1.72Z"
												clipRule="evenodd"
											/>
										</svg>
									</div>
									<p className="text-left font-light text-sm ml-4 md:text-base md:ml-6">
										Ad-free browsing for a seamless design experience
									</p>
								</div>
							</div>
						</div>
					</div>
					<div className="rounded-lg bg-i02 p-7">
						<div className="flex flex-col">
							<p className="text-left font-bold text-xl mb-3 md:text-2xl md:font-semibold md:mb-10">
								Premium user
							</p>
							<div className="grid grid-cols-1 gap-4 md:gap-8">
								<div className="flex items-center">
									<div>
										<svg
											xmlns="http://www.w3.org/2000/svg"
											viewBox="0 0 24 24"
											fill="currentColor"
											className="fill-blue-500 h-5 w-5 md:h-7 md:w-7"
										>
											<path
												fillRule="evenodd"
												d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z"
												clipRule="evenodd"
											/>
										</svg>
									</div>
									<p className="text-left font-light text-sm ml-4 md:text-base md:ml-6">
										Full access to extensive high-quality resources
									</p>
								</div>
								<div className="flex items-center">
									<div>
										<svg
											xmlns="http://www.w3.org/2000/svg"
											viewBox="0 0 24 24"
											fill="currentColor"
											className="fill-blue-500 h-5 w-5 md:h-7 md:w-7"
										>
											<path
												fillRule="evenodd"
												d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z"
												clipRule="evenodd"
											/>
										</svg>
									</div>
									<p className="text-left font-light text-sm ml-4 md:text-base md:ml-6">
										Unlimited mockup and template usage
									</p>
								</div>
								<div className="flex items-center">
									<div>
										<svg
											xmlns="http://www.w3.org/2000/svg"
											viewBox="0 0 24 24"
											fill="currentColor"
											className="fill-blue-500 h-5 w-5 md:h-7 md:w-7"
										>
											<path
												fillRule="evenodd"
												d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z"
												clipRule="evenodd"
											/>
										</svg>
									</div>
									<p className="text-left font-light text-sm ml-4 md:text-base md:ml-6">
										Priority access to updates and new features
									</p>
								</div>
								<div className="flex items-center">
									<div>
										<svg
											xmlns="http://www.w3.org/2000/svg"
											viewBox="0 0 24 24"
											fill="currentColor"
											className="fill-blue-500 h-5 w-5 md:h-7 md:w-7"
										>
											<path
												fillRule="evenodd"
												d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z"
												clipRule="evenodd"
											/>
										</svg>
									</div>
									<p className="text-left font-light text-sm ml-4 md:text-base md:ml-6">
										Exclusive participation in premium tutorials
									</p>
								</div>
								<div className="flex items-center">
									<div>
										<svg
											xmlns="http://www.w3.org/2000/svg"
											viewBox="0 0 24 24"
											fill="currentColor"
											className="fill-blue-500 h-5 w-5 md:h-7 md:w-7"
										>
											<path
												fillRule="evenodd"
												d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z"
												clipRule="evenodd"
											/>
										</svg>
									</div>
									<p className="text-left font-light text-sm ml-4 md:text-base md:ml-6">
										High-resolution downloads and enhanced customer support
									</p>
								</div>
								<div className="flex items-center">
									<div>
										<svg
											xmlns="http://www.w3.org/2000/svg"
											viewBox="0 0 24 24"
											fill="currentColor"
											className="fill-blue-500 h-5 w-5 md:h-7 md:w-7"
										>
											<path
												fillRule="evenodd"
												d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z"
												clipRule="evenodd"
											/>
										</svg>
									</div>
									<p className="text-left font-light text-sm ml-4 md:text-base md:ml-6">
										Ad-free browsing for a seamless design experience
									</p>
								</div>
							</div>
							<div className="my-6 md:my-10">
								<p className="text-center text-2xl md:text-3xl font-semibold">
									<span className="text-i03 font-bold line-through">
										Rp.599.000
									</span>{" "}
									Rp.299.000
									<span className="text-sm font-medium">/month</span>
								</p>
							</div>
							<Link
								href="/payment"
								className="btn btn-neutral rounded-full border-0 text-white font-medium bg-gradient-to-r from-iorange to-ipink mt-2"
							>
								Upgrade now
							</Link>
						</div>
					</div>
				</div>
				<div className="flex flex-col mt-12 px-7 md:px-24 md:mt-20">
					<p className="text-center font-light text-sm mb-4 md:text-lg">
						Testimonial
					</p>
					<p className="text-center font-medium text-xl mb-4 md:text-3xl md:mb-8">
						What our users say about{" "}
						<span className="font-bold bg-gradient-to-r from-iorange to-ipink text-transparent bg-clip-text">
							Idealibs Premium
						</span>
					</p>
					<div className="grid grid-cols-1 gap-4">
						<div className="rounded-lg bg-i02 p-6">
							<div className="flex items-center mb-6">
								<div className="mr-5">
									<img
										src="/images/Img-Profile.png"
										className="rounded-full w-10 h-10 md:w-14 md:h-14"
									/>
								</div>
								<div>
									<p className="text-base md:text-lg font-semibold text-white mb-1">
										Maya
									</p>
									<p className="text-sm md:text-base font-light text-i04">
										Graphic Designer
									</p>
								</div>
							</div>
							<p className="text-white">
								&quot;I&apos;ve been a user of Idealibs Premium since 6 months,
								and it has truly transformed the game for me. Unimited access to
								the vector collection, photos, and AI tools has provided
								limitless inspiration for my design projects. Idealibs Premium
								is a highly valuable investment!&quot;
							</p>
						</div>
						<div className="rounded-lg bg-i02 p-6">
							<div className="flex items-center mb-6">
								<div className="mr-5">
									<img
										src="/images/Img-Profile.png"
										className="rounded-full w-10 h-10 md:w-14 md:h-14"
									/>
								</div>
								<div>
									<p className="text-base md:text-lg font-semibold text-white mb-1">
										Andika
									</p>
									<p className="text-sm md:text-base font-light text-i04">
										Digital Art Student
									</p>
								</div>
							</div>
							<p className="text-white">
								&quot;I&apos;ve been a user of Idealibs Premium since 6 months,
								and it has truly transformed the game for me. Unimited access to
								the vector collection, photos, and AI tools has provided
								limitless inspiration for my design projects. Idealibs Premium
								is a highly valuable investment!&quot;
							</p>
						</div>
						<div className="rounded-lg bg-i02 p-6">
							<div className="flex items-center mb-6">
								<div className="mr-5">
									<img
										src="/images/Img-Profile.png"
										className="rounded-full w-10 h-10 md:w-14 md:h-14"
									/>
								</div>
								<div>
									<p className="text-base md:text-lg font-semibold text-white mb-1">
										Fajar
									</p>
									<p className="text-sm md:text-base font-light text-i04">
										Social Media Enthusiasts
									</p>
								</div>
							</div>
							<p className="text-white">
								&quot;I&apos;ve been a user of Idealibs Premium since 6 months,
								and it has truly transformed the game for me. Unimited access to
								the vector collection, photos, and AI tools has provided
								limitless inspiration for my design projects. Idealibs Premium
								is a highly valuable investment!&quot;
							</p>
						</div>
					</div>
				</div>
				<div className="flex flex-col mt-12 px-7 md:px-24 md:mt-20">
					<p className="text-center font-light text-sm mb-4 md:text-lg">
						Question
					</p>
					<p className="text-center font-medium text-xl mb-4 md:text-3xl md:mb-8">
						Frequently asked{" "}
						<span className="font-bold bg-gradient-to-r from-iorange to-ipink text-transparent bg-clip-text">
							questions
						</span>
					</p>
					<div className="grid grid-cols-1 gap-4">
						<div className="collapse collapse-arrow rounded-lg bg-i02 px-3 py-2">
							<input
								type="checkbox"
								name="my-accordion"
								checked={open === 1}
								onChange={() => handleOpen(1)}
							/>
							<div className="collapse-title text-left font-medium text-white md:text-lg">
								What sets Idealibs apart from other design platforms?
							</div>
							<div className="collapse-content font-normal text-i04 md:text-lg">
								<p>
									We&apos;re not always in the position that we want to be at.
									We&apos;re constantly growing. We&apos;re constantly making
									mistakes. We&apos;re constantly trying to express ourselves
									and actualize our dreams.
								</p>
							</div>
						</div>
						<div className="collapse collapse-arrow rounded-lg bg-i02 px-3 py-2">
							<input
								type="checkbox"
								name="my-accordion"
								checked={open === 2}
								onChange={() => handleOpen(2)}
							/>
							<div className="collapse-title text-left font-medium text-white md:text-lg">
								How does Idealibs support the development of design skills?
							</div>
							<div className="collapse-content font-normal text-i04 md:text-lg">
								<p>
									We&apos;re not always in the position that we want to be at.
									We&apos;re constantly growing. We&apos;re constantly making
									mistakes. We&apos;re constantly trying to express ourselves
									and actualize our dreams.
								</p>
							</div>
						</div>
						<div className="collapse collapse-arrow rounded-lg bg-i02 px-3 py-2">
							<input
								type="checkbox"
								name="my-accordion"
								checked={open === 3}
								onChange={() => handleOpen(3)}
							/>
							<div className="collapse-title text-left font-medium text-white md:text-lg">
								What are the benefits of being a premium user on Idealibs?
							</div>
							<div className="collapse-content font-normal text-i04 md:text-lg">
								<p>
									We&apos;re not always in the position that we want to be at.
									We&apos;re constantly growing. We&apos;re constantly making
									mistakes. We&apos;re constantly trying to express ourselves
									and actualize our dreams.
								</p>
							</div>
						</div>
						<div className="collapse collapse-arrow rounded-lg bg-i02 px-3 py-2">
							<input
								type="checkbox"
								name="my-accordion"
								checked={open === 4}
								onChange={() => handleOpen(4)}
							/>
							<div className="collapse-title text-left font-medium text-white md:text-lg">
								How does Idealibs stay abreast of the latest design trends?
							</div>
							<div className="collapse-content font-normal text-i04 md:text-lg">
								<p>
									We&apos;re not always in the position that we want to be at.
									We&apos;re constantly growing. We&apos;re constantly making
									mistakes. We&apos;re constantly trying to express ourselves
									and actualize our dreams.
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="flex w-full justify-center bg-gradient-to-r from-iorange to-ipink">
				<div className="py-7 md:px-48 md:py-20">
					<div>
						<p className="text-center font-medium text-sm mb-4 px-8 md:text-3xl md:mb-8">
							Upgrade to Idealibs Premium now
						</p>
					</div>
					<div className="flex justify-center">
						<Link
							href="/payment"
							className="btn btn-neutral rounded-full border-0 font-medium text-black bg-white px-7 hover:bg-white"
						>
							Upgrade now
						</Link>
					</div>
				</div>
			</div>
			<div className="flex w-full justify-between items-center bg-white px-7 py-5 md:px-24 md:py-8">
				<div>
					<img
						className="h-3.5 md:h-4"
						src="/images/Logo-Fot-Mobile.png"
						alt="Idealibs Footer"
					/>
				</div>
				<div>
					<p className="text-right font-bold text-sm text-black md:text-base">
						&copy;Copyright 2024
					</p>
				</div>
			</div>
		</main>
	);
}
