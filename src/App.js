import React from "react";
import "./app.css";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
// import Footer from "./components/Footer";
import Shop from "./pages/Shop";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Gallery from "./pages/Gallery"
import {BrowserRouter as Router, Route, Routes} from "react-router-dom"




function App() {
    return (
        <div className="App">
            <Navbar/>
            <Router>
                <Routes>
                    <Route path="/home" element={<Home/>}/>
                    <Route path="/about" element={<About/>}/>
                    <Route path="/gallery" element={<Gallery/>}/>
                    <Route path="/shop" exact component={<Shop/>}/>

                </Routes>
            </Router>
        </div>
    );
}

export default App;
