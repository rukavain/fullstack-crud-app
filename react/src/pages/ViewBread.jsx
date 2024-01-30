import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, Link } from "react-router-dom";
import Button from "../components/Button";
import SuccessMessage from "../components/SuccessMessage";

const ViewBread = () => {
    const { id } = useParams();
    const [bread, setBread] = useState({});
    const [delMessage, setDelMessage] = useState("");
    const [isDeleted, setIsDeleted] = useState(false);

    useEffect(() => {
        axios
            .get(`http://localhost:8000/api/breads/${id}`)
            .then((response) => {
                console.log(response.data);
                setBread(response.data);
            })
            .catch((error) => {
                console.error("fix da code plz", error);
                setDelMessage("This item is already deleted.");
                setIsDeleted(true);
            });
    }, [id]);

    const deleteItem = () => {
        axios
            .delete(`http://localhost:8000/api/breads/${id}`)
            .then((response) => {
                console.log(response.data);

                setDelMessage("Successfully Deleted");

                setIsDeleted(true);
            })
            .catch((error) => {
                console.log("error deleting", error);
            });
    };

    return (
        <>
            {isDeleted ? (
                <>
                    <div className="flex justify-center items-center flex-col my-12 gap-4">
                        <SuccessMessage message={delMessage} />
                        <Link to="/">
                            <Button name="Go back to dashboard" />
                        </Link>
                    </div>
                </>
            ) : (
                <div className="flex flex-col">
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
                </div>
            )}
        </>
    );
};

export default ViewBread;
