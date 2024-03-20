"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Payment() {
	const [email, setEmail] = useState("");
	const router = useRouter();

	return (
		<div className="grid grid-cols-1 md:grid-cols-2">
			<div className="md:flex md:flex-col md:justify-between bg-i02 p-8 md:p-20">
				<div>
					<div className="flex justify-between items-center mb-12">
						<button
							className="bg-i03 p-3 rounded-full"
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
						<img
							className="h-5"
							src="/images/Logo-Nav-Desktop.png"
							alt="Idealibs Logo"
						/>
					</div>
					<div className="rounded-xl bg-i03 p-6 mb-8">
						<p className="text-sm font-medium mb-3 md:text-base">
							Subscribe to Idealibs
						</p>
						<p className="">
							<span className="text-2xl font-bold bg-gradient-to-r from-iorange to-ipink text-transparent bg-clip-text md:text-3xl">
								Rp299.000
							</span>
							<span className="text-sm text-i04">/month</span>
						</p>
					</div>
					<div className="flex justify-between mb-4">
						<p className="font-medium">Idealibs Premium</p>
						<p className="font-medium">Rp.299.000</p>
					</div>
					<p className="text-sm text-i04">Billed monthly</p>
					<div className="py-4">
						<div className="w-full bg-i03 h-1 rounded-lg"></div>
					</div>
					<div className="flex justify-between mb-10">
						<p className="font-medium">Subtotal</p>
						<p className="font-medium">Rp.299.000</p>
					</div>
				</div>
				<p className="text-sm text-i04 md:text-base">
					By subscribing to Idealibs, users agree to adhere to our{" "}
					<span className="font-medium bg-gradient-to-r from-iorange to-ipink text-transparent bg-clip-text">
						terms of service
					</span>{" "}
					and{" "}
					<span className="font-medium bg-gradient-to-r from-iorange to-ipink text-transparent bg-clip-text">
						privacy policy
					</span>
					. Upon confirmation of your subscription, Idealibs reserves the right
					to charge you for future payments in alignment with our terms.
					However, you retain the option to cancel your subscription at any
					time.
				</p>
			</div>
			<div className="bg-i01 p-8 md:p-20">
				<div className="mb-6">
					<p className="font-medium mb-3">Select payment method</p>
					<select
						defaultValue={"default"}
						className="select w-full h-14 bg-i03 mb-3"
					>
						<option disabled value="default">
							Card payment
						</option>
						<option value="Visa">Visa</option>
						<option value="Mandiri">Mandiri</option>
						<option value="BCA">BCA</option>
						<option value="Dana">Dana</option>
						<option value="Gopay">Gopay</option>
					</select>
					<div className="flex items-center px-4 gap-4 rounded-lg w-full h-14 bg-i03 border border-i04">
						<input
							type="email"
							name="name"
							value={email}
							onChange={(e) => setEmail(e.target.value)}
							placeholder="Email"
							className="w-full bg-i03 focus:outline-none"
						/>
					</div>
				</div>
				<div className="mb-6">
					<p className="font-medium mb-3">Card information</p>
					<div className="flex items-center px-4 gap-4 rounded-lg w-full h-14 bg-i03 border border-i04 mb-3">
						<input
							type="number"
							name="name"
							placeholder="Card number"
							className="w-full bg-i03 focus:outline-none"
						/>
					</div>
					<div className="flex items-center px-4 gap-4 rounded-lg w-full h-14 bg-i03 border border-i04 mb-3">
						<input
							type="text"
							name="name"
							onFocus={(e) => (e.target.type = "date")}
							onBlur={(e) => (e.target.type = "text")}
							placeholder="Expire date"
							className="w-full bg-i03 focus:outline-none"
						/>
					</div>
					<div className="flex items-center px-4 gap-4 rounded-lg w-full h-14 bg-i03 border border-i04 mb-3">
						<input
							type="text"
							name="name"
							placeholder="CVC/CVV"
							className="w-full bg-i03 focus:outline-none"
						/>
					</div>
				</div>
				<div className="mb-10">
					<p className="font-medium mb-3">Country or region</p>
					<select
						defaultValue={"default"}
						className="select w-full h-14 bg-i03"
					>
						<option disabled value="default">
							Pick your region
						</option>
						<option value="Indonesia">Indonesia</option>
						<option value="Singapore">Singapore</option>
						<option value="United States">United States</option>
						<option value="United Kingdom">United Kingdom</option>
						<option value="Japan">Japan</option>
					</select>
				</div>
				<button
					type="submit"
					className="flex justify-center items-center rounded-iform w-full h-14 bg-gradient-to-r from-iorange to-ipink"
				>
					Subscribe now
				</button>
			</div>
		</div>
	);
}
