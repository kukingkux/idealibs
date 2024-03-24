import Link from "next/link";

export default function CardColors({ c1, c2, c3, c4, id }) {
	return (
		<div className="w-full flex flex-col gap-4 mb-6">
			<Link
				href={{
					pathname: `/colors/${id}`,
				}}
			>
				<div className="w-full">
					<div
						className="w-full h-20 rounded-t-lg"
						style={{ backgroundColor: c1 }}
					></div>
					<div className="w-full h-16" style={{ backgroundColor: c2 }}></div>
					<div className="w-full h-12" style={{ backgroundColor: c3 }}></div>
					<div
						className="w-full h-10 rounded-b-lg"
						style={{ backgroundColor: c4 }}
					></div>
				</div>
			</Link>
			<div className="bg-i03 rounded-iform py-3 px-7 flex justify-between items-center">
				<svg
					width="24"
					height="28"
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
				<p>Save</p>
				<div className="w-1/6 lg:w-1/12"></div>
			</div>
		</div>
	);
}
