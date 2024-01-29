import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

const Update = () => {
    const { id } = useParams();
    const [bread, setBread] = useState({});
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [stocks, setStocks] = useState("");
    const [price, setPrice] = useState("");
    const [image, setImage] = useState("");

    useEffect(() => {
        axios
            .get(`http://localhost:8000/api/breads/${id}`)
            .then((response) => {
                console.log(response.data.data);
                setBread(response.data.data);
                setTitle(response.data.title);
                setDescription(response.data.description);
                setStocks(response.data.stocks);
                setPrice(response.data.price);
                setImage(`http://localhost:8000/${response.data.image}`);
            })
            .catch((error) => {
                console.error("error pls fix.");
            });
    }, [id]);

    return (
        <>
            <div>
                <div></div>
            </div>
        </>
    );
};

export default Update;
