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
                <div className="">
                    <img src={personalimg}></img>
                </div>
            </div>
        </>
    )
}