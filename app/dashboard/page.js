"use client";

import Link from 'next/link';
import { useState } from "react";

import bg from '../../public/images/Img-Hero-Dashboard.png';

export default function Dashboard() {
	const [open, setOpen] = useState(1);
	const [active, setActive] = useState(null);
	const [isDrawerOpen, setIsDrawerOpen] = useState(false);

	const handleOpen = (value) => setOpen(open === value ? 0 : value);
	const handleActive = (value) => setActive(value);
	const toggleDrawer = () => setIsDrawerOpen(!isDrawerOpen);

	return (
		<main className="flex min-h-screen flex-col bg-i01">
			<div className="drawer" id="sidebar">
				<input id="my-drawer" type="checkbox" className="drawer-toggle" />
				<div className="drawer-content flex flex-col items-center justify-center">
					<div
						id="navbar"
						className="sticky top-0 container bg-i02 py-6 px-7 z-20"
					>
						<div className="flex justify-between items-center">
							<label
								htmlFor="my-drawer"
								onClick={toggleDrawer}
								className="btn btn-square drawer-button border-0 bg-i03 h-10 display-block md:hidden"
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
							<div className="ml-14 lg:ml-40">
								<img
									className="h-8 w-7 aspect-square"
									src="/images/Logo-Nav-Mobile.png"
									alt="Idealibs Logo"
								/>
							</div>
							<div className="flex">
								<button
									type="button"
									className="hidden lg:block rounded-full border-2 border-white bg-transparent py-2.5 mr-3"
								>
									<Link href="/auth/login" className="block font-semibold text-sm px-5">Login</Link>
								</button>
								<button
									type="button"
									className="rounded-full bg-gradient-to-r from-iorange to-ipink py-2.5"
								>
									<span className="block font-semibold text-sm px-5">
										Register
									</span>
								</button>
							</div>
						</div>
					</div>
                    <div id="content" className="container">
						<div
							id="header"
							className="flex container flex-col items-center p-7"
						>
							<div className="md:inline-block  w-full">
								<div className="flex flex-col justify-between p-4 bg-cover rounded-lg " style={{backgroundImage: `url(${bg.src})`}}>
									<img
									className="w-24 "
									src="/images/Logo-Nav-Desktop.png"
									alt="Img-Login"
									/>
									<p className="font-medium text-lg pt-32 pe-24">An ideal library of ideas to develop your creative mind.</p>
								</div>
							</div>
						</div>

						<div id="mainmenu" className="px-7">
							<div className="mb-6">
								<div className="flex items-center justify-between px-6 gap-4 rounded-iform w-full h-16 bg-i03">
								<svg width="30" height="30" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
									<path fill-rule="evenodd" clip-rule="evenodd" d="M3.75195 10.5815C3.75195 6.70046 6.90995 3.54346 10.791 3.54346C14.671 3.54346 17.829 6.70046 17.829 10.5815C17.829 14.4625 14.671 17.6205 10.791 17.6205C6.90995 17.6205 3.75195 14.4625 3.75195 10.5815ZM22.247 21.0405L17.648 16.4535C19.004 14.8725 19.829 12.8235 19.829 10.5815C19.829 5.59846 15.774 1.54346 10.791 1.54346C5.80695 1.54346 1.75195 5.59846 1.75195 10.5815C1.75195 15.5655 5.80695 19.6205 10.791 19.6205C12.813 19.6205 14.676 18.9445 16.183 17.8175L20.835 22.4565L22.247 21.0405Z" fill="#FEFEFE"/>
								</svg>
									<input type='text' name="name" placeholder="Find all your design needs" className="w-full h-14 bg-i03"/>
									<svg width="30" height="30" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
										<path d="M6 13.5L6 3.75M6 13.5C6.82843 13.5 7.5 14.1716 7.5 15C7.5 15.8284 6.82843 16.5 6 16.5M6 13.5C5.17157 13.5 4.5 14.1716 4.5 15C4.5 15.8284 5.17157 16.5 6 16.5M6 20.25L6 16.5M18 13.5V3.75M18 13.5C18.8284 13.5 19.5 14.1716 19.5 15C19.5 15.8284 18.8284 16.5 18 16.5M18 13.5C17.1716 13.5 16.5 14.1716 16.5 15C16.5 15.8284 17.1716 16.5 18 16.5M18 20.25L18 16.5M12 7.5V3.75M12 7.5C12.8284 7.5 13.5 8.17157 13.5 9C13.5 9.82843 12.8284 10.5 12 10.5M12 7.5C11.1716 7.5 10.5 8.17157 10.5 9C10.5 9.82843 11.1716 10.5 12 10.5M12 20.25V10.5" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
									</svg>
								</div>
							</div>
							<div className="bg-i03 rounded-lg mb-6 p-8">
								<button className="flex justify-center items-center gap-2 rounded-iform w-full h-16 bg-iblue font-semibold mb-8">
									<svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
										<path fill-rule="evenodd" clip-rule="evenodd" d="M13.25 10.8303V17.0903H11.75V10.8303H2.75V22.3503H22.25V10.8303H13.25Z" fill="#FEFEFE"/>
										<path fill-rule="evenodd" clip-rule="evenodd" d="M13.25 6.0289C14.24 7.0739 15.621 7.7499 17.1 7.7499H17.85V6.2499H17.1C15.085 6.2499 13.25 4.4169 13.25 2.4039V1.6499H11.75V2.4039C11.75 4.4169 9.92003 6.2499 7.91003 6.2499H7.16003V7.7499H7.91003C9.38503 7.7499 10.762 7.0759 11.75 6.0319L11.75 10.8303H13.25L13.25 6.0289Z" fill="#FEFEFE"/>
									</svg>
									Upload Image
								</button>
								<button className="flex justify-center items-center gap-2 rounded-iform w-full h-16 bg-gradient-to-r from-iorange to-ipink font-semibold">
									<svg width="30" height="30" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
										<path fill-rule="evenodd" clip-rule="evenodd" d="M21.9236 11.5315C17.7756 9.9975 14.5116 6.7335 12.9686 2.5765L12.4996 1.3125L12.0306 2.5765C10.4876 6.7335 7.22462 9.9975 3.07562 11.5315L1.80762 12.0005L3.07562 12.4685C7.22462 14.0025 10.4876 17.2665 12.0306 21.4245L12.4996 22.6875L12.9686 21.4245C14.5116 17.2665 17.7756 14.0025 21.9236 12.4685L23.1926 12.0005L21.9236 11.5315Z" fill="#FEFEFE"/>
									</svg>
									AI Image
								</button>
							</div>
							<div className="flex flex-wrap gap-4 mb-6">
								<div className="font-bold rounded-iform py-4 px-8 bg-iblue">All</div>
								<div className="font-bold rounded-iform py-4 px-8 bg-i02">Nature</div>
								<div className="font-bold rounded-iform py-4 px-8 bg-i02">People</div>
								<div className="font-bold rounded-iform py-4 px-8 bg-i02">Textures</div>
								<div className="font-bold rounded-iform py-4 px-8 border">See more category</div>
							</div>
						</div>
						
						<div id="scrollable">
							<div className="mb-6">
								<div className="flex gap-4 items-center p-7">
									<img
										src="/images/Img-Profile.png"
										className="rounded-full w-12 h-12">
									</img>
									<p>Khananta</p>
								</div>

								<img
									src="/images/Img-Image1.png"
									className="w-full bg-i04"></img>

								<div className="flex gap-4 items-center justify-between p-7">
									<div className="flex items-center justify-center bg-i03 w-12 h-12 rounded-full">
										<svg width="24" height="24" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
											<path d="M14.6611 2.76867C15.5783 2.87511 16.25 3.66583 16.25 4.58916V17.5L10 14.375L3.75 17.5V4.58916C3.75 3.66583 4.42173 2.87511 5.3389 2.76867C6.86797 2.59122 8.42333 2.5 10 2.5C11.5767 2.5 13.132 2.59122 14.6611 2.76867Z" stroke="#FEFEFE" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
										</svg>
									</div>
									<div className="flex gap-2 bg-i03 py-3 px-8 rounded-iform">
										<svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
											<path fill-rule="evenodd" clip-rule="evenodd" d="M5.47812 5.55887C5.67178 4.92948 6.25329 4.5 6.91179 4.5H9C9.41421 4.5 9.75 4.16421 9.75 3.75C9.75 3.33579 9.41421 3 9 3H6.91179C5.59478 3 4.43177 3.85897 4.04446 5.11774L1.63266 12.9561C1.54472 13.2419 1.5 13.5393 1.5 13.8383V18C1.5 19.6569 2.84315 21 4.5 21H19.5C21.1569 21 22.5 19.6569 22.5 18V13.8383C22.5 13.5393 22.4553 13.2419 22.3673 12.9561L19.9555 5.11774C19.5682 3.85897 18.4052 3 17.0882 3H15C14.5858 3 14.25 3.33579 14.25 3.75C14.25 4.16421 14.5858 4.5 15 4.5H17.0882C17.7467 4.5 18.3282 4.92948 18.5219 5.55887L20.7345 12.75H17.8906C16.7543 12.75 15.7155 13.392 15.2073 14.4084L14.9511 14.9208C14.697 15.429 14.1776 15.75 13.6094 15.75H10.3906C9.82242 15.75 9.30302 15.429 9.04894 14.9208L8.79271 14.4084C8.28453 13.392 7.24574 12.75 6.10942 12.75H3.26547L5.47812 5.55887Z" fill="#FEFEFE"/>
											<path fill-rule="evenodd" clip-rule="evenodd" d="M12 2.25C12.4142 2.25 12.75 2.58579 12.75 3V9.43934L14.4697 7.71967C14.7626 7.42678 15.2374 7.42678 15.5303 7.71967C15.8232 8.01256 15.8232 8.48744 15.5303 8.78033L12.5303 11.7803C12.2374 12.0732 11.7626 12.0732 11.4697 11.7803L8.46967 8.78033C8.17678 8.48744 8.17678 8.01256 8.46967 7.71967C8.76256 7.42678 9.23744 7.42678 9.53033 7.71967L11.25 9.43934V3C11.25 2.58579 11.5858 2.25 12 2.25Z" fill="#FEFEFE"/>
										</svg>
										Download
									</div>
								</div>
								<div className="px-7 py-3">
									<div className="w-full bg-i03 h-1 rounded-lg"></div>
								</div>
							</div>
							<div className="mb-6">
								<div className="flex gap-4 items-center p-7">
									<img
										src="/images/Img-Profile.png"
										className="rounded-full w-12 h-12">
									</img>
									<p>Khananta</p>
								</div>

								<img
									src="/images/Img-Image2.png"
									className="w-full bg-i04"></img>

								<div className="flex gap-4 items-center justify-between p-7">
									<div className="flex items-center justify-center bg-i03 w-12 h-12 rounded-full">
										<svg width="24" height="24" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
											<path d="M14.6611 2.76867C15.5783 2.87511 16.25 3.66583 16.25 4.58916V17.5L10 14.375L3.75 17.5V4.58916C3.75 3.66583 4.42173 2.87511 5.3389 2.76867C6.86797 2.59122 8.42333 2.5 10 2.5C11.5767 2.5 13.132 2.59122 14.6611 2.76867Z" stroke="#FEFEFE" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
										</svg>
									</div>
									<div className="flex gap-2 bg-i03 py-3 px-8 rounded-iform">
										<svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
											<path fill-rule="evenodd" clip-rule="evenodd" d="M5.47812 5.55887C5.67178 4.92948 6.25329 4.5 6.91179 4.5H9C9.41421 4.5 9.75 4.16421 9.75 3.75C9.75 3.33579 9.41421 3 9 3H6.91179C5.59478 3 4.43177 3.85897 4.04446 5.11774L1.63266 12.9561C1.54472 13.2419 1.5 13.5393 1.5 13.8383V18C1.5 19.6569 2.84315 21 4.5 21H19.5C21.1569 21 22.5 19.6569 22.5 18V13.8383C22.5 13.5393 22.4553 13.2419 22.3673 12.9561L19.9555 5.11774C19.5682 3.85897 18.4052 3 17.0882 3H15C14.5858 3 14.25 3.33579 14.25 3.75C14.25 4.16421 14.5858 4.5 15 4.5H17.0882C17.7467 4.5 18.3282 4.92948 18.5219 5.55887L20.7345 12.75H17.8906C16.7543 12.75 15.7155 13.392 15.2073 14.4084L14.9511 14.9208C14.697 15.429 14.1776 15.75 13.6094 15.75H10.3906C9.82242 15.75 9.30302 15.429 9.04894 14.9208L8.79271 14.4084C8.28453 13.392 7.24574 12.75 6.10942 12.75H3.26547L5.47812 5.55887Z" fill="#FEFEFE"/>
											<path fill-rule="evenodd" clip-rule="evenodd" d="M12 2.25C12.4142 2.25 12.75 2.58579 12.75 3V9.43934L14.4697 7.71967C14.7626 7.42678 15.2374 7.42678 15.5303 7.71967C15.8232 8.01256 15.8232 8.48744 15.5303 8.78033L12.5303 11.7803C12.2374 12.0732 11.7626 12.0732 11.4697 11.7803L8.46967 8.78033C8.17678 8.48744 8.17678 8.01256 8.46967 7.71967C8.76256 7.42678 9.23744 7.42678 9.53033 7.71967L11.25 9.43934V3C11.25 2.58579 11.5858 2.25 12 2.25Z" fill="#FEFEFE"/>
										</svg>
										Download
									</div>
								</div>
								<div className="px-7 py-3">
									<div className="w-full bg-i03 h-1 rounded-lg"></div>
								</div>
							</div>
							<div className="mb-6">
								<div className="flex gap-4 items-center p-7">
									<img
										src="/images/Img-Profile.png"
										className="rounded-full w-12 h-12">
									</img>
									<p>Khananta</p>
								</div>

								<img
									src="/images/Img-Image3.png"
									className="w-full bg-i04"></img>

								<div className="flex gap-4 items-center justify-between p-7">
									<div className="flex items-center justify-center bg-i03 w-12 h-12 rounded-full">
										<svg width="24" height="24" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
											<path d="M14.6611 2.76867C15.5783 2.87511 16.25 3.66583 16.25 4.58916V17.5L10 14.375L3.75 17.5V4.58916C3.75 3.66583 4.42173 2.87511 5.3389 2.76867C6.86797 2.59122 8.42333 2.5 10 2.5C11.5767 2.5 13.132 2.59122 14.6611 2.76867Z" stroke="#FEFEFE" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
										</svg>
									</div>
									<div className="flex gap-2 bg-i03 py-3 px-8 rounded-iform">
										<svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
											<path fill-rule="evenodd" clip-rule="evenodd" d="M5.47812 5.55887C5.67178 4.92948 6.25329 4.5 6.91179 4.5H9C9.41421 4.5 9.75 4.16421 9.75 3.75C9.75 3.33579 9.41421 3 9 3H6.91179C5.59478 3 4.43177 3.85897 4.04446 5.11774L1.63266 12.9561C1.54472 13.2419 1.5 13.5393 1.5 13.8383V18C1.5 19.6569 2.84315 21 4.5 21H19.5C21.1569 21 22.5 19.6569 22.5 18V13.8383C22.5 13.5393 22.4553 13.2419 22.3673 12.9561L19.9555 5.11774C19.5682 3.85897 18.4052 3 17.0882 3H15C14.5858 3 14.25 3.33579 14.25 3.75C14.25 4.16421 14.5858 4.5 15 4.5H17.0882C17.7467 4.5 18.3282 4.92948 18.5219 5.55887L20.7345 12.75H17.8906C16.7543 12.75 15.7155 13.392 15.2073 14.4084L14.9511 14.9208C14.697 15.429 14.1776 15.75 13.6094 15.75H10.3906C9.82242 15.75 9.30302 15.429 9.04894 14.9208L8.79271 14.4084C8.28453 13.392 7.24574 12.75 6.10942 12.75H3.26547L5.47812 5.55887Z" fill="#FEFEFE"/>
											<path fill-rule="evenodd" clip-rule="evenodd" d="M12 2.25C12.4142 2.25 12.75 2.58579 12.75 3V9.43934L14.4697 7.71967C14.7626 7.42678 15.2374 7.42678 15.5303 7.71967C15.8232 8.01256 15.8232 8.48744 15.5303 8.78033L12.5303 11.7803C12.2374 12.0732 11.7626 12.0732 11.4697 11.7803L8.46967 8.78033C8.17678 8.48744 8.17678 8.01256 8.46967 7.71967C8.76256 7.42678 9.23744 7.42678 9.53033 7.71967L11.25 9.43934V3C11.25 2.58579 11.5858 2.25 12 2.25Z" fill="#FEFEFE"/>
										</svg>
										Download
									</div>
								</div>
								<div className="px-7 py-3">
									<div className="w-full bg-i03 h-1 rounded-lg"></div>
								</div>
							</div>
							<div className="mb-6">
								<div className="flex gap-4 items-center p-7">
									<img
										src="/images/Img-Profile.png"
										className="rounded-full w-12 h-12">
									</img>
									<p>Khananta</p>
								</div>

								<img
									src="/images/Img-Image4.png"
									className="w-full bg-i04"></img>

								<div className="flex gap-4 items-center justify-between p-7">
									<div className="flex items-center justify-center bg-i03 w-12 h-12 rounded-full">
										<svg width="24" height="24" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
											<path d="M14.6611 2.76867C15.5783 2.87511 16.25 3.66583 16.25 4.58916V17.5L10 14.375L3.75 17.5V4.58916C3.75 3.66583 4.42173 2.87511 5.3389 2.76867C6.86797 2.59122 8.42333 2.5 10 2.5C11.5767 2.5 13.132 2.59122 14.6611 2.76867Z" stroke="#FEFEFE" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
										</svg>
									</div>
									<div className="flex gap-2 bg-i03 py-3 px-8 rounded-iform">
										<svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
											<path fill-rule="evenodd" clip-rule="evenodd" d="M5.47812 5.55887C5.67178 4.92948 6.25329 4.5 6.91179 4.5H9C9.41421 4.5 9.75 4.16421 9.75 3.75C9.75 3.33579 9.41421 3 9 3H6.91179C5.59478 3 4.43177 3.85897 4.04446 5.11774L1.63266 12.9561C1.54472 13.2419 1.5 13.5393 1.5 13.8383V18C1.5 19.6569 2.84315 21 4.5 21H19.5C21.1569 21 22.5 19.6569 22.5 18V13.8383C22.5 13.5393 22.4553 13.2419 22.3673 12.9561L19.9555 5.11774C19.5682 3.85897 18.4052 3 17.0882 3H15C14.5858 3 14.25 3.33579 14.25 3.75C14.25 4.16421 14.5858 4.5 15 4.5H17.0882C17.7467 4.5 18.3282 4.92948 18.5219 5.55887L20.7345 12.75H17.8906C16.7543 12.75 15.7155 13.392 15.2073 14.4084L14.9511 14.9208C14.697 15.429 14.1776 15.75 13.6094 15.75H10.3906C9.82242 15.75 9.30302 15.429 9.04894 14.9208L8.79271 14.4084C8.28453 13.392 7.24574 12.75 6.10942 12.75H3.26547L5.47812 5.55887Z" fill="#FEFEFE"/>
											<path fill-rule="evenodd" clip-rule="evenodd" d="M12 2.25C12.4142 2.25 12.75 2.58579 12.75 3V9.43934L14.4697 7.71967C14.7626 7.42678 15.2374 7.42678 15.5303 7.71967C15.8232 8.01256 15.8232 8.48744 15.5303 8.78033L12.5303 11.7803C12.2374 12.0732 11.7626 12.0732 11.4697 11.7803L8.46967 8.78033C8.17678 8.48744 8.17678 8.01256 8.46967 7.71967C8.76256 7.42678 9.23744 7.42678 9.53033 7.71967L11.25 9.43934V3C11.25 2.58579 11.5858 2.25 12 2.25Z" fill="#FEFEFE"/>
										</svg>
										Download
									</div>
								</div>
								<div className="px-7 py-3">
									<div className="w-full bg-i03 h-1 rounded-lg"></div>
								</div>
							</div>
							<div className="mb-6">
								<div className="flex gap-4 items-center p-7">
									<img
										src="/images/Img-Profile.png"
										className="rounded-full w-12 h-12">
									</img>
									<p>Khananta</p>
								</div>

								<img
									src="/images/Img-Image5.png"
									className="w-full bg-i04"></img>

								<div className="flex gap-4 items-center justify-between p-7">
									<div className="flex items-center justify-center bg-i03 w-12 h-12 rounded-full">
										<svg width="24" height="24" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
											<path d="M14.6611 2.76867C15.5783 2.87511 16.25 3.66583 16.25 4.58916V17.5L10 14.375L3.75 17.5V4.58916C3.75 3.66583 4.42173 2.87511 5.3389 2.76867C6.86797 2.59122 8.42333 2.5 10 2.5C11.5767 2.5 13.132 2.59122 14.6611 2.76867Z" stroke="#FEFEFE" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
										</svg>
									</div>
									<div className="flex gap-2 bg-i03 py-3 px-8 rounded-iform">
										<svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
											<path fill-rule="evenodd" clip-rule="evenodd" d="M5.47812 5.55887C5.67178 4.92948 6.25329 4.5 6.91179 4.5H9C9.41421 4.5 9.75 4.16421 9.75 3.75C9.75 3.33579 9.41421 3 9 3H6.91179C5.59478 3 4.43177 3.85897 4.04446 5.11774L1.63266 12.9561C1.54472 13.2419 1.5 13.5393 1.5 13.8383V18C1.5 19.6569 2.84315 21 4.5 21H19.5C21.1569 21 22.5 19.6569 22.5 18V13.8383C22.5 13.5393 22.4553 13.2419 22.3673 12.9561L19.9555 5.11774C19.5682 3.85897 18.4052 3 17.0882 3H15C14.5858 3 14.25 3.33579 14.25 3.75C14.25 4.16421 14.5858 4.5 15 4.5H17.0882C17.7467 4.5 18.3282 4.92948 18.5219 5.55887L20.7345 12.75H17.8906C16.7543 12.75 15.7155 13.392 15.2073 14.4084L14.9511 14.9208C14.697 15.429 14.1776 15.75 13.6094 15.75H10.3906C9.82242 15.75 9.30302 15.429 9.04894 14.9208L8.79271 14.4084C8.28453 13.392 7.24574 12.75 6.10942 12.75H3.26547L5.47812 5.55887Z" fill="#FEFEFE"/>
											<path fill-rule="evenodd" clip-rule="evenodd" d="M12 2.25C12.4142 2.25 12.75 2.58579 12.75 3V9.43934L14.4697 7.71967C14.7626 7.42678 15.2374 7.42678 15.5303 7.71967C15.8232 8.01256 15.8232 8.48744 15.5303 8.78033L12.5303 11.7803C12.2374 12.0732 11.7626 12.0732 11.4697 11.7803L8.46967 8.78033C8.17678 8.48744 8.17678 8.01256 8.46967 7.71967C8.76256 7.42678 9.23744 7.42678 9.53033 7.71967L11.25 9.43934V3C11.25 2.58579 11.5858 2.25 12 2.25Z" fill="#FEFEFE"/>
										</svg>
										Download
									</div>
								</div>
								<div className="px-7 py-3">
									<div className="w-full bg-i03 h-1 rounded-lg"></div>
								</div>
							</div>
							<div className="mb-6">
								<div className="flex gap-4 items-center p-7">
									<img
										src="/images/Img-Profile.png"
										className="rounded-full w-12 h-12">
									</img>
									<p>Khananta</p>
								</div>

								<img
									src="/images/Img-Image6.png"
									className="w-full bg-i04"></img>

								<div className="flex gap-4 items-center justify-between p-7">
									<div className="flex items-center justify-center bg-i03 w-12 h-12 rounded-full">
										<svg width="24" height="24" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
											<path d="M14.6611 2.76867C15.5783 2.87511 16.25 3.66583 16.25 4.58916V17.5L10 14.375L3.75 17.5V4.58916C3.75 3.66583 4.42173 2.87511 5.3389 2.76867C6.86797 2.59122 8.42333 2.5 10 2.5C11.5767 2.5 13.132 2.59122 14.6611 2.76867Z" stroke="#FEFEFE" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
										</svg>
									</div>
									<div className="flex gap-2 bg-i03 py-3 px-8 rounded-iform">
										<svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
											<path fill-rule="evenodd" clip-rule="evenodd" d="M5.47812 5.55887C5.67178 4.92948 6.25329 4.5 6.91179 4.5H9C9.41421 4.5 9.75 4.16421 9.75 3.75C9.75 3.33579 9.41421 3 9 3H6.91179C5.59478 3 4.43177 3.85897 4.04446 5.11774L1.63266 12.9561C1.54472 13.2419 1.5 13.5393 1.5 13.8383V18C1.5 19.6569 2.84315 21 4.5 21H19.5C21.1569 21 22.5 19.6569 22.5 18V13.8383C22.5 13.5393 22.4553 13.2419 22.3673 12.9561L19.9555 5.11774C19.5682 3.85897 18.4052 3 17.0882 3H15C14.5858 3 14.25 3.33579 14.25 3.75C14.25 4.16421 14.5858 4.5 15 4.5H17.0882C17.7467 4.5 18.3282 4.92948 18.5219 5.55887L20.7345 12.75H17.8906C16.7543 12.75 15.7155 13.392 15.2073 14.4084L14.9511 14.9208C14.697 15.429 14.1776 15.75 13.6094 15.75H10.3906C9.82242 15.75 9.30302 15.429 9.04894 14.9208L8.79271 14.4084C8.28453 13.392 7.24574 12.75 6.10942 12.75H3.26547L5.47812 5.55887Z" fill="#FEFEFE"/>
											<path fill-rule="evenodd" clip-rule="evenodd" d="M12 2.25C12.4142 2.25 12.75 2.58579 12.75 3V9.43934L14.4697 7.71967C14.7626 7.42678 15.2374 7.42678 15.5303 7.71967C15.8232 8.01256 15.8232 8.48744 15.5303 8.78033L12.5303 11.7803C12.2374 12.0732 11.7626 12.0732 11.4697 11.7803L8.46967 8.78033C8.17678 8.48744 8.17678 8.01256 8.46967 7.71967C8.76256 7.42678 9.23744 7.42678 9.53033 7.71967L11.25 9.43934V3C11.25 2.58579 11.5858 2.25 12 2.25Z" fill="#FEFEFE"/>
										</svg>
										Download
									</div>
								</div>
								<div className="px-7 py-3">
									<div className="w-full bg-i03 h-1 rounded-lg"></div>
								</div>
							</div>
							<div className="mb-6">
								<div className="flex gap-4 items-center p-7">
									<img
										src="/images/Img-Profile.png"
										className="rounded-full w-12 h-12">
									</img>
									<p>Khananta</p>
								</div>

								<img
									src="/images/Img-Image7.png"
									className="w-full bg-i04"></img>

								<div className="flex gap-4 items-center justify-between p-7">
									<div className="flex items-center justify-center bg-i03 w-12 h-12 rounded-full">
										<svg width="24" height="24" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
											<path d="M14.6611 2.76867C15.5783 2.87511 16.25 3.66583 16.25 4.58916V17.5L10 14.375L3.75 17.5V4.58916C3.75 3.66583 4.42173 2.87511 5.3389 2.76867C6.86797 2.59122 8.42333 2.5 10 2.5C11.5767 2.5 13.132 2.59122 14.6611 2.76867Z" stroke="#FEFEFE" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
										</svg>
									</div>
									<div className="flex gap-2 bg-i03 py-3 px-8 rounded-iform">
										<svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
											<path fill-rule="evenodd" clip-rule="evenodd" d="M5.47812 5.55887C5.67178 4.92948 6.25329 4.5 6.91179 4.5H9C9.41421 4.5 9.75 4.16421 9.75 3.75C9.75 3.33579 9.41421 3 9 3H6.91179C5.59478 3 4.43177 3.85897 4.04446 5.11774L1.63266 12.9561C1.54472 13.2419 1.5 13.5393 1.5 13.8383V18C1.5 19.6569 2.84315 21 4.5 21H19.5C21.1569 21 22.5 19.6569 22.5 18V13.8383C22.5 13.5393 22.4553 13.2419 22.3673 12.9561L19.9555 5.11774C19.5682 3.85897 18.4052 3 17.0882 3H15C14.5858 3 14.25 3.33579 14.25 3.75C14.25 4.16421 14.5858 4.5 15 4.5H17.0882C17.7467 4.5 18.3282 4.92948 18.5219 5.55887L20.7345 12.75H17.8906C16.7543 12.75 15.7155 13.392 15.2073 14.4084L14.9511 14.9208C14.697 15.429 14.1776 15.75 13.6094 15.75H10.3906C9.82242 15.75 9.30302 15.429 9.04894 14.9208L8.79271 14.4084C8.28453 13.392 7.24574 12.75 6.10942 12.75H3.26547L5.47812 5.55887Z" fill="#FEFEFE"/>
											<path fill-rule="evenodd" clip-rule="evenodd" d="M12 2.25C12.4142 2.25 12.75 2.58579 12.75 3V9.43934L14.4697 7.71967C14.7626 7.42678 15.2374 7.42678 15.5303 7.71967C15.8232 8.01256 15.8232 8.48744 15.5303 8.78033L12.5303 11.7803C12.2374 12.0732 11.7626 12.0732 11.4697 11.7803L8.46967 8.78033C8.17678 8.48744 8.17678 8.01256 8.46967 7.71967C8.76256 7.42678 9.23744 7.42678 9.53033 7.71967L11.25 9.43934V3C11.25 2.58579 11.5858 2.25 12 2.25Z" fill="#FEFEFE"/>
										</svg>
										Download
									</div>
								</div>
								<div className="px-7 py-3">
									<div className="w-full bg-i03 h-1 rounded-lg"></div>
								</div>
							</div>
							<div className="mb-6">
								<div className="flex gap-4 items-center p-7">
									<img
										src="/images/Img-Profile.png"
										className="rounded-full w-12 h-12">
									</img>
									<p>Khananta</p>
								</div>

								<img
									src="/images/Img-Image8.png"
									className="w-full bg-i04"></img>

								<div className="flex gap-4 items-center justify-between p-7">
									<div className="flex items-center justify-center bg-i03 w-12 h-12 rounded-full">
										<svg width="24" height="24" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
											<path d="M14.6611 2.76867C15.5783 2.87511 16.25 3.66583 16.25 4.58916V17.5L10 14.375L3.75 17.5V4.58916C3.75 3.66583 4.42173 2.87511 5.3389 2.76867C6.86797 2.59122 8.42333 2.5 10 2.5C11.5767 2.5 13.132 2.59122 14.6611 2.76867Z" stroke="#FEFEFE" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
										</svg>
									</div>
									<div className="flex gap-2 bg-i03 py-3 px-8 rounded-iform">
										<svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
											<path fill-rule="evenodd" clip-rule="evenodd" d="M5.47812 5.55887C5.67178 4.92948 6.25329 4.5 6.91179 4.5H9C9.41421 4.5 9.75 4.16421 9.75 3.75C9.75 3.33579 9.41421 3 9 3H6.91179C5.59478 3 4.43177 3.85897 4.04446 5.11774L1.63266 12.9561C1.54472 13.2419 1.5 13.5393 1.5 13.8383V18C1.5 19.6569 2.84315 21 4.5 21H19.5C21.1569 21 22.5 19.6569 22.5 18V13.8383C22.5 13.5393 22.4553 13.2419 22.3673 12.9561L19.9555 5.11774C19.5682 3.85897 18.4052 3 17.0882 3H15C14.5858 3 14.25 3.33579 14.25 3.75C14.25 4.16421 14.5858 4.5 15 4.5H17.0882C17.7467 4.5 18.3282 4.92948 18.5219 5.55887L20.7345 12.75H17.8906C16.7543 12.75 15.7155 13.392 15.2073 14.4084L14.9511 14.9208C14.697 15.429 14.1776 15.75 13.6094 15.75H10.3906C9.82242 15.75 9.30302 15.429 9.04894 14.9208L8.79271 14.4084C8.28453 13.392 7.24574 12.75 6.10942 12.75H3.26547L5.47812 5.55887Z" fill="#FEFEFE"/>
											<path fill-rule="evenodd" clip-rule="evenodd" d="M12 2.25C12.4142 2.25 12.75 2.58579 12.75 3V9.43934L14.4697 7.71967C14.7626 7.42678 15.2374 7.42678 15.5303 7.71967C15.8232 8.01256 15.8232 8.48744 15.5303 8.78033L12.5303 11.7803C12.2374 12.0732 11.7626 12.0732 11.4697 11.7803L8.46967 8.78033C8.17678 8.48744 8.17678 8.01256 8.46967 7.71967C8.76256 7.42678 9.23744 7.42678 9.53033 7.71967L11.25 9.43934V3C11.25 2.58579 11.5858 2.25 12 2.25Z" fill="#FEFEFE"/>
										</svg>
										Download
									</div>
								</div>
								<div className="px-7 py-3">
									<div className="w-full bg-i03 h-1 rounded-lg"></div>
								</div>
							</div>
							<div className="mb-6">
								<div className="flex gap-4 items-center p-7">
									<img
										src="/images/Img-Profile.png"
										className="rounded-full w-12 h-12">
									</img>
									<p>Khananta</p>
								</div>

								<img
									src="/images/Img-Image9.png"
									className="w-full bg-i04"></img>

								<div className="flex gap-4 items-center justify-between p-7">
									<div className="flex items-center justify-center bg-i03 w-12 h-12 rounded-full">
										<svg width="24" height="24" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
											<path d="M14.6611 2.76867C15.5783 2.87511 16.25 3.66583 16.25 4.58916V17.5L10 14.375L3.75 17.5V4.58916C3.75 3.66583 4.42173 2.87511 5.3389 2.76867C6.86797 2.59122 8.42333 2.5 10 2.5C11.5767 2.5 13.132 2.59122 14.6611 2.76867Z" stroke="#FEFEFE" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
										</svg>
									</div>
									<div className="flex gap-2 bg-i03 py-3 px-8 rounded-iform">
										<svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
											<path fill-rule="evenodd" clip-rule="evenodd" d="M5.47812 5.55887C5.67178 4.92948 6.25329 4.5 6.91179 4.5H9C9.41421 4.5 9.75 4.16421 9.75 3.75C9.75 3.33579 9.41421 3 9 3H6.91179C5.59478 3 4.43177 3.85897 4.04446 5.11774L1.63266 12.9561C1.54472 13.2419 1.5 13.5393 1.5 13.8383V18C1.5 19.6569 2.84315 21 4.5 21H19.5C21.1569 21 22.5 19.6569 22.5 18V13.8383C22.5 13.5393 22.4553 13.2419 22.3673 12.9561L19.9555 5.11774C19.5682 3.85897 18.4052 3 17.0882 3H15C14.5858 3 14.25 3.33579 14.25 3.75C14.25 4.16421 14.5858 4.5 15 4.5H17.0882C17.7467 4.5 18.3282 4.92948 18.5219 5.55887L20.7345 12.75H17.8906C16.7543 12.75 15.7155 13.392 15.2073 14.4084L14.9511 14.9208C14.697 15.429 14.1776 15.75 13.6094 15.75H10.3906C9.82242 15.75 9.30302 15.429 9.04894 14.9208L8.79271 14.4084C8.28453 13.392 7.24574 12.75 6.10942 12.75H3.26547L5.47812 5.55887Z" fill="#FEFEFE"/>
											<path fill-rule="evenodd" clip-rule="evenodd" d="M12 2.25C12.4142 2.25 12.75 2.58579 12.75 3V9.43934L14.4697 7.71967C14.7626 7.42678 15.2374 7.42678 15.5303 7.71967C15.8232 8.01256 15.8232 8.48744 15.5303 8.78033L12.5303 11.7803C12.2374 12.0732 11.7626 12.0732 11.4697 11.7803L8.46967 8.78033C8.17678 8.48744 8.17678 8.01256 8.46967 7.71967C8.76256 7.42678 9.23744 7.42678 9.53033 7.71967L11.25 9.43934V3C11.25 2.58579 11.5858 2.25 12 2.25Z" fill="#FEFEFE"/>
										</svg>
										Download
									</div>
								</div>
								<div className="px-7 py-3">
									<div className="w-full bg-i03 h-1 rounded-lg"></div>
								</div>
							</div>
							<div className="mb-6">
								<div className="flex gap-4 items-center p-7">
									<img
										src="/images/Img-Profile.png"
										className="rounded-full w-12 h-12">
									</img>
									<p>Khananta</p>
								</div>

								<img
									src="/images/Img-Image10.png"
									className="w-full bg-i04"></img>

								<div className="flex gap-4 items-center justify-between p-7">
									<div className="flex items-center justify-center bg-i03 w-12 h-12 rounded-full">
										<svg width="24" height="24" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
											<path d="M14.6611 2.76867C15.5783 2.87511 16.25 3.66583 16.25 4.58916V17.5L10 14.375L3.75 17.5V4.58916C3.75 3.66583 4.42173 2.87511 5.3389 2.76867C6.86797 2.59122 8.42333 2.5 10 2.5C11.5767 2.5 13.132 2.59122 14.6611 2.76867Z" stroke="#FEFEFE" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
										</svg>
									</div>
									<div className="flex gap-2 bg-i03 py-3 px-8 rounded-iform">
										<svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
											<path fill-rule="evenodd" clip-rule="evenodd" d="M5.47812 5.55887C5.67178 4.92948 6.25329 4.5 6.91179 4.5H9C9.41421 4.5 9.75 4.16421 9.75 3.75C9.75 3.33579 9.41421 3 9 3H6.91179C5.59478 3 4.43177 3.85897 4.04446 5.11774L1.63266 12.9561C1.54472 13.2419 1.5 13.5393 1.5 13.8383V18C1.5 19.6569 2.84315 21 4.5 21H19.5C21.1569 21 22.5 19.6569 22.5 18V13.8383C22.5 13.5393 22.4553 13.2419 22.3673 12.9561L19.9555 5.11774C19.5682 3.85897 18.4052 3 17.0882 3H15C14.5858 3 14.25 3.33579 14.25 3.75C14.25 4.16421 14.5858 4.5 15 4.5H17.0882C17.7467 4.5 18.3282 4.92948 18.5219 5.55887L20.7345 12.75H17.8906C16.7543 12.75 15.7155 13.392 15.2073 14.4084L14.9511 14.9208C14.697 15.429 14.1776 15.75 13.6094 15.75H10.3906C9.82242 15.75 9.30302 15.429 9.04894 14.9208L8.79271 14.4084C8.28453 13.392 7.24574 12.75 6.10942 12.75H3.26547L5.47812 5.55887Z" fill="#FEFEFE"/>
											<path fill-rule="evenodd" clip-rule="evenodd" d="M12 2.25C12.4142 2.25 12.75 2.58579 12.75 3V9.43934L14.4697 7.71967C14.7626 7.42678 15.2374 7.42678 15.5303 7.71967C15.8232 8.01256 15.8232 8.48744 15.5303 8.78033L12.5303 11.7803C12.2374 12.0732 11.7626 12.0732 11.4697 11.7803L8.46967 8.78033C8.17678 8.48744 8.17678 8.01256 8.46967 7.71967C8.76256 7.42678 9.23744 7.42678 9.53033 7.71967L11.25 9.43934V3C11.25 2.58579 11.5858 2.25 12 2.25Z" fill="#FEFEFE"/>
										</svg>
										Download
									</div>
								</div>
								<div className="px-7 py-3">
									<div className="w-full bg-i03 h-1 rounded-lg"></div>
								</div>
							</div>
						</div>

						
					</div>
				</div>
				<div className="drawer-side">
					<div className="bg-i02 min-h-screen w-1/2 z-10 px-7">
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
						<div className="grid grid-cols-1 gap-3 pt-3">
							<a href="#" onClick={() => handleActive(1)}>
								<div
									aria-selected={active === 1}
									className="rounded-lg text-i04 text-sm py-2.5 px-0 aria-selected:flex pl-4 aria-selected:bg-gradient-to-r aria-selected:from-iorange aria-selected:to-ipink"
								>
									Home
								</div>
							</a>
                            <div className='text-sm mt-6 text-i04'>Assets</div>
                            <div>
                                <a href="#photos" onClick={() => handleActive(2)}>
								<div
									aria-selected={active === 2}
									className="rounded-lg text-i04 text-sm py-2.5 px-0 aria-selected:flex pl-4 aria-selected:bg-gradient-to-r aria-selected:from-iorange aria-selected:to-ipink"
								>
									Photos
								</div>
                                </a>
                                <a href="#color-palette" onClick={() => handleActive(3)}>
                                    <div
                                        aria-selected={active === 3}
                                        className="rounded-lg text-i04 text-sm py-2.5 px-0 aria-selected:flex pl-4 aria-selected:bg-gradient-to-r aria-selected:from-iorange aria-selected:to-ipink"
                                    >
                                        Color Palettes
                                    </div>
                                </a>
                                <a href="#fonts" onClick={() => handleActive(4)}>
                                    <div
                                        aria-selected={active === 4}
                                        className="rounded-lg text-i04 text-sm py-2.5 px-0 aria-selected:flex pl-4 aria-selected:bg-gradient-to-r aria-selected:from-iorange aria-selected:to-ipink"
                                    >
                                        Fonts
                                    </div>
                                </a>
                                <a href="#vectors" onClick={() => handleActive(5)}>
                                    <div
                                        aria-selected={active === 5}
                                        className="rounded-lg text-i04 text-sm py-2.5 px-0 aria-selected:flex pl-4 aria-selected:bg-gradient-to-r aria-selected:from-iorange aria-selected:to-ipink"
                                    >
                                        Vectors
                                    </div>
                                </a>
                                <a href="#mockups" onClick={() => handleActive(6)}>
                                    <div
                                        aria-selected={active === 6}
                                        className="rounded-lg text-i04 text-sm py-2.5 px-0 aria-selected:flex pl-4 aria-selected:bg-gradient-to-r aria-selected:from-iorange aria-selected:to-ipink"
                                    >
                                        Mockups
                                    </div>
                                </a>
                                <Link href="#icons" onClick={() => handleActive(7)}>
                                    <div
                                        aria-selected={active === 7}
                                        className={`rounded-lg text-sm py-2.5 px-0 aria-selected:flex pl-4 aria-selected:bg-gradient-to-r aria-selected:from-iorange aria-selected:to-ipink 
                                        ${active === '/dashboard#icons' ? "text-white" : "text-i04 "}`}
                                    >
                                        Icons
                                    </div>
                                </Link>
                            </div>
							
						</div>
					</div>
				</div>
			</div>
		</main>
	);
}
