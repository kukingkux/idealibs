"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { SideNavigation, SideNavigationMobile } from "@/components/sidebar";
import TopNavigation from "@/components/topbar";
import bg from "@/public/images/Img-Hero-Home.png";
import footer from "@/public/images/Img-Footer-Home.png";
import home1 from "@/public/images/Img-Home1.png";
import home2 from "@/public/images/Img-Home2.png";
import home3 from "@/public/images/Img-Home3.png";
import home4 from "@/public/images/Img-Home4.png";
import home5 from "@/public/images/Img-Home5.png";
import home6 from "@/public/images/Img-Home6.png";

export default function HomePage() {
	const [session, setSession] = useState(null);

	useEffect(() => {
		const userData = JSON.parse(localStorage.getItem("user"));
		setSession(userData);
	}, []);

	return (
		<main className="flex min-h-screen flex-col bg-i01">
			<div className="drawer" id="sidebar">
				<input id="my-drawer" type="checkbox" className="drawer-toggle" />
				<div className="drawer-content flex flex-col items-center justify-center">
					<div id="content" className="flex container max-w-full">
						<SideNavigation />
						<div id="right-content" className="min-h-screen lg:w-full">
							<TopNavigation />
							<div id="header" className="flex container flex-col items-center">
								<div className="md:inline-block w-full">
									<div
										className="flex flex-col justify-between bg-cover"
										style={{
											backgroundImage: `url(${bg.src})`,
										}}
									>
										<div className="py-12 md:py-20 px-10">
											<p className="font-semibold text-center text-xl lg:text-4xl">
												Discover and create design assets using AI
											</p>
											<p className="font-regular text-lg text-center mt-4 hidden lg:block">
												Find the highest quality images, colors that color the
												world and various other assets
											</p>
										</div>
									</div>
								</div>
							</div>
							<div className="flex flex-col md:flex-row w-full justify-between items-center bg-gradient-to-r from-iorange to-ipink px-7 py-4 md:py-6">
								<div>
									<p className="font-medium mb-4 md:m-0 md:text-lg">
										Discover more assets by subscribing to Idealibs
									</p>
								</div>
								<div>
									{session ? (
										<Link
											href="/premium"
											className="flex justify-center items-center gap-2 rounded-iform w-full py-2 px-4 bg-white text-black font-semibold text-sm hover:opacity-80"
										>
											Upgrade now
										</Link>
									) : (
										<Link
											href="/auth/login"
											className="flex justify-center items-center gap-2 rounded-iform w-full py-2 px-4 bg-white text-black font-semibold text-sm hover:opacity-80"
										>
											Upgrade now
										</Link>
									)}
								</div>
							</div>
							<div className="flex w-full flex-col px-7 mt-12 lg:mt-20">
								<p className="text-center font-medium text-xl mb-2 lg:text-3xl lg:mb-4">
									Assets on{" "}
									<span className="font-bold bg-gradient-to-r from-iorange to-ipink text-transparent bg-clip-text">
										Idealibs
									</span>
									?
								</p>
								<p className="text-center font-light text-sm px-8 mb-6 lg:text-lg">
									Discover a variety of diverse and interesting assets
								</p>
								<div className="grid grid-cols-2 gap-4 lg:grid-cols-3">
									<Link href="/photos">
										<div className="md:inline-block w-full aspect-[8/7]">
											<div
												className="flex flex-col justify-end bg-cover h-full rounded-lg hover:opacity-80"
												style={{
													backgroundImage: `url(${home1.src})`,
													backgroundPosition: "center",
												}}
											>
												<div className="mb-6">
													<div className="flex justify-center items-center">
														<span>
															<svg
																xmlns="http://www.w3.org/2000/svg"
																viewBox="0 0 20 20"
																fill="currentColor"
																className="w-6 h-6 mr-3"
															>
																<path
																	fillRule="evenodd"
																	d="M1 5.25A2.25 2.25 0 0 1 3.25 3h13.5A2.25 2.25 0 0 1 19 5.25v9.5A2.25 2.25 0 0 1 16.75 17H3.25A2.25 2.25 0 0 1 1 14.75v-9.5Zm1.5 5.81v3.69c0 .414.336.75.75.75h13.5a.75.75 0 0 0 .75-.75v-2.69l-2.22-2.219a.75.75 0 0 0-1.06 0l-1.91 1.909.47.47a.75.75 0 1 1-1.06 1.06L6.53 8.091a.75.75 0 0 0-1.06 0l-2.97 2.97ZM12 7a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z"
																	clipRule="evenodd"
																/>
															</svg>
														</span>
														<p className="font-bold text-center text-xl">
															Photos
														</p>
													</div>
													<p className="font-regular text-lg text-center mt-2 hidden lg:block">
														Find the best quality photos
													</p>
												</div>
											</div>
										</div>
									</Link>
									<Link href="/colors">
										<div className="md:inline-block w-full aspect-[8/7]">
											<div
												className="flex flex-col justify-end bg-cover h-full rounded-lg hover:opacity-80"
												style={{
													backgroundImage: `url(${home2.src})`,
													backgroundPosition: "center",
												}}
											>
												<div className="mb-6">
													<div className="flex justify-center items-center">
														<span>
															<span>
																<svg
																	xmlns="http://www.w3.org/2000/svg"
																	viewBox="0 0 448 512"
																	fill="currentColor"
																	className="w-6 h-6 mr-3"
																>
																	<path d="M512 256c0 .9 0 1.8 0 2.7c-.4 36.5-33.6 61.3-70.1 61.3H344c-26.5 0-48 21.5-48 48c0 3.4 .4 6.7 1 9.9c2.1 10.2 6.5 20 10.8 29.9c6.1 13.8 12.1 27.5 12.1 42c0 31.8-21.6 60.7-53.4 62c-3.5 .1-7 .2-10.6 .2C114.6 512 0 397.4 0 256S114.6 0 256 0S512 114.6 512 256zM128 288a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zm0-96a32 32 0 1 0 0-64 32 32 0 1 0 0 64zM288 96a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zm96 96a32 32 0 1 0 0-64 32 32 0 1 0 0 64z" />
																</svg>
															</span>
														</span>
														<p className="font-bold text-center text-xl">
															Color
														</p>
													</div>
													<p className="font-regular text-lg text-center mt-2 hidden lg:block">
														Make the world more colorful
													</p>
												</div>
											</div>
										</div>
									</Link>
									<Link href="/fonts">
										<div className="md:inline-block w-full aspect-[8/7]">
											<div
												className="flex flex-col justify-end bg-cover h-full rounded-lg hover:opacity-80"
												style={{
													backgroundImage: `url(${home3.src})`,
													backgroundPosition: "center",
												}}
											>
												<div className="mb-6">
													<div className="flex justify-center items-center">
														<span>
															<svg
																xmlns="http://www.w3.org/2000/svg"
																viewBox="0 0 448 512"
																fill="currentColor"
																className="w-6 h-6 mr-3"
															>
																<path d="M254 52.8C249.3 40.3 237.3 32 224 32s-25.3 8.3-30 20.8L57.8 416H32c-17.7 0-32 14.3-32 32s14.3 32 32 32h96c17.7 0 32-14.3 32-32s-14.3-32-32-32h-1.8l18-48H303.8l18 48H320c-17.7 0-32 14.3-32 32s14.3 32 32 32h96c17.7 0 32-14.3 32-32s-14.3-32-32-32H390.2L254 52.8zM279.8 304H168.2L224 155.1 279.8 304z" />
															</svg>
														</span>
														<p className="font-bold text-center text-xl">
															Font
														</p>
													</div>
													<p className="font-regular text-lg text-center mt-2 hidden lg:block">
														Design with an attractive font
													</p>
												</div>
											</div>
										</div>
									</Link>
									<Link href="/vectors">
										<div className="md:inline-block w-full aspect-[8/7]">
											<div
												className="flex flex-col justify-end bg-cover h-full rounded-lg hover:opacity-80"
												style={{
													backgroundImage: `url(${home4.src})`,
													backgroundPosition: "center",
												}}
											>
												<div className="mb-6">
													<div className="flex justify-center items-center">
														<span>
															<span>
																<svg
																	xmlns="http://www.w3.org/2000/svg"
																	viewBox="0 0 20 20"
																	fill="currentColor"
																	className="w-6 h-6 mr-3"
																>
																	<path d="M15.98 1.804a1 1 0 0 0-1.96 0l-.24 1.192a1 1 0 0 1-.784.785l-1.192.238a1 1 0 0 0 0 1.962l1.192.238a1 1 0 0 1 .785.785l.238 1.192a1 1 0 0 0 1.962 0l.238-1.192a1 1 0 0 1 .785-.785l1.192-.238a1 1 0 0 0 0-1.962l-1.192-.238a1 1 0 0 1-.785-.785l-.238-1.192ZM6.949 5.684a1 1 0 0 0-1.898 0l-.683 2.051a1 1 0 0 1-.633.633l-2.051.683a1 1 0 0 0 0 1.898l2.051.684a1 1 0 0 1 .633.632l.683 2.051a1 1 0 0 0 1.898 0l.683-2.051a1 1 0 0 1 .633-.633l2.051-.683a1 1 0 0 0 0-1.898l-2.051-.683a1 1 0 0 1-.633-.633L6.95 5.684ZM13.949 13.684a1 1 0 0 0-1.898 0l-.184.551a1 1 0 0 1-.632.633l-.551.183a1 1 0 0 0 0 1.898l.551.183a1 1 0 0 1 .633.633l.183.551a1 1 0 0 0 1.898 0l.184-.551a1 1 0 0 1 .632-.633l.551-.183a1 1 0 0 0 0-1.898l-.551-.184a1 1 0 0 1-.633-.632l-.183-.551Z" />
																</svg>
															</span>
														</span>
														<p className="font-bold text-center text-xl">
															Vectors
														</p>
													</div>
													<p className="font-regular text-lg text-center mt-2 hidden lg:block">
														Discover digital illustrations
													</p>
												</div>
											</div>
										</div>
									</Link>
									<Link href="/mockups">
										<div className="md:inline-block w-full aspect-[8/7]">
											<div
												className="flex flex-col justify-end bg-cover h-full rounded-lg hover:opacity-80"
												style={{
													backgroundImage: `url(${home5.src})`,
													backgroundPosition: "center",
												}}
											>
												<div className="mb-6">
													<div className="flex justify-center items-center">
														<span>
															<span>
																<svg
																	xmlns="http://www.w3.org/2000/svg"
																	viewBox="0 0 20 20"
																	fill="currentColor"
																	className="w-6 h-6 mr-3"
																>
																	<path d="M10.362 1.093a.75.75 0 0 0-.724 0L2.523 5.018 10 9.143l7.477-4.125-7.115-3.925ZM18 6.443l-7.25 4v8.25l6.862-3.786A.75.75 0 0 0 18 14.25V6.443ZM9.25 18.693v-8.25l-7.25-4v7.807a.75.75 0 0 0 .388.657l6.862 3.786Z" />
																</svg>
															</span>
														</span>
														<p className="font-bold text-center text-xl">
															Mockups
														</p>
													</div>
													<p className="font-regular text-lg text-center mt-2 hidden lg:block">
														Make your design more real
													</p>
												</div>
											</div>
										</div>
									</Link>
									<Link href="/icons">
										<div className="md:inline-block w-full aspect-[8/7]">
											<div
												className="flex flex-col justify-end bg-cover h-full rounded-lg hover:opacity-80"
												style={{
													backgroundImage: `url(${home6.src})`,
													backgroundPosition: "center",
												}}
											>
												<div className="mb-6">
													<div className="flex justify-center items-center">
														<svg
															xmlns="http://www.w3.org/2000/svg"
															viewBox="0 0 512 512"
															fill="currentColor"
															className="w-6 h-6 mr-3"
														>
															<path d="M500.3 7.3C507.7 13.3 512 22.4 512 32V176c0 26.5-28.7 48-64 48s-64-21.5-64-48s28.7-48 64-48V71L352 90.2V208c0 26.5-28.7 48-64 48s-64-21.5-64-48s28.7-48 64-48V64c0-15.3 10.8-28.4 25.7-31.4l160-32c9.4-1.9 19.1 .6 26.6 6.6zM74.7 304l11.8-17.8c5.9-8.9 15.9-14.2 26.6-14.2h61.7c10.7 0 20.7 5.3 26.6 14.2L213.3 304H240c26.5 0 48 21.5 48 48V464c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V352c0-26.5 21.5-48 48-48H74.7zM192 408a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zM478.7 278.3L440.3 368H496c6.7 0 12.6 4.1 15 10.4s.6 13.3-4.4 17.7l-128 112c-5.6 4.9-13.9 5.3-19.9 .9s-8.2-12.4-5.3-19.2L391.7 400H336c-6.7 0-12.6-4.1-15-10.4s-.6-13.3 4.4-17.7l128-112c5.6-4.9 13.9-5.3 19.9-.9s8.2 12.4 5.3 19.2zm-339-59.2c-6.5 6.5-17 6.5-23 0L19.9 119.2c-28-29-26.5-76.9 5-103.9c27-23.5 68.4-19 93.4 6.5l10 10.5 9.5-10.5c25-25.5 65.9-30 93.9-6.5c31 27 32.5 74.9 4.5 103.9l-96.4 99.9z" />
														</svg>
														<p className="font-bold text-center text-xl">
															Icons
														</p>
													</div>
													<p className="font-regular text-lg text-center mt-2 hidden lg:block">
														Illustrate using icons
													</p>
												</div>
											</div>
										</div>
									</Link>
								</div>
							</div>
							<div className="flex w-full flex-col px-7 my-12 lg:my-20">
								<p className="text-center font-medium text-xl mb-2 lg:text-3xl lg:mb-4">
									Why choose{" "}
									<span className="font-bold bg-gradient-to-r from-iorange to-ipink text-transparent bg-clip-text">
										Idealibs
									</span>
									?
								</p>
								<p className="text-center font-light text-sm px-8 mb-6 lg:text-lg">
									Idealibs comes with a ton of benefits that differentiate it in
									the world of creative design
								</p>
								<div className="grid grid-cols-2 gap-4 lg:grid-cols-3">
									<div className="rounded-lg bg-gradient-to-r from-iorange to-ipink p-6 lg:p-5">
										<div className="flex flex-col">
											<svg
												className="mb-6 w-8 h-8 lg:mb-8"
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
											<p className="text-left font-medium lg:text-xl">
												Limitless Inspiration
											</p>
										</div>
									</div>
									<div className="rounded-lg border-2 border-i02 bg-i01 p-6 lg:p-5">
										<div className="flex flex-col">
											<svg
												className="mb-6 w-8 h-8 lg:mb-8"
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
											<p className="text-left font-medium lg:text-xl">
												Interactive Education
											</p>
										</div>
									</div>
									<div className="rounded-lg border-2 border-i02 bg-i01 p-6 lg:p-5">
										<div className="flex flex-col">
											<svg
												className="mb-6 w-8 h-8 lg:mb-8"
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
											<p className="text-left font-medium lg:text-xl">
												High-Quality Graphic Library
											</p>
										</div>
									</div>
									<div className="rounded-lg border-2 border-i02 bg-i01 p-6 lg:p-5">
										<div className="flex flex-col">
											<svg
												className="mb-6 w-8 h-8 lg:mb-8"
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
											<p className="text-left font-medium lg:text-xl">
												Abundant Free Resources
											</p>
										</div>
									</div>
									<div className="rounded-lg border-2 border-i02 bg-i01 p-6 lg:p-5">
										<div className="flex flex-col">
											<svg
												className="mb-6 w-8 h-8 lg:mb-8"
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
											<p className="text-left font-medium lg:text-xl">
												Current News and Trends
											</p>
										</div>
									</div>
									<div className="rounded-lg border-2 border-i02 bg-i01 p-6 lg:p-5">
										<div className="flex flex-col">
											<svg
												className="mb-6 w-8 h-8 lg:mb-8"
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
											<p className="text-left font-medium lg:text-xl">
												Open and Easy Access
											</p>
										</div>
									</div>
								</div>
							</div>
							<div id="footer" className="flex container flex-col items-center">
								<div className="md:inline-block  w-full">
									<div
										className="flex flex-col justify-between bg-cover"
										style={{
											backgroundImage: `url(${footer.src})`,
											backgroundPosition: "center",
										}}
									>
										<div className="py-12 md:py-20 pl-6">
											<p className="font-regular text-lg text-left mb-2 hidden lg:block">
												Develop you imagination
											</p>
											<p className="font-semibold text-left text-xl lg:text-4xl mb-6">
												Create your image using AI
											</p>
											<div className="w-1/3 md:w-1/5">
												{session ? (
													<Link
														href="/home"
														className="flex justify-center items-center gap-2 rounded-iform py-4 bg-white text-black font-semibold text-sm hover:opacity-80"
													>
														Try AI
													</Link>
												) : (
													<Link
														href="/auth/login"
														className="flex justify-center items-center gap-2 rounded-iform py-4 bg-white text-black font-semibold text-sm hover:opacity-80"
													>
														Try AI
													</Link>
												)}
											</div>
										</div>
									</div>
								</div>
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
						<SideNavigationMobile />
					</div>
				</div>
			</div>
		</main>
	);
}
