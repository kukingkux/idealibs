import Link from "next/link";
import { useState } from "react";
import axiosInstance from "@/app/axios";

export default function MasonryGrid({ src, path, premium }) {
	const [color, setColor] = useState("none");

	const saveAsset = async () => {
		// const res = await axiosInstance.post("/collections");
		if (color === "none") {
			setColor("#FEFEFE");
		} else {
			setColor("none");
		}
	};

	return (
		<div className="overflow-hidden cursor-pointer rounded-xl relative group">
			<Link
				href={{
					pathname: `${path}`,
				}}
				className="rounded-lg z-10 h-full opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out cursor-pointer absolute bg-[radial-gradient(120.40%_180.55%_at_50.76%_60.29%,rgba(255,255,255,0.00)_0%,rgba(0,0,0,1)_100%)] inset-x-0 pt-30 text-white flex items-end my-4"
			></Link>
			{premium == 1 ? (
				<button
					onClick={saveAsset}
					className="absolute z-20 top-0 right-0 p-3 m-4 mt-7 text-xl opacity-0 group-hover:opacity-100 transform transition duration-300 ease-in-out bg-slate-200/20 rounded-full hover:bg-i04/100"
				>
					<svg
						width="20"
						height="20"
						viewBox="0 0 20 20"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							d="M14.6611 2.76867C15.5783 2.87511 16.25 3.66583 16.25 4.58916V17.5L10 14.375L3.75 17.5V4.58916C3.75 3.66583 4.42173 2.87511 5.3389 2.76867C6.86797 2.59122 8.42333 2.5 10 2.5C11.5767 2.5 13.132 2.59122 14.6611 2.76867Z"
							fill={color}
							stroke="#FEFEFE"
							strokeWidth="1.5"
							strokeLinecap="round"
							strokeLinejoin="round"
						/>
					</svg>
				</button>
			) : (
				<button className="absolute z-20 top-0 right-0 p-3 m-4 mt-7 text-xl opacity-100 rounded-full bg-gradient-to-r from-iorange to-ipink">
					<svg
						width="24"
						height="24"
						viewBox="0 0 27 22"
						fill="#FFFFFF"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path d="M14.4844 3.96875C15.0188 3.64062 15.375 3.04531 15.375 2.375C15.375 1.33906 14.5359 0.5 13.5 0.5C12.4641 0.5 11.625 1.33906 11.625 2.375C11.625 3.05 11.9812 3.64062 12.5156 3.96875L9.82969 9.34063C9.40312 10.1938 8.29688 10.4375 7.55156 9.84219L3.375 6.5C3.60938 6.18594 3.75 5.79688 3.75 5.375C3.75 4.33906 2.91094 3.5 1.875 3.5C0.839062 3.5 0 4.33906 0 5.375C0 6.41094 0.839062 7.25 1.875 7.25C1.88437 7.25 1.89844 7.25 1.90781 7.25L4.05 19.0344C4.30781 20.4594 5.55 21.5 7.00312 21.5H19.9969C21.4453 21.5 22.6875 20.4641 22.95 19.0344L25.0922 7.25C25.1016 7.25 25.1156 7.25 25.125 7.25C26.1609 7.25 27 6.41094 27 5.375C27 4.33906 26.1609 3.5 25.125 3.5C24.0891 3.5 23.25 4.33906 23.25 5.375C23.25 5.79688 23.3906 6.18594 23.625 6.5L19.4484 9.84219C18.7031 10.4375 17.5969 10.1938 17.1703 9.34063L14.4844 3.96875Z" />
					</svg>
				</button>
			)}
			<img alt="" className="h-auto w-full rounded-lg mt-4" src={src} />
		</div>
	);
}
