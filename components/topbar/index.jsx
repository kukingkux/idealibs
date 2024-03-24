import Link from "next/link";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import SearchInput from "../searchInput";

export default function TopNavigation() {
	const [isDrawerOpen, setIsDrawerOpen] = useState(false);
	const [session, setSession] = useState(null);
	const toggleDrawer = () => setIsDrawerOpen(!isDrawerOpen);

	const router = useRouter();
	const handleLogout = () => {
		localStorage.removeItem("token");
		router.push("/");
	};

	useEffect(() => {
		const token = JSON.parse(localStorage.getItem("token"));
		setSession(token);
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
					<div className="flex items-center">
						<details className="dropdown dropdown-end">
							<summary className="btn bg-i02 border-0 hover:bg-i02">
								<img
									src="/images/Img-Profile.png"
									className="rounded-full w-12 h-12 hover:opacity-80"
								/>
							</summary>
							<ul className="mt-10 p-4 shadow menu dropdown-content z-[1] bg-i02 rounded-box w-max">
								<li>
									<div className="flex items-center gap-4">
										<img
											src="/images/Img-Profile.png"
											className="rounded-full w-12 h-12 hover:opacity-80"
										/>
										<div>
											<p className="mb-1">Free user</p>
											<p className="text-sm text-i04">khananta@gmail.com</p>
										</div>
									</div>
								</li>
								{/* <li>
									<a>Your library</a>
								</li> */}
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
							className="btn btn-neutral rounded-full border-0 font-medium text-white bg-gradient-to-r from-iorange to-ipink hover:bg-transparent px-7"
						>
							Register
						</Link>
					</div>
				)}
			</div>
		</div>
	);
}
