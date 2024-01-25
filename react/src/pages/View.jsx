import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import Loading from "../components/Loading";

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
            <h1>List of breads!!</h1>
            {isLoading ? (
                <Loading />
            ) : (
                <div>
                    {breads.map((bread, index) => (
                        <div className="my-5" key={index}>
                            <h1>Title: {bread.title}</h1>
                            <h1>Price: {bread.price}</h1>
                            <h1>Description: {bread.description}</h1>
                            <h1>Stocks: {bread.stocks}</h1>
                            <img
                                className="h-48"
                                src={`http://localhost:8000/${bread.image}`} //idk this how u render an image from an upload file json/array
                                alt=""
                            />
                            {console.log(bread.image)}
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default View;
