"use client";

import { useState } from "react";

export default function Login() {

    const  [username, setUsername] = useState("");

    return (
        <main className="flex min-h-screen flex-col bg-i01">
            <div className="hidden lg:inline-block lg:ml-40">
                <img
                    className="w-full"
                    src="/images/Img-Login.png"
                    alt="Img-Login"
                />
            </div>
            <div className="flex flex-col justify-center h-screen px-8 pb-8">
                
                <div className="lg:ml-40">
                    <img
                        className="h-8 w-7 aspect-square"
                        src="/images/Logo-Nav-Mobile.png"
                        alt="Idealibs Logo"
                    />
                </div>
                <div className="w-full mt-2">
                    <p className="font-bold my-2">Welcome to idealibs</p>
                    <p className="mt-2 mb-8">Explore and discover a myriad of resources at your fingertips</p>
                </div>
                <div className="mb-6">
                    <p className="mb-2">Email or Username</p>
                    <div className="flex items-center ps-6 gap-4 rounded-iform w-full h-14 bg-i03">
                        <svg width="24" height="24" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M16.2666 16.1592C15.4199 13.4817 13.1449 11.9475 10.0224 11.9475H9.99991C6.86908 11.93 4.58241 13.475 3.73408 16.1592L3.63574 16.4709L3.91408 16.6409C5.54574 17.6359 7.58074 18.14 9.96074 18.14C9.98741 18.14 10.0141 18.14 10.0399 18.14C12.4532 18.14 14.4316 17.6492 16.0866 16.6409L16.3649 16.4709L16.2666 16.1592Z" fill="#FEFEFE"/>
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M10.0003 10.0907C12.2695 10.0907 14.1162 8.24486 14.1162 5.9757C14.1162 3.7057 12.2695 1.85986 10.0003 1.85986C7.73118 1.85986 5.88535 3.7057 5.88535 5.9757C5.88535 8.24486 7.73118 10.0907 10.0003 10.0907Z" fill="#FEFEFE"/>
                        </svg>
                        <input type='text' name="name" placeholder="Enter your email/username" className="rounded-r-iform w-full h-14 bg-i03"/>
                    </div>
                    
                </div>
                <div className="mb-2">
                    <p>Password</p>
                    <div className="flex items-center ps-6 gap-4 rounded-iform w-full h-14 bg-i03">
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M13.1745 7.50198H6.82454V6.17448C6.82788 5.32948 7.16038 4.53531 7.76204 3.93948C8.36038 3.34698 9.15121 3.02114 9.99454 3.02114H10.0079C11.7545 3.02114 13.1745 4.44198 13.1745 6.18864V7.50198ZM9.25788 14.4161H10.5079V11.3153H9.25788V14.4161ZM14.4245 7.50198V6.18864C14.4245 3.75281 12.4429 1.77114 10.0104 1.77114C8.84121 1.74698 7.72038 2.22114 6.88288 3.05114C6.04371 3.88198 5.57954 4.98948 5.57454 6.18864V7.50198H3.24121V18.2295H16.7579V7.50198H14.4245Z" fill="#FEFEFE"/>
                        </svg>
                        <input type='password' name="name" placeholder="Enter your password" className="rounded-r-iform w-full h-14 bg-i03"/>
                    </div>
                </div>
                <div className="text-right mb-10">
                    <p className="bg-gradient-to-r from-iorange to-ipink text-transparent bg-clip-text font-semibold">Forgot password?</p>
                </div>
                    <div className="flex justify-center items-center rounded-iform w-full h-14 bg-gradient-to-r from-iorange to-ipink mb-4">
                        Sign in
                    </div>
                    <div className="flex justify-center items-center rounded-iform w-full h-14 bg-white mb-4 gap-4">
                    <svg width="19" height="18" viewBox="0 0 19 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M18.14 9.20443C18.14 8.56625 18.0827 7.95262 17.9764 7.36353H9.5V10.8449H14.3436C14.135 11.9699 13.5009 12.9231 12.5477 13.5613V15.8194H15.4564C17.1582 14.2526 18.14 11.9453 18.14 9.20443Z" fill="#4285F4"/>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M9.49976 18C11.9298 18 13.967 17.1941 15.4561 15.8195L12.5475 13.5613C11.7416 14.1013 10.7107 14.4204 9.49976 14.4204C7.15567 14.4204 5.17158 12.8372 4.46385 10.71H1.45703V13.0418C2.93794 15.9831 5.98158 18 9.49976 18Z" fill="#34A853"/>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M4.46409 10.7101C4.28409 10.1701 4.18182 9.59325 4.18182 9.00007C4.18182 8.40689 4.28409 7.83007 4.46409 7.29007V4.95825H1.45727C0.847727 6.17325 0.5 7.5478 0.5 9.00007C0.5 10.4523 0.847727 11.8269 1.45727 13.0419L4.46409 10.7101Z" fill="#FBBC05"/>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M9.49976 3.57955C10.8211 3.57955 12.0075 4.03364 12.9402 4.92545L15.5216 2.34409C13.9629 0.891818 11.9257 0 9.49976 0C5.98158 0 2.93794 2.01682 1.45703 4.95818L4.46385 7.29C5.17158 5.16273 7.15567 3.57955 9.49976 3.57955Z" fill="#EA4335"/>
                    </svg>
                    <p className="text-i01 font-semibold">Sign in with Google</p>
                    
                    </div>
                <div className="mt-4 text-center">
                    <p>Don't have an account? <span className="bg-gradient-to-r from-iorange to-ipink text-transparent bg-clip-text font-semibold">Sign up</span></p>
                </div>
            </div>
        </main>
    )
}