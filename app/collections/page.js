"use client";

import Card from "@/components/gridmasonry";
import { SideNavigation, SideNavigationMobile } from "@/components/sidebar";
import TopNavigation from "@/components/topbar";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import axiosInstance from "../axios";

export default function CollectionsPage() {
	const [data, setData] = useState([]);
	const [isLoading, setLoading] = useState(true);
	const [active, setActive] = useState(1);

	const userData = JSON.parse(localStorage.getItem("user"));
	const searchParams = useSearchParams();

	const handleActive = (value) => setActive(value);

	useEffect(() => {
		if (searchParams.get("search") != null) {
			setLoading(true);
			const fetchData = async () => {
				try {
					const res = await axiosInstance.get(
						"/files?category_id=1&search=" + searchParams.get("search")
					);
					setData(res.data.data);
					setLoading(false);
				} catch (err) {
					console.error("Error fetching data:", err);
				}
			};
			fetchData();
		} else {
			const fetchData = async () => {
				try {
					const res = await axiosInstance.get("/files?category_id=1");
					setData(res.data.data);
					setLoading(false);
				} catch (err) {
					console.error("Error fetching data:", err);
				}
			};
			fetchData();
		}
	}, [searchParams]);

	// useEffect(() => {
	// 	if (data.length) {
	// 		console.log(data);
	// 	}
	// }, [data]);

	return (
		<main className="flex min-h-screen flex-col bg-i01">
			<div className="drawer" id="sidebar">
				<input id="my-drawer" type="checkbox" className="drawer-toggle" />
				<div className="drawer-content flex flex-col items-center justify-center">
					<div id="content" className="flex container max-w-full">
						<SideNavigation />
						<div id="right-content" className="min-h-screen w-full">
							<TopNavigation />
							<div id="mobile-scrollable" className="block md:hidden">
								{isLoading ? (
									<div className="flex justify-center mt-10 md:hidden">
										<span className="loading loading-infinity loading-lg"></span>
									</div>
								) : (
									<div>
										{data.map((item) => (
											<div className="mb-2" key={item.id}>
												<div className="flex gap-4 items-center p-7">
													<img
														src="/images/Img-Profile.png"
														className="rounded-full w-12 h-12"
													></img>
													<p className="font-medium text-lg">{item.username}</p>
												</div>

												<Link href={`/photos/${item.id}`}>
													<img src={item.file_path} className="w-full bg-i04" />
												</Link>

												<div className="flex gap-4 items-center justify-between p-7">
													<div className="flex gap-2 bg-i02 py-3 px-8 rounded-iform">
														<svg
															width="28"
															height="28"
															viewBox="0 0 24 24"
															fill="none"
															xmlns="http://www.w3.org/2000/svg"
														>
															<path
																fillRule="evenodd"
																clipRule="evenodd"
																d="M5.47812 5.55887C5.67178 4.92948 6.25329 4.5 6.91179 4.5H9C9.41421 4.5 9.75 4.16421 9.75 3.75C9.75 3.33579 9.41421 3 9 3H6.91179C5.59478 3 4.43177 3.85897 4.04446 5.11774L1.63266 12.9561C1.54472 13.2419 1.5 13.5393 1.5 13.8383V18C1.5 19.6569 2.84315 21 4.5 21H19.5C21.1569 21 22.5 19.6569 22.5 18V13.8383C22.5 13.5393 22.4553 13.2419 22.3673 12.9561L19.9555 5.11774C19.5682 3.85897 18.4052 3 17.0882 3H15C14.5858 3 14.25 3.33579 14.25 3.75C14.25 4.16421 14.5858 4.5 15 4.5H17.0882C17.7467 4.5 18.3282 4.92948 18.5219 5.55887L20.7345 12.75H17.8906C16.7543 12.75 15.7155 13.392 15.2073 14.4084L14.9511 14.9208C14.697 15.429 14.1776 15.75 13.6094 15.75H10.3906C9.82242 15.75 9.30302 15.429 9.04894 14.9208L8.79271 14.4084C8.28453 13.392 7.24574 12.75 6.10942 12.75H3.26547L5.47812 5.55887Z"
																fill="#FEFEFE"
															/>
															<path
																fillRule="evenodd"
																clipRule="evenodd"
																d="M12 2.25C12.4142 2.25 12.75 2.58579 12.75 3V9.43934L14.4697 7.71967C14.7626 7.42678 15.2374 7.42678 15.5303 7.71967C15.8232 8.01256 15.8232 8.48744 15.5303 8.78033L12.5303 11.7803C12.2374 12.0732 11.7626 12.0732 11.4697 11.7803L8.46967 8.78033C8.17678 8.48744 8.17678 8.01256 8.46967 7.71967C8.76256 7.42678 9.23744 7.42678 9.53033 7.71967L11.25 9.43934V3C11.25 2.58579 11.5858 2.25 12 2.25Z"
																fill="#FEFEFE"
															/>
														</svg>
														Download
													</div>
												</div>
												<div className="px-7 py-3">
													<div className="w-full bg-i03 h-1 rounded-lg"></div>
												</div>
											</div>
										))}
									</div>
								)}
							</div>

							{isLoading ? (
								<div className="hidden justify-center mt-10 md:flex">
									<span className="loading loading-infinity loading-lg"></span>
								</div>
							) : (
								<div className="md:block columns-4 gap-4 px-7 mt-4 hidden">
									{data.map((item) => (
										<Card
											src={item.file_path}
											path={`/photos/${item.id}`}
											premium={item.item_id}
											key={item.id}
										/>
									))}
								</div>
							)}
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
