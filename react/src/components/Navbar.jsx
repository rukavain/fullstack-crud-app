import React from "react";
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
                <Link to={"/"}>
                    <h1 className="font-bold text-4xl hover:text-slate-400 transition">
                        LOGO
                    </h1>
                </Link>
                <div>
                    <ul className="flex gap-4 justify-center items-center max-md:hidden">
                        {navItems.map((item, index) => (
                            <li key={index}>
                                <Link
                                    to={item.href}
                                    className="text-slate hover:font-bold hover:text-italic cursor-pointer transition-all"
                                >
                                    {item.label}
                                </Link>
                            </li>
                        ))}
                    </ul>
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
