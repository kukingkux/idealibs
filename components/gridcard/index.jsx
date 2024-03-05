import Link from "next/link"

export default function MasonryGrid({src, id}){

    return (
        <div
            class="overflow-hidden cursor-pointer rounded-xl relative group aspect-square"
        >
            <Link
                href={{
                    pathname: `/photos/${id}`
                }}
                class="rounded-lg z-10 h-full opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out cursor-pointer absolute bg-[radial-gradient(120.40%_180.55%_at_50.76%_60.29%,rgba(255,255,255,0.00)_0%,rgba(0,0,0,1)_100%)] inset-x-0 pt-30 text-white flex items-end"
            >
                    
            </Link>
            <img
                alt=""
                class="h-auto max-w-full rounded-lg object-cover aspect-square"
                src={src}
            />
        </div>
    )

    
}