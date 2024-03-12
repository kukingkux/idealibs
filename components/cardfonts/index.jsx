export default function CardFont() {

    return(
    <div
        className="flex flex-col gap-20 justify-between bg-i03 rounded-lg p-7 lg:aspect-square"
    >
        <div
            className="flex gap-4 justify-between items-center text-sm"
        >
            <p className="basis-1/4">Sans Serif</p>
            <p className="basis-1/4">16 Styles</p>
            <div className="basis-1/3 flex justify-end">
                <svg width="32" height="32" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M14.6611 2.76867C15.5783 2.87511 16.25 3.66583 16.25 4.58916V17.5L10 14.375L3.75 17.5V4.58916C3.75 3.66583 4.42173 2.87511 5.3389 2.76867C6.86797 2.59122 8.42333 2.5 10 2.5C11.5767 2.5 13.132 2.59122 14.6611 2.76867Z" stroke="#FEFEFE" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            </div>
        </div>
        <div className="text-2xl lg:text-4xl pe-8">
            <h1>Plus Jakarta Sans</h1>
        </div>
    </div>
)}