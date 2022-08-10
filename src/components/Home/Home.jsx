import React from "react";
import Navbar from "../Navbar";
import personalimg from '../../assets/img/personal.jpg'

export default function Home() {
    return (
        <>
            <Navbar></Navbar>
            <div className="flex p-40">
                <div className="">
                    <h1 className="mb-5 font-extrabold">CODER, DEVOPS ENGINEER, TRAVELER.</h1>
                    <h1
                        className="text-7xl font-extrabold"
                    >Lorem ipsum, dolor sit amet consectetur adipisicing.</h1>
                    <div className="mt-10">
                        <button type="button" class="text-white bg-purple-500 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 focus:ring-4 focus:outline-none focus:ring-blue-300 font-bold rounded-full text-base px-8 py-7 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                            EXPLORE WORKS
                            <svg aria-hidden="true" class="ml-2 -mr-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                        </button>
                    </div>
                </div>
                <div class="relative w-full max-w-lg">
                    <div class="absolute top-0 -left-10 w-72 h-72 bg-purple-400 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
                    <div class="absolute top-0 -right-10 w-72 h-72 bg-yellow-400 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
                    <div class="absolute -bottom-20 left-20 w-72 h-72 bg-pink-400 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
                    <div class="m-8 relative space-y-4 flex flex-wrap justify-center">
                        <div className="w-3/5 px-4">
                            <img class="shadow-lg rounded-3xl max-w-full h-auto align-middle border-" src={personalimg}></img>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}