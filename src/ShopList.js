import React, { useLayoutEffect, useState } from "react";
import { css } from "emotion";

import Header from "./Header";
import { Link } from "@reach/router";

const ShopCategory = (props) => {
    const categoryProp = props.category || "All";
    const brandProp = props.brand || "All";
    const queryProp = props.query || "";

    const [products, setProducts] = useState([]);

    const moveLocation = (type, location) => {
        if (type == "category") {
            window.location.href = `/shop/list/${location}/${brandProp}/${queryProp}`;
        } else if (type == "manufacturer") {
            window.location.href = `/shop/list/${categoryProp}/${location}/${queryProp}`;
        } else if (type == "query") {
            window.location.href = `/shop/list/${categoryProp}/${brandProp}/${location}`;
        }
    };

    useLayoutEffect(() => {
        document
            .querySelector(".shop-card-container")
            .addEventListener("click", (e) => {
                if (e.target.tagName !== "BUTTON") {
                    for (let i = 0; i < e.path.length; i++) {
                        if (e.path[i].classList.contains("shop-card")) {
                            window.location.href = e.path[i].getAttribute(
                                "data-link"
                            );
                            break;
                        }
                    }
                }
            });

        document.addEventListener("click", (e) => {
            e.preventDefault();

            if (e.target.classList.contains("relocator-category")) {
                moveLocation(
                    "category",
                    e.target.getAttribute("data-relocation")
                );
            } else if (e.target.classList.contains("relocator-manufacturer")) {
                moveLocation(
                    "manufacturer",
                    e.target.getAttribute("data-relocation")
                );
            }
        });

        if (!products.length) {
            // Data fetch
            fetch(
                `https://hifi-corner.herokuapp.com/api/v1/products?category=${categoryProp}`,
                { method: "GET" }
            )
                .then((response) => {
                    return response.json();
                })
                .then((json) => {
                    setProducts(
                        json.filter((product) => {
                            return (
                                (brandProp == "All"
                                    ? true
                                    : product.make == brandProp) &&
                                (queryProp == "All"
                                    ? true
                                    : (product.make + product.model).includes(
                                          queryProp
                                      ))
                            );
                        })
                    );
                });
        }
    }, []);

    let createElement = (product) => {
        let determinedClass = "standard";

        if (product.price === undefined) {
            determinedClass = "no-price";
        } else if (product["old-price"] === undefined) {
            determinedClass = "no-old-price";
        }

        return (
            <article
                key={product.sku}
                className={`shop-card shop-card-${determinedClass}`}
                data-link={`/shop/item/${product.sku}`}
            >
                <div
                    className="shop-card-image"
                    style={{
                        backgroundImage: `url(${
                            product.images !== undefined
                                ? product.images[0]
                                : ""
                        })`,
                    }}
                ></div>
                <p className="shop-card-name">
                    {product.make + " " + product.model}
                </p>
                <div className="shop-card-price-container">
                    <span className="shop-card-old-price">
                        £{product["old-price"]}
                    </span>
                    <span className="shop-card-price">£{product.price}</span>
                </div>
                <button className="shop-card-cart-btn">ADD TO CART</button>
                <button className="shop-card-price-btn">
                    ENQUIRE FOR PRICE
                </button>
            </article>
        );
    };

    return (
        <div className={styles}>
            <Header
                category={categoryProp}
                brand={brandProp}
                classNames="header-shop header-sticky"
            />

            <article className="shop-wrapper">
                <article className="breadcrumbs">
                    <Link to="/shop">Home</Link>
                    <span className="breadcrumbs-slash"></span>
                    <span className="shop-editable-breadcrumb-title">
                        {categoryProp}
                    </span>
                </article>

                <section className="shop-container">
                    <section className="shop-left">
                        <section className="shop-list-box">
                            <p className="shop-heading-one">Amplifiers</p>
                            <ul className="shop-list-pushed">
                                <li>
                                    <Link to="#">Integrated Amplifiers</Link>
                                </li>
                                <li>
                                    <Link to="#">Power Amplifiers</Link>
                                </li>
                                <li>
                                    <Link to="#">Preamplifiers</Link>
                                </li>
                            </ul>
                            <ul>
                                <li>
                                    <Link
                                        to="#"
                                        className="relocator-category"
                                        data-relocation="Speakers"
                                    >
                                        Speakers
                                    </Link>
                                </li>
                                <li>
                                    <Link to="#">Turntables</Link>
                                </li>
                                <li>
                                    <Link
                                        to="#"
                                        className="relocator-category"
                                        data-relocation="CD Players"
                                    >
                                        CD Players
                                    </Link>
                                </li>
                                <li>
                                    <Link to="#">Streamers</Link>
                                </li>
                                <li>
                                    <Link to="#">Cables</Link>
                                </li>
                                <li>
                                    <Link to="#">Furniture</Link>
                                </li>
                                <li>
                                    <Link to="#">Headphones</Link>
                                </li>
                                <li>
                                    <Link to="#">Home Cinema</Link>
                                </li>
                                <li>
                                    <Link to="#">Ceiling Speakers</Link>
                                </li>
                                <li>
                                    <Link to="#">TV</Link>
                                </li>
                                <li>
                                    <Link to="#">Vinyl</Link>
                                </li>
                                <li>
                                    <Link to="#">Outlet - Save ££££</Link>
                                </li>
                            </ul>
                        </section>
                        <section className="shop-list-box">
                            <h5>SHOP BY</h5>
                            <h6>Filter</h6>

                            <p className="shop-heading-two">PRICE</p>
                            <ul>
                                <li>
                                    <Link to="#">£0.00 - £799.99(10)</Link>
                                </li>
                                <li>
                                    <Link to="#">£0.00 - £799.99(10)</Link>
                                </li>
                                <li>
                                    <Link to="#">£0.00 - £799.99(10)</Link>
                                </li>
                                <li>
                                    <Link to="#">£0.00 - £799.99(10)</Link>
                                </li>
                                <li>
                                    <Link to="#">£0.00 - £799.99(10)</Link>
                                </li>
                            </ul>

                            <p className="shop-heading-two">MANUFACTURER</p>
                            <ul>
                                <li>
                                    <Link
                                        to="#"
                                        className="relocator-manufacturer"
                                        data-relocation="Creek"
                                    >
                                        Creek(2)
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        to="#"
                                        className="relocator-manufacturer"
                                        data-relocation="EPOS"
                                    >
                                        EPOS(2)
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        to="#"
                                        className="relocator-manufacturer"
                                        data-relocation="Jolida"
                                    >
                                        Jolida(2)
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        to="#"
                                        className="relocator-manufacturer"
                                        data-relocation="Project"
                                    >
                                        Project(2)
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        to="#"
                                        className="relocator-manufacturer"
                                        data-relocation="Manley"
                                    >
                                        Manley(2)
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        to="#"
                                        className="relocator-manufacturer"
                                        data-relocation="Harbeth"
                                    >
                                        Harbeth(2)
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        to="#"
                                        className="relocator-manufacturer"
                                        data-relocation="Boesendorfer"
                                    >
                                        Boesendorfer(2)
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        to="#"
                                        className="relocator-manufacturer"
                                        data-relocation="Parasound"
                                    >
                                        Parasound(2)
                                    </Link>
                                </li>
                            </ul>
                        </section>
                    </section>
                    <section className="shop-center">
                        <h4 className="shop-editable-title">{categoryProp}</h4>
                        <section className="shop-settings">
                            <section className="shop-settings-upper">
                                <section>
                                    <label htmlFor="select-sort-by-top">
                                        SORT BY:
                                    </label>
                                    <select
                                        name="select-sort-by"
                                        id="select-sort-by-top"
                                    >
                                        <option value="Price">Price</option>
                                    </select>
                                    <i className="fas fa-long-arrow-alt-up"></i>
                                </section>
                                <section>
                                    <span className="shop-settings-items">
                                        <span className="shop-settings-items-visible">
                                            113
                                        </span>{" "}
                                        Item(s)
                                    </span>
                                    <label htmlFor="select-show-top">
                                        SHOW:
                                    </label>
                                    <select
                                        name="select-show"
                                        id="select-show-top"
                                    >
                                        <option value="300">300</option>
                                    </select>
                                </section>
                            </section>
                            <section className="shop-settings-view">
                                <span>VIEW AS:</span>
                                <button className="shop-view-grid shop-view-active">
                                    <i className="fas fa-th-large"></i>
                                </button>
                                <button className="shop-view-bars">
                                    <i className="fas fa-bars"></i>
                                </button>
                            </section>
                        </section>
                        <section className="shop-card-container">
                            {!products.length ? (
                                <h1 className="loading-text">Loading...</h1>
                            ) : (
                                products.map((product) => {
                                    return createElement(product);
                                })
                            )}
                        </section>
                        <p className="shop-invisible">Nothing was found here</p>
                        <section className="shop-settings">
                            <section className="shop-settings-upper">
                                <section>
                                    <label htmlFor="select-sort-by-bottom">
                                        SORT BY:
                                    </label>
                                    <select name="select-sort-by-bottom">
                                        <option value="Price">Price</option>
                                    </select>
                                    <i className="fas fa-long-arrow-alt-up"></i>
                                </section>
                                <section>
                                    <span className="shop-settings-items">
                                        <span className="shop-settings-items-visible">
                                            113
                                        </span>{" "}
                                        Item(s)
                                    </span>
                                    <label htmlFor="select-show-bottom">
                                        SHOW:
                                    </label>
                                    <select
                                        name="select-show"
                                        id="select-show-bottom"
                                    >
                                        <option value="300">300</option>
                                    </select>
                                </section>
                            </section>
                            <section className="shop-settings-view">
                                <span>VIEW AS:</span>
                                <button className="shop-view-grid shop-view-active">
                                    <i className="fas fa-th-large"></i>
                                </button>
                                <button className="shop-view-bars">
                                    <i className="fas fa-bars"></i>
                                </button>
                            </section>
                        </section>
                    </section>
                    <section className="shop-right">
                        <p className="shop-heading-two">MANUFACTURER</p>
                        <ul>
                            <li>
                                <Link
                                    to="#"
                                    className="relocator-manufacturer"
                                    data-relocation="Creek"
                                >
                                    Creek
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="#"
                                    className="relocator-manufacturer"
                                    data-relocation="EPOS"
                                >
                                    EPOS
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="#"
                                    className="relocator-manufacturer"
                                    data-relocation="Jolida"
                                >
                                    Jolida
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="#"
                                    className="relocator-manufacturer"
                                    data-relocation="Project"
                                >
                                    Project
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="#"
                                    className="relocator-manufacturer"
                                    data-relocation="Manley"
                                >
                                    Manley
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="#"
                                    className="relocator-manufacturer"
                                    data-relocation="Harbeth"
                                >
                                    Harbeth
                                </Link>
                            </li>
                        </ul>
                        <Link className="shop-view-all" to="#">
                            View All
                        </Link>
                    </section>
                </section>
            </article>
        </div>
    );
};

