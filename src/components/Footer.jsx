export default function Footer() {
    return (
        <div className="flex overflow-y-auto flex-col content-center justify-center text-center">
            <div className="">
                <div>
                    <ul class='marker:text-green-400 marker:text-5xl list-disc'>
                        <li className="text-lg font-bold">AVAILBALE TO CHAT OVER A CUP OF COFFEE 🥤</li>
                    </ul>
                </div>
                <div className="py-20 px-80">
                    <h1
                        className="text-7xl font-extrabold"
                    >Do you have illustration project? Let's talk.</h1>
                </div>
                <div className="">
                    <button type="button" class="text-white bg-green-500 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 focus:ring-4 focus:outline-none focus:ring-blue-300 font-bold rounded-full text-base px-8 py-7 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                        LET'S TALK NOW
                        <svg xmlns="http://www.w3.org/2000/svg" className="ml-3 h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                            <path d="M2 5a2 2 0 012-2h7a2 2 0 012 2v4a2 2 0 01-2 2H9l-3 3v-3H4a2 2 0 01-2-2V5z" />
                            <path d="M15 7v2a4 4 0 01-4 4H9.828l-1.766 1.767c.28.149.599.233.938.233h2l3 3v-3h2a2 2 0 002-2V9a2 2 0 00-2-2h-1z" />
                        </svg>
                    </button>
                </div>
                <div>
                    <h1 className="text-lg font-bold">© 2022 ALL RIGHT RESEVED</h1>
                </div>

            </div>
        </div>
    )
}