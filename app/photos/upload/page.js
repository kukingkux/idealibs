"use client";

import { SideNavigation, SideNavigationMobile } from "@/components/sidebar";
import TopNavigation from "@/components/topbar";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import axiosInstance from "../../axios";

export default function UploadPhotoPage() {
	const userData = JSON.parse(localStorage.getItem("user"));

	const [title, setTitle] = useState("");
	const [description, setDescription] = useState("");
	const [preview, setPreview] = useState(null);
	const [selectedFile, setSelectedFile] = useState(null);
	const [isLoading, setLoading] = useState(true);
	const [px, setPx] = useState(null);
	const [py, setPy] = useState(null);

	const filePickerRef = useRef(null);
	const router = useRouter();

	const handleDragOver = (e) => {
		e.preventDefault();
	};

	const handleDrop = (e) => {
		e.preventDefault();
		const reader = new FileReader();
		const file = e.dataTransfer.files[0];
		setSelectedFile(file);
		console.log(file);
		if (file) {
			reader.readAsDataURL(file);
		}

		reader.onload = (readerEvent) => {
			setPreview(readerEvent.target.result);
		};
	};

	const handleSelect = (e) => {
		e.preventDefault();
		if (e.target.files.length) {
			const reader = new FileReader();
			const file = e.target.files[0];
			setSelectedFile(file);
			console.log(file);
			if (file) {
				reader.readAsDataURL(file);
			}
			reader.onload = (readerEvent) => {
				setPreview(readerEvent.target.result);
			};
		} else {
			setPreview(null);
		}
		console.log(preview);
	};

	const handleSubmit = async (e) => {
		const res = axiosInstance
			.post(
				`/files/upload-image/${userData.id}`,
				{
					title: title,
					description: description,
					file_path: selectedFile,
					file_type: selectedFile.name.split(".")[1],
					item_id: 1,
					tags_id: 1,
					categories_id: 1,
				},
				{
					headers: {
						"Content-Type": "multipart/form-data",
					},
				}
			)
			.then((res) => {
				if (res.status == 200) {
					router.push("/photos");
				}
			})
			.catch((err) => {
				console.log(err);
			});
	};

	useEffect(() => {
		const fetchData = async () => {
			try {
				setLoading(false);
			} catch (err) {
				console.error("Error fetching data:", err);
			}
		};
		fetchData();
		if (preview == null) {
			setPx(36);
			setPy(24);
		} else {
			setPx(6);
			setPy(6);
		}
	});

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
							{isLoading ? (
								<div className="flex justify-center items-center h-screen">
									<span className="loading loading-infinity loading-lg"></span>
								</div>
							) : (
								<div id="mainmenu" className="p-7 flex flex-col">
									<div className="flex gap-8 items-center">
										<button
											className="bg-i02 p-3 rounded-full"
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
										<div className="flex gap-4 items-center">
											<p>Upload a photo</p>
										</div>
									</div>

									<form action={handleSubmit}>
										<div className="flex flex-col gap-6 md:gap-16">
											<div className="flex flex-col md:flex-row gap-6 mt-8">
												<div className="flex flex-col md:basis-1/3 gap-2 md:max-h-96">
													<p>Preview</p>
													<div
														className={`flex flex-col flex-nowrap items-center gap-4 bg-i03 font-semibold text-lg underline rounded-lg cursor-pointer py-${py} px-${px}`}
														onClick={() => filePickerRef.current.click()}
														onDragOver={handleDragOver}
														onDragEnter={handleDragOver}
														onDrop={handleDrop}
													>
														{preview != null && (
															<img src={preview} alt="" className="max-h-96" />
														)}
														{preview != null || (
															<>
																<svg
																	width="100"
																	height="56"
																	viewBox="0 0 56 56"
																	fill="none"
																	xmlns="http://www.w3.org/2000/svg"
																>
																	<path
																		fillRule="evenodd"
																		clipRule="evenodd"
																		d="M13.125 3.5H21C25.8325 3.5 29.75 7.41751 29.75 12.25V16.625C29.75 19.0412 31.7088 21 34.125 21H38.5C43.3325 21 47.25 24.9175 47.25 29.75V48.125C47.25 50.5412 45.2912 52.5 42.875 52.5H13.125C10.7088 52.5 8.75 50.5412 8.75 48.125V7.875C8.75 5.45875 10.7088 3.5 13.125 3.5ZM29.2374 26.7626C28.9092 26.4344 28.4641 26.25 28 26.25C27.5359 26.25 27.0908 26.4344 26.7626 26.7626L19.7626 33.7626C19.0791 34.446 19.0791 35.554 19.7626 36.2374C20.446 36.9209 21.554 36.9209 22.2374 36.2374L26.25 32.2249L26.25 42C26.25 42.9665 27.0335 43.75 28 43.75C28.9665 43.75 29.75 42.9665 29.75 42L29.75 32.2249L33.7626 36.2374C34.446 36.9209 35.554 36.9209 36.2374 36.2374C36.9209 35.554 36.9209 34.446 36.2374 33.7626L29.2374 26.7626Z"
																		fill="url(#paint0_linear_1315_21774)"
																	/>
																	<path
																		d="M33.25 12.25C33.25 9.18621 32.1252 6.38512 30.2661 4.23711C38.197 6.30881 44.4412 12.553 46.5129 20.4839C44.3649 18.6248 41.5638 17.5 38.5 17.5H34.125C33.6418 17.5 33.25 17.1082 33.25 16.625V12.25Z"
																		fill="url(#paint1_linear_1315_21774)"
																	/>
																	<defs>
																		<linearGradient
																			id="paint0_linear_1315_21774"
																			x1="8.75"
																			y1="52.5"
																			x2="55.2094"
																			y2="43.1809"
																			gradientUnits="userSpaceOnUse"
																		>
																			<stop stopColor="#FC6736" />
																			<stop offset="1" stopColor="#FC36D0" />
																		</linearGradient>
																		<linearGradient
																			id="paint1_linear_1315_21774"
																			x1="8.75"
																			y1="52.5"
																			x2="55.2094"
																			y2="43.1809"
																			gradientUnits="userSpaceOnUse"
																		>
																			<stop stopColor="#FC6736" />
																			<stop offset="1" stopColor="#FC36D0" />
																		</linearGradient>
																	</defs>
																</svg>
																<p>Select a file</p>
															</>
														)}
														<input
															ref={filePickerRef}
															type="file"
															onChange={(e) => handleSelect(e)}
															accept=".jpg,.jpeg,.png"
															hidden
														/>
													</div>
													<p>Supported filetype: .jpg, .jpeg, .png</p>
												</div>

												<div className="flex flex-col md:basis-2/3 gap-6 w-full">
													<div>
														<p className="mb-2">Title</p>
														<input
															name="title"
															type="text"
															value={title}
															onChange={(e) => setTitle(e.target.value)}
															placeholder="Title"
															className="w-full bg-i02 focus:outline-none rounded-lg border border-i04 p-4"
															required
														/>
													</div>
													<div>
														<p className="mb-2">Description</p>
														<textarea
															name="description"
															type="text"
															value={description}
															onChange={(e) => setDescription(e.target.value)}
															placeholder="Description"
															className="w-full bg-i02 focus:outline-none rounded-lg border border-i04 p-4"
															rows="5"
															required
														></textarea>
													</div>
													<div>
														<p className="mb-2">Tag</p>
														<select
															defaultValue="DEFAULT"
															className="w-full bg-i03 focus:outline-none rounded-lg border border-i03 p-4"
														>
															<option value="DEFAULT" disabled>
																Select Tag
															</option>
															<option>Nature</option>
															<option>City</option>
															<option>Astrology</option>
														</select>
													</div>
												</div>
											</div>
											<div className="flex w-full gap-4 justify-end">
												<Link
													href="/photos"
													type="button"
													className="grow md:grow-0 flex items-center justify-center bg-i03 rounded-full font-medium border-white text-white mr-3 hover:border-white hover:bg-white hover:text-i02 md:flex p-6 md:px-12 md:py-4"
												>
													Cancel
												</Link>
												<button
													type="submit"
													className="grow md:grow-0 flex items-center justify-center rounded-full border-0 font-medium text-white bg-gradient-to-r from-iorange to-ipink hover:bg-transparent p-6 md:px-12 md:py-4"
												>
													Upload
												</button>
											</div>
										</div>
									</form>
								</div>
							)}
						</div>
					</div>
				</div>
				<div className="drawer-side">
					<div className="bg-i02 min-h-screen w-full md:w-1/2 z-10 px-7">
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