const styles = css`
    .loading-text {
        grid-column: 1 / 5;
        text-align: center;
    }

    .shop-wrapper {
        background-color: white;
        max-width: 100%;
        width: 1280px;
        margin: 0 auto;
        box-sizing: border-box;
        padding: 35px 30px;
    }

    .breadcrumbs {
        display: flex;

        a {
            color: #a99a6b;
            text-decoration: none;
        }
    }

    .breadcrumbs-slash::after {
        content: "/";
        margin: 0 0.5em;
        color: black;
    }

    .shop-container {
        margin-top: 35px;
        display: flex;
        flex-direction: column;
    }

    .shop-right {
        display: none;
    }

    .shop-container .shop-center {
        order: 3;
    }

    .shop-list-box {
        background-color: #e1e1e1;
        padding: 30px;
        margin-bottom: 20px;
        margin-top: 10px;
    }

    .shop-list-box ul {
        list-style: none;
        margin: 0;
        padding: 0;
        font-weight: 600;
    }

    .shop-list-box a {
        color: #c3a761;
        text-decoration: none;
        margin: 0.5em 0;
        font-size: 0.8rem;
    }

    .shop-list-box .shop-list-pushed {
        font-weight: 400;
        padding-left: 1em;
    }

    .shop-heading-one {
        font-size: 0.9rem;
        font-weight: 600;
    }

    .shop-heading-two {
        font-size: 0.75rem;
        font-weight: 600;
        margin: 1em 0 0.5em 0;
    }

    .shop-right ul {
        list-style: none;
        margin: 0;
        padding-left: 1em;
    }

    .shop-right ul a {
        color: black;
        text-decoration: none;
        margin: 0.5em 0;
        font-size: 0.8rem;
        font-weight: 600;
        text-transform: uppercase;
    }

    .shop-right .shop-heading-two {
        color: #a99a6b;
    }

    .shop-view-all {
        color: #a99a6b;
        text-decoration: none;
        font-size: 0.7rem;
        margin: 0.5em 0;
    }

    .shop-settings {
        background-color: #e1e1e1;
        width: 100%;
        border-top: 1px solid #cccccc;
        border-bottom: 1px solid #cccccc;
        box-sizing: border-box;
        padding: 10px;
        font-size: 0.75rem;
    }

    .shop-settings-upper {
        display: flex;
        justify-content: space-between;
        margin-bottom: 5px;
    }

    .shop-settings-view button {
        border: 0;
        background: none;
        color: #a99a6b;
        opacity: 0.5;
    }

    .shop-settings-view i {
        vertical-align: middle;
    }

    .shop-settings-view .shop-view-active {
        opacity: 1;
    }

    .shop-settings-items {
        font-weight: bold;
        margin-right: 10px;
    }

    .shop-card-container {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-auto-rows: 75vw;
        box-sizing: border-box;
        padding: 10px 0;
        grid-gap: 40px 15px;
    }

    .shop-card {
        width: 100%;
        text-align: center;
        position: relative;
        height: 100%;
        cursor: pointer;
    }

    .shop-card-image {
        border: 1px solid #e1e1e1;
        background-size: contain;
        background-position: center;
        background-repeat: no-repeat;
        height: 40vw;
    }

    .shop-card button {
        background-color: #a99a6b;
        color: white;
        padding: 10px 15px;
        border: 0;
        font-size: 0.7rem;
        font-weight: 600;
        margin: 5px;
    }

    .shop-card-cart-btn {
        position: absolute;
        bottom: 25px;
        transform: translateX(-50%);
    }

    .shop-card-price-btn {
        position: absolute;
        bottom: 20px;
        transform: translateX(-50%);
    }

    .shop-card-name {
        font-size: 0.75rem;
        color: black;
        font-weight: 600;
        margin-top: 5px;
    }

    .shop-card-price {
        font-size: 0.75rem;
        color: #a99a6b;
        margin-left: 10px;
    }

    .shop-card-price-container {
        margin: 10px 0 20px 0;
    }

    .shop-card-old-price {
        font-size: 0.75rem;
        color: #999999;
        text-decoration: line-through;
    }

    .shop-invisible {
        display: none;
        text-align: center;
        font-style: italic;
        margin: 20px 0 40px 0;
        color: #999999;
        font-size: 1.2rem;
    }

    .shop-card-container:empty + .shop-invisible {
        display: block;
    }

    /* Hide price button */
    .shop-card-standard .shop-card-price-btn,
    .shop-card-no-old-price .shop-card-price-btn {
        display: none;
    }

    /* Hide current/old price */
    .shop-card-no-old-price .shop-card-old-price,
    .shop-card-no-price .shop-card-old-price,
    .shop-card-no-price .shop-card-price {
        display: none;
    }

    /* Hide cart button */
    .shop-card-no-price .shop-card-cart-btn {
        display: none;
    }

    @media screen and (min-width: 768px) {
        .shop-container {
            flex-direction: row;
        }

        .shop-container > section {
            width: 20%;
        }

        .shop-container .shop-center {
            width: 60%;
            box-sizing: border-box;
            padding: 0 20px;
            order: unset;
        }

        .shop-card-container {
            grid-template-columns: repeat(4, 1fr);
            grid-auto-rows: 300px;
        }

        .shop-right {
            display: block;
        }

        .shop-card-image {
            height: 10vw;
        }
    }
`;

export default ShopCategory;
