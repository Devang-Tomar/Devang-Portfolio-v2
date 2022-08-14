import React from "react";
import Navbar from "../Navbar";

export default function Home() {
    return (
        <>
            <Navbar></Navbar>
            <div className="grid gap-10 grid-cols-2">
                <div>
                    <h1
                        className="flex px-40 text-7xl font-extrabold"
                    >Lorem ipsum, dolor sit amet consectetur adipisicing.</h1>
                </div>
                <div>

                </div>
            </div>
        </>
    )
}