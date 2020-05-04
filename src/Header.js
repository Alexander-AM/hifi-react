import React, { useLayoutEffect } from "react";
import { Link } from "@reach/router";
import { css } from "emotion";

const Header = (props) => {
    const categoryProp = props.category || "All";
    const brandProp = props.brand || "All";

    useLayoutEffect(() => {
        const DOMnavSearchInput = document.querySelector("#nav-search-input");
        const DOMnavSearchButton = document.querySelector("#nav-search-button");

        const search = () => {
            window.location.href = `/shop/list/${categoryProp}/${brandProp}/${
                DOMnavSearchInput.value != "" ? DOMnavSearchInput.value : "All"
            }`;
        };

        DOMnavSearchInput.addEventListener("keydown", (e) => {
            if (e.keyCode === 13) {
                search();
            }
        });

        DOMnavSearchButton.addEventListener("click", () => {
            search();
        });
    });

    return (
        <header id="header" className={styles + " " + props.classNames}>
            <section id="header-top">
                <section>
                    <img
                        id="header-logo"
                        className="shop-item"
                        src="/assets/img/hifi-logo.png"
                        alt="Hi-Fi Logo"
                    />
                </section>
                <ul id="header-list">
                    <li className="shop-item">
                        <label id="nav-search-container">
                            <input
                                id="nav-search-input"
                                type="text"
                                placeholder="Search entire store here..."
                            />
                            <button id="nav-search-button">
                                <i className="fas fa-search"> </i>
                            </button>
                        </label>
                    </li>
                    <li className="shop-item">
                        <Link to="#">
                            <i className="fas fa-user" id="nav-account-ico"></i>
                            ACCOUNT
                        </Link>
                    </li>
                    <li className="shop-item">
                        <Link to="#">
                            <i
                                className="fas fa-shopping-cart"
                                id="nav-cart-ico"
                            ></i>
                            CART
                        </Link>
                    </li>
                    <li>
                        <Link to="#">
                            <i className="fas fa-map-marker-alt"> </i>
                        </Link>
                    </li>
                    <li>
                        <Link to="#">
                            <i className="fas fa-phone-alt"> </i>
                        </Link>
                    </li>
                    <li>
                        <Link to="#">
                            <i className="fas fa-envelope"> </i>
                        </Link>
                    </li>
                    <li className="frontpage-item">
                        <button id="subscribe-button">
                            <i className="fas fa-envelope"> </i>Subscribe
                        </button>
                    </li>
                </ul>
            </section>
            <nav id="header-nav">
                <ul id="nav-list">
                    <li>
                        <Link to="/"> HOME </Link>
                    </li>
                    <li>
                        <Link to="#"> ABOUT US </Link>
                    </li>
                    <li>
                        <Link to="/brands"> BRANDS </Link>
                    </li>
                    <li>
                        <Link to="#"> BLOG </Link>
                    </li>
                    <li>
                        <Link to="#"> EVENTS </Link>
                    </li>
                    <li>
                        <Link to="/shop"> SHOP </Link>
                    </li>
                    <li>
                        <Link to="#"> CONTACT US </Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

const styles = css`
    /* Menu Module */
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    background-color: rgba(0, 0, 0, 0.75);
    z-index: 500;

    a {
        color: white;
        text-decoration: none;
        font-size: 0.8rem;
        padding: 8px 12px;
        line-height: 2em;
    }

    i {
        margin-right: 4px;
        font-size: 1rem;
    }

    #header-top {
        display: flex;
        justify-content: space-between;
        align-items: center;
        box-sizing: border-box;
        padding: 10px 5px;
    }

    #header-nav {
        background-color: black;
        height: auto;
        display: flex;
        justify-content: center;
        align-items: center;
        box-sizing: border-box;
        border-top: 1px solid #413a27;
    }

    #header-list {
        list-style: none;
        padding: 0;
        margin: 0;
        display: flex;
        width: 100%;
    }

    #nav-list {
        list-style: none;
        padding: 0;
        margin: 0;
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
    }

    #nav-list a.active,
    #nav-list a:hover {
        color: #a39161;
    }

    #subscribe-button {
        border-radius: 4px;
        border: 1px solid #0070b2;
        background: linear-gradient(to bottom, #40baf6, #1595f1);
        color: white;
        font-family: "Open Sans", sans-serif;
        height: 100%;
        padding: 0 8px;
        margin-right: 20px;
    }

    #subscribe-button i {
        padding-right: 4px;
        border-right: 1px solid #0f7aed;
        line-height: 1em;
        font-size: 1em;
    }

    #header-logo {
        height: 10vmin;
        margin: 0 10px;
        vertical-align: bottom;
    }

    #nav-search-container {
        position: relative;
        display: flex;
        align-items: center;
    }

    #nav-search-input {
        padding: 4px 6px;
        border: 1px solid #c0c0c0;
        font-size: 0.8rem;
        border-radius: 2px;
        font-family: "Open Sans", sans-serif;
        width: 100%;
    }

    #nav-search-input::placeholder {
        color: #c0c0c0;
    }

    #nav-search-button {
        position: absolute;
        right: 2px;
        border: 0;
        background: none;
        padding: 0;
        color: #999999;
        line-height: 2em;
        padding-left: 5px;
    }

    #nav-account-ico,
    #nav-cart-ico {
        color: rgba(255, 255, 255, 0.75);
        vertical-align: middle;
    }

    #header-list li:first-child {
        width: 100%;
    }

    #header-list li:not(.frontpage-item):not(.shop-item) {
        display: none;
    }

    #header-list li:not(:first-child) {
        flex-shrink: 0;
    }

    /* Header Types */
    /* Sticky Header */
    &.header-sticky {
        position: sticky;
    }

    /* Standard */
    &.header-standard .shop-item,
    &.header-standard .frontpage-item {
        display: none;
    }

    /* Frontpage */
    &.header-frontpage .shop-item {
        display: none;
    }

    /* Shop */
    &.header-shop {
        padding-top: 15px;
    }

    &.header-shop .frontpage-item {
        display: none;
    }

    @media screen and (min-width: 768px) {
        #header-nav {
            height: 6vmin;
        }

        #header-list li:first-child {
            width: auto;
        }

        #header-list li:not(.frontpage-item):not(.shop-item) {
            display: list-item;
        }

        #header-list li:not(:first-child) {
            flex-shrink: 1;
        }

        #nav-search-input {
            width: 350px;
        }

        #header-logo {
            height: 4vmin;
            margin: 0;
        }

        #header-list {
            width: auto;
        }
    }
`;

export default Header;
