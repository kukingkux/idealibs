"use client";

import { SideNavigation, SideNavigationMobile } from "@/components/sidebar";
import TopNavigation from "@/components/topbar";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { ChromePicker } from 'react-color';

export default function UploadPhotoPage() {

    const [colors, setColors] = useState([
        '#FFFFFF',
        '#FFFFFF',
        '#FFFFFF',
        '#FFFFFF',
    ])

	const [data, setData] = useState([]);
	const [isLoading, setLoading] = useState(true);

    const filePickerRef = useRef(null);
    const router = useRouter()

    const [isOpen, setIsOpen] = useState([false, false, false, false])

    const handleToggleOpen = (index) => {
        setIsOpen((prevIsOpen) => {
            const updatedOpenState = [...prevIsOpen]
            updatedOpenState[index] = !updatedOpenState[index]
            return updatedOpenState
        })
    }

    const handleColorChange = (index, newColor) => {
        setColors((prevColors) => {
            const updatedColors = [...prevColors];
            updatedColors[index] = newColor.hex;

            return updatedColors
        })
    }
    const handleColorInputChange = (index, e) => {
        const newColor = e.target.value
        setColors((prevColors) => {
            const updatedColors = [...prevColors];
            updatedColors[index] = newColor;

            return updatedColors
        })
    }

    const handleSubmit = async (e) => {

        // const res = axiosInstance.post("/files/photos",
        //     {
        //         title: title,
        //         description: description,
        //         thumbnailpath: preview
        //     }
        // )

        // if (res.status == 200) {
        //     router.push('/photos')
        // }
        
    }

    useEffect(() => {
		const fetchData = async () => {
			try {
				setLoading(false);
			} catch (err) {
				console.error("Error fetching data:", err);
			}
		};
		fetchData();
	});


	// useEffect(() => {
	// 	if (data.length) {
	// 		console.log(data);
	// 	}
	// }, [data]);

	return (
        <main className="flex min-h-screen flex-col bg-i01">
			<div className="drawer" id="sidebar">
				<input id="my-drawer" type="checkbox" className="drawer-toggle" />
				<div className="drawer-content flex flex-col items-center justify-center">
					<div id="content" className="flex container max-w-full">
						<SideNavigation />
						<div id="right-content" className="min-h-screen w-full">
							<TopNavigation />
							{isLoading ? (
								<div className="flex justify-center items-center h-screen">
									<span className="loading loading-infinity loading-lg"></span>
								</div>
							) : (
								<div id="mainmenu" className="p-7 flex flex-col">
                                <div className="flex gap-8 items-center">
                                    <button
                                        className="bg-i02 p-3 rounded-full"
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
                                    <div className="flex gap-4 items-center">
                                        <p>Upload a color</p>
                                    </div>
                                </div>

                                <form action={handleSubmit}>
                                    <div className="flex flex-col gap-6 md:gap-16">
                                        <div className="flex flex-col gap-6 mt-8">
                                            <div className="flex flex-col md:flex-row gap-6 w-full">
                                                    {colors.map((color, index) => (
                                                        <div key={index} className="w-full">
                                                            <p className="mb-2">Color {index + 1}</p>
                                                            <div className="flex items-center justify-between gap-6 w-full bg-i02 focus:outline-none rounded-lg border border-i04 p-6 md:p-5">
                                                                <button
                                                                    onClick={() => handleToggleOpen(index)}
                                                                    className="w-2/3 md:w-7/12 h-12 rounded-sm"
                                                                    style={{backgroundColor: color}}
                                                                ></button>
                                                                <input
                                                                    type="text"
                                                                    value={color}
                                                                    onChange={(e) => handleColorInputChange(index, e)}
                                                                    className="bg-transparent w-5/12"
                                                                    required
                                                                />
                                                            </div>
                                                            {isOpen[index] && (
                                                                <>
                                                                    <ChromePicker color={color} onChange={(newColor) => handleColorChange(index, newColor)} className="absolute"/>
                                                                    <p>Selected color {index + 1}: {color}</p>
                                                                </>
                                                            )}
                                                        </div>
                                                    ))}
                                            </div>
                                            
                                            <div className="flex flex-col gap-6 w-full">
                                                    <p className="mb-2">Tag</p>
                                                    <select className="w-full bg-i03 focus:outline-none rounded-lg border border-i03 p-4">
                                                        <option selected>
                                                            Tags
                                                        </option>
                                                        <option>
                                                            Tags
                                                        </option>
                                                        <option>
                                                            Tags
                                                        </option>
                                                    </select>
                                            </div>
                                            
                                        </div>
                                        <div className="flex w-full gap-4 justify-end">
                                            <Link
                                                href="/photos"
                                                type="button"
                                                className="grow md:grow-0 flex items-center justify-center bg-i03 rounded-full font-medium border-white text-white mr-3 hover:border-white hover:bg-white hover:text-i02 md:flex p-6 md:px-12 md:py-4"
                                            >
                                                Cancel
                                            </Link>
                                            <button
                                                type="submit"
                                                className="grow md:grow-0 flex items-center justify-center rounded-full border-0 font-medium text-white bg-gradient-to-r from-iorange to-ipink hover:bg-transparent p-6 md:px-12 md:py-4"
                                            >
                                                Upload
                                            </button>
                                        </div>
                                    </div>
                                </form>
                            </div>
							)}
						</div>
					</div>
				</div>
				<div className="drawer-side">
					<div className="bg-i02 min-h-screen w-full md:w-1/2 z-10 px-7">
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
						<SideNavigationMobile />
					</div>
				</div>
			</div>
		</main>
	);
}
