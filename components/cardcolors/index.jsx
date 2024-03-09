import Link from "next/link"

export default function CardColors({c1, c2, c3, c4, id}){

    // const data = [
    //     {
    //         id: 1,
    //         hex: "#1F2544 #474F7A #81689D #FFD0EC"
    //     },
    // ]

    
	// const split = data.filter((item) => item.id === 1 )
	

	// const datasplit = split[0].hex.split(" ")

    // return console.log(datasplit)

    return (
        <div
            className="w-full flex flex-col gap-4 mb-6"
        >
            {/* <div>
                {split.map((data, index) => {
                    return <p key={index}>{data}</p>
                })}
            </div> */}
            <div className="w-full h-48 lg:h-96">
                <div
                    className="w-full h-1/4 rounded-t-lg"
                    style={{backgroundColor: '#'+c1}}
                ></div>
                <div
                    className="w-full h-1/4"
                    style={{backgroundColor: '#'+c2}}
                ></div>
                <div
                    className="w-full h-1/4"
                    style={{backgroundColor: '#'+c3}}
                ></div>
                <div
                    className="w-full h-1/4 rounded-b-lg"
                    style={{backgroundColor: '#'+c4}}
                ></div>
                <Link
                href={{
                    pathname: `/color/${id}`
                }}
                class="rounded-lg z-10 h-full opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out cursor-pointer absolute bg-[radial-gradient(120.40%_180.55%_at_50.76%_60.29%,rgba(255,255,255,0.00)_0%,rgba(0,0,0,1)_100%)] inset-x-0 pt-30 text-white flex items-end"
                >
                        
                </Link>
            </div>
            <div
                className="border-2 border-white rounded-iform py-3 px-7 flex justify-between items-center"
            >
                <svg width="24" height="28" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M14.6611 2.76867C15.5783 2.87511 16.25 3.66583 16.25 4.58916V17.5L10 14.375L3.75 17.5V4.58916C3.75 3.66583 4.42173 2.87511 5.3389 2.76867C6.86797 2.59122 8.42333 2.5 10 2.5C11.5767 2.5 13.132 2.59122 14.6611 2.76867Z" stroke="#FEFEFE" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                <p>Save</p>
                <div className="w-1/6 lg:w-1/12"></div>
            </div>
        </div>
    )

    
}