"use client";

import React, { useState } from "react";

export default function Landing() {
	const [open, setOpen] = useState(1);
	const [active, setActive] = useState(1);
	const [isDrawerOpen, setIsDrawerOpen] = useState(false);

	const handleOpen = (value) => setOpen(open === value ? 0 : value);
	const handleActive = (value) => setActive(active === value ? 0 : value);
	const toggleDrawer = () => setIsDrawerOpen(!isDrawerOpen);

	return (
		<main className="flex min-h-screen flex-col bg-i01">
			<div className="drawer" id="sidebar">
				<input id="my-drawer" type="checkbox" className="drawer-toggle" />
				<div className="drawer-content flex flex-col items-center justify-center">
					<div
						id="navbar"
						className="sticky top-0 container bg-i02 py-6 px-7 z-20"
					>
						<div className="flex justify-between items-center">
							<label
								htmlFor="my-drawer"
								onClick={toggleDrawer}
								className="btn btn-square drawer-button border-0 bg-i03 h-10"
							>
								{isDrawerOpen ? (
									<svg
										xmlns="http://www.w3.org/2000/svg"
										viewBox="0 0 24 24"
										strokeWidth={2}
										stroke="currentColor"
										className="w-7 h-7 text-white"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											d="M6 18 18 6M6 6l12 12"
										/>
									</svg>
								) : (
									<svg
										xmlns="http://www.w3.org/2000/svg"
										viewBox="0 0 24 24"
										strokeWidth={2}
										stroke="currentColor"
										className="w-7 h-7 text-white"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
										/>
									</svg>
								)}
							</label>
							<div className="ml-14 lg:ml-40">
								<img
									className="h-8 w-7 aspect-square"
									src="/images/Logo-Nav-Mobile.png"
									alt="Idealibs Logo"
								/>
							</div>
							<div className="flex">
								<button
									type="button"
									className="hidden lg:block rounded-full border-2 border-white bg-transparent py-2.5 mr-3"
								>
									<span className="block font-semibold text-sm px-5">
										Login
									</span>
								</button>
								<button
									type="button"
									className="rounded-full bg-gradient-to-r from-iorange to-ipink py-2.5"
								>
									<span className="block font-semibold text-sm px-5">
										Register
									</span>
								</button>
							</div>
						</div>
					</div>
					<div id="content" className="container">
						<div
							id="header"
							className="flex container flex-col items-center mt-12 px-7"
						>
							<p className="text-center font-medium text-xl mb-2">
								Idea is Key Unlocking the Door to Infinite Creativity at
								Idealibs!
							</p>
							<p className="text-center font-light text-sm px-8 mb-6">
								Find various kinds of creative ideas that support your design
							</p>
							<button
								type="button"
								className="rounded-full bg-gradient-to-r from-iorange to-ipink py-2.5 mb-6"
							>
								<span className="flex items-center font-medium text-sm px-6">
									Explore Interesting Ideas
									<svg
										xmlns="http://www.w3.org/2000/svg"
										viewBox="0 0 20 20"
										fill="currentColor"
										className="ml-2 h-6 w-6"
									>
										<path
											fillRule="evenodd"
											d="M5.22 14.78a.75.75 0 0 0 1.06 0l7.22-7.22v5.69a.75.75 0 0 0 1.5 0v-7.5a.75.75 0 0 0-.75-.75h-7.5a.75.75 0 0 0 0 1.5h5.69l-7.22 7.22a.75.75 0 0 0 0 1.06Z"
											clipRule="evenodd"
										/>
									</svg>
								</span>
							</button>
							<img
								className="w-full aspect-square"
								src="/images/Img-LP-Mobile.png"
								alt="Idealibs Header Image"
							/>
						</div>
						<div
							id="about"
							className="flex container flex-col mt-12 px-7 scroll-mt-32"
						>
							<p className="text-left font-light text-sm mb-4">About us</p>
							<p className="text-left font-medium text-xl mb-2">
								The best idea in{" "}
								<span className="font-bold bg-gradient-to-r from-iorange to-ipink text-transparent bg-clip-text">
									Idealibs
								</span>
							</p>
							<p className="text-left font-light text-sm mb-3">
								Idealibs is a website that makes it easy for designers in the
								world to find sources that suppport their design needs. There
								are many sources that are widely used and various eases in
								accessing a source
							</p>
							<div className="flex flex-row justify-between">
								<div className="flex flex-col">
									<p className="text-left font-medium text-xl">25.000+</p>
									<p className="text-left font-light text-sm">Happy user</p>
								</div>
								<div className="flex flex-col">
									<p className="text-left font-bold text-xl bg-gradient-to-r from-iorange to-ipink text-transparent bg-clip-text">
										750k
									</p>
									<p className="text-left font-semibold text-sm bg-gradient-to-r from-iorange to-ipink text-transparent bg-clip-text">
										Design ideas
									</p>
								</div>
								<div className="flex flex-col">
									<p className="text-left font-medium text-xl">20.000+</p>
									<p className="text-left font-light text-sm">
										Designer helped
									</p>
								</div>
							</div>
						</div>
						<div className="flex container bg-gradient-to-r from-iorange to-ipink items-center mt-12">
							<div className="p-7">
								<p className="text-center font-medium text-sm">
									“By combining innovation, learning, and community, Idealibs
									forms an immersive and dynamic environment for those who want
									to push the boundaries of their design. Welcome to Idealibs, a
									place where ideas are the key to a world of limitless
									creativity.”
								</p>
							</div>
						</div>
						<div className="flex container flex-col px-7 mt-12">
							<p className="text-center font-medium text-xl mb-2">
								Why choose{" "}
								<span className="font-bold bg-gradient-to-r from-iorange to-ipink text-transparent bg-clip-text">
									Idealibs
								</span>
								?
							</p>
							<p className="text-center font-light text-sm px-8 mb-6">
								Idealibs comes with a ton of benefits that differentiate it in
								the world of creative design
							</p>
							<div className="grid grid-cols-2 gap-4">
								<div className="rounded-lg bg-gradient-to-r from-iorange to-ipink p-6">
									<div className="flex flex-col">
										<svg
											className="mb-6 w-8 h-8"
											viewBox="0 0 40 40"
											fill="none"
											xmlns="http://www.w3.org/2000/svg"
										>
											<path
												fillRule="evenodd"
												clipRule="evenodd"
												d="M3.41748 18.251H16.7508V4.91765H3.41748V18.251Z"
												fill="#FEFEFE"
											/>
											<path
												fillRule="evenodd"
												clipRule="evenodd"
												d="M36.5823 6.86915L23.7023 3.41748L20.2523 16.2975L33.1306 19.7475L36.5823 6.86915Z"
												fill="#FEFEFE"
											/>
											<path
												fillRule="evenodd"
												clipRule="evenodd"
												d="M3.41748 36.5826H16.7508V23.2493H3.41748V36.5826Z"
												fill="#FEFEFE"
											/>
											<path
												fillRule="evenodd"
												clipRule="evenodd"
												d="M21.7508 36.5826H35.0841V23.2493H21.7508V36.5826Z"
												fill="#FEFEFE"
											/>
										</svg>
										<p className="text-left font-medium">
											Limitless Inspiration
										</p>
									</div>
								</div>
								<div className="rounded-lg border-2 border-i02 bg-i01 p-6">
									<div className="flex flex-col">
										<svg
											className="mb-6 w-8 h-8"
											viewBox="0 0 40 40"
											fill="none"
											xmlns="http://www.w3.org/2000/svg"
										>
											<path
												fillRule="evenodd"
												clipRule="evenodd"
												d="M12.7024 16.6317H25.319V14.1317H12.7024V16.6317ZM12.7024 23.5717H19.0624V21.0717H12.7024V23.5717ZM5.21069 36.25H34.789V3.75H5.21069V36.25Z"
												fill="url(#paint0_linear_473_692)"
											/>
											<defs>
												<linearGradient
													id="paint0_linear_473_692"
													x1="5.21069"
													y1="36.25"
													x2="40.4384"
													y2="28.0652"
													gradientUnits="userSpaceOnUse"
												>
													<stop stopColor="#FC6736" />
													<stop offset="1" stopColor="#FC36D0" />
												</linearGradient>
											</defs>
										</svg>
										<p className="text-left font-medium">
											Interactive Education
										</p>
									</div>
								</div>
								<div className="rounded-lg border-2 border-i02 bg-i01 p-6">
									<div className="flex flex-col">
										<svg
											className="mb-6 w-8 h-8"
											viewBox="0 0 40 40"
											fill="none"
											xmlns="http://www.w3.org/2000/svg"
										>
											<path
												fillRule="evenodd"
												clipRule="evenodd"
												d="M35.6252 19.1925C28.3585 17.3192 22.6802 11.6408 20.8068 4.37418L20.0002 1.24585L19.1935 4.37418C17.3202 11.6408 11.6418 17.3192 4.37516 19.1925L1.24683 19.9992L4.37516 20.8075C11.6418 22.6808 17.3202 28.3592 19.1935 35.6242L20.0002 38.7542L20.8068 35.6242C22.6802 28.3592 28.3585 22.6808 35.6252 20.8075L38.7535 19.9992L35.6252 19.1925Z"
												fill="url(#paint0_linear_473_694)"
											/>
											<path
												fillRule="evenodd"
												clipRule="evenodd"
												d="M31.2518 12.9115C31.2518 10.9749 33.3752 8.74653 35.4168 8.74653C33.4518 8.74653 31.2518 6.49487 31.2518 4.5832C31.2518 6.49487 29.0718 8.74653 27.0885 8.74653C28.9968 8.74653 31.2518 10.9632 31.2518 12.9115Z"
												fill="url(#paint1_linear_473_694)"
											/>
											<defs>
												<linearGradient
													id="paint0_linear_473_694"
													x1="1.24683"
													y1="38.7542"
													x2="45.4481"
													y2="27.4705"
													gradientUnits="userSpaceOnUse"
												>
													<stop stopColor="#FC6736" />
													<stop offset="1" stopColor="#FC36D0" />
												</linearGradient>
												<linearGradient
													id="paint1_linear_473_694"
													x1="1.24683"
													y1="38.7542"
													x2="45.4481"
													y2="27.4705"
													gradientUnits="userSpaceOnUse"
												>
													<stop stopColor="#FC6736" />
													<stop offset="1" stopColor="#FC36D0" />
												</linearGradient>
											</defs>
										</svg>
										<p className="text-left font-medium">
											High-Quality Graphic Library
										</p>
									</div>
								</div>
								<div className="rounded-lg border-2 border-i02 bg-i01 p-6">
									<div className="flex flex-col">
										<svg
											className="mb-6 w-8 h-8"
											viewBox="0 0 40 40"
											fill="none"
											xmlns="http://www.w3.org/2000/svg"
										>
											<path
												fillRule="evenodd"
												clipRule="evenodd"
												d="M21.7252 25.2832L16.3919 21.0999L11.7252 27.1666L9.75856 25.6332L15.9586 17.5666L21.2919 21.7666L25.8586 15.8666L27.8419 17.3999L21.7252 25.2832ZM24.9252 7.33325C24.9252 6.99992 24.9419 6.66658 24.9919 6.34992H3.69189V36.6999H34.0419V14.4666C33.4919 14.6166 32.8919 14.6832 32.2919 14.6832C28.2252 14.6832 24.9252 11.3832 24.9252 7.33325Z"
												fill="url(#paint0_linear_473_698)"
											/>
											<path
												fillRule="evenodd"
												clipRule="evenodd"
												d="M32.2919 3.29993C30.4086 3.29993 28.8252 4.59993 28.3919 6.34993C28.3086 6.66659 28.2586 6.99993 28.2586 7.33326C28.2586 9.54993 30.0752 11.3499 32.2919 11.3499C32.9086 11.3499 33.5086 11.1999 34.0419 10.9499C35.3752 10.2999 36.3086 8.91659 36.3086 7.33326C36.3086 5.09993 34.5086 3.29993 32.2919 3.29993Z"
												fill="url(#paint1_linear_473_698)"
											/>
											<defs>
												<linearGradient
													id="paint0_linear_473_698"
													x1="3.69189"
													y1="36.6999"
													x2="42.2395"
													y2="27.0899"
													gradientUnits="userSpaceOnUse"
												>
													<stop stopColor="#FC6736" />
													<stop offset="1" stopColor="#FC36D0" />
												</linearGradient>
												<linearGradient
													id="paint1_linear_473_698"
													x1="3.69189"
													y1="36.6999"
													x2="42.2395"
													y2="27.0899"
													gradientUnits="userSpaceOnUse"
												>
													<stop stopColor="#FC6736" />
													<stop offset="1" stopColor="#FC36D0" />
												</linearGradient>
											</defs>
										</svg>
										<p className="text-left font-medium">
											Abundant Free Resources
										</p>
									</div>
								</div>
								<div className="rounded-lg border-2 border-i02 bg-i01 p-6">
									<div className="flex flex-col">
										<svg
											className="mb-6 w-8 h-8"
											viewBox="0 0 40 40"
											fill="none"
											xmlns="http://www.w3.org/2000/svg"
										>
											<path
												fillRule="evenodd"
												clipRule="evenodd"
												d="M19.9998 34.0999C17.9332 34.0999 16.2498 32.5332 16.0165 30.5332H23.9832C23.7498 32.5332 22.0665 34.0999 19.9998 34.0999ZM31.1498 22.1166V14.8332C31.1498 14.5499 31.1332 14.2666 31.1165 13.9999C30.4665 14.1999 29.7665 14.3166 29.0498 14.3166C25.3498 14.3166 22.3332 11.3166 22.3332 7.5999C22.3332 6.3499 22.6665 5.18323 23.2832 4.18323C22.2498 3.8499 21.1498 3.68323 19.9998 3.68323C13.8498 3.68323 8.84984 8.68323 8.84984 14.8332V22.1166L6.1665 24.8499V30.5332H13.5165C13.7665 33.9166 16.5498 36.5999 19.9998 36.5999C23.4498 36.5999 26.2498 33.9166 26.4832 30.5332H33.8332V24.8499L31.1498 22.1166Z"
												fill="url(#paint0_linear_473_700)"
											/>
											<path
												fillRule="evenodd"
												clipRule="evenodd"
												d="M29.0499 11.8166C29.6165 11.8166 30.1499 11.6999 30.6499 11.4999C32.1832 10.8666 33.2665 9.36657 33.2665 7.5999C33.2665 5.28324 31.3832 3.3999 29.0499 3.3999C27.6165 3.3999 26.3499 4.11657 25.5832 5.1999C25.1165 5.88324 24.8332 6.6999 24.8332 7.5999C24.8332 9.93324 26.7332 11.8166 29.0499 11.8166Z"
												fill="url(#paint1_linear_473_700)"
											/>
											<defs>
												<linearGradient
													id="paint0_linear_473_700"
													x1="6.1665"
													y1="36.5999"
													x2="39.3924"
													y2="29.5313"
													gradientUnits="userSpaceOnUse"
												>
													<stop stopColor="#FC6736" />
													<stop offset="1" stopColor="#FC36D0" />
												</linearGradient>
												<linearGradient
													id="paint1_linear_473_700"
													x1="6.1665"
													y1="36.5999"
													x2="39.3924"
													y2="29.5313"
													gradientUnits="userSpaceOnUse"
												>
													<stop stopColor="#FC6736" />
													<stop offset="1" stopColor="#FC36D0" />
												</linearGradient>
											</defs>
										</svg>
										<p className="text-left font-medium">
											Current News and Trends
										</p>
									</div>
								</div>
								<div className="rounded-lg border-2 border-i02 bg-i01 p-6">
									<div className="flex flex-col">
										<svg
											className="mb-6 w-8 h-8"
											viewBox="0 0 40 40"
											fill="none"
											xmlns="http://www.w3.org/2000/svg"
										>
											<path
												fillRule="evenodd"
												clipRule="evenodd"
												d="M37.6375 11.6325L34.6259 10.2025L33.9109 11.7075C31.6825 16.3975 28.2259 19.6742 24.2425 21.0442L23.9075 21.1408C22.6459 21.5375 21.3392 21.7625 19.9992 21.7625C14.2792 21.7608 9.07922 18.0025 6.08922 11.7075L5.37422 10.2025L2.36255 11.6325L3.07755 13.1375C4.07922 15.2442 5.30588 17.1025 6.69922 18.6992L3.01088 22.3908L5.36755 24.7458L9.07755 21.0342C10.5759 22.2742 12.2109 23.2458 13.9409 23.9292L12.5059 28.8675L15.7075 29.7975L17.1475 24.8392C18.0809 25.0042 19.0309 25.0958 19.9975 25.0958H20.0025C20.9259 25.0958 21.8342 25.0142 22.7259 24.8642L24.1592 29.7975L27.3592 28.8675L25.9392 23.9742C27.6859 23.2992 29.3392 22.3358 30.8525 21.0958L34.5009 24.7458L36.8592 22.3908L33.2392 18.7692C34.6592 17.1575 35.9059 15.2758 36.9225 13.1375L37.6375 11.6325Z"
												fill="url(#paint0_linear_473_702)"
											/>
											<defs>
												<linearGradient
													id="paint0_linear_473_702"
													x1="2.36255"
													y1="29.7975"
													x2="38.9214"
													y2="12.996"
													gradientUnits="userSpaceOnUse"
												>
													<stop stopColor="#FC6736" />
													<stop offset="1" stopColor="#FC36D0" />
												</linearGradient>
											</defs>
										</svg>
										<p className="text-left font-medium">
											Open and Easy Access
										</p>
									</div>
								</div>
							</div>
						</div>
						<div
							id="features"
							className="flex container flex-col mt-12 px-7 scroll-mt-32"
						>
							<p className="text-left font-light text-sm mb-4">Features</p>
							<p className="text-left font-medium text-xl">
								A wide variety of interesting libraries on{" "}
								<span className="font-bold bg-gradient-to-r from-iorange to-ipink text-transparent bg-clip-text">
									Idealibs
								</span>
							</p>
							<div className="grid grid-cols-1 divide-y-2 border-b-2 divide-i02 border-i02">
								<div className="flex flex-col py-5">
									<p className="text-left font-medium mb-2">Stock Photos</p>
									<p className="text-left font-light text-sm">
										Idealibs is a website that makes it easy for designers in
										the world to find sources that suppport their design needs.
										There are many sources that are widely used and various
										eases in accessing a source
									</p>
								</div>
								<div className="flex flex-col py-5">
									<p className="text-left font-medium mb-2">Color Palette</p>
									<p className="text-left font-light text-sm">
										Idealibs is a website that makes it easy for designers in
										the world to find sources that suppport their design needs.
										There are many sources that are widely used and various
										eases in accessing a source
									</p>
								</div>
								<div className="flex flex-col py-5">
									<p className="text-left font-medium mb-2">Typefaces</p>
									<p className="text-left font-light text-sm">
										Idealibs is a website that makes it easy for designers in
										the world to find sources that suppport their design needs.
										There are many sources that are widely used and various
										eases in accessing a source
									</p>
								</div>
								<div className="flex flex-col py-5">
									<p className="text-left font-medium mb-2">Textures</p>
									<p className="text-left font-light text-sm">
										Idealibs is a website that makes it easy for designers in
										the world to find sources that suppport their design needs.
										There are many sources that are widely used and various
										eases in accessing a source
									</p>
								</div>
								<div className="flex flex-col py-5">
									<p className="text-left font-medium mb-2">
										Vectors and Graphics
									</p>
									<p className="text-left font-light text-sm">
										Idealibs is a website that makes it easy for designers in
										the world to find sources that suppport their design needs.
										There are many sources that are widely used and various
										eases in accessing a source
									</p>
								</div>
								<div className="flex flex-col py-5">
									<p className="text-left font-medium mb-2">
										Mockups and Templates
									</p>
									<p className="text-left font-light text-sm">
										Idealibs is a website that makes it easy for designers in
										the world to find sources that suppport their design needs.
										There are many sources that are widely used and various
										eases in accessing a source
									</p>
								</div>
								<div className="flex flex-col py-5">
									<p className="text-left font-medium mb-2">Icon Sets</p>
									<p className="text-left font-light text-sm">
										Idealibs is a website that makes it easy for designers in
										the world to find sources that suppport their design needs.
										There are many sources that are widely used and various
										eases in accessing a source
									</p>
								</div>
							</div>
						</div>
						<div
							id="pricing"
							className="flex container flex-col mt-12 px-7 scroll-mt-32"
						>
							<p className="text-center font-light text-sm mb-4">Pricing</p>
							<p className="text-center font-medium text-xl mb-4">
								Benefits that can be obtained when subscribing to{" "}
								<span className="font-bold bg-gradient-to-r from-iorange to-ipink text-transparent bg-clip-text">
									Idealibs
								</span>
							</p>
							<div className="grid grid-cols-1 gap-4">
								<div className="rounded-lg border-2 border-i02 bg-i01 p-7">
									<div className="flex flex-col">
										<p className="text-left font-bold text-xl mb-3">
											Free user
										</p>
										<div className="grid grid-cols-1 gap-4">
											<div className="flex items-center">
												<div>
													<svg
														xmlns="http://www.w3.org/2000/svg"
														viewBox="0 0 24 24"
														fill="currentColor"
														className="fill-blue-500 h-5 w-5"
													>
														<path
															fillRule="evenodd"
															d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z"
															clipRule="evenodd"
														/>
													</svg>
												</div>
												<p className="text-left font-light text-sm ml-4">
													Access to limited stock photos and design resources
												</p>
											</div>
											<div className="flex items-center">
												<div>
													<svg
														xmlns="http://www.w3.org/2000/svg"
														viewBox="0 0 24 24"
														fill="currentColor"
														className="fill-blue-500 h-5 w-5"
													>
														<path
															fillRule="evenodd"
															d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z"
															clipRule="evenodd"
														/>
													</svg>
												</div>
												<p className="text-left font-light text-sm ml-4">
													Basic usage of mockups and templates features
												</p>
											</div>
										</div>
									</div>
								</div>
								<div className="rounded-lg bg-i02 p-7">
									<div className="flex flex-col">
										<p className="text-left font-bold text-xl mb-3">
											Premium user
										</p>
										<div className="grid grid-cols-1 gap-4 mb-7">
											<div className="flex items-center">
												<div>
													<svg
														xmlns="http://www.w3.org/2000/svg"
														viewBox="0 0 24 24"
														fill="currentColor"
														className="fill-blue-500 h-5 w-5"
													>
														<path
															fillRule="evenodd"
															d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z"
															clipRule="evenodd"
														/>
													</svg>
												</div>
												<p className="text-left font-light text-sm ml-4">
													Full access to extensive high-quality resources
												</p>
											</div>
											<div className="flex items-center">
												<div>
													<svg
														xmlns="http://www.w3.org/2000/svg"
														viewBox="0 0 24 24"
														fill="currentColor"
														className="fill-blue-500 h-5 w-5"
													>
														<path
															fillRule="evenodd"
															d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z"
															clipRule="evenodd"
														/>
													</svg>
												</div>
												<p className="text-left font-light text-sm ml-4">
													Unlimited mockup and template usage
												</p>
											</div>
											<div className="flex items-center">
												<div>
													<svg
														xmlns="http://www.w3.org/2000/svg"
														viewBox="0 0 24 24"
														fill="currentColor"
														className="fill-blue-500 h-5 w-5"
													>
														<path
															fillRule="evenodd"
															d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z"
															clipRule="evenodd"
														/>
													</svg>
												</div>
												<p className="text-left font-light text-sm ml-4">
													Priority access to updates and new features
												</p>
											</div>
											<div className="flex items-center">
												<div>
													<svg
														xmlns="http://www.w3.org/2000/svg"
														viewBox="0 0 24 24"
														fill="currentColor"
														className="fill-blue-500 h-5 w-5"
													>
														<path
															fillRule="evenodd"
															d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z"
															clipRule="evenodd"
														/>
													</svg>
												</div>
												<p className="text-left font-light text-sm ml-4">
													Exclusive participation in premium tutorials
												</p>
											</div>
											<div className="flex items-center">
												<div>
													<svg
														xmlns="http://www.w3.org/2000/svg"
														viewBox="0 0 24 24"
														fill="currentColor"
														className="fill-blue-500 h-5 w-5"
													>
														<path
															fillRule="evenodd"
															d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z"
															clipRule="evenodd"
														/>
													</svg>
												</div>
												<p className="text-left font-light text-sm ml-4">
													High-resolution downloads and enhanced customer
													support
												</p>
											</div>
											<div className="flex items-center">
												<div>
													<svg
														xmlns="http://www.w3.org/2000/svg"
														viewBox="0 0 24 24"
														fill="currentColor"
														className="fill-blue-500 h-5 w-5"
													>
														<path
															fillRule="evenodd"
															d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z"
															clipRule="evenodd"
														/>
													</svg>
												</div>
												<p className="text-left font-light text-sm ml-4">
													Ad-free browsing for a seamless design experience
												</p>
											</div>
										</div>
										<button
											type="button"
											className="rounded-full bg-gradient-to-r from-iorange to-ipink h-10 w-full"
										>
											<span className="block font-medium text-sm">
												Explore now
											</span>
										</button>
									</div>
								</div>
							</div>
						</div>
						<div
							id="question"
							className="flex container flex-col mt-12 px-7 scroll-mt-32"
						>
							<p className="text-center font-light text-sm mb-4">Question</p>
							<p className="text-center font-medium text-xl mb-4">
								Various{" "}
								<span className="font-bold bg-gradient-to-r from-iorange to-ipink text-transparent bg-clip-text">
									Idealibs
								</span>{" "}
								enthusiasts who ask several questions
							</p>
							<div className="grid grid-cols-1 gap-4">
								<div className="collapse collapse-arrow rounded-lg bg-i02 px-3 py-2">
									<input
										type="checkbox"
										name="my-accordion"
										checked={open === 1}
										onChange={() => handleOpen(1)}
									/>
									<div className="collapse-title text-left font-medium text-white">
										What sets Idealibs apart from other design platforms?
									</div>
									<div className="collapse-content font-normal text-i04">
										<p>
											We're not always in the position that we want to be at.
											We're constantly growing. We're constantly making
											mistakes. We're constantly trying to express ourselves and
											actualize our dreams.
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
									<div className="collapse-title text-left font-medium text-white">
										How does Idealibs support the development of design skills?
									</div>
									<div className="collapse-content font-normal text-i04">
										<p>
											We're not always in the position that we want to be at.
											We're constantly growing. We're constantly making
											mistakes. We're constantly trying to express ourselves and
											actualize our dreams.
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
									<div className="collapse-title text-left font-medium text-white">
										What are the benefits of being a premium user on Idealibs?
									</div>
									<div className="collapse-content font-normal text-i04">
										<p>
											We're not always in the position that we want to be at.
											We're constantly growing. We're constantly making
											mistakes. We're constantly trying to express ourselves and
											actualize our dreams.
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
									<div className="collapse-title text-left font-medium text-white">
										How does Idealibs stay abreast of the latest design trends?
									</div>
									<div className="collapse-content font-normal text-i04">
										<p>
											We're not always in the position that we want to be at.
											We're constantly growing. We're constantly making
											mistakes. We're constantly trying to express ourselves and
											actualize our dreams.
										</p>
									</div>
								</div>
							</div>
						</div>
						<div className="flex container justify-center bg-gradient-to-r from-iorange to-ipink mt-12">
							<div className="w-2/4 py-7">
								<p className="text-center font-medium text-sm mb-4 px-8">
									Enter Idealibs to get lots of inspiration
								</p>
								<div className="flex flex-row justify-center">
									<button
										type="button"
										className="rounded-full border-2 border-white bg-transparent h-10 mr-3"
									>
										<span className="block font-semibold text-sm px-5">
											Login
										</span>
									</button>
									<button type="button" className="rounded-full bg-white h-10">
										<span className="block font-semibold text-sm text-black px-5">
											Register
										</span>
									</button>
								</div>
							</div>
						</div>
						<div
							id="footer"
							className="flex container justify-between items-center bg-white px-7 py-5"
						>
							<div>
								<img
									className="h-3.5"
									src="/images/Logo-Fot-Mobile.png"
									alt="Idealibs Footer"
								/>
							</div>
							<div className="h-4">
								<p className="text-right font-bold text-sm text-black">
									&copy;Copyright 2024
								</p>
							</div>
						</div>
					</div>
				</div>
				<div className="drawer-side">
					<div className="bg-i02 min-h-screen w-1/2 z-10 px-7">
						<div className="container py-6">
							<button className="btn btn-square bg-i03 h-10">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									viewBox="0 0 24 24"
									strokeWidth={2}
									stroke="currentColor"
									className="w-7 h-7 text-white"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										d="M6 18 18 6M6 6l12 12"
									/>
								</svg>
							</button>
						</div>
						<div className="grid grid-cols-1 gap-3 pt-3">
							<a href="#" onClick={() => handleActive(1)}>
								<div
									aria-selected={active === 1}
									className="rounded-lg text-white text-sm py-2.5 px-0 aria-selected:flex pl-4 aria-selected:bg-gradient-to-r aria-selected:from-iorange aria-selected:to-ipink"
								>
									Home
								</div>
							</a>
							<a href="#about" onClick={() => handleActive(2)}>
								<div
									aria-selected={active === 2}
									className="rounded-lg text-white text-sm py-2.5 px-0 aria-selected:flex pl-4 aria-selected:bg-gradient-to-r aria-selected:from-iorange aria-selected:to-ipink"
								>
									About
								</div>
							</a>
							<a href="#features" onClick={() => handleActive(3)}>
								<div
									aria-selected={active === 3}
									className="rounded-lg text-white text-sm py-2.5 px-0 aria-selected:flex pl-4 aria-selected:bg-gradient-to-r aria-selected:from-iorange aria-selected:to-ipink"
								>
									Features
								</div>
							</a>
							<a href="#pricing" onClick={() => handleActive(4)}>
								<div
									aria-selected={active === 4}
									className="rounded-lg text-white text-sm py-2.5 px-0 aria-selected:flex pl-4 aria-selected:bg-gradient-to-r aria-selected:from-iorange aria-selected:to-ipink"
								>
									Pricing
								</div>
							</a>
							<a href="#question" onClick={() => handleActive(5)}>
								<div
									aria-selected={active === 5}
									className="rounded-lg text-white text-sm py-2.5 px-0 aria-selected:flex pl-4 aria-selected:bg-gradient-to-r aria-selected:from-iorange aria-selected:to-ipink"
								>
									Question
								</div>
							</a>
						</div>
					</div>
				</div>
			</div>
		</main>
	);
}
