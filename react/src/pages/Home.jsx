import React from "react";
import Button from "../components/Button";
import { Link } from "react-router-dom";
import IMAGES from "../images/constants";

const Home = () => {
    return (
        <>
            <section className="flex justify-center items-center">
                <div className="flex max-md:flex-wrap justify-around items-center max-w-5xl rounded-md shadow-md bg-white my-4 py-4 px-12">
                    <div className="px-6 mx-6">
                        <h1 className="text-4xl font-bold py-4">
                            Welcome to my fullstack application
                        </h1>
                        <p className="my-2">
                            Lorem ipsum dolor sit amet consectetur, adipisicing
                            elit. At, voluptates laborum deserunt fugit
                            inventore illo tempora nulla suscipit debitis non
                            perferendis accusamus facere corrupti dignissimos
                            cumque enim cupiditate et. Voluptatem.
                        </p>
                        <div className="flex gap-4">
                            <Link to={"/create"}>
                                <Button name={"Create now"} />
                            </Link>
                            <Link to={"/viewAll"}>
                                <Button name={"View list"} />
                            </Link>
                        </div>
                    </div>
                    <div className="">
                        <img
                            className="h-96 max-w-4xl"
                            src={IMAGES.heropic}
                            alt=""
                        />
                    </div>
                </div>
            </section>
        </>
    );
};

export default Home;
