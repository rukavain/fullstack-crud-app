import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
    return (
        <>
            <section>
                <Link to={"/create"}>
                    <h1>create</h1>
                </Link>
            </section>
        </>
    );
};

export default Home;
