import React from "react";
import Landing from "./home components/Landing.jsx";
import Stack from "./home components/Stack.jsx";

const Home = () => {
    return (
        <>
            <section className="flex flex-col justify-center items-center">
                <Landing />
                <Stack />
            </section>
        </>
    );
};

export default Home;
