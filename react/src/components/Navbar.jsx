import React, { useState } from "react";
import { Link } from "react-router-dom";
import Hamburger from "./Hamburger";

const Navbar = () => {
    const [hidden, setHidden] = useState(false);
    const handleHidden = () => {
        setHidden(!hidden);
        console.log(hidden);
    };
    const navItems = [
        { label: "Breads", href: "/viewAll" },
        { label: "Create", href: "/create" },
        { label: "Services", href: "/" },
        { label: "Contact", href: "/contact" },
        { label: "Lmao", href: "/" },
    ];

    return (
        <>
            <nav className=" flex justify-between items-center w-screen max-w-screen-2xl px-8 py-4 sticky">
                <Link to={"/"}>
                    <h1 className="font-bold text-4xl hover:text-slate-400 transition">
                        LOGO
                    </h1>
                </Link>
                <div>
                    <ul className="flex gap-4 justify-center items-center max-md:hidden">
                        {navItems.map((item) => (
                            <li key={item.label}>
                                <Link
                                    to={item.href}
                                    className="text-slate hover:font-bold hover:text-italic cursor-pointer transition-all"
                                >
                                    {item.label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                    <div className="flex flex-col justify-center items-center">
                        {" "}
                        <Hamburger onClick={handleHidden} />{" "}
                        <ul
                            className={`absolute top-16 bg-white shadow-md px-12 md:hidden lg:hidden xl:hidden w-full text-center ${
                                hidden
                                    ? "flex flex-col gap-5 text-lg font-semibold py-2"
                                    : "hidden"
                            }  z-20`}
                        >
                            {navItems.map((item) => (
                                <li key={item.label}>
                                    <Link
                                        to={item.href}
                                        className="text-slate hover:font-bold
                                    hover:text-italic cursor-pointer
                                    transition-all"
                                    >
                                        {item.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>{" "}
                    </div>
                </div>
                <div className="flex gap-2 text-sm">
                    <h1 className="cursor-pointer hover:font-bold transition-all">
                        Login
                    </h1>
                    <p> | </p>
                    <h1 className="cursor-pointer hover:font-bold transition-all">
                        Signup
                    </h1>
                </div>
            </nav>
        </>
    );
};

export default Navbar;
