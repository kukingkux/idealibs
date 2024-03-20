"use client";

import { useState } from "react";

import CardIcon from "@/components/cardicons";
import { SideNavigation, SideNavigationMobile } from "@/components/sidebar";
import TopNavigation from "@/components/topbar";
import bg from "@/public/images/Img-Hero-Icon.png";

export default function IconsPage() {
	const [open, setOpen] = useState(1);
	const [active, setActive] = useState(null);
	const [isDrawerOpen, setIsDrawerOpen] = useState(false);

	const handleOpen = (value) => setOpen(open === value ? 0 : value);
	const handleActive = (value) => setActive(value);
	const toggleDrawer = () => setIsDrawerOpen(!isDrawerOpen);

	const session = "";

	return (
		<main className="flex min-h-screen flex-col bg-i01">
			<div className="drawer" id="sidebar">
				<input id="my-drawer" type="checkbox" className="drawer-toggle" />
				<div className="drawer-content flex flex-col items-center justify-center">
					<div id="content" className="flex container max-w-full">
						<SideNavigation />
						<div id="right-content" className="min-h-screen lg:w-full">
							<TopNavigation />
							<div
								id="header"
								className="flex container flex-col items-center p-7"
							>
								<div className="md:inline-block  w-full">
									<div
										className="flex flex-col justify-between p-4 lg:p-8 bg-cover rounded-lg"
										style={{
											backgroundImage: `url(${bg.src})`,
											backgroundPosition: "center",
										}}
									>
										<img
											className="w-24 "
											src="/images/Logo-Nav-Desktop.png"
											alt="Img-Login"
										/>
										<div>
											<p className="font-medium lg:font-semibold text-lg lg:text-2xl pt-32 lg:pt-20 mb-2">
												Find and use the icon
											</p>
											<p className="font-regular text-sm pe-96  hidden lg:block">
												Find attractive and quality icons that are ready to use.
											</p>
										</div>
									</div>
								</div>
							</div>

							<div id="mainmenu" className="px-7">
								<div className="mb-6 block lg:hidden">
									<div className="flex items-center justify-between px-6 gap-4 rounded-iform w-full h-16 bg-i03">
										<svg
											width="30"
											height="30"
											viewBox="0 0 24 24"
											fill="none"
											xmlns="http://www.w3.org/2000/svg"
										>
											<path
												fillRule="evenodd"
												clipRule="evenodd"
												d="M3.75195 10.5815C3.75195 6.70046 6.90995 3.54346 10.791 3.54346C14.671 3.54346 17.829 6.70046 17.829 10.5815C17.829 14.4625 14.671 17.6205 10.791 17.6205C6.90995 17.6205 3.75195 14.4625 3.75195 10.5815ZM22.247 21.0405L17.648 16.4535C19.004 14.8725 19.829 12.8235 19.829 10.5815C19.829 5.59846 15.774 1.54346 10.791 1.54346C5.80695 1.54346 1.75195 5.59846 1.75195 10.5815C1.75195 15.5655 5.80695 19.6205 10.791 19.6205C12.813 19.6205 14.676 18.9445 16.183 17.8175L20.835 22.4565L22.247 21.0405Z"
												fill="#FEFEFE"
											/>
										</svg>
										<input
											type="text"
											name="name"
											placeholder="Find all your design needs"
											className="w-full h-14 bg-i03"
										/>
										<svg
											width="30"
											height="30"
											viewBox="0 0 24 24"
											fill="none"
											xmlns="http://www.w3.org/2000/svg"
										>
											<path
												d="M6 13.5L6 3.75M6 13.5C6.82843 13.5 7.5 14.1716 7.5 15C7.5 15.8284 6.82843 16.5 6 16.5M6 13.5C5.17157 13.5 4.5 14.1716 4.5 15C4.5 15.8284 5.17157 16.5 6 16.5M6 20.25L6 16.5M18 13.5V3.75M18 13.5C18.8284 13.5 19.5 14.1716 19.5 15C19.5 15.8284 18.8284 16.5 18 16.5M18 13.5C17.1716 13.5 16.5 14.1716 16.5 15C16.5 15.8284 17.1716 16.5 18 16.5M18 20.25L18 16.5M12 7.5V3.75M12 7.5C12.8284 7.5 13.5 8.17157 13.5 9C13.5 9.82843 12.8284 10.5 12 10.5M12 7.5C11.1716 7.5 10.5 8.17157 10.5 9C10.5 9.82843 11.1716 10.5 12 10.5M12 20.25V10.5"
												stroke="white"
												strokeWidth="1.5"
												strokeLinecap="round"
												strokeLinejoin="round"
											/>
										</svg>
									</div>
								</div>
								<div className="bg-i02 lg:bg-inherit rounded-lg mb-6 lg:mb-0 p-8 lg:p-0 lg:flex gap-6">
									<button className="flex justify-center items-center gap-2 rounded-iform w-full h-16 lg:h-14 bg-iblue font-semibold mb-8">
										<svg
											width="25"
											height="24"
											viewBox="0 0 25 24"
											fill="none"
											xmlns="http://www.w3.org/2000/svg"
										>
											<path
												fillRule="evenodd"
												clipRule="evenodd"
												d="M13.25 10.8303V17.0903H11.75V10.8303H2.75V22.3503H22.25V10.8303H13.25Z"
												fill="#FEFEFE"
											/>
											<path
												fillRule="evenodd"
												clipRule="evenodd"
												d="M13.25 6.0289C14.24 7.0739 15.621 7.7499 17.1 7.7499H17.85V6.2499H17.1C15.085 6.2499 13.25 4.4169 13.25 2.4039V1.6499H11.75V2.4039C11.75 4.4169 9.92003 6.2499 7.91003 6.2499H7.16003V7.7499H7.91003C9.38503 7.7499 10.762 7.0759 11.75 6.0319L11.75 10.8303H13.25L13.25 6.0289Z"
												fill="#FEFEFE"
											/>
										</svg>
										Upload Icon
									</button>
								</div>
								<div className="flex flex-wrap gap-4 mb-6">
									<div className="font-bold rounded-iform py-4 lg:py-3 px-8 lg:px-6 bg-iblue">
										All
									</div>
									<div className="bg-i02 font-bold rounded-iform py-4 lg:py-3 px-8 lg:px-6">
										Icon Pack
									</div>
									<div className="bg-i02 font-bold rounded-iform py-4 lg:py-3 px-8 lg:px-6 hidden lg:block">
										Regular
									</div>
									<div className="bg-i02 font-bold rounded-iform py-4 lg:py-3 px-8 lg:px-6 hidden lg:block">
										Sharp
									</div>
									<div className="bg-i02 font-bold rounded-iform py-4 lg:py-3 px-8 lg:px-6 hidden lg:block">
										Curved
									</div>
									<div className="bg-i02 font-bold rounded-iform py-4 lg:py-3 px-8 lg:px-6">
										Free
									</div>
									<div className="bg-i02 font-bold rounded-iform py-4 lg:py-3 px-8 lg:px-6 hidden lg:block">
										Premium
									</div>
									<div className="font-bold rounded-iform py-4 lg:py-3 px-8 lg:px-16 border">
										See more category
									</div>
								</div>
							</div>

							<div id="mobile-scrollable" className="">
								<div className="md:grid grid-cols-4 gap-4 px-7 hidden">
									<CardIcon src="/images/Img-Image1.png" id="1" />
									<CardIcon src="/images/Img-Image2.png" id="2" />
									<CardIcon src="/images/Img-Image3.png" id="3" />
									<CardIcon src="/images/Img-Image5.png" id="5" />
									<CardIcon src="/images/Img-Image6.png" id="6" />
									<CardIcon src="/images/Img-Image4.png" id="4" />
									<CardIcon src="/images/Img-Image8.png" id="8" />
									<CardIcon src="/images/Img-Image7.png" id="7" />
									<CardIcon src="/images/Img-Image9.png" id="9" />
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