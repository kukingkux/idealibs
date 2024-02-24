"use client";

import Link from 'next/link';
import { useState } from "react";

import bg from '../../public/images/Img-Hero-Dashboard.png';

export default function Dashboard() {
	const [open, setOpen] = useState(1);
	const [active, setActive] = useState(null);
	const [isDrawerOpen, setIsDrawerOpen] = useState(false);

	const handleOpen = (value) => setOpen(open === value ? 0 : value);
	const handleActive = (value) => setActive(value);
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
								className="btn btn-square drawer-button border-0 bg-i03 h-10 display-block md:hidden"
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
									<Link href="/auth/login" className="block font-semibold text-sm px-5">Login</Link>
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
							className="flex container flex-col items-center p-7"
						>
							<div className="md:inline-block  w-full">
								<div className="flex flex-col justify-between p-4 bg-cover rounded-lg " style={{backgroundImage: `url(${bg.src})`}}>
									<img
									className="w-24 "
									src="/images/Logo-Nav-Desktop.png"
									alt="Img-Login"
									/>
									<p className="font-medium text-lg pt-32 pe-24">An ideal library of ideas to develop your creative mind.</p>
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
						<div className="grid grid-cols-1 gap-3 pt-3">
							<a href="#" onClick={() => handleActive(1)}>
								<div
									aria-selected={active === 1}
									className="rounded-lg text-i04 text-sm py-2.5 px-0 aria-selected:flex pl-4 aria-selected:bg-gradient-to-r aria-selected:from-iorange aria-selected:to-ipink"
								>
									Home
								</div>
							</a>
                            <div className='text-sm mt-6 text-i04'>Assets</div>
                            <div>
                                <a href="#photos" onClick={() => handleActive(2)}>
								<div
									aria-selected={active === 2}
									className="rounded-lg text-i04 text-sm py-2.5 px-0 aria-selected:flex pl-4 aria-selected:bg-gradient-to-r aria-selected:from-iorange aria-selected:to-ipink"
								>
									Photos
								</div>
                                </a>
                                <a href="#color-palette" onClick={() => handleActive(3)}>
                                    <div
                                        aria-selected={active === 3}
                                        className="rounded-lg text-i04 text-sm py-2.5 px-0 aria-selected:flex pl-4 aria-selected:bg-gradient-to-r aria-selected:from-iorange aria-selected:to-ipink"
                                    >
                                        Color Palettes
                                    </div>
                                </a>
                                <a href="#fonts" onClick={() => handleActive(4)}>
                                    <div
                                        aria-selected={active === 4}
                                        className="rounded-lg text-i04 text-sm py-2.5 px-0 aria-selected:flex pl-4 aria-selected:bg-gradient-to-r aria-selected:from-iorange aria-selected:to-ipink"
                                    >
                                        Fonts
                                    </div>
                                </a>
                                <a href="#vectors" onClick={() => handleActive(5)}>
                                    <div
                                        aria-selected={active === 5}
                                        className="rounded-lg text-i04 text-sm py-2.5 px-0 aria-selected:flex pl-4 aria-selected:bg-gradient-to-r aria-selected:from-iorange aria-selected:to-ipink"
                                    >
                                        Vectors
                                    </div>
                                </a>
                                <a href="#mockups" onClick={() => handleActive(6)}>
                                    <div
                                        aria-selected={active === 6}
                                        className="rounded-lg text-i04 text-sm py-2.5 px-0 aria-selected:flex pl-4 aria-selected:bg-gradient-to-r aria-selected:from-iorange aria-selected:to-ipink"
                                    >
                                        Mockups
                                    </div>
                                </a>
                                <Link href="#icons" onClick={() => handleActive(7)}>
                                    <div
                                        aria-selected={active === 7}
                                        className={`rounded-lg text-sm py-2.5 px-0 aria-selected:flex pl-4 aria-selected:bg-gradient-to-r aria-selected:from-iorange aria-selected:to-ipink 
                                        ${active === '/dashboard#icons' ? "text-white" : "text-i04 "}`}
                                    >
                                        Icons
                                    </div>
                                </Link>
                            </div>
							
						</div>
					</div>
				</div>
			</div>
		</main>
	);
}
