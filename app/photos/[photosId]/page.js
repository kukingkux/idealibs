"use client";

import Card from "@/components/gridcard";
import { SideNavigation, SideNavigationMobile } from "@/components/sidebar";
import TopNavigation from "@/components/topbar";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function PhotoDetails({ params }) {
	const [imgTitle, setImgTitle] = useState("");
	const router = useRouter();

	useEffect(() => {
		if (params.photosId == 1) {
			setImgTitle("The Enchanting Dance of Coconut Trees in the Breeze");
		} else if (params.photosId == 2) {
			setImgTitle("Europe City Road");
		} else if (params.photosId == 3) {
			setImgTitle("Sea Anemone");
		} else if (params.photosId == 4) {
			setImgTitle("Swimmer&apos;s Wearing Swimming Goggles");
		} else if (params.photosId == 5) {
			setImgTitle("A Frog Peeking out of the Water");
		} else if (params.photosId == 6) {
			setImgTitle("Plants in the Corner of a Cozy Room");
		} else if (params.photosId == 7) {
			setImgTitle("Sea Anemone");
		} else if (params.photosId == 8) {
			setImgTitle("Car Interior from Outside");
		} else if (params.photosId == 9) {
			setImgTitle("Seoul Subway Station");
		} else if (params.photosId == 10) {
			setImgTitle("A Person Sitting on a Couch while Using iPad");
		}

		// setImgBgWidth(ref.current.clientWidth)
	});

	return (
		<main className="flex min-h-screen flex-col bg-i01">
			<div className="drawer" id="sidebar">
				<input id="my-drawer" type="checkbox" className="drawer-toggle" />
				<div className="drawer-content flex flex-col items-center justify-center">
					<div id="content" className="flex container max-w-full">
						<SideNavigation />
						<div id="right-content" className="min-h-screen md:w-full">
							<TopNavigation />

							<div id="mobile-scrollable" className="">
								<div className="px-7">
									<div className="flex justify-between items-center mt-7 mb-12">
										<div className="flex gap-8 items-center">
											<button
												className="bg-i02 p-3 rounded-full hidden md:block"
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
												<img
													src="/images/Img-Profile.png"
													className="rounded-full w-12 h-12"
												></img>
												<p>Khananta</p>
											</div>
										</div>
										<div className="flex gap-2">
											<div className="flex items-center justify-center bg-i02 w-12 h-12 rounded-full">
												<svg
													width="20"
													height="20"
													viewBox="0 0 18 18"
													fill="none"
													xmlns="http://www.w3.org/2000/svg"
												>
													<path
														d="M10.8608 4.19357C11.6744 3.37998 12.9935 3.37998 13.8071 4.19357C14.6207 5.00716 14.6207 6.32625 13.8071 7.13985L12.7868 8.16012C12.5428 8.4042 12.5428 8.79993 12.7868 9.04401C13.0309 9.28809 13.4266 9.28809 13.6707 9.04401L14.691 8.02373C15.9928 6.72198 15.9928 4.61143 14.691 3.30968C13.3893 2.00794 11.2787 2.00794 9.97696 3.30968L7.47696 5.80968C6.17521 7.11143 6.17521 9.22198 7.47696 10.5237C7.53773 10.5845 7.60035 10.6425 7.66465 10.6977C7.92654 10.9226 8.32113 10.8926 8.54599 10.6307C8.77085 10.3688 8.74083 9.97419 8.47895 9.74933C8.43862 9.7147 8.39922 9.67821 8.36085 9.63985C7.54725 8.82625 7.54725 7.50716 8.36085 6.69357L10.8608 4.19357Z"
														fill="#FEFEFE"
													/>
													<path
														d="M10.3366 7.30236C10.0748 7.0775 9.68017 7.10752 9.45531 7.36941C9.23045 7.63129 9.26047 8.02588 9.52236 8.25074C9.56268 8.28537 9.60209 8.32186 9.64046 8.36023C10.454 9.17382 10.454 10.4929 9.64046 11.3065L7.14046 13.8065C6.32687 14.6201 5.00777 14.6201 4.19418 13.8065C3.38059 12.9929 3.38059 11.6738 4.19418 10.8602L5.21446 9.83995C5.45854 9.59587 5.45854 9.20014 5.21446 8.95606C4.97038 8.71199 4.57465 8.71199 4.33057 8.95606L3.3103 9.97634C2.00855 11.2781 2.00855 13.3886 3.3103 14.6904C4.61204 15.9921 6.72259 15.9921 8.02434 14.6904L10.5243 12.1904C11.8261 10.8886 11.8261 8.77809 10.5243 7.47634C10.4636 7.41558 10.401 7.35758 10.3366 7.30236Z"
														fill="#FEFEFE"
													/>
												</svg>
											</div>
											<div className="flex items-center justify-center bg-i02 w-12 h-12 rounded-full">
												<svg
													width="24"
													height="24"
													viewBox="0 0 20 20"
													fill="none"
													xmlns="http://www.w3.org/2000/svg"
												>
													<path
														d="M14.6611 2.76867C15.5783 2.87511 16.25 3.66583 16.25 4.58916V17.5L10 14.375L3.75 17.5V4.58916C3.75 3.66583 4.42173 2.87511 5.3389 2.76867C6.86797 2.59122 8.42333 2.5 10 2.5C11.5767 2.5 13.132 2.59122 14.6611 2.76867Z"
														stroke="#FEFEFE"
														strokeWidth="1.5"
														strokeLinecap="round"
														strokeLinejoin="round"
													/>
												</svg>
											</div>
											<div className="flex gap-2 bg-i02 p-3 rounded-full">
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
											</div>
										</div>
									</div>
									<div className="lg:flex gap-8">
										<div className="lg:w-3/4">
											<div
												className="md:w-full md:h-96 md:aspect-video bg-cover rounded-lg"
												style={{
													backgroundImage:
														`url('/images/Img-Image` +
														params.photosId +
														`.png')`,
												}}
											>
												<div className="backdrop-blur-md md:h-96 rounded-lg md:flex justify-center">
													<img
														src={`/images/Img-Image` + params.photosId + `.png`}
														className="h-full overflow-hidden object-contain"
													/>
												</div>
											</div>
											<div className="flex gap-4 items-center justify-between py-5 mb-5">
												<h1 className="font-semibold text-xl">{imgTitle}</h1>
											</div>
										</div>

										<div className="flex flex-col gap-4 mb-10 lg:w-1/2">
											<div className="bg-i02 rounded-lg p-5">
												<div className="flex align-center gap-6 mb-4">
													<svg
														width="27"
														height="27"
														viewBox="0 0 27 22"
														fill="none"
														xmlns="http://www.w3.org/2000/svg"
													>
														<path
															d="M14.4844 3.96875C15.0188 3.64062 15.375 3.04531 15.375 2.375C15.375 1.33906 14.5359 0.5 13.5 0.5C12.4641 0.5 11.625 1.33906 11.625 2.375C11.625 3.05 11.9812 3.64062 12.5156 3.96875L9.82969 9.34063C9.40312 10.1938 8.29688 10.4375 7.55156 9.84219L3.375 6.5C3.60938 6.18594 3.75 5.79688 3.75 5.375C3.75 4.33906 2.91094 3.5 1.875 3.5C0.839062 3.5 0 4.33906 0 5.375C0 6.41094 0.839062 7.25 1.875 7.25C1.88437 7.25 1.89844 7.25 1.90781 7.25L4.05 19.0344C4.30781 20.4594 5.55 21.5 7.00312 21.5H19.9969C21.4453 21.5 22.6875 20.4641 22.95 19.0344L25.0922 7.25C25.1016 7.25 25.1156 7.25 25.125 7.25C26.1609 7.25 27 6.41094 27 5.375C27 4.33906 26.1609 3.5 25.125 3.5C24.0891 3.5 23.25 4.33906 23.25 5.375C23.25 5.79688 23.3906 6.18594 23.625 6.5L19.4484 9.84219C18.7031 10.4375 17.5969 10.1938 17.1703 9.34063L14.4844 3.96875Z"
															fill="url(#paint0_linear_1027_746)"
														/>
														<defs>
															<linearGradient
																id="paint0_linear_1027_746"
																x1="0"
																y1="21.5"
																x2="30.5965"
																y2="11.4573"
																gradientUnits="userSpaceOnUse"
															>
																<stop stopColor="#FC6736" />
																<stop offset="1" stopColor="#FC36D0" />
															</linearGradient>
														</defs>
													</svg>
													<h2 className="font-bold text-xl">Premium Item</h2>
												</div>
												<p className="text-md leading-loose">
													Unlock unlimited, ad-free, and premium content for an
													elevated design experience!
												</p>
											</div>
											<div className="bg-i02 flex flex-col gap-4 rounded-lg p-5">
												<h2 className="font-bold text-xl">Time</h2>
												<div className="flex align-center gap-6">
													<svg
														width="20"
														height="24"
														viewBox="0 0 20 20"
														fill="none"
														xmlns="http://www.w3.org/2000/svg"
													>
														<path
															fillRule="evenodd"
															clipRule="evenodd"
															d="M10 18C14.4183 18 18 14.4183 18 10C18 5.58172 14.4183 2 10 2C5.58172 2 2 5.58172 2 10C2 14.4183 5.58172 18 10 18ZM10.75 5C10.75 4.58579 10.4142 4.25 10 4.25C9.58579 4.25 9.25 4.58579 9.25 5V10C9.25 10.4142 9.58579 10.75 10 10.75H14C14.4142 10.75 14.75 10.4142 14.75 10C14.75 9.58579 14.4142 9.25 14 9.25H10.75V5Z"
															fill="#FEFEFE"
														/>
													</svg>
													<p>February 25, 2024</p>
												</div>
												<div className="flex align-center gap-6">
													<svg
														width="20"
														height="24"
														viewBox="0 0 20 20"
														fill="none"
														xmlns="http://www.w3.org/2000/svg"
													>
														<path
															fillRule="evenodd"
															clipRule="evenodd"
															d="M15.9875 3.0124C17.1185 3.1311 17.9999 4.08761 17.9999 5.25V11.75C17.9999 12.9926 16.9925 14 15.7499 14H13.4999V7C13.4999 5.61929 12.3806 4.5 10.9999 4.5H8.12793C8.4115 3.69769 9.13721 3.10424 10.0123 3.0124C10.131 1.88145 11.0875 1 12.2499 1H13.7499C14.9123 1 15.8688 1.88145 15.9875 3.0124ZM11.4999 3.25C11.4999 2.83579 11.8357 2.5 12.2499 2.5H13.7499C14.1641 2.5 14.4999 2.83579 14.4999 3.25V3.5H11.4999V3.25Z"
															fill="#FEFEFE"
														/>
														<path
															fillRule="evenodd"
															clipRule="evenodd"
															d="M2 7C2 6.44771 2.44772 6 3 6H11C11.5523 6 12 6.44772 12 7V17C12 17.5523 11.5523 18 11 18H3C2.44772 18 2 17.5523 2 17V7ZM4 10.25C4 9.83579 4.33579 9.5 4.75 9.5H9.25C9.66421 9.5 10 9.83579 10 10.25C10 10.6642 9.66421 11 9.25 11H4.75C4.33579 11 4 10.6642 4 10.25ZM4 13.75C4 13.3358 4.33579 13 4.75 13H9.25C9.66421 13 10 13.3358 10 13.75C10 14.1642 9.66421 14.5 9.25 14.5H4.75C4.33579 14.5 4 14.1642 4 13.75Z"
															fill="#FEFEFE"
														/>
													</svg>

													<p>Photos</p>
												</div>
											</div>
										</div>
									</div>
									<div className="lg:w-7/12">
										<div className="flex flex-col gap-4 mb-10">
											<p className="text-i04">Description</p>
											<p className="tracking-wide text-[#FEFEFE]">
												Immerse yourself in the tranquil beauty of a coconut
												tree, standing tall against the canvas of a clear blue
												sky. Its slender trunk reaches for the heavens, adorned
												with a crown of lush green fronds swaying gracefully in
												the tropical breeze. Each frond whispers tales of island
												life and timeless serenity, creating a harmonious
												symphony with the rustle of leaves. This captivating
												image transports you to a paradisiacal oasis where the
												coconut tree reigns as a symbol of relaxation and
												coastal elegance.
											</p>
										</div>
										<div className="flex flex-col gap-4 mb-10">
											<p className="text-i04">Tag(s)</p>
											<div className="flex flex-wrap gap-4">
												<div className="bg-i02 font-bold rounded-iform py-4 lg:py-3 px-8 lg:px-6">
													Exoticism
												</div>
												<div className="bg-i02 font-bold rounded-iform py-4 lg:py-3 px-8 lg:px-6">
													Coastal Charm
												</div>
												<div className="bg-i02 font-bold rounded-iform py-4 lg:py-3 px-8 lg:px-6">
													Verdancy
												</div>
												<div className="bg-i02 font-bold rounded-iform py-4 lg:py-3 px-8 lg:px-6">
													Destination
												</div>
												<div className="bg-i02 font-bold rounded-iform py-4 lg:py-3 px-8 lg:px-6">
													Beauty
												</div>
												<div className="bg-i02 font-bold rounded-iform py-4 lg:py-3 px-8 lg:px-6">
													Myserious
												</div>
												<div className="bg-i02 font-bold rounded-iform py-4 lg:py-3 px-8 lg:px-6">
													Coconut
												</div>
											</div>
										</div>
									</div>
									<div className="flex flex-col gap-4 mb-10">
										<p className="text-i04">More Photos</p>
										<div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
											<Card src="/images/Img-Image4.png" />
											<Card src="/images/Img-Image2.png" />
											<Card src="/images/Img-Image3.png" />
											<Card src="/images/Img-Image5.png" />
											<Card src="/images/Img-Image6.png" />
											<Card src="/images/Img-Image7.png" />
											<Card src="/images/Img-Image8.png" />
											<Card src="/images/Img-Image9.png" />
										</div>
									</div>
									<div className="flex flex-wrap justify-center gap-4 mb-6">
										<a
											href="#"
											className="rounded-iform py-4 px-8 border-0 font-medium text-white bg-gradient-to-r from-iorange to-ipink hover:bg-transparent"
										>
											See more photos
										</a>
									</div>
								</div>
							</div>
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
