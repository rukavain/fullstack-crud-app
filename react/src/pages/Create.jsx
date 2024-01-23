import React from "react";
import { useState, useEffect } from "react";
import Input from "../components/Input";
import Button from "../components/Button";
import axios from "axios";

const Create = () => {
    const [title, setTitle] = useState("");
    const [price, setPrice] = useState("");
    const [stocks, setStocks] = useState("");
    const [description, setDescription] = useState("");
    const [successMessage, setSuccessMessage] = useState("");

    const createBread = (event) => {
        event.preventDefault();
        const data = {
            title: title,
            description: description,
            price: price,
            stocks: stocks,
        };

        axios
            .post("http://localhost:8000/api/breads", data)
            .then((response) => {
                console.log("added song saksesfully", response.data);
                setSuccessMessage("added successfully");
            })
            .catch((error) => {
                console.error("error plz fix.", error);
                setSuccessMessage("error adding pls fix");
            });
    };

    return (
        <>
            {successMessage && <h1>{successMessage}</h1>}
            <form>
                <div>
                    <h1>Title</h1>
                    <Input
                        type={"text"}
                        placeholder={"Bread"}
                        value={title}
                        onChangeValue={setTitle}
                    />
                </div>
                <div>
                    <h1>Description</h1>
                    <Input
                        type={"text"}
                        value={description}
                        onChangeValue={setDescription}
                        placeholder={"Very delicious bread"}
                    />
                </div>
                <div>
                    <h1>Price</h1>
                    <Input
                        type={"text"}
                        placeholder={"$2.99"}
                        onChangeValue={setPrice}
                        value={price}
                    />
                </div>
                <div>
                    <h1>Stocks</h1>
                    <Input
                        type={"text"}
                        placeholder={"59"}
                        value={stocks}
                        onChangeValue={setStocks}
                    />
                </div>
                <button
                    className="py-2 px-4 rounded-md shadow-md"
                    type="submit"
                    onClick={createBread}
                >
                    {" "}
                    add bread{" "}
                </button>
            </form>
        </>
    );
};
export default Create;
