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
                "http://localhost:8000/api/breads",
                formData,
                {
                    headers: {
                        "Content-Type": "multipart/form-data",
                    },
                }
            );

            console.log(response.data);
            setSuccessMessage("Successfully added.");
            // Handle success, reset form, show success message, etc.
        } catch (error) {
            console.error("Error creating bread:", error);
            setSuccessMessage("Error adding. Please check inputs carefully.");
            // Handle error, show error message, etc.
        }
    };

    return (
        <div className="flex justify-center items-center my-8">
            <form
                className="flex flex-col bg-white px-8 py-4 rounded-md shadow-md"
                onSubmit={handleSubmit}
            >
                <h1 className="text-4xl font-bold my-6">Add bread</h1>
                {successMessage && (
                    <h1
                        onClick={() => setSuccessMessage("")}
                        className="bg-slate-100 py-2 px-4 rounded-md cursor-pointer"
                    >
                        {successMessage}
                    </h1>
                )}

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
    );
};

export default CreateBreadForm;
