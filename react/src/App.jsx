import { useState, useEffect } from "react";
import axios from "axios";
import Create from "./pages/Create";

function App() {
    const [breads, setBreads] = useState("");

    useEffect(() => {
        axios
            .get("http://localhost:8000/api/breads")
            .then((response) => {
                setBreads(response.data.message);
            })
            .catch((error) => console.error("shiehs error par", error));
    }, []);

    return (
        <>
            <main className="bg-slate-100 flex justify-center items-center my-5 py-5">
                <div>
                    <Create />
                </div>
            </main>
        </>
    );
}

export default App;
