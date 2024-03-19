import Link from "next/link";
import { usePathname } from "next/navigation";

export function SideNavigation() {
	const pathname = usePathname();

	return (
		<div
			id="left-content"
			className="hidden bg-i02 min-h-screen w-sidebar z-10 px-7 lg:block lg:px-10"
		>
			<div className="container sticky top-0 min-h-screen">
				<div className="flex flex-col justify-between min-h-screen pb-6">
					<div>
						<div className="py-10" id="idealibs">
							<img
								className="hidden h-6 lg:block"
								src="/images/Logo-Nav-Desktop.png"
								alt="Idealibs Logo"
							/>
						</div>
						<div className="grid grid-cols-1 gap-3">
							<Link href="/home">
								<div
									aria-selected={pathname.startsWith("/home")}
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
							</Link>
							<div className="text-i04 text-sm py-1">Assets</div>
							<Link href="/photos">
								<div
									aria-selected={pathname.startsWith("/photos")}
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
							</Link>
							<Link href="/colors">
								<div
									aria-selected={pathname.startsWith("/colors")}
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
							</Link>
							<Link href="/fonts">
								<div
									aria-selected={pathname.startsWith("/fonts")}
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
							</Link>
							<Link href="/vectors">
								<div
									aria-selected={pathname.startsWith("/vectors")}
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
							</Link>
							<Link href="/mockups">
								<div
									aria-selected={pathname.startsWith("/mockups")}
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
							</Link>
							<Link href="/icons">
								<div
									aria-selected={pathname.startsWith("/icons")}
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
							</Link>
						</div>
					</div>
					<div>
						<div className="flex flex-col gap-4 bg-gradient-to-r from-iorange to-ipink rounded-xl p-4">
							<div className="flex align-center">
								<img
									className="hidden h-6 lg:block"
									src="/images/Logo-IdealibsWhite.png"
									alt="Idealibs Logo"
								/>
							</div>
							<div className="flex flex-col gap-4">
								<h2 className="font-bold text-xs">Upgrade Premium</h2>
								<p className="text-xs">
									Upgrade premium and get a variety of interesting and
									high-quality assets
								</p>
								<button className="flex justify-center items-center gap-2 rounded-iform w-full py-2 bg-white text-black font-semibold text-sm">
									Upgrade now
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export function SideNavigationMobile() {
	const pathname = usePathname();

	return (
		<div className="grid grid-cols-1 gap-3 pt-3">
			<Link href="/home">
				<div
					aria-selected={pathname.startsWith("/home")}
					className="flex rounded-lg text-i04 text-sm py-2.5 px-0 items-center pl-4 aria-selected:text-white aria-selected:bg-gradient-to-r aria-selected:from-iorange aria-selected:to-ipink"
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
			</Link>
			<div className="text-i04 text-sm py-1">Assets</div>
			<Link href="/photos">
				<div
					aria-selected={pathname.startsWith("/photos")}
					className="flex rounded-lg text-i04 text-sm py-2.5 px-0 pl-4 items-center aria-selected:text-white aria-selected:bg-gradient-to-r aria-selected:from-iorange aria-selected:to-ipink"
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
			</Link>
			<Link href="/colors">
				<div
					aria-selected={pathname.startsWith("/colors")}
					className="flex rounded-lg text-i04 text-sm py-2.5 px-0 pl-4 items-center aria-selected:text-white aria-selected:bg-gradient-to-r aria-selected:from-iorange aria-selected:to-ipink"
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
			</Link>
			<Link href="/fonts">
				<div
					aria-selected={pathname.startsWith("/fonts")}
					className="flex rounded-lg text-i04 text-sm py-2.5 px-0 pl-4 items-center aria-selected:text-white aria-selected:bg-gradient-to-r aria-selected:from-iorange aria-selected:to-ipink"
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
			</Link>
			<Link href="/vectors">
				<div
					aria-selected={pathname.startsWith("/vectors")}
					className="flex rounded-lg text-i04 text-sm py-2.5 px-0 pl-4 items-center aria-selected:text-white aria-selected:bg-gradient-to-r aria-selected:from-iorange aria-selected:to-ipink"
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
			</Link>
			<Link href="/mockups">
				<div
					aria-selected={pathname.startsWith("/mockups")}
					className="flex rounded-lg text-i04 text-sm py-2.5 px-0 pl-4 items-center aria-selected:text-white aria-selected:bg-gradient-to-r aria-selected:from-iorange aria-selected:to-ipink"
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
			</Link>
			<Link href="/icons">
				<div
					aria-selected={pathname.startsWith("/icons")}
					className="flex rounded-lg text-i04 text-sm py-2.5 px-0 pl-4 items-center aria-selected:text-white aria-selected:bg-gradient-to-r aria-selected:from-iorange aria-selected:to-ipink"
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
			</Link>
		</div>
	);
}
