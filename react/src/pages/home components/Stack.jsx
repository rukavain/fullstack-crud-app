import React, { useEffect } from "react";
import Css from "./icons/Css.jsx";
import Html from "./icons/Html.jsx";
import Javascript from "./icons/Javascript.jsx";
import Laravel from "./icons/Laravel.jsx";
import Php from "./icons/Php.jsx";
import ReactIcon from "./icons/ReactIcon.jsx";
import Tailwind from "./icons/Tailwind.jsx";
import AOS from "aos";
import "aos/dist/aos.css";

const Stack = () => {
    useEffect(() => {
        AOS.init();
        AOS.refresh();
    }, []);

    return (
        <>
            <section className="flex gap-8 flex-col justify-center items-center max-w-5xl p-12 my-8 mx-12 bg-white rounded-md shadow-md">
                <div
                    data-aos="fade-right"
                    className=" max-w-7xl flex flex-col gap-4"
                >
                    <h1 className="max-md:text-4xl text-center text-5xl font-bold">
                        Technology Stack Used
                    </h1>
                </div>
                <p
                    data-aos="fade-right"
                    className="max-w-xl text-sm text-center"
                >
                    The following technology stack are used because of the
                    convenience they provide in the development.
                </p>
                <div className="flex flex-wrap gap-12 max-w-xl justify-center items-center">
                    <div className="flex flex-col justify-center items-center gap-4">
                        <h1 className="text-2xl font-bold">Front-end</h1>{" "}
                        <div className="flex flex-wrap justify-center items-center gap-4">
                            <span className="hover:opacity-80 transition cursor-pointer">
                                {" "}
                                <Html />
                            </span>
                            <span
                                className={`hover:opacity-80 transition cursor-pointer text-center`}
                            >
                                {" "}
                                <Css />
                            </span>

                            <span className="hover:opacity-80 transition cursor-pointer">
                                {" "}
                                <Javascript />
                            </span>
                            <span className="hover:opacity-80 transition cursor-pointer">
                                {" "}
                                <ReactIcon />
                            </span>
                            <span className="hover:opacity-80 transition cursor-pointer">
                                {" "}
                                <Tailwind />
                            </span>
                        </div>
                    </div>
                    <div className="flex flex-col justify-center items-center gap-4">
                        <h1 className="text-2xl font-bold">Back-end</h1>
                        <span className="flex gap-4">
                            <span className="hover:opacity-80 transition cursor-pointer">
                                {" "}
                                <Laravel />
                            </span>
                            <span className="hover:opacity-80 transition cursor-pointer">
                                {" "}
                                <Php />
                            </span>
                        </span>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Stack;
