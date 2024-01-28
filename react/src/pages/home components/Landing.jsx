import React, { useEffect } from "react";
import Button from "../../components/Button.jsx";
import { Link } from "react-router-dom";
import IMAGES from "../../images/constants";
import AOS from "aos";
import "aos/dist/aos.css";

const Landing = () => {
    useEffect(() => {
        AOS.init();
        AOS.refresh();
    }, []);
    return (
        <div className="dark:bg-slate-900 flex max-lg:flex-wrap justify-around items-center max-w-5xl rounded-md shadow-md bg-white my-4 mx-12 py-4 px-12 max-md:px-4 max-md:mx-4 ">
            <div
                data-aos="fade-down"
                className="px-6 mx-6 max-md:mx-1 max-md:px-1"
            >
                <h1 className="text-4xl font-bold py-4 max-md:text-3xl ">
                    Welcome to my fullstack application
                </h1>
                <p className="my-2">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    At, voluptates laborum deserunt fugit inventore illo tempora
                    nulla suscipit debitis non perferendis accusamus facere
                    corrupti dignissimos cumque enim cupiditate et. Voluptatem.
                </p>
                <div className="flex gap-4  ">
                    <Link to={"/create"}>
                        <Button name={"Create now"} />
                    </Link>
                    <Link to={"/viewAll"}>
                        <Button name={"View list"} />
                    </Link>
                </div>
            </div>
            <div data-aos="fade-up" className="">
                <img
                    className="h-96 max-w-4xl max-md:h-60"
                    src={IMAGES.heropic}
                    alt=""
                />
            </div>
        </div>
    );
};

export default Landing;
