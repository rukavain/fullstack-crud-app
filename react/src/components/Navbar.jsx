import React from "react";
import Create from "../pages/Create";
import View from "../pages/View";
import Home from "../pages/Home";
import axios from "axios";
import { Link } from "react-router-dom";

// ADD ACTUAL LINKS TO NAV ITEMS

const Navbar = () => {
    const navItems = [
        { label: "Breads", href: "/viewAll" },
        { label: "Create", href: "/create" },
        { label: "Services", href: "/" },
        { label: "Contact", href: "/" },
        { label: "Lmao", href: "/" },
    ];

    return (
        <>
            <nav className=" flex justify-between items-center w-screen max-w-screen-2xl px-4 py-4">
                <div>
                    <h1 className="font-bold text-4xl">LOGO</h1>
                </div>
                <div>
                    <ul className="flex gap-4 justify-center items-center">
                        {navItems.map((item, index) => (
                            <li href={item.href} key={index}>
                                <h1 className="text-slate hover:font-bold hover:text-italic cursor-pointer transition-all">
                                    {item.label}
                                </h1>
                            </li>
                        ))}
                    </ul>
                </div>
            </nav>
        </>
    );
};

export default Navbar;
