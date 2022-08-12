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
                </div>
                <div class="relative w-full max-w-lg">
                    <div class="absolute top-0 -left-10 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
                    <div class="absolute top-0 -right-10 w-72 h-72 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
                    <div class="absolute -bottom-20 left-20 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
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