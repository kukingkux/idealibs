import { useRouter, usePathname } from "next/navigation";
import { useState } from "react";

export default function SearchInput() {
	const [search, setSearch] = useState("");

	const router = useRouter();
	const pathname = usePathname();

	const submitSearch = (e) => {
		let searchParse = search.replace(/\s+/g, "%");
		if (e.key === "Enter") {
			if (pathname == "/home") {
				router.push("/photos?search=" + searchParse);
			} else {
				router.push(pathname + "?search=" + searchParse);
			}
		}
	};

	return (
		<div className="hidden md:block md:w-1/2 md:mr-48">
			<label className="input flex items-center gap-2 rounded-full bg-i03 px-5">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					strokeWidth="1.5"
					stroke="currentColor"
					className="w-5 h-5"
				>
					<path
						strokeLinecap="round"
						strokeLinejoin="round"
						d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
					/>
				</svg>
				<input
					type="text"
					value={search}
					onChange={(e) => setSearch(e.target.value)}
					onKeyDown={(e) => submitSearch(e)}
					className="grow bg-i03"
					placeholder="Find all your design needs"
				/>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					strokeWidth="1.5"
					stroke="currentColor"
					className="w-5 h-5"
				>
					<path
						strokeLinecap="round"
						strokeLinejoin="round"
						d="M6 13.5V3.75m0 9.75a1.5 1.5 0 0 1 0 3m0-3a1.5 1.5 0 0 0 0 3m0 3.75V16.5m12-3V3.75m0 9.75a1.5 1.5 0 0 1 0 3m0-3a1.5 1.5 0 0 0 0 3m0 3.75V16.5m-6-9V3.75m0 3.75a1.5 1.5 0 0 1 0 3m0-3a1.5 1.5 0 0 0 0 3m0 9.75V10.5"
					/>
				</svg>
			</label>
		</div>
	);
}
