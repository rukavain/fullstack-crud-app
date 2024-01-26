import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import Loading from "../components/Loading";
import Button from "../components/Button.jsx";

const View = () => {
    const [breads, setBreads] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        axios
            .get(`http://localhost:8000/api/breads`)
            .then((response) => {
                setBreads(response.data);
                setIsLoading(false);
            })
            .catch((error) => console.error("ayaw ng code mo!", error));
    }, []);

    return (
        <div className="flex justify-start items-center flex-col my-4">
            <h1 className="font-bold text-5xl text-center my-8">
                List of breads
            </h1>
            {isLoading ? (
                <Loading />
            ) : (
                <div className="flex justify-start items-center">
                    <div className="flex flex-wrap max-w-6xl justify-center gap-7 items-center">
                        {breads.map((bread, index) => (
                            <div
                                className="flex max-md:max-w-md max-md:px-2 max-md:flex-wrap my-8 gap-8 max-w-xl hover:shadow-2xl hover:bg-slate hover:border-slate-600 cursor-pointer transition-all bg-white justify-around items-start py-4 px-8 rounded-md shadow-md"
                                key={index}
                            >
                                <div className="flex flex-col justify-between min-h-full">
                                    <div>
                                        <h1 className="font-semibold text-3xl my-4">
                                            {bread.title}
                                        </h1>
                                        <h1>{bread.description}</h1>
                                    </div>

                                    {/* <div className="flex gap-4 my-5">
                                        <h1 className="">
                                            Price: {bread.price}
                                        </h1>
                                        <h1>Stocks: {bread.stocks}</h1>
                                    </div> */}
                                    <div className="flex gap-4 mt-11">
                                        <Button
                                            name={"Purchase"}
                                            bg={`green`}
                                        />
                                        <Button
                                            name={"Learn more"}
                                            className="hover:bg-green-700"
                                        />
                                    </div>
                                </div>

                                <img
                                    className="h-48 rounded-md"
                                    src={`http://localhost:8000/${bread.image}`} //idk this how u render an image from an upload file json/array
                                    alt=""
                                />

                                {console.log(bread.image)}
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
};

export default View;
