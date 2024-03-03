"use client";

import { getServerSession } from "next-auth";
import { useState } from "react";

import Card from '@/components/masonrygrid';
import bg from '@/public/images/Img-Hero-Dashboard.png';
import Link from "next/link";

export default async function Dashboard() {
	const [open, setOpen] = useState(1);
	const [active, setActive] = useState(null);
	const [isDrawerOpen, setIsDrawerOpen] = useState(false);

	const handleOpen = (value) => setOpen(open === value ? 0 : value);
	const handleActive = (value) => setActive(value);
	const toggleDrawer = () => setIsDrawerOpen(!isDrawerOpen);

	const session = await getServerSession();

	return (
		<main className="flex min-h-screen flex-col bg-i01">
			<div className="drawer" id="sidebar">
				<input id="my-drawer" type="checkbox" className="drawer-toggle" />
				<div className="drawer-content flex flex-col items-center justify-center">
                    <div id="content" className="flex container">
						<div
							id="left-content"
							className="hidden bg-i02 min-h-screen w-1/4 z-10 px-7 lg:block lg:px-10"
						>
							<div className="container sticky top-0">
								<div className="py-10">
									<img
										className="hidden h-6 lg:block"
										src="/images/Logo-Nav-Desktop.png"
										alt="Idealibs Logo"
									/>
								</div>
								<div className="grid grid-cols-1 gap-3 mt-3">
									<a href="#" onClick={() => handleActive(1)}>
										<div
											aria-selected={active === 1}
											className="flex rounded-lg text-i04 text-sm py-3 px-0 items-center pl-4 aria-selected:text-white aria-selected:bg-gradient-to-r aria-selected:from-iorange aria-selected:to-ipink"
										>
											<span>
												<svg
													xmlns="http://www.w3.org/2000/svg"
													viewBox="0 0 20 20"
													fill="currentColor"
													className="w-4 h-4 mr-3"
												>
													<path
														fillRule="evenodd"
														d="M9.293 2.293a1 1 0 0 1 1.414 0l7 7A1 1 0 0 1 17 11h-1v6a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1v-3a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v3a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-6H3a1 1 0 0 1-.707-1.707l7-7Z"
														clipRule="evenodd"
													/>
												</svg>
											</span>
											Home
										</div>
									</a>
									<div className="text-i04 text-sm py-1">Assets</div>
									<a href="#" onClick={() => handleActive(2)}>
										<div
											aria-selected={active === 2}
											className="flex rounded-lg text-i04 text-sm py-3 px-0 pl-4 items-center aria-selected:text-white aria-selected:bg-gradient-to-r aria-selected:from-iorange aria-selected:to-ipink"
										>
											<span>
												<svg
													xmlns="http://www.w3.org/2000/svg"
													viewBox="0 0 20 20"
													fill="currentColor"
													className="w-4 h-4 mr-3"
												>
													<path
														fillRule="evenodd"
														d="M1 5.25A2.25 2.25 0 0 1 3.25 3h13.5A2.25 2.25 0 0 1 19 5.25v9.5A2.25 2.25 0 0 1 16.75 17H3.25A2.25 2.25 0 0 1 1 14.75v-9.5Zm1.5 5.81v3.69c0 .414.336.75.75.75h13.5a.75.75 0 0 0 .75-.75v-2.69l-2.22-2.219a.75.75 0 0 0-1.06 0l-1.91 1.909.47.47a.75.75 0 1 1-1.06 1.06L6.53 8.091a.75.75 0 0 0-1.06 0l-2.97 2.97ZM12 7a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z"
														clipRule="evenodd"
													/>
												</svg>
											</span>
											Photos
										</div>
									</a>
									<a href="#" onClick={() => handleActive(3)}>
										<div
											aria-selected={active === 3}
											className="flex rounded-lg text-i04 text-sm py-3 px-0 pl-4 items-center aria-selected:text-white aria-selected:bg-gradient-to-r aria-selected:from-iorange aria-selected:to-ipink"
										>
											<span>
												<svg
													xmlns="http://www.w3.org/2000/svg"
													viewBox="0 0 448 512"
													fill="currentColor"
													className="w-4 h-4 mr-3"
												>
													<path d="M512 256c0 .9 0 1.8 0 2.7c-.4 36.5-33.6 61.3-70.1 61.3H344c-26.5 0-48 21.5-48 48c0 3.4 .4 6.7 1 9.9c2.1 10.2 6.5 20 10.8 29.9c6.1 13.8 12.1 27.5 12.1 42c0 31.8-21.6 60.7-53.4 62c-3.5 .1-7 .2-10.6 .2C114.6 512 0 397.4 0 256S114.6 0 256 0S512 114.6 512 256zM128 288a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zm0-96a32 32 0 1 0 0-64 32 32 0 1 0 0 64zM288 96a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zm96 96a32 32 0 1 0 0-64 32 32 0 1 0 0 64z" />
												</svg>
											</span>
											Colors Palette
										</div>
									</a>
									<a href="#" onClick={() => handleActive(4)}>
										<div
											aria-selected={active === 4}
											className="flex rounded-lg text-i04 text-sm py-3 px-0 pl-4 items-center aria-selected:text-white aria-selected:bg-gradient-to-r aria-selected:from-iorange aria-selected:to-ipink"
										>
											<span>
												<svg
													xmlns="http://www.w3.org/2000/svg"
													viewBox="0 0 448 512"
													fill="currentColor"
													className="w-4 h-4 mr-3"
												>
													<path d="M254 52.8C249.3 40.3 237.3 32 224 32s-25.3 8.3-30 20.8L57.8 416H32c-17.7 0-32 14.3-32 32s14.3 32 32 32h96c17.7 0 32-14.3 32-32s-14.3-32-32-32h-1.8l18-48H303.8l18 48H320c-17.7 0-32 14.3-32 32s14.3 32 32 32h96c17.7 0 32-14.3 32-32s-14.3-32-32-32H390.2L254 52.8zM279.8 304H168.2L224 155.1 279.8 304z" />
												</svg>
											</span>
											Fonts
										</div>
									</a>
									<a href="#" onClick={() => handleActive(5)}>
										<div
											aria-selected={active === 5}
											className="flex rounded-lg text-i04 text-sm py-3 px-0 pl-4 items-center aria-selected:text-white aria-selected:bg-gradient-to-r aria-selected:from-iorange aria-selected:to-ipink"
										>
											<span>
												<svg
													xmlns="http://www.w3.org/2000/svg"
													viewBox="0 0 20 20"
													fill="currentColor"
													className="w-4 h-4 mr-3"
												>
													<path d="M15.98 1.804a1 1 0 0 0-1.96 0l-.24 1.192a1 1 0 0 1-.784.785l-1.192.238a1 1 0 0 0 0 1.962l1.192.238a1 1 0 0 1 .785.785l.238 1.192a1 1 0 0 0 1.962 0l.238-1.192a1 1 0 0 1 .785-.785l1.192-.238a1 1 0 0 0 0-1.962l-1.192-.238a1 1 0 0 1-.785-.785l-.238-1.192ZM6.949 5.684a1 1 0 0 0-1.898 0l-.683 2.051a1 1 0 0 1-.633.633l-2.051.683a1 1 0 0 0 0 1.898l2.051.684a1 1 0 0 1 .633.632l.683 2.051a1 1 0 0 0 1.898 0l.683-2.051a1 1 0 0 1 .633-.633l2.051-.683a1 1 0 0 0 0-1.898l-2.051-.683a1 1 0 0 1-.633-.633L6.95 5.684ZM13.949 13.684a1 1 0 0 0-1.898 0l-.184.551a1 1 0 0 1-.632.633l-.551.183a1 1 0 0 0 0 1.898l.551.183a1 1 0 0 1 .633.633l.183.551a1 1 0 0 0 1.898 0l.184-.551a1 1 0 0 1 .632-.633l.551-.183a1 1 0 0 0 0-1.898l-.551-.184a1 1 0 0 1-.633-.632l-.183-.551Z" />
												</svg>
											</span>
											Vectors
										</div>
									</a>
									<a href="#" onClick={() => handleActive(6)}>
										<div
											aria-selected={active === 6}
											className="flex rounded-lg text-i04 text-sm py-3 px-0 pl-4 items-center aria-selected:text-white aria-selected:bg-gradient-to-r aria-selected:from-iorange aria-selected:to-ipink"
										>
											<span>
												<svg
													xmlns="http://www.w3.org/2000/svg"
													viewBox="0 0 20 20"
													fill="currentColor"
													className="w-4 h-4 mr-3"
												>
													<path d="M10.362 1.093a.75.75 0 0 0-.724 0L2.523 5.018 10 9.143l7.477-4.125-7.115-3.925ZM18 6.443l-7.25 4v8.25l6.862-3.786A.75.75 0 0 0 18 14.25V6.443ZM9.25 18.693v-8.25l-7.25-4v7.807a.75.75 0 0 0 .388.657l6.862 3.786Z" />
												</svg>
											</span>
											Mockups
										</div>
									</a>
									<a href="#" onClick={() => handleActive(7)}>
										<div
											aria-selected={active === 7}
											className="flex rounded-lg text-i04 text-sm py-3 px-0 pl-4 items-center aria-selected:text-white aria-selected:bg-gradient-to-r aria-selected:from-iorange aria-selected:to-ipink"
										>
											<svg
												xmlns="http://www.w3.org/2000/svg"
												viewBox="0 0 512 512"
												fill="currentColor"
												className="w-4 h-4 mr-3"
											>
												<path d="M500.3 7.3C507.7 13.3 512 22.4 512 32V176c0 26.5-28.7 48-64 48s-64-21.5-64-48s28.7-48 64-48V71L352 90.2V208c0 26.5-28.7 48-64 48s-64-21.5-64-48s28.7-48 64-48V64c0-15.3 10.8-28.4 25.7-31.4l160-32c9.4-1.9 19.1 .6 26.6 6.6zM74.7 304l11.8-17.8c5.9-8.9 15.9-14.2 26.6-14.2h61.7c10.7 0 20.7 5.3 26.6 14.2L213.3 304H240c26.5 0 48 21.5 48 48V464c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V352c0-26.5 21.5-48 48-48H74.7zM192 408a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zM478.7 278.3L440.3 368H496c6.7 0 12.6 4.1 15 10.4s.6 13.3-4.4 17.7l-128 112c-5.6 4.9-13.9 5.3-19.9 .9s-8.2-12.4-5.3-19.2L391.7 400H336c-6.7 0-12.6-4.1-15-10.4s-.6-13.3 4.4-17.7l128-112c5.6-4.9 13.9-5.3 19.9-.9s8.2 12.4 5.3 19.2zm-339-59.2c-6.5 6.5-17 6.5-23 0L19.9 119.2c-28-29-26.5-76.9 5-103.9c27-23.5 68.4-19 93.4 6.5l10 10.5 9.5-10.5c25-25.5 65.9-30 93.9-6.5c31 27 32.5 74.9 4.5 103.9l-96.4 99.9z" />
											</svg>
											Icons
										</div>
									</a>
								</div>
							</div>
						</div>
						<div id="right-content" className="min-h-screen lg:w-3/4">
							<div
								id="navbar"
								className="sticky top-0 container bg-i02 py-6 px-7 z-20 lg:px-10"
							>
								<div className="flex justify-between items-center">
									<label
										htmlFor="my-drawer"
										onClick={toggleDrawer}
										className="btn btn-square drawer-button border-0 bg-i03 h-10 lg:hidden"
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
									<div className="ml-14 lg:hidden">
										<img
											className="h-8 lg:hidden"
											src="/images/Logo-Nav-Mobile.png"
											alt="Idealibs Logo"
										/>
									</div>
									<div className="hidden lg:block lg:w-full lg:mr-48">
										<label className="input flex items-center gap-2 rounded-full bg-i03 px-5">
											<svg
												xmlns="http://www.w3.org/2000/svg"
												fill="none"
												viewBox="0 0 24 24"
												strokeWidth="1.5"
												stroke="currentColor"
												className="w-5 h-5"
											>
												<path
													strokeLinecap="round"
													strokeLinejoin="round"
													d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
												/>
											</svg>
											<input
												type="text"
												className="grow bg-i03"
												placeholder="Find all your design needs"
											/>
											<svg
												xmlns="http://www.w3.org/2000/svg"
												fill="none"
												viewBox="0 0 24 24"
												strokeWidth="1.5"
												stroke="currentColor"
												className="w-5 h-5"
											>
												<path
													strokeLinecap="round"
													strokeLinejoin="round"
													d="M6 13.5V3.75m0 9.75a1.5 1.5 0 0 1 0 3m0-3a1.5 1.5 0 0 0 0 3m0 3.75V16.5m12-3V3.75m0 9.75a1.5 1.5 0 0 1 0 3m0-3a1.5 1.5 0 0 0 0 3m0 3.75V16.5m-6-9V3.75m0 3.75a1.5 1.5 0 0 1 0 3m0-3a1.5 1.5 0 0 0 0 3m0 9.75V10.5"
												/>
											</svg>
										</label>
									</div>
									{session ? (
										<p>{session?.email}</p>
									) : (
										<div className="flex">
											<Link
												href="/login"
												type="button"
												className="hidden btn btn-outline rounded-full border-2 font-medium border-white text-white px-7 mr-3 hover:border-white hover:bg-white hover:text-i02 lg:flex"
											>
												Login
											</Link>
											<Link
												href="/register"
												type="button"
												className="btn btn-neutral rounded-full border-0 font-medium text-white bg-gradient-to-r from-iorange to-ipink hover:bg-transparent px-7"
											>
												Register
											</Link>
										</div>
									)}
									
								</div>
							</div>
							<div
								id="header"
								className="flex container flex-col items-center p-7"
							>
								<div className="md:inline-block  w-full">
									<div className="flex flex-col justify-between p-4 lg:p-8 bg-cover rounded-lg " style={{backgroundImage: `url(${bg.src})`}}>
										<img
										className="w-24 "
										src="/images/Logo-Nav-Desktop.png"
										alt="Img-Login"
										/>
										<div>
											<p className="font-medium lg:font-semibold text-lg lg:text-2xl pt-32 lg:pt-28 pe-24 mb-2">An ideal library of ideas to develop your creative mind.</p>
											<p className="font-regular text-sm pe-12 hidden lg:block">Enjoy Full Access to Premium Resources, Unlimited Mockups, and an Unforgettable Design Experience. Become a Featured Designer and Experience Creative Freedom with Idealibs Premium!"</p>
										</div>
										
									</div>
								</div>
							</div>

							<div id="mainmenu" className="px-7">
								<div className="mb-6 block lg:hidden">
									<div className="flex items-center justify-between px-6 gap-4 rounded-iform w-full h-16 bg-i03">
										<svg width="30" height="30" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
											<path fill-rule="evenodd" clip-rule="evenodd" d="M3.75195 10.5815C3.75195 6.70046 6.90995 3.54346 10.791 3.54346C14.671 3.54346 17.829 6.70046 17.829 10.5815C17.829 14.4625 14.671 17.6205 10.791 17.6205C6.90995 17.6205 3.75195 14.4625 3.75195 10.5815ZM22.247 21.0405L17.648 16.4535C19.004 14.8725 19.829 12.8235 19.829 10.5815C19.829 5.59846 15.774 1.54346 10.791 1.54346C5.80695 1.54346 1.75195 5.59846 1.75195 10.5815C1.75195 15.5655 5.80695 19.6205 10.791 19.6205C12.813 19.6205 14.676 18.9445 16.183 17.8175L20.835 22.4565L22.247 21.0405Z" fill="#FEFEFE"/>
										</svg>
										<input type='text' name="name" placeholder="Find all your design needs" className="w-full h-14 bg-i03"/>
										<svg width="30" height="30" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
											<path d="M6 13.5L6 3.75M6 13.5C6.82843 13.5 7.5 14.1716 7.5 15C7.5 15.8284 6.82843 16.5 6 16.5M6 13.5C5.17157 13.5 4.5 14.1716 4.5 15C4.5 15.8284 5.17157 16.5 6 16.5M6 20.25L6 16.5M18 13.5V3.75M18 13.5C18.8284 13.5 19.5 14.1716 19.5 15C19.5 15.8284 18.8284 16.5 18 16.5M18 13.5C17.1716 13.5 16.5 14.1716 16.5 15C16.5 15.8284 17.1716 16.5 18 16.5M18 20.25L18 16.5M12 7.5V3.75M12 7.5C12.8284 7.5 13.5 8.17157 13.5 9C13.5 9.82843 12.8284 10.5 12 10.5M12 7.5C11.1716 7.5 10.5 8.17157 10.5 9C10.5 9.82843 11.1716 10.5 12 10.5M12 20.25V10.5" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
										</svg>
									</div>
								</div>
								<div className="bg-i02 lg:bg-inherit rounded-lg mb-6 lg:mb-0 p-8 lg:p-0 lg:flex gap-6">
									<button className="flex justify-center items-center gap-2 rounded-iform w-full h-16 lg:h-14 bg-iblue font-semibold mb-8">
										<svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
											<path fill-rule="evenodd" clip-rule="evenodd" d="M13.25 10.8303V17.0903H11.75V10.8303H2.75V22.3503H22.25V10.8303H13.25Z" fill="#FEFEFE"/>
											<path fill-rule="evenodd" clip-rule="evenodd" d="M13.25 6.0289C14.24 7.0739 15.621 7.7499 17.1 7.7499H17.85V6.2499H17.1C15.085 6.2499 13.25 4.4169 13.25 2.4039V1.6499H11.75V2.4039C11.75 4.4169 9.92003 6.2499 7.91003 6.2499H7.16003V7.7499H7.91003C9.38503 7.7499 10.762 7.0759 11.75 6.0319L11.75 10.8303H13.25L13.25 6.0289Z" fill="#FEFEFE"/>
										</svg>
										Upload Image
									</button>
									<button className="flex justify-center items-center gap-2 rounded-iform w-full h-16 lg:h-14 bg-gradient-to-r from-iorange to-ipink font-semibold">
										<svg width="24" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
											<path fill-rule="evenodd" clip-rule="evenodd" d="M21.9236 11.5315C17.7756 9.9975 14.5116 6.7335 12.9686 2.5765L12.4996 1.3125L12.0306 2.5765C10.4876 6.7335 7.22462 9.9975 3.07562 11.5315L1.80762 12.0005L3.07562 12.4685C7.22462 14.0025 10.4876 17.2665 12.0306 21.4245L12.4996 22.6875L12.9686 21.4245C14.5116 17.2665 17.7756 14.0025 21.9236 12.4685L23.1926 12.0005L21.9236 11.5315Z" fill="#FEFEFE"/>
										</svg>
										AI Image
									</button>
								</div>
								<div className="flex flex-wrap gap-4 mb-6">
									<div className="bg-i02 font-bold rounded-iform py-4 lg:py-3 px-8 lg:px-6 bg-iblue">All</div>
									<div className="bg-i02 font-bold rounded-iform py-4 lg:py-3 px-8 lg:px-6">Nature</div>
									<div className="bg-i02 font-bold rounded-iform py-4 lg:py-3 px-8 lg:px-6 hidden lg:block">Technology and Innovation</div>
									<div className="bg-i02 font-bold rounded-iform py-4 lg:py-3 px-8 lg:px-6 hidden lg:block">Fashion and Lifestyle</div>
									<div className="bg-i02 font-bold rounded-iform py-4 lg:py-3 px-8 lg:px-6 hidden lg:block">Art and Creativity</div>
									<div className="bg-i02 font-bold rounded-iform py-4 lg:py-3 px-8 lg:px-6">People</div>
									<div className="bg-i02 font-bold rounded-iform py-4 lg:py-3 px-8 lg:px-6 hidden lg:block">Food and Beverages</div>
									<div className="bg-i02 font-bold rounded-iform py-4 lg:py-3 px-8 lg:px-6 hidden lg:block">Health and Fitness</div>
									<div className="bg-i02 font-bold rounded-iform py-4 lg:py-3 px-8 lg:px-6 hidden lg:block">Travel and Destinations</div>
									<div className="bg-i02 font-bold rounded-iform py-4 lg:py-3 px-8 lg:px-6">Textures</div>
									<div className="font-bold rounded-iform py-4 lg:py-3 px-8 lg:px-16 border">See more category</div>
								</div>
							</div>
							
							<div id="mobile-scrollable" className="block md:hidden">
								<div className="mb-2">
									<div className="flex gap-4 items-center p-7">
										<img
											src="/images/Img-Profile.png"
											className="rounded-full w-12 h-12">
										</img>
										<p>Khananta</p>
									</div>

									<img
										src="/images/Img-Image1.png"
										className="w-full bg-i04"></img>

									<div className="flex gap-4 items-center justify-between p-7">
										<div className="flex items-center justify-center bg-i02 w-12 h-12 rounded-full">
											<svg width="24" height="24" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
												<path d="M14.6611 2.76867C15.5783 2.87511 16.25 3.66583 16.25 4.58916V17.5L10 14.375L3.75 17.5V4.58916C3.75 3.66583 4.42173 2.87511 5.3389 2.76867C6.86797 2.59122 8.42333 2.5 10 2.5C11.5767 2.5 13.132 2.59122 14.6611 2.76867Z" stroke="#FEFEFE" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
											</svg>
										</div>
										<div className="flex gap-2 bg-i02 py-3 px-8 rounded-iform">
											<svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
												<path fill-rule="evenodd" clip-rule="evenodd" d="M5.47812 5.55887C5.67178 4.92948 6.25329 4.5 6.91179 4.5H9C9.41421 4.5 9.75 4.16421 9.75 3.75C9.75 3.33579 9.41421 3 9 3H6.91179C5.59478 3 4.43177 3.85897 4.04446 5.11774L1.63266 12.9561C1.54472 13.2419 1.5 13.5393 1.5 13.8383V18C1.5 19.6569 2.84315 21 4.5 21H19.5C21.1569 21 22.5 19.6569 22.5 18V13.8383C22.5 13.5393 22.4553 13.2419 22.3673 12.9561L19.9555 5.11774C19.5682 3.85897 18.4052 3 17.0882 3H15C14.5858 3 14.25 3.33579 14.25 3.75C14.25 4.16421 14.5858 4.5 15 4.5H17.0882C17.7467 4.5 18.3282 4.92948 18.5219 5.55887L20.7345 12.75H17.8906C16.7543 12.75 15.7155 13.392 15.2073 14.4084L14.9511 14.9208C14.697 15.429 14.1776 15.75 13.6094 15.75H10.3906C9.82242 15.75 9.30302 15.429 9.04894 14.9208L8.79271 14.4084C8.28453 13.392 7.24574 12.75 6.10942 12.75H3.26547L5.47812 5.55887Z" fill="#FEFEFE"/>
												<path fill-rule="evenodd" clip-rule="evenodd" d="M12 2.25C12.4142 2.25 12.75 2.58579 12.75 3V9.43934L14.4697 7.71967C14.7626 7.42678 15.2374 7.42678 15.5303 7.71967C15.8232 8.01256 15.8232 8.48744 15.5303 8.78033L12.5303 11.7803C12.2374 12.0732 11.7626 12.0732 11.4697 11.7803L8.46967 8.78033C8.17678 8.48744 8.17678 8.01256 8.46967 7.71967C8.76256 7.42678 9.23744 7.42678 9.53033 7.71967L11.25 9.43934V3C11.25 2.58579 11.5858 2.25 12 2.25Z" fill="#FEFEFE"/>
											</svg>
											Download
										</div>
									</div>
									<div className="px-7 py-3">
										<div className="w-full bg-i03 h-1 rounded-lg"></div>
									</div>
								</div>
								<div className="mb-2">
									<div className="flex gap-4 items-center p-7">
										<img
											src="/images/Img-Profile.png"
											className="rounded-full w-12 h-12">
										</img>
										<p>Khananta</p>
									</div>

									<img
										src="/images/Img-Image2.png"
										className="w-full bg-i04"></img>

									<div className="flex gap-4 items-center justify-between p-7">
										<div className="flex items-center justify-center bg-i02 w-12 h-12 rounded-full">
											<svg width="24" height="24" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
												<path d="M14.6611 2.76867C15.5783 2.87511 16.25 3.66583 16.25 4.58916V17.5L10 14.375L3.75 17.5V4.58916C3.75 3.66583 4.42173 2.87511 5.3389 2.76867C6.86797 2.59122 8.42333 2.5 10 2.5C11.5767 2.5 13.132 2.59122 14.6611 2.76867Z" stroke="#FEFEFE" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
											</svg>
										</div>
										<div className="flex gap-2 bg-i02 py-3 px-8 rounded-iform">
											<svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
												<path fill-rule="evenodd" clip-rule="evenodd" d="M5.47812 5.55887C5.67178 4.92948 6.25329 4.5 6.91179 4.5H9C9.41421 4.5 9.75 4.16421 9.75 3.75C9.75 3.33579 9.41421 3 9 3H6.91179C5.59478 3 4.43177 3.85897 4.04446 5.11774L1.63266 12.9561C1.54472 13.2419 1.5 13.5393 1.5 13.8383V18C1.5 19.6569 2.84315 21 4.5 21H19.5C21.1569 21 22.5 19.6569 22.5 18V13.8383C22.5 13.5393 22.4553 13.2419 22.3673 12.9561L19.9555 5.11774C19.5682 3.85897 18.4052 3 17.0882 3H15C14.5858 3 14.25 3.33579 14.25 3.75C14.25 4.16421 14.5858 4.5 15 4.5H17.0882C17.7467 4.5 18.3282 4.92948 18.5219 5.55887L20.7345 12.75H17.8906C16.7543 12.75 15.7155 13.392 15.2073 14.4084L14.9511 14.9208C14.697 15.429 14.1776 15.75 13.6094 15.75H10.3906C9.82242 15.75 9.30302 15.429 9.04894 14.9208L8.79271 14.4084C8.28453 13.392 7.24574 12.75 6.10942 12.75H3.26547L5.47812 5.55887Z" fill="#FEFEFE"/>
												<path fill-rule="evenodd" clip-rule="evenodd" d="M12 2.25C12.4142 2.25 12.75 2.58579 12.75 3V9.43934L14.4697 7.71967C14.7626 7.42678 15.2374 7.42678 15.5303 7.71967C15.8232 8.01256 15.8232 8.48744 15.5303 8.78033L12.5303 11.7803C12.2374 12.0732 11.7626 12.0732 11.4697 11.7803L8.46967 8.78033C8.17678 8.48744 8.17678 8.01256 8.46967 7.71967C8.76256 7.42678 9.23744 7.42678 9.53033 7.71967L11.25 9.43934V3C11.25 2.58579 11.5858 2.25 12 2.25Z" fill="#FEFEFE"/>
											</svg>
											Download
										</div>
									</div>
									<div className="px-7 py-3">
										<div className="w-full bg-i03 h-1 rounded-lg"></div>
									</div>
								</div>
								<div className="mb-2">
									<div className="flex gap-4 items-center p-7">
										<img
											src="/images/Img-Profile.png"
											className="rounded-full w-12 h-12">
										</img>
										<p>Khananta</p>
									</div>

									<img
										src="/images/Img-Image3.png"
										className="w-full bg-i04"></img>

									<div className="flex gap-4 items-center justify-between p-7">
										<div className="flex items-center justify-center bg-i02 w-12 h-12 rounded-full">
											<svg width="24" height="24" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
												<path d="M14.6611 2.76867C15.5783 2.87511 16.25 3.66583 16.25 4.58916V17.5L10 14.375L3.75 17.5V4.58916C3.75 3.66583 4.42173 2.87511 5.3389 2.76867C6.86797 2.59122 8.42333 2.5 10 2.5C11.5767 2.5 13.132 2.59122 14.6611 2.76867Z" stroke="#FEFEFE" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
											</svg>
										</div>
										<div className="flex gap-2 bg-i02 py-3 px-8 rounded-iform">
											<svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
												<path fill-rule="evenodd" clip-rule="evenodd" d="M5.47812 5.55887C5.67178 4.92948 6.25329 4.5 6.91179 4.5H9C9.41421 4.5 9.75 4.16421 9.75 3.75C9.75 3.33579 9.41421 3 9 3H6.91179C5.59478 3 4.43177 3.85897 4.04446 5.11774L1.63266 12.9561C1.54472 13.2419 1.5 13.5393 1.5 13.8383V18C1.5 19.6569 2.84315 21 4.5 21H19.5C21.1569 21 22.5 19.6569 22.5 18V13.8383C22.5 13.5393 22.4553 13.2419 22.3673 12.9561L19.9555 5.11774C19.5682 3.85897 18.4052 3 17.0882 3H15C14.5858 3 14.25 3.33579 14.25 3.75C14.25 4.16421 14.5858 4.5 15 4.5H17.0882C17.7467 4.5 18.3282 4.92948 18.5219 5.55887L20.7345 12.75H17.8906C16.7543 12.75 15.7155 13.392 15.2073 14.4084L14.9511 14.9208C14.697 15.429 14.1776 15.75 13.6094 15.75H10.3906C9.82242 15.75 9.30302 15.429 9.04894 14.9208L8.79271 14.4084C8.28453 13.392 7.24574 12.75 6.10942 12.75H3.26547L5.47812 5.55887Z" fill="#FEFEFE"/>
												<path fill-rule="evenodd" clip-rule="evenodd" d="M12 2.25C12.4142 2.25 12.75 2.58579 12.75 3V9.43934L14.4697 7.71967C14.7626 7.42678 15.2374 7.42678 15.5303 7.71967C15.8232 8.01256 15.8232 8.48744 15.5303 8.78033L12.5303 11.7803C12.2374 12.0732 11.7626 12.0732 11.4697 11.7803L8.46967 8.78033C8.17678 8.48744 8.17678 8.01256 8.46967 7.71967C8.76256 7.42678 9.23744 7.42678 9.53033 7.71967L11.25 9.43934V3C11.25 2.58579 11.5858 2.25 12 2.25Z" fill="#FEFEFE"/>
											</svg>
											Download
										</div>
									</div>
									<div className="px-7 py-3">
										<div className="w-full bg-i03 h-1 rounded-lg"></div>
									</div>
								</div>
								<div className="mb-2">
									<div className="flex gap-4 items-center p-7">
										<img
											src="/images/Img-Profile.png"
											className="rounded-full w-12 h-12">
										</img>
										<p>Khananta</p>
									</div>

									<img
										src="/images/Img-Image4.png"
										className="w-full bg-i04"></img>

									<div className="flex gap-4 items-center justify-between p-7">
										<div className="flex items-center justify-center bg-i02 w-12 h-12 rounded-full">
											<svg width="24" height="24" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
												<path d="M14.6611 2.76867C15.5783 2.87511 16.25 3.66583 16.25 4.58916V17.5L10 14.375L3.75 17.5V4.58916C3.75 3.66583 4.42173 2.87511 5.3389 2.76867C6.86797 2.59122 8.42333 2.5 10 2.5C11.5767 2.5 13.132 2.59122 14.6611 2.76867Z" stroke="#FEFEFE" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
											</svg>
										</div>
										<div className="flex gap-2 bg-i02 py-3 px-8 rounded-iform">
											<svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
												<path fill-rule="evenodd" clip-rule="evenodd" d="M5.47812 5.55887C5.67178 4.92948 6.25329 4.5 6.91179 4.5H9C9.41421 4.5 9.75 4.16421 9.75 3.75C9.75 3.33579 9.41421 3 9 3H6.91179C5.59478 3 4.43177 3.85897 4.04446 5.11774L1.63266 12.9561C1.54472 13.2419 1.5 13.5393 1.5 13.8383V18C1.5 19.6569 2.84315 21 4.5 21H19.5C21.1569 21 22.5 19.6569 22.5 18V13.8383C22.5 13.5393 22.4553 13.2419 22.3673 12.9561L19.9555 5.11774C19.5682 3.85897 18.4052 3 17.0882 3H15C14.5858 3 14.25 3.33579 14.25 3.75C14.25 4.16421 14.5858 4.5 15 4.5H17.0882C17.7467 4.5 18.3282 4.92948 18.5219 5.55887L20.7345 12.75H17.8906C16.7543 12.75 15.7155 13.392 15.2073 14.4084L14.9511 14.9208C14.697 15.429 14.1776 15.75 13.6094 15.75H10.3906C9.82242 15.75 9.30302 15.429 9.04894 14.9208L8.79271 14.4084C8.28453 13.392 7.24574 12.75 6.10942 12.75H3.26547L5.47812 5.55887Z" fill="#FEFEFE"/>
												<path fill-rule="evenodd" clip-rule="evenodd" d="M12 2.25C12.4142 2.25 12.75 2.58579 12.75 3V9.43934L14.4697 7.71967C14.7626 7.42678 15.2374 7.42678 15.5303 7.71967C15.8232 8.01256 15.8232 8.48744 15.5303 8.78033L12.5303 11.7803C12.2374 12.0732 11.7626 12.0732 11.4697 11.7803L8.46967 8.78033C8.17678 8.48744 8.17678 8.01256 8.46967 7.71967C8.76256 7.42678 9.23744 7.42678 9.53033 7.71967L11.25 9.43934V3C11.25 2.58579 11.5858 2.25 12 2.25Z" fill="#FEFEFE"/>
											</svg>
											Download
										</div>
									</div>
									<div className="px-7 py-3">
										<div className="w-full bg-i03 h-1 rounded-lg"></div>
									</div>
								</div>
								<div className="mb-2">
									<div className="flex gap-4 items-center p-7">
										<img
											src="/images/Img-Profile.png"
											className="rounded-full w-12 h-12">
										</img>
										<p>Khananta</p>
									</div>

									<img
										src="/images/Img-Image5.png"
										className="w-full bg-i04"></img>

									<div className="flex gap-4 items-center justify-between p-7">
										<div className="flex items-center justify-center bg-i02 w-12 h-12 rounded-full">
											<svg width="24" height="24" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
												<path d="M14.6611 2.76867C15.5783 2.87511 16.25 3.66583 16.25 4.58916V17.5L10 14.375L3.75 17.5V4.58916C3.75 3.66583 4.42173 2.87511 5.3389 2.76867C6.86797 2.59122 8.42333 2.5 10 2.5C11.5767 2.5 13.132 2.59122 14.6611 2.76867Z" stroke="#FEFEFE" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
											</svg>
										</div>
										<div className="flex gap-2 bg-i02 py-3 px-8 rounded-iform">
											<svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
												<path fill-rule="evenodd" clip-rule="evenodd" d="M5.47812 5.55887C5.67178 4.92948 6.25329 4.5 6.91179 4.5H9C9.41421 4.5 9.75 4.16421 9.75 3.75C9.75 3.33579 9.41421 3 9 3H6.91179C5.59478 3 4.43177 3.85897 4.04446 5.11774L1.63266 12.9561C1.54472 13.2419 1.5 13.5393 1.5 13.8383V18C1.5 19.6569 2.84315 21 4.5 21H19.5C21.1569 21 22.5 19.6569 22.5 18V13.8383C22.5 13.5393 22.4553 13.2419 22.3673 12.9561L19.9555 5.11774C19.5682 3.85897 18.4052 3 17.0882 3H15C14.5858 3 14.25 3.33579 14.25 3.75C14.25 4.16421 14.5858 4.5 15 4.5H17.0882C17.7467 4.5 18.3282 4.92948 18.5219 5.55887L20.7345 12.75H17.8906C16.7543 12.75 15.7155 13.392 15.2073 14.4084L14.9511 14.9208C14.697 15.429 14.1776 15.75 13.6094 15.75H10.3906C9.82242 15.75 9.30302 15.429 9.04894 14.9208L8.79271 14.4084C8.28453 13.392 7.24574 12.75 6.10942 12.75H3.26547L5.47812 5.55887Z" fill="#FEFEFE"/>
												<path fill-rule="evenodd" clip-rule="evenodd" d="M12 2.25C12.4142 2.25 12.75 2.58579 12.75 3V9.43934L14.4697 7.71967C14.7626 7.42678 15.2374 7.42678 15.5303 7.71967C15.8232 8.01256 15.8232 8.48744 15.5303 8.78033L12.5303 11.7803C12.2374 12.0732 11.7626 12.0732 11.4697 11.7803L8.46967 8.78033C8.17678 8.48744 8.17678 8.01256 8.46967 7.71967C8.76256 7.42678 9.23744 7.42678 9.53033 7.71967L11.25 9.43934V3C11.25 2.58579 11.5858 2.25 12 2.25Z" fill="#FEFEFE"/>
											</svg>
											Download
										</div>
									</div>
									<div className="px-7 py-3">
										<div className="w-full bg-i03 h-1 rounded-lg"></div>
									</div>
								</div>
								<div className="mb-2">
									<div className="flex gap-4 items-center p-7">
										<img
											src="/images/Img-Profile.png"
											className="rounded-full w-12 h-12">
										</img>
										<p>Khananta</p>
									</div>

									<img
										src="/images/Img-Image6.png"
										className="w-full bg-i04"></img>

									<div className="flex gap-4 items-center justify-between p-7">
										<div className="flex items-center justify-center bg-i02 w-12 h-12 rounded-full">
											<svg width="24" height="24" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
												<path d="M14.6611 2.76867C15.5783 2.87511 16.25 3.66583 16.25 4.58916V17.5L10 14.375L3.75 17.5V4.58916C3.75 3.66583 4.42173 2.87511 5.3389 2.76867C6.86797 2.59122 8.42333 2.5 10 2.5C11.5767 2.5 13.132 2.59122 14.6611 2.76867Z" stroke="#FEFEFE" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
											</svg>
										</div>
										<div className="flex gap-2 bg-i02 py-3 px-8 rounded-iform">
											<svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
												<path fill-rule="evenodd" clip-rule="evenodd" d="M5.47812 5.55887C5.67178 4.92948 6.25329 4.5 6.91179 4.5H9C9.41421 4.5 9.75 4.16421 9.75 3.75C9.75 3.33579 9.41421 3 9 3H6.91179C5.59478 3 4.43177 3.85897 4.04446 5.11774L1.63266 12.9561C1.54472 13.2419 1.5 13.5393 1.5 13.8383V18C1.5 19.6569 2.84315 21 4.5 21H19.5C21.1569 21 22.5 19.6569 22.5 18V13.8383C22.5 13.5393 22.4553 13.2419 22.3673 12.9561L19.9555 5.11774C19.5682 3.85897 18.4052 3 17.0882 3H15C14.5858 3 14.25 3.33579 14.25 3.75C14.25 4.16421 14.5858 4.5 15 4.5H17.0882C17.7467 4.5 18.3282 4.92948 18.5219 5.55887L20.7345 12.75H17.8906C16.7543 12.75 15.7155 13.392 15.2073 14.4084L14.9511 14.9208C14.697 15.429 14.1776 15.75 13.6094 15.75H10.3906C9.82242 15.75 9.30302 15.429 9.04894 14.9208L8.79271 14.4084C8.28453 13.392 7.24574 12.75 6.10942 12.75H3.26547L5.47812 5.55887Z" fill="#FEFEFE"/>
												<path fill-rule="evenodd" clip-rule="evenodd" d="M12 2.25C12.4142 2.25 12.75 2.58579 12.75 3V9.43934L14.4697 7.71967C14.7626 7.42678 15.2374 7.42678 15.5303 7.71967C15.8232 8.01256 15.8232 8.48744 15.5303 8.78033L12.5303 11.7803C12.2374 12.0732 11.7626 12.0732 11.4697 11.7803L8.46967 8.78033C8.17678 8.48744 8.17678 8.01256 8.46967 7.71967C8.76256 7.42678 9.23744 7.42678 9.53033 7.71967L11.25 9.43934V3C11.25 2.58579 11.5858 2.25 12 2.25Z" fill="#FEFEFE"/>
											</svg>
											Download
										</div>
									</div>
									<div className="px-7 py-3">
										<div className="w-full bg-i03 h-1 rounded-lg"></div>
									</div>
								</div>
								<div className="mb-2">
									<div className="flex gap-4 items-center p-7">
										<img
											src="/images/Img-Profile.png"
											className="rounded-full w-12 h-12">
										</img>
										<p>Khananta</p>
									</div>

									<img
										src="/images/Img-Image7.png"
										className="w-full bg-i04"></img>

									<div className="flex gap-4 items-center justify-between p-7">
										<div className="flex items-center justify-center bg-i02 w-12 h-12 rounded-full">
											<svg width="24" height="24" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
												<path d="M14.6611 2.76867C15.5783 2.87511 16.25 3.66583 16.25 4.58916V17.5L10 14.375L3.75 17.5V4.58916C3.75 3.66583 4.42173 2.87511 5.3389 2.76867C6.86797 2.59122 8.42333 2.5 10 2.5C11.5767 2.5 13.132 2.59122 14.6611 2.76867Z" stroke="#FEFEFE" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
											</svg>
										</div>
										<div className="flex gap-2 bg-i02 py-3 px-8 rounded-iform">
											<svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
												<path fill-rule="evenodd" clip-rule="evenodd" d="M5.47812 5.55887C5.67178 4.92948 6.25329 4.5 6.91179 4.5H9C9.41421 4.5 9.75 4.16421 9.75 3.75C9.75 3.33579 9.41421 3 9 3H6.91179C5.59478 3 4.43177 3.85897 4.04446 5.11774L1.63266 12.9561C1.54472 13.2419 1.5 13.5393 1.5 13.8383V18C1.5 19.6569 2.84315 21 4.5 21H19.5C21.1569 21 22.5 19.6569 22.5 18V13.8383C22.5 13.5393 22.4553 13.2419 22.3673 12.9561L19.9555 5.11774C19.5682 3.85897 18.4052 3 17.0882 3H15C14.5858 3 14.25 3.33579 14.25 3.75C14.25 4.16421 14.5858 4.5 15 4.5H17.0882C17.7467 4.5 18.3282 4.92948 18.5219 5.55887L20.7345 12.75H17.8906C16.7543 12.75 15.7155 13.392 15.2073 14.4084L14.9511 14.9208C14.697 15.429 14.1776 15.75 13.6094 15.75H10.3906C9.82242 15.75 9.30302 15.429 9.04894 14.9208L8.79271 14.4084C8.28453 13.392 7.24574 12.75 6.10942 12.75H3.26547L5.47812 5.55887Z" fill="#FEFEFE"/>
												<path fill-rule="evenodd" clip-rule="evenodd" d="M12 2.25C12.4142 2.25 12.75 2.58579 12.75 3V9.43934L14.4697 7.71967C14.7626 7.42678 15.2374 7.42678 15.5303 7.71967C15.8232 8.01256 15.8232 8.48744 15.5303 8.78033L12.5303 11.7803C12.2374 12.0732 11.7626 12.0732 11.4697 11.7803L8.46967 8.78033C8.17678 8.48744 8.17678 8.01256 8.46967 7.71967C8.76256 7.42678 9.23744 7.42678 9.53033 7.71967L11.25 9.43934V3C11.25 2.58579 11.5858 2.25 12 2.25Z" fill="#FEFEFE"/>
											</svg>
											Download
										</div>
									</div>
									<div className="px-7 py-3">
										<div className="w-full bg-i03 h-1 rounded-lg"></div>
									</div>
								</div>
								<div className="mb-2">
									<div className="flex gap-4 items-center p-7">
										<img
											src="/images/Img-Profile.png"
											className="rounded-full w-12 h-12">
										</img>
										<p>Khananta</p>
									</div>

									<img
										src="/images/Img-Image8.png"
										className="w-full bg-i04"></img>

									<div className="flex gap-4 items-center justify-between p-7">
										<div className="flex items-center justify-center bg-i02 w-12 h-12 rounded-full">
											<svg width="24" height="24" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
												<path d="M14.6611 2.76867C15.5783 2.87511 16.25 3.66583 16.25 4.58916V17.5L10 14.375L3.75 17.5V4.58916C3.75 3.66583 4.42173 2.87511 5.3389 2.76867C6.86797 2.59122 8.42333 2.5 10 2.5C11.5767 2.5 13.132 2.59122 14.6611 2.76867Z" stroke="#FEFEFE" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
											</svg>
										</div>
										<div className="flex gap-2 bg-i02 py-3 px-8 rounded-iform">
											<svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
												<path fill-rule="evenodd" clip-rule="evenodd" d="M5.47812 5.55887C5.67178 4.92948 6.25329 4.5 6.91179 4.5H9C9.41421 4.5 9.75 4.16421 9.75 3.75C9.75 3.33579 9.41421 3 9 3H6.91179C5.59478 3 4.43177 3.85897 4.04446 5.11774L1.63266 12.9561C1.54472 13.2419 1.5 13.5393 1.5 13.8383V18C1.5 19.6569 2.84315 21 4.5 21H19.5C21.1569 21 22.5 19.6569 22.5 18V13.8383C22.5 13.5393 22.4553 13.2419 22.3673 12.9561L19.9555 5.11774C19.5682 3.85897 18.4052 3 17.0882 3H15C14.5858 3 14.25 3.33579 14.25 3.75C14.25 4.16421 14.5858 4.5 15 4.5H17.0882C17.7467 4.5 18.3282 4.92948 18.5219 5.55887L20.7345 12.75H17.8906C16.7543 12.75 15.7155 13.392 15.2073 14.4084L14.9511 14.9208C14.697 15.429 14.1776 15.75 13.6094 15.75H10.3906C9.82242 15.75 9.30302 15.429 9.04894 14.9208L8.79271 14.4084C8.28453 13.392 7.24574 12.75 6.10942 12.75H3.26547L5.47812 5.55887Z" fill="#FEFEFE"/>
												<path fill-rule="evenodd" clip-rule="evenodd" d="M12 2.25C12.4142 2.25 12.75 2.58579 12.75 3V9.43934L14.4697 7.71967C14.7626 7.42678 15.2374 7.42678 15.5303 7.71967C15.8232 8.01256 15.8232 8.48744 15.5303 8.78033L12.5303 11.7803C12.2374 12.0732 11.7626 12.0732 11.4697 11.7803L8.46967 8.78033C8.17678 8.48744 8.17678 8.01256 8.46967 7.71967C8.76256 7.42678 9.23744 7.42678 9.53033 7.71967L11.25 9.43934V3C11.25 2.58579 11.5858 2.25 12 2.25Z" fill="#FEFEFE"/>
											</svg>
											Download
										</div>
									</div>
									<div className="px-7 py-3">
										<div className="w-full bg-i03 h-1 rounded-lg"></div>
									</div>
								</div>
								<div className="mb-2">
									<div className="flex gap-4 items-center p-7">
										<img
											src="/images/Img-Profile.png"
											className="rounded-full w-12 h-12">
										</img>
										<p>Khananta</p>
									</div>

									<img
										src="/images/Img-Image9.png"
										className="w-full bg-i04"></img>

									<div className="flex gap-4 items-center justify-between p-7">
										<div className="flex items-center justify-center bg-i02 w-12 h-12 rounded-full">
											<svg width="24" height="24" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
												<path d="M14.6611 2.76867C15.5783 2.87511 16.25 3.66583 16.25 4.58916V17.5L10 14.375L3.75 17.5V4.58916C3.75 3.66583 4.42173 2.87511 5.3389 2.76867C6.86797 2.59122 8.42333 2.5 10 2.5C11.5767 2.5 13.132 2.59122 14.6611 2.76867Z" stroke="#FEFEFE" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
											</svg>
										</div>
										<div className="flex gap-2 bg-i02 py-3 px-8 rounded-iform">
											<svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
												<path fill-rule="evenodd" clip-rule="evenodd" d="M5.47812 5.55887C5.67178 4.92948 6.25329 4.5 6.91179 4.5H9C9.41421 4.5 9.75 4.16421 9.75 3.75C9.75 3.33579 9.41421 3 9 3H6.91179C5.59478 3 4.43177 3.85897 4.04446 5.11774L1.63266 12.9561C1.54472 13.2419 1.5 13.5393 1.5 13.8383V18C1.5 19.6569 2.84315 21 4.5 21H19.5C21.1569 21 22.5 19.6569 22.5 18V13.8383C22.5 13.5393 22.4553 13.2419 22.3673 12.9561L19.9555 5.11774C19.5682 3.85897 18.4052 3 17.0882 3H15C14.5858 3 14.25 3.33579 14.25 3.75C14.25 4.16421 14.5858 4.5 15 4.5H17.0882C17.7467 4.5 18.3282 4.92948 18.5219 5.55887L20.7345 12.75H17.8906C16.7543 12.75 15.7155 13.392 15.2073 14.4084L14.9511 14.9208C14.697 15.429 14.1776 15.75 13.6094 15.75H10.3906C9.82242 15.75 9.30302 15.429 9.04894 14.9208L8.79271 14.4084C8.28453 13.392 7.24574 12.75 6.10942 12.75H3.26547L5.47812 5.55887Z" fill="#FEFEFE"/>
												<path fill-rule="evenodd" clip-rule="evenodd" d="M12 2.25C12.4142 2.25 12.75 2.58579 12.75 3V9.43934L14.4697 7.71967C14.7626 7.42678 15.2374 7.42678 15.5303 7.71967C15.8232 8.01256 15.8232 8.48744 15.5303 8.78033L12.5303 11.7803C12.2374 12.0732 11.7626 12.0732 11.4697 11.7803L8.46967 8.78033C8.17678 8.48744 8.17678 8.01256 8.46967 7.71967C8.76256 7.42678 9.23744 7.42678 9.53033 7.71967L11.25 9.43934V3C11.25 2.58579 11.5858 2.25 12 2.25Z" fill="#FEFEFE"/>
											</svg>
											Download
										</div>
									</div>
									<div className="px-7 py-3">
										<div className="w-full bg-i03 h-1 rounded-lg"></div>
									</div>
								</div>
								<div className="mb-2">
									<div className="flex gap-4 items-center p-7">
										<img
											src="/images/Img-Profile.png"
											className="rounded-full w-12 h-12">
										</img>
										<p>Khananta</p>
									</div>

									<img
										src="/images/Img-Image10.png"
										className="w-full bg-i04"></img>

									<div className="flex gap-4 items-center justify-between p-7">
										<div className="flex items-center justify-center bg-i02 w-12 h-12 rounded-full">
											<svg width="24" height="24" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
												<path d="M14.6611 2.76867C15.5783 2.87511 16.25 3.66583 16.25 4.58916V17.5L10 14.375L3.75 17.5V4.58916C3.75 3.66583 4.42173 2.87511 5.3389 2.76867C6.86797 2.59122 8.42333 2.5 10 2.5C11.5767 2.5 13.132 2.59122 14.6611 2.76867Z" stroke="#FEFEFE" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
											</svg>
										</div>
										<div className="flex gap-2 bg-i02 py-3 px-8 rounded-iform">
											<svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
												<path fill-rule="evenodd" clip-rule="evenodd" d="M5.47812 5.55887C5.67178 4.92948 6.25329 4.5 6.91179 4.5H9C9.41421 4.5 9.75 4.16421 9.75 3.75C9.75 3.33579 9.41421 3 9 3H6.91179C5.59478 3 4.43177 3.85897 4.04446 5.11774L1.63266 12.9561C1.54472 13.2419 1.5 13.5393 1.5 13.8383V18C1.5 19.6569 2.84315 21 4.5 21H19.5C21.1569 21 22.5 19.6569 22.5 18V13.8383C22.5 13.5393 22.4553 13.2419 22.3673 12.9561L19.9555 5.11774C19.5682 3.85897 18.4052 3 17.0882 3H15C14.5858 3 14.25 3.33579 14.25 3.75C14.25 4.16421 14.5858 4.5 15 4.5H17.0882C17.7467 4.5 18.3282 4.92948 18.5219 5.55887L20.7345 12.75H17.8906C16.7543 12.75 15.7155 13.392 15.2073 14.4084L14.9511 14.9208C14.697 15.429 14.1776 15.75 13.6094 15.75H10.3906C9.82242 15.75 9.30302 15.429 9.04894 14.9208L8.79271 14.4084C8.28453 13.392 7.24574 12.75 6.10942 12.75H3.26547L5.47812 5.55887Z" fill="#FEFEFE"/>
												<path fill-rul2e="evenodd" clip-rule="evenodd" d="M12 2.25C12.4142 2.25 12.75 2.58579 12.75 3V9.43934L14.4697 7.71967C14.7626 7.42678 15.2374 7.42678 15.5303 7.71967C15.8232 8.01256 15.8232 8.48744 15.5303 8.78033L12.5303 11.7803C12.2374 12.0732 11.7626 12.0732 11.4697 11.7803L8.46967 8.78033C8.17678 8.48744 8.17678 8.01256 8.46967 7.71967C8.76256 7.42678 9.23744 7.42678 9.53033 7.71967L11.25 9.43934V3C11.25 2.58579 11.5858 2.25 12 2.25Z" fill="#FEFEFE"/>
											</svg>
											Download
										</div>
									</div>
									<div className="px-7 py-3">
										<div className="w-full bg-i03 h-1 rounded-lg"></div>
									</div>
								</div>
							</div>

							<div class="lg:grid grid-cols-2 md:grid-cols-4 gap-4 px-7 hidden">
								<div class="grid gap-4">
									<Card src="/images/Img-Image1.png" />
									<Card src="/images/Img-Image2.png" />
									<Card src="/images/Img-Image3.png" />
								</div>
								<div class="grid gap-4">
									<Card src="/images/Img-Image5.png" />
									<Card src="/images/Img-Image6.png" />
									<Card src="/images/Img-Image4.png" />
								</div>
								<div class="grid gap-4">
									<Card src="/images/Img-Image8.png" />
									<Card src="/images/Img-Image7.png" />
									<Card src="/images/Img-Image9.png" />
								</div>
								<div class="grid gap-4">
									<Card src="/images/Img-Image10.png" />
									<Card src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-10.jpg"  />
									<Card src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-11.jpg" />
								</div>
							</div>
							
					</div>
						
				</div>
				</div>
				
			</div>
		</main>
	);
}
