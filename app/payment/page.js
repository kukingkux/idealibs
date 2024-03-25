"use client";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import Link from "next/link";
import axiosInstance from "../axios";

export default function Payment() {
	const userData = JSON.parse(localStorage.getItem("user"));
	useEffect(() => {
		const snapScript = "https://app.sandbox.midtrans.com/snap/snap.js";
		const clientKey = process.env.NEXT_PUBLIC_CLIENT;
		const script = document.createElement("script");

		script.src = snapScript;
		script.setAttribute("data-client-key", clientKey);
		script.async = true;

		document.body.appendChild(script);

		return () => {
			document.body.removeChild(script);
		};
	}, []);
	const [email, setEmail] = useState("");
	const router = useRouter();

	const checkout = async () => {
		document.getElementById("my_modal_1").showModal();
		// Contoh parameter yang akan dikirim ke API (sesuaikan dengan kebutuhanmu)
		const paymentData = {
			id: "order-id-" + new Date().getTime(), // Contoh sederhana untuk generate order ID
			productName: "Idealibs Premium",
			price: 299000,
			quantity: 1,
		};

		try {
			const response = await fetch("/api/tokenizer", {
				method: "POST",
				// headers: {
				//     'Content-Type': 'application/json',
				// },
				body: JSON.stringify(paymentData),
			});

			const changeRole = await axiosInstance.put(`/users/paid/${userData.id}`, {
				user_id: userData.id,
			});

			const data = await response.json();
			const newRole = changeRole.data.user;

			if (data.token) {
				// Redirect ke halaman pembayaran Midtrans menggunakan Snap
				window.snap.embed(data.token, {
					embedId: "snap-modal",
					onSuccess: function (result) {
						localStorage.setItem("user", JSON.stringify(newRole));
						router.push("/home"); // Redirect ke halaman sukses (contoh)
						/* Handle ketika pembayaran berhasil */
						console.log(result);
					},
					onPending: function (result) {
						/* Handle ketika pembayaran pending */
						console.log(result);
					},
					onError: function (result) {
						/* Handle ketika terjadi error pada pembayaran */
						console.log(result);
					},
				});
			}
		} catch (error) {
			console.error("Failed to initiate payment:", error);
		}
	};

	return (
		<main>
			{userData.role == 2 ? (
				<div className="bg-i02 h-screen">
					<div className="flex flex-col justify-center items-center h-screen">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 24 24"
							fill="currentColor"
							className="fill-green-600 h-20 w-20 md:h-20 md:w-20"
						>
							<path
								fillRule="evenodd"
								d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z"
								clipRule="evenodd"
							/>
						</svg>
						<p className="text-2xl font-semibold my-4">Payment Success!</p>
						<p className="text-i04 mb-4 text-center">
							Enjoy your unlimited downloads, exclusive access
							<br></br>
							to advanced AI art generator. and ad-free browsing.
						</p>
						<Link
							href="/home"
							className="flex justify-center items-center rounded-iform h-14 px-10 bg-gradient-to-r from-iorange to-ipink"
						>
							Go Back to Home
						</Link>
					</div>
				</div>
			) : (
				<div className="grid grid-cols-1 md:grid-cols-2">
					<dialog id="my_modal_1" className="modal">
						<div id="snap-modal" className="md:w-96"></div>
					</dialog>
					<div className="md:flex md:flex-col md:justify-between md:min-h-screen bg-i02 p-8 md:p-20">
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
							. Upon confirmation of your subscription, Idealibs reserves the
							right to charge you for future payments in alignment with our
							terms. However, you retain the option to cancel your subscription
							at any time.
						</p>
					</div>
					<div className="bg-i01 p-8 md:p-20">
						<div className="mb-6">
							<p className="font-medium mb-3">Payment registration form</p>
							<div className="flex items-center px-4 gap-4 mb-3 rounded-lg w-full h-14 bg-i03 border border-i04">
								<input
									type="number"
									name="name"
									placeholder="Phone"
									className="w-full bg-i03 focus:outline-none"
								/>
							</div>
							<div className="flex items-center px-4 gap-4 mb-3 rounded-lg w-full h-14 bg-i03 border border-i04">
								<input
									type="email"
									name="name"
									value={email}
									onChange={(e) => setEmail(e.target.value)}
									placeholder="Email"
									className="w-full bg-i03 focus:outline-none"
								/>
							</div>
							<div className="mb-10">
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
						</div>

						<button
							type="submit"
							className="flex justify-center items-center rounded-iform w-full h-14 bg-gradient-to-r from-iorange to-ipink"
							onClick={checkout}
						>
							Subscribe now
						</button>
					</div>
				</div>
			)}
		</main>
	);
}
