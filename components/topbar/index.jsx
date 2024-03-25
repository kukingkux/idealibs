import Link from "next/link";
import { useEffect, useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import SearchInput from "../searchInput";

export default function TopNavigation() {
	const [isDrawerOpen, setIsDrawerOpen] = useState(false);
	const [session, setSession] = useState(null);
	const toggleDrawer = () => setIsDrawerOpen(!isDrawerOpen);

	const router = useRouter();
	const pathname = usePathname();
	const handleLogout = () => {
		localStorage.removeItem("user");
		router.push("/");
	};

	useEffect(() => {
		const userData = JSON.parse(localStorage.getItem("user"));
		setSession(userData);
	}, []);

	return (
		<div id="navbar" className="sticky top-0 bg-i02 py-6 px-7 z-50 md:px-10">
			<div className="flex justify-between items-center">
				<label
					htmlFor="my-drawer"
					onClick={toggleDrawer}
					className="btn btn-square drawer-button border-0 bg-i03 h-10 md:hidden"
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
				<div className="md:hidden">
					{session ? (
						<img
							className="ml-8 h-8 md:hidden"
							src="/images/Logo-Nav-Mobile.png"
							alt="Idealibs Logo"
						/>
					) : (
						<img
							className="ml-16 h-8 md:hidden"
							src="/images/Logo-Nav-Mobile.png"
							alt="Idealibs Logo"
						/>
					)}
				</div>
				<SearchInput />
				{session ? (
					<div className="flex items-center gap-1">
						<Link
							href="/collections"
							aria-selected={pathname.startsWith("/collections")}
							className="hidden md:flex items-center justify-center bg-i03 w-12 h-12 rounded-full aria-selected:bg-gradient-to-r aria-selected:from-iorange aria-selected:to-ipink hover:opacity-80"
						>
							<svg
								width="20"
								height="20"
								viewBox="0 0 20 20"
								fill="#FFFFFF"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									d="M14.6611 2.76867C15.5783 2.87511 16.25 3.66583 16.25 4.58916V17.5L10 14.375L3.75 17.5V4.58916C3.75 3.66583 4.42173 2.87511 5.3389 2.76867C6.86797 2.59122 8.42333 2.5 10 2.5C11.5767 2.5 13.132 2.59122 14.6611 2.76867Z"
									stroke="#FEFEFE"
									strokeWidth="1"
									strokeLinecap="round"
									strokeLinejoin="round"
								/>
							</svg>
						</Link>
						<details className="dropdown dropdown-end">
							<summary className="btn flex items-center bg-i02 border-0 hover:bg-i02">
								<img
									src="/images/Img-Profile.png"
									className="rounded-full w-12 h-12 hover:opacity-80"
								/>
							</summary>
							<ul className="mt-10 p-4 shadow menu dropdown-content z-[1] bg-i02 rounded-box w-max">
								<li>
									<div className="flex items-center gap-4 p-2">
										<img
											src="/images/Img-Profile.png"
											className="rounded-full w-12 h-12 hover:opacity-80"
										/>
										<div>
											<p className="mb-1">
												{session.role == 1 ? "Free user" : "Premium User"}
											</p>
											<p className="text-sm text-i04">{session.email}</p>
										</div>
									</div>
								</li>
								<li className="block md:hidden">
									<a className="p-2">
										<svg
											xmlns="http://www.w3.org/2000/svg"
											viewBox="0 0 16 16"
											fill="currentColor"
											className="w-4 h-4"
										>
											<path d="M3.75 2a.75.75 0 0 0-.75.75v10.5a.75.75 0 0 0 1.28.53L8 10.06l3.72 3.72a.75.75 0 0 0 1.28-.53V2.75a.75.75 0 0 0-.75-.75h-8.5Z" />
										</svg>
										Your library
									</a>
								</li>
								<div className="pt-2 pb-5">
									<div className="w-full bg-i03 h-0.5 rounded-lg"></div>
								</div>
								<li>
									<button
										type="button"
										onClick={handleLogout}
										className="btn btn-sm btn-error text-white font-medium"
									>
										<svg
											xmlns="http://www.w3.org/2000/svg"
											fill="none"
											viewBox="0 0 24 24"
											strokeWidth="2.5"
											stroke="currentColor"
											className="w-4 h-4"
										>
											<path
												strokeLinecap="round"
												strokeLinejoin="round"
												d="M5.636 5.636a9 9 0 1 0 12.728 0M12 3v9"
											/>
										</svg>
										Sign out
									</button>
								</li>
							</ul>
						</details>
					</div>
				) : (
					<div className="flex">
						<Link
							href="/auth/login"
							type="button"
							className="hidden btn btn-outline rounded-full border-2 font-medium border-white text-white px-7 mr-3 hover:border-white hover:bg-white hover:text-i02 md:flex"
						>
							Login
						</Link>
						<Link
							href="/auth/register"
							type="button"
							className="btn btn-neutral rounded-full border-0 font-medium text-white bg-gradient-to-r from-iorange to-ipink hover:opactity-80 px-7"
						>
							Register
						</Link>
					</div>
				)}
			</div>
		</div>
	);
}
