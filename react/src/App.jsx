import { useState, useEffect } from "react";
import axios from "axios";
import Create from "./pages/Create";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import View from "./pages/View";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import ViewBread from "./pages/ViewBread";

function App() {
    return (
        <>
            <main className=" dark:bg-slate-900 min-h-screen">
                <Router>
                    <nav className="flex justify-center items-center shadow-lg z-10 bg-white ">
                        <Navbar />
                    </nav>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/viewAll" element={<View />} />
                        <Route path="/create" element={<Create />} />
                        <Route path="/view/:id" element={<ViewBread />} />
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
