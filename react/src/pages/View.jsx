import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import Loading from "../components/Loading";
import Button from "../components/Button.jsx";
import { Link, useParams } from "react-router-dom";

const View = () => {
    const { id } = useParams();
    const [breads, setBreads] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);

    useEffect(() => {
        axios
            .get(`http://localhost:8000/api/breads?page=${currentPage}`)
            .then((response) => {
                setBreads(response.data.data);
                setTotalPages(response.data.last_page);
                setIsLoading(false);
            })
            .catch((error) => console.error("ayaw ng code mo!", error));
    }, [currentPage]);

    const deleteItem = ({ breadId }) => {
        axios
            .delete(`http:localhost:8000/api/breads/${breadId}`)
            .then((response) => {
                console.log(response.data);
                setBreads(breads.filter((bread) => bread.id !== breadId));
            })
            .catch((error) => {
                console.log("error deleting", error);
            });
    };

    return (
        <div className="flex justify-start items-center flex-col my-4">
            <h1 className="font-bold text-5xl text-center my-8 max-md:text-4xl">
                List of breads
            </h1>

            {isLoading ? (
                <Loading />
            ) : (
                <div className="flex justify-start items-center">
                    <div className="flex flex-wrap max-w-6xl justify-center gap-7 items-center">
                        {breads.map((bread, index) => (
                            <div
                                className="flex max-md:max-w-[70vw] max-md:px-4 max-md:flex-wrap my-8 gap-8 max-w-xl hover:shadow-2xl hover:bg-slate hover:border-slate-600 transition-all bg-white justify-around items-start py-4 px-8 rounded-md shadow-md"
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

                                        // TUMATAE AKO WAIT ALNG
                                    </div> */}
                                    <div className="flex gap-4 mt-11">
                                        <Button
                                            name={"Purchase"}
                                            bg={`green`}
                                        />
                                        <Link to={`/view/${bread.id}`}>
                                            <Button
                                                name={"Learn more"}
                                                className="hover:bg-green-700"
                                            />{" "}
                                        </Link>
                                        <Button
                                            onClick={() => deleteItem(bread.id)}
                                            name={"DUH LIT"}
                                            className="hover:bg-green-700"
                                        />{" "}
                                    </div>
                                </div>
                                <img
                                    className="h-48 rounded-md object-cover cursor-pointer hover:object-contain"
                                    src={`http://localhost:8000/${bread.image}`} //idk this how u render an image from an upload file json/array
                                    alt=""
                                />
                            </div>
                        ))}
                        {/* Pagination */}
                        <div className="my-2 py-2 bg-white shadow-md rounded-md px-5 flex justify-around items-center w-full max-w-xl">
                            <button
                                className="hover:font-bold hover:italic cursor-pointer transition-all"
                                onClick={() =>
                                    setCurrentPage((prevPage) =>
                                        Math.max(prevPage - 1, 1)
                                    )
                                }
                                disabled={currentPage === 1}
                            >
                                Previous
                            </button>
                            <span>
                                Page {currentPage} of {totalPages}
                            </span>
                            <button
                                className="hover:font-bold hover:italic cursor-pointer transition-all"
                                onClick={() =>
                                    setCurrentPage((prevPage) =>
                                        Math.min(prevPage + 1, totalPages)
                                    )
                                }
                                disabled={currentPage === totalPages}
                            >
                                Next
                            </button>
                        </div>
                        {/*End of Pagination */}
                    </div>
                </div>
            )}
        </div>
    );
};

export default View;
