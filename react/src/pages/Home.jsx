import React from "react";
import Button from "../components/Button";
import { Link } from "react-router-dom";

const Home = () => {
    return (
        <>
            <section className="flex justify-center items-center">
            <div className="flex flex-wrap justify-around max-w-2xl rounded-md shadow-md bg-white my-4 py-4 px-6">
                <div>
                    <h1 className="text-4xl font-semibold py-4">Welcome to my fullstack application</h1>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. At, voluptates laborum deserunt fugit inventore illo tempora nulla suscipit debitis non perferendis accusamus facere corrupti dignissimos cumque enim cupiditate et. Voluptatem.</p>
                    <Link>
                        <Button
                            name={"Create now"}

                        />
                    </Link>
                </div>
                <div>

                </div>
            </div>
            </section>
        </>
    );
};

export default Home;
