import { useState, useEffect } from "react";
import axios from "axios";
function App() {
    const [breads, setBreads] = useState("");

    useEffect(() => {
        axios
            .get("http://localhost:8000/api/breads")
            .then((response) => {
                setBreads(response.data.message);
                console.log(response.data);
            })
            .catch((error) => console.error("shiehs error par", error));
    }, []);

    return (
        <>
            <div>
                <h1>bread: {breads}</h1>
            </div>
        </>
    );
}

export default App;
