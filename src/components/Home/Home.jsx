import React from "react";
import Navbar from "../Navbar";

export default function Home() {
    return (
        <>
            <Navbar></Navbar>
            <div className="grid grid-cols-2">
                <div className="px-52 py-40">
                    <h1 className="mb-5 font-extrabold">CODER, DEVOPS ENGINEER, TRAVELER.</h1>
                    <h1
                        className="text-7xl font-extrabold"
                    >Lorem ipsum, dolor sit amet consectetur adipisicing.</h1>
                </div>
                <div>

                </div>
            </div>
        </>
    )
}