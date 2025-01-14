import React, { useState } from "react";
import axios from "axios";
import Input from "../components/Input.jsx";
import Button from "../components/Button.jsx";
import { Link } from "react-router-dom";

const CreateBreadForm = () => {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [price, setPrice] = useState("");
    const [stocks, setStocks] = useState("");
    const [image, setImage] = useState(null);
    const [successMessage, setSuccessMessage] = useState("");

    const handleFileChange = (e) => {
        setImage(e.target.files[0]);
    };

    const resetFields = () => {
        setDescription("");
        setImage(null);
        setPrice("");
        setStocks("");
        setSuccessMessage("");
        setTitle("");
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
            const response = await axios.post(
                "https://fullstack-crud-app-react-laravel.onrender/api/breads.com",
                formData,
                {
                    headers: {
                        "Content-Type": "multipart/form-data",
                    },
                }
            );

            console.log(response.data);
            setSuccessMessage(true);
            setSuccessMessage("Successfully added.");
            resetFields();
            // Handle success, reset form, show success message, etc.
        } catch (error) {
            console.error("Error creating bread:", error);
            setSuccessMessage("Error adding. Please check inputs carefully.");
            // Handle error, show error message, etc.
        }
    };

    return (
        <>
            {successMessage ? (
                <>
                    <div className="flex flex-col justify-center items-center my-5">
                        <div className="flex gap-4 flex-col max-w-xl justify-center items-center my-5">
                            <h1
                                onClick={() => setSuccessMessage("")}
                                className="bg-white shadow-md py-4 px-8 rounded-md cursor-pointer"
                            >
                                {successMessage}
                            </h1>
                            <Link to="/viewAll">
                                <Button name={"View List"} />
                            </Link>
                        </div>
                    </div>
                </>
            ) : (
                <div className="flex justify-center items-center my-8">
                    <form
                        className="flex flex-col bg-white px-8 py-4 rounded-md shadow-md"
                        onSubmit={handleSubmit}
                    >
                        <h1 className="text-4xl font-bold my-6">Add bread</h1>{" "}
                        <Input
                            type={"text"}
                            label={"Title"}
                            value={title}
                            onChangeValue={setTitle}
                        />
                        <Input
                            type={"text"}
                            label={"Description"}
                            value={description}
                            onChangeValue={setDescription}
                        />
                        <Input
                            type={"number"}
                            label={"Price"}
                            value={price}
                            onChangeValue={setPrice}
                        />
                        <Input
                            type={"number"}
                            label={"Stocks"}
                            value={stocks}
                            onChangeValue={setStocks}
                        />
                        <label className="font-semibold mt-4">Image:</label>
                        <div className="flex flex-col justify-center items-start shadow-md rounded-md py-2 px-2 mb-4">
                            <input type="file" onChange={handleFileChange} />
                        </div>
                        <Link to="/">
                            <Button type={"button"} name={"Go back"} />
                        </Link>
                        <Button type={"submit"} name={"Submit"} />
                    </form>
                </div>
            )}
        </>
    );
};

export default CreateBreadForm;
