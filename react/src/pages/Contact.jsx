import React from "react";
import { useState, useEffect } from "react";
import Button from "../components/Button";
import Input from "../components/Input";
import AOS from "aos";
import "aos/dist/aos.css";
const Contact = () => {
    useEffect(() => {
        AOS.init();
        AOS.refresh();
    }, []);
    return (
        <div className="flex justify-center items-center">
            <div className="flex justify-center items-center bg-white my-4 py-8 px-12 rounded-md shadow-lg max-w-xl">
                <form onSubmit={(e) => e.preventDefault} action="">
                    <div data-aos="fade-down" className="flex flex-col gap-6">
                        <h1 className="text-6xl font-bold">Get in touch</h1>
                        <h1 className="text-sm">
                            Feel free to reach out to us with any questions,
                            suggestions, or just to say hello! Your feedback is
                            valuable to us. We'll do our best to respond
                            promptly. Thank you for getting in touch!
                        </h1>
                    </div>
                    <Input label={"e-mail"} type={"email"} />
                    <div className="flex flex-col gap-3 justify-center items-start">
                        <label className="font-semibold"> Message: </label>
                        <textarea className="w-full py-4 px-6 shadow-md rounded-lg" />
                        <Button name={"Submit"} type={"submit"} />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Contact;
