"use client";

import { useState, useEffect } from "react";
import CardFont from "@/components/cardfonts";
import { SideNavigation, SideNavigationMobile } from "@/components/sidebar";
import TopNavigation from "@/components/topbar";
import bg from "@/public/images/Img-Hero-Font.png";
import axios from "axios";
import Link from "next/link";

export default function FontsPage() {
	const [data, setData] = useState([]);
	const [isLoading, setLoading] = useState(true);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const res = await axios.get(
					"https://www.googleapis.com/webfonts/v1/webfonts?key=AIzaSyDr9Cvc0NeyqnOJL5G0nDAgTyKEQnV9jQ0&sort=trending"
				);
				const limit = res.data.items.slice(0, 12);
				setData(limit);
				setLoading(false);
			} catch (err) {
				console.error("Error fetching data:", err);
			}
		};
		fetchData();
	}, []);

	// useEffect(() => {
	// 	if (data.length) {
	// 		console.log(data);
	// 	}
	// });

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
										className="flex flex-col justify-between p-4 lg:p-8 bg-cover rounded-lg "
										style={{ backgroundImage: `url(${bg.src})` }}
									>
										<img
											className="w-24 "
											src="/images/Logo-Nav-Desktop.png"
											alt="Img-Login"
										/>
										<div>
											<p className="font-medium lg:font-semibold text-lg lg:text-2xl pt-32 lg:pt-20 mb-2">
												When words are beautiful, fonts are what create the
												magic!
											</p>
											<p className="font-regular text-sm pe-96  hidden lg:block">
												Discover the beauty and uniqueness in every letter with
												our inspiring font collection. From classic to modern
												styles, we provide a wide selection of fonts that can
												enhance the appearance of your design.
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
								<div className="flex flex-wrap gap-4 mb-6">
									<div className="font-bold rounded-iform py-4 lg:py-3 px-8 lg:px-6 bg-iblue">
										Popular
									</div>
									<div className="bg-i02 font-bold rounded-iform py-4 lg:py-3 px-8 lg:px-6">
										Newest
									</div>
									<div className="bg-i02 font-bold rounded-iform py-4 lg:py-3 px-8 lg:px-6">
										Sans
									</div>
									<div className="bg-i02 font-bold rounded-iform py-4 lg:py-3 px-8 lg:px-6">
										Sans Serif
									</div>
									<div className="bg-i02 font-bold rounded-iform py-4 lg:py-3 px-8 lg:px-6 hidden lg:block">
										Display
									</div>
									<div className="bg-i02 font-bold rounded-iform py-4 lg:py-3 px-8 lg:px-6">
										Handwriting
									</div>
								</div>
							</div>

							<div id="mobile-scrollable" className="">
								{isLoading ? (
									<div className="hidden justify-center mt-4 md:flex">
										<span className="loading loading-infinity loading-lg"></span>
									</div>
								) : (
									<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-7 mb-2">
										{data.map((item, index) => (
											<CardFont family={item.family} id={index} key={index} />
										))}
									</div>
								)}
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
