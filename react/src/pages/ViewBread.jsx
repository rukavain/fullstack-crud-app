import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import Button from "../components/Button";
import SuccessMessage from "../components/SuccessMessage";

const ViewBread = () => {
    const { id } = useParams();
    const [bread, setBread] = useState({});
    const [delMessage, setDelMessage] = useState("");
    const [page, setPage] = useState(`http://localhost:8000/api/breads/${id}`);

    useEffect(() => {
        axios
            .get(`http://localhost:8000/api/breads/${id}`)
            .then((response) => {
                console.log(response.data);
                setPage(`http://localhost:8000/api/breads/${id}`);
                setBread(response.data);
            })
            .catch((error) => console.error("fix da code plz", error));
    }, [id]);

    const deleteItem = () => {
        axios
            .delete(`http://localhost:8000/api/breads/${id}`)
            .then((response) => {
                console.log(response.data);
                setDelMessage("Successfully Deleted");
                setPage(`http://localhost:8000/api/breads`);
            })
            .catch((error) => {
                console.log("error deleting", error);
            });
    };

    return (
        <>
            {deleteItem ? (
                <SuccessMessage message={delMessage} />
            ) : (
                (<div className="flex flex-col">
                    <h1>Title: {bread.title}</h1>
                    <h1>Description: {bread.description}</h1>
                    <h1>Stocks: {bread.stocks}</h1>
                    <h1>Price: {bread.price} </h1>
                    <h1>Created at: {bread.created_at}</h1>
                    <span>
                        <img
                            className="h-44"
                            src={`http://localhost:8000/${bread.image}`}
                            alt=""
                        />

                        <Button onClick={deleteItem} name={"Delete"} />
                    </span>
                </div>)()
            )}
        </>
    );
};

export default ViewBread;
