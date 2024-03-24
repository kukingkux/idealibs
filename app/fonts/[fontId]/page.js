"use client";

import Alphabet from "@/components/alphabet";
import { SideNavigation, SideNavigationMobile } from "@/components/sidebar";
import TopNavigation from "@/components/topbar";
import DownloadButton from "@/components/downloadButton";
import { useRouter } from "next/navigation";

export default function FontDetails({ params }) {
	let string = params.fontId.split("%3F");
	let familyParse = string[0]
		.replace(/-/g, " ")
		.replace(/\b\w/g, (c) => c.toUpperCase());
	let pathParse = string[1].replace(/xx/g, "/").replace("%3A", ":");
	// console.log(pathParse);

	const router = useRouter();
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
												/>
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
											<DownloadButton path={pathParse} />
										</div>
									</div>
									<div className="flex flex-col gap-4 mb-10 lg:w-full">
										<div className="flex flex-col justify-between rounded-lg p-7 bg-i02">
											<div className="flex gap-10 items-center text-sm">
												<p className="">Sans Serif</p>
												<p className="">16 Styles</p>
											</div>
											<div className="mt-20">
												<h1 className="text-3xl lg:text-6xl">{familyParse}</h1>
											</div>
										</div>
										<div className="flex md:flex-row flex-col gap-4">
											<div className="bg-i02 rounded-lg p-5 w-full">
												<div className="flex align-center gap-6 mb-4">
													<h2 className="font-bold text-xl">Free Item</h2>
												</div>
												<p className="text-md leading-loose">
													Explore high-quality resources for free and elevate
													your projects!
												</p>
											</div>
											<div className="bg-i02 flex flex-col gap-4 rounded-lg p-5 md:w-full">
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

													<p>ttf</p>
												</div>
											</div>
										</div>
									</div>
									<div className="lg:w-full">
										<div className="flex flex-col gap-4 mb-10">
											<p className="text-i04">Details</p>
											<table className="text-left h-96">
												<tbody>
													<tr className="p-5">
														<th>Font name</th>
														<td>{familyParse}</td>
													</tr>
													<tr className="border-y-2 border-i02">
														<th>Author</th>
														<td>Google Font</td>
													</tr>
													<tr className="border-y-2 border-i02">
														<th>Category</th>
														<td>Sans</td>
													</tr>
													<tr className="border-y-2 border-i02">
														<th>Release Date</th>
														<td>23 May 2022</td>
													</tr>
													<tr>
														<th>Styles</th>
														<td>14 styles</td>
													</tr>
												</tbody>
											</table>
										</div>
										<div className="flex flex-col gap-4 mb-10">
											<p className="text-i04">Uppercase</p>
											<div className="flex flex-wrap gap-1 lg:gap-4">
												<Alphabet letter="A" />
												<Alphabet letter="B" />
												<Alphabet letter="C" />
												<Alphabet letter="D" />
												<Alphabet letter="E" />
												<Alphabet letter="F" />
												<Alphabet letter="G" />
												<Alphabet letter="H" />
												<Alphabet letter="I" />
												<Alphabet letter="J" />
												<Alphabet letter="K" />
												<Alphabet letter="L" />
												<Alphabet letter="M" />
												<Alphabet letter="N" />
												<Alphabet letter="O" />
												<Alphabet letter="P" />
												<Alphabet letter="Q" />
												<Alphabet letter="R" />
												<Alphabet letter="S" />
												<Alphabet letter="T" />
												<Alphabet letter="U" />
												<Alphabet letter="F" />
												<Alphabet letter="W" />
												<Alphabet letter="X" />
												<Alphabet letter="Y" />
												<Alphabet letter="Z" />
											</div>
										</div>
										<div className="flex flex-col gap-4 mb-10">
											<p className="text-i04">Lowercase</p>
											<div className="flex flex-wrap gap-1 lg:gap-4 lowercase">
												<Alphabet letter="A" />
												<Alphabet letter="B" />
												<Alphabet letter="C" />
												<Alphabet letter="D" />
												<Alphabet letter="E" />
												<Alphabet letter="F" />
												<Alphabet letter="G" />
												<Alphabet letter="H" />
												<Alphabet letter="I" />
												<Alphabet letter="J" />
												<Alphabet letter="K" />
												<Alphabet letter="L" />
												<Alphabet letter="M" />
												<Alphabet letter="N" />
												<Alphabet letter="O" />
												<Alphabet letter="P" />
												<Alphabet letter="Q" />
												<Alphabet letter="R" />
												<Alphabet letter="S" />
												<Alphabet letter="T" />
												<Alphabet letter="U" />
												<Alphabet letter="F" />
												<Alphabet letter="W" />
												<Alphabet letter="X" />
												<Alphabet letter="Y" />
												<Alphabet letter="Z" />
											</div>
										</div>
										<div className="flex flex-col gap-4 mb-10">
											<p className="text-i04">Paragraph Example</p>
											<p className="tracking-wide text-[#FEFEFE]">
												Lorem ipsum dolor sit amet, consectetur adipiscing elit.
												Sed ac justo ut dolor vehicula tristique. Integer
												tincidunt ligula nec est cursus, vel ultricies tortor
												pellentesque. Nullam vestibulum urna vitae odio posuere,
												ut consequat urna imperdiet. Proin fringilla nisl vel
												neque hendrerit, id tincidunt nisi commodo. Sed vel ante
												euismod, convallis libero ut, viverra quam. Mauris
												vulputate quam ut ipsum efficitur, in luctus purus
												malesuada. Aenean sit amet lacus vitae dui dignissim
												cursus. Integer ac felis nec ligula vulputate
												ullamcorper. Vivamus tincidunt massa id ex fringilla, a
												venenatis nunc vestibulum. Sed interdum mauris id luctus
												bibendum. Curabitur auctor nisi vel erat efficitur, non
												vehicula mi pharetra. In hac habitasse platea dictumst.
											</p>
										</div>
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
