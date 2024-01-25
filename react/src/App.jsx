import { useState, useEffect } from "react";
import axios from "axios";
import Create from "./pages/Create";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import View from "./pages/View";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

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
            <main className="min-h-screen">
                <Router>
                    <nav className="flex justify-center items-center shadow-lg z-10 bg-white ">
                        <Navbar />
                    </nav>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/viewAll" element={<View />} />
                        <Route path="/create" element={<Create />} />
                    </Routes>
                </Router>
            </main>
            <footer>
                <Footer />
            </footer>
        </>
    );
}

export default App;
