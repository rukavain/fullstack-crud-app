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
    const [stocks, setStocks] = useState(0);
    const [price, setPrice] = useState(0);
    const [image, setImage] = useState("");

    useEffect(() => {
        axios
            .get(
                ` https://fullstack-crud-app-react-laravel.onrender/api/breads/${id}.com`
            )

            .then((response) => {
                console.log(response.data);
                setBread(response.data);
                setTitle(response.data.title);
                setDescription(response.data.description);
                setStocks(response.data.stocks);
                setPrice(response.data.price);
                setImage(
                    `https://fullstack-crud-app-react-laravel.onrender/api/breads/${response.data.image}`
                );
            })
            .catch((error) => {
                console.error("error pls fix.", error);
            });
    }, [id]);

    const updateItem = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.put(
                `http://localhost:8000/api/breads/${id}`,
                {
                    title,
                    description,
                    price,
                    stocks,
                }
            );

            console.log("Updated successfully", response.data);
        } catch (error) {
            console.error("Error updating:", error);
        }
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
        }
    };

    return (
        <>
            <div>
                <form onSubmit={updateItem}>
                    <Input
                        label={"Title"}
                        type={"text"}
                        value={title}
                        onChangeValue={setTitle}
                    />
                    <Input
                        label={"Description"}
                        value={description}
                        type={"text"}
                        onChangeValue={setDescription}
                    />
                    <Input
                        label={"Stocks"}
                        value={stocks}
                        type={"number"}
                        onChangeValue={setStocks}
                    />
                    <Input
                        label={"Price"}
                        value={price}
                        type={"number"}
                        onChangeValue={setPrice}
                    />
                    <label className="font-semibold mt-4">Image:</label>
                    <div className="flex flex-col justify-center items-start shadow-md rounded-md py-2 px-2 mb-4 ">
                        <input
                            type="file"
                            onChange={(e) => setImage(e.target.files[0])}
                        />
                    </div>
                    <button
                        type="submit"
                        className="py-2 my-4 px-6 shadow-md rounded-md font-semibold"
                    >
                        Submit
                    </button>
                </form>
                <img src={`http://localhost:8000/${bread.image}`} alt="" />
            </div>
        </>
    );
};

export default Update;
