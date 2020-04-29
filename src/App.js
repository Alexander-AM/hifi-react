import React from "react";
import ReactDOM from "react-dom";
import { Router } from "@reach/router";

import Home from "./Home";
import Header from "./Header";
import Footer from "./Footer";

const App = () => {
    return (
        <React.StrictMode>
            <div>
                <Header />

                <Router>
                    <Home path="/" />
                </Router>

                <Footer />
            </div>
        </React.StrictMode>
    );
};

ReactDOM.render(<App />, document.getElementById("root"));
