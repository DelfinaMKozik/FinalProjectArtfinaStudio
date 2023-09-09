import React from "react";
import "./app.css";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
// import Footer from "./components/Footer";
// import Shop from "./pages/Shop";
// import About from "./pages/About";
// import Contact from "./pages/Contact";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom"




function App() {
    return (
        <div className="App">
            <div>hehehe</div>
            <Router>
                <Routes>
                    <Route path="/home" exact component={Home}/>
                </Routes>
            </Router>
            <Navbar/>

        </div>
    );
}

export default App;
