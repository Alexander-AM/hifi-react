import React from "react";
import ReactDOM from "react-dom";
import { Router } from "@reach/router";

import Home from "./Home";
import Brands from "./Brands";
import Shop from "./Shop";
import ShopCategory from "./ShopCategory";
import ShopItem from "./ShopItem";
import Footer from "./Footer";

const App = () => {
    return (
        <React.StrictMode>
            <div>
                <Router>
                    <Home path="/" />
                    <Brands path="/brands" />
                    <Shop path="/shop" />
                    <ShopCategory path="/shop/category/:category" />
                    <ShopItem path="/shop/item/:id" />
                </Router>

                <Footer />
            </div>
        </React.StrictMode>
    );
};

ReactDOM.render(<App />, document.getElementById("root"));
