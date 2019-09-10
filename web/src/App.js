import React from "react";
import Content from "./Components/Content";
import Navbar from "./Components/Navbar";
import HiddenNavbar from "./Components/HiddenNavbar";
import Footer from "./Components/Footer";
function App() {
    return (
        <div>
            <Navbar />
            <HiddenNavbar />
            <Content />
            <Footer />
        </div>
    );
}

export default App;
