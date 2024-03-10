import Link from "next/link";
import { useState } from "react";

export default function TopNavigation() {
	const [isDrawerOpen, setIsDrawerOpen] = useState(false);
	const toggleDrawer = () => setIsDrawerOpen(!isDrawerOpen);

    const session = ""

    return (
        <div
            id="navbar"
            className="sticky top-0 bg-i02 py-6 px-7 z-50 lg:px-10"
        >
            <div className="flex justify-between items-center">
                <label
                    htmlFor="my-drawer"
                    onClick={toggleDrawer}
                    className="btn btn-square drawer-button border-0 bg-i03 h-10 lg:hidden"
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
                <div className="ml-14 lg:hidden">
                    <img
                        className="h-8 lg:hidden"
                        src="/images/Logo-Nav-Mobile.png"
                        alt="Idealibs Logo"
                    />
                </div>
                <div className="hidden lg:block lg:w-full lg:mr-48">
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
                {session ? (
                    <p>{session?.email}</p>
                ) : (
                    <div className="flex">
                        <Link
                            href="/login"
                            type="button"
                            className="hidden btn btn-outline rounded-full border-2 font-medium border-white text-white px-7 mr-3 hover:border-white hover:bg-white hover:text-i02 lg:flex"
                        >
                            Login
                        </Link>
                        <Link
                            href="/register"
                            type="button"
                            className="btn btn-neutral rounded-full border-0 font-medium text-white bg-gradient-to-r from-iorange to-ipink hover:bg-transparent px-7"
                        >
                            Register
                        </Link>
                    </div>
                )}
                
            </div>
        </div>
    )
}