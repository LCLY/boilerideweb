import React from "react";
import Content from "./Content";
import Navbar from "./Navbar";
import HiddenNavbar from "./HiddenNavbar";
import Footer from "./Footer";
function App() {
    return (
        <>
            <Navbar />
            <HiddenNavbar />
            <Content />
            <Footer />
        </>
    );
}

export default App;
