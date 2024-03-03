import Link from "next/link"
import { useState } from "react"

export default function MasonryGrid({src, id}){
    const [color, setColor] = useState("none")

    const changeColor = () => {
        if (color === "none") {
            setColor("#FEFEFE")
        } else {
            setColor("none")
        }
    }

    return (
        <div
            class="overflow-hidden cursor-pointer rounded-xl relative group"
        >
            <Link
                href={{
                    pathname: `/photos/${id}`
                }}
                class="rounded-lg z-10 h-full opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out cursor-pointer absolute bg-[radial-gradient(120.40%_180.55%_at_50.76%_60.29%,rgba(255,255,255,0.00)_0%,rgba(0,0,0,1)_100%)] inset-x-0 pt-30 text-white flex items-end"
            >
                    
            </Link>
            <button onClick={changeColor} 
                class="absolute z-20 transform-gpu bottom-0 p-3 m-4 space-y-3 text-xl opacity-0 group-hover:opacity-100 transform transition duration-300 ease-in-out bg-slate-200/20 rounded-full hover:bg-i04/100"
            >

                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M14.6611 2.76867C15.5783 2.87511 16.25 3.66583 16.25 4.58916V17.5L10 14.375L3.75 17.5V4.58916C3.75 3.66583 4.42173 2.87511 5.3389 2.76867C6.86797 2.59122 8.42333 2.5 10 2.5C11.5767 2.5 13.132 2.59122 14.6611 2.76867Z" fill={color} stroke="#FEFEFE" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>

            </button>
            <img
                alt=""
                class="h-auto max-w-full rounded-lg"
                src={src}
            />
        </div>
    )

    
}