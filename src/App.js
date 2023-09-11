import React from "react";
import "./app.css";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import Shop from "./pages/Shop";
import About from "./pages/About";
// import Contact from "./pages/Contact";
import Gallery from "./pages/Gallery"
import NotFound from "./pages/NotFound";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom"
import Checkout from "./components/Checkout";
import LogIn from "./components/LogIn";

// import {
//     HashRouter,
//     Route,
//     Routes,
//     // Link,
//     // NavLink,
//     // Outlet
// } from 'react-router-dom';




function App() {
    return (
        <div className="App">

            <Router>
                <Navbar/>
                    <Routes>
                        <Route path="/" element={<Home />}/>
                        <Route path="about" element={<About />}/>
                        <Route path="gallery" element={<Gallery />}/>
                        <Route path="shop" element={<Shop />}/>
                        <Route path="*" element={<NotFound />} />
                        <Route path="/checkout" element={<Checkout/>}/>
                        <Route path="/logIn" element={<LogIn/>}/>
                    </Routes>
                <Footer/>
            </Router>
            {/*<Footer/>*/}
        </div>
    );
}

export default App;
