
export default function CardColors({src, id}){

    return (
        <div
            className="w-full flex flex-col gap-4"
        >
            <div className="w-full h-48 lg:h-96">
                <div
                    className="w-full h-1/4 bg-[#1F2544] rounded-t-lg"
                ></div>
                <div
                    className="w-full h-1/4 bg-[#474F7A]"
                ></div>
                <div
                    className="w-full h-1/4 bg-[#81689D]"
                ></div>
                <div
                    className="w-full h-1/4 bg-[#FFD0EC] rounded-b-lg"
                ></div>
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