import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import Input from "../components/Input";
import Button from "../components/Button";

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
                console.log(response.data);
                setBread(response.data);
                setTitle(response.data.title);
                setDescription(response.data.description);
                setStocks(response.data.stocks);
                setPrice(response.data.price);
                setImage(`http://localhost:8000/${response.data.image}`);
            })
            .catch((error) => {
                console.error("error pls fix.", error);
            });
    }, [id]);

    const updateItem = () => {
        axios
            .get(`http://localhost:8000/api/breads/${id}`)
            .then((response) => {
                console.log("updated successfully", response);
            })
            .catch((error) => console.error("error updating bro", error));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append("title", title);
        formData.append("description", description);
        formData.append("price", price);
        formData.append("stocks", stocks);
        formData.append("image", image);

        try {
            const response = await axios.put(
                `http://localhost:8000/api/breads/${id}`,
                formData,
                {
                    headers: {
                        "Content-Type": "multipart/form-data",
                    },
                }
            );

            console.log(response.data);
        } catch (error) {
            console.error("Error updating bro:", error);

            // Handle error, show error message, etc.
        }
    };

    return (
        <>
            <div>
                <form onSubmit={handleSubmit}>
                    <Input
                        label={"Title"}
                        type={"text"}
                        value={title}
                        onChangeValue={(e) => setTitle(e.target.value)}
                    />
                    <Input
                        label={"Description"}
                        value={description}
                        type={"text"}
                        onChangeValue={(e) => setDescription(e.target.value)}
                    />
                    <Input
                        label={"Stocks"}
                        value={stocks}
                        type={"number"}
                        onChangeValue={(e) => setStocks(e.target.value)}
                    />
                    <Input
                        label={"Price"}
                        value={price}
                        type={"number"}
                        onChangeValue={(e) => setPrice(e.target.value)}
                    />
                    <img src={`http://localhost:8000/${image}`} alt="" />
                    <label className="font-semibold mt-4">Image:</label>
                    <div className="flex flex-col justify-center items-start shadow-md rounded-md py-2 px-2 mb-4 ">
                        <input
                            type="file"
                            onChange={(e) => setImage(e.target.files[0])}
                        />
                    </div>
                </form>
            </div>
        </>
    );
};

export default Update;
