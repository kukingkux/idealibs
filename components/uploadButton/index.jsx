import Link from "next/link";

export default function UploadButton({ session, path }) {
	return (
		<Link
			href={session ? path : "/auth/login"}
			className="flex justify-center items-center gap-2 rounded-iform w-full h-16 lg:h-14 bg-iblue font-semibold mb-8 hover:opacity-80"
		>
			<svg
				width="25"
				height="24"
				viewBox="0 0 25 24"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path
					fillRule="evenodd"
					clipRule="evenodd"
					d="M13.25 10.8303V17.0903H11.75V10.8303H2.75V22.3503H22.25V10.8303H13.25Z"
					fill="#FEFEFE"
				/>
				<path
					fillRule="evenodd"
					clipRule="evenodd"
					d="M13.25 6.0289C14.24 7.0739 15.621 7.7499 17.1 7.7499H17.85V6.2499H17.1C15.085 6.2499 13.25 4.4169 13.25 2.4039V1.6499H11.75V2.4039C11.75 4.4169 9.92003 6.2499 7.91003 6.2499H7.16003V7.7499H7.91003C9.38503 7.7499 10.762 7.0759 11.75 6.0319L11.75 10.8303H13.25L13.25 6.0289Z"
					fill="#FEFEFE"
				/>
			</svg>
			Upload Asset
		</Link>
	);
}
