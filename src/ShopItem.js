import React, { useLayoutEffect, useState } from "react";
import { css } from "emotion";
import { Link } from "@reach/router";

import Header from "./Header";

const ShopItem = (props) => {
    const [product, setProduct] = useState({});

    const isEmpty = (obj) => {
        for (let prop in obj) {
            if (obj.hasOwnProperty(prop)) {
                return false;
            }
        }

        return JSON.stringify(obj) === JSON.stringify({});
    };

    useLayoutEffect(() => {
        if (isEmpty(product)) {
            fetch(
                "https://hifi-corner.herokuapp.com/api/v1/products/" + props.id,
                {
                    method: "GET",
                }
            )
                .then((response) => {
                    return response.json();
                })
                .then((json) => {
                    setProduct(json);
                });
        }
    }, []);

    return (
        <div className={styles}>
            <Header
                category="All"
                brand="All"
                classNames="header-shop header-sticky"
            />

            <article className="shop-wrapper">
                <article className="breadcrumbs">
                    <Link to="/shop/">Home</Link>
                    <span className="breadcrumbs-slash"></span>
                    <Link
                        to={`/shop/list/${product.category}`}
                        className="shop-editable-breadcrumbs-category"
                    >
                        {!isEmpty(product) ? product.category : "Loading..."}
                    </Link>
                    <span className="breadcrumbs-slash"></span>
                    <span className="shop-editable-breadcrump-name">
                        {!isEmpty(product)
                            ? `${product.make} ${product.model}`
                            : "Loading..."}
                    </span>
                </article>

                <section className="shop-container">
                    <img
                        className="shop-banner"
                        src="/assets/img/placeholder_banner.png"
                        alt=""
                    />

                    <section className="shop-item-container">
                        <section>
                            <div
                                className="shop-item-image shop-editable-image"
                                style={
                                    !isEmpty(product)
                                        ? {
                                              backgroundImage: `url('${product.images[0]}')`,
                                          }
                                        : {}
                                }
                            ></div>
                            <h2 className="golden-text">MORE VIEWS</h2>
                            <div className="shop-item-image-options shop-editable-image-options">
                                {!isEmpty(product) ? (
                                    product.images.map((image, i) => {
                                        return (
                                            <img
                                                key={`image-option-${i}`}
                                                alt=""
                                                src={image}
                                            />
                                        );
                                    })
                                ) : (
                                    <span></span>
                                )}
                            </div>
                        </section>

                        <section className="shop-item-container-right">
                            <h2 className="shop-item-name golden-text shop-editable-name">
                                {!isEmpty(product)
                                    ? `${product.make} ${product.model}`
                                    : "Loading..."}
                            </h2>
                            <section className="shop-price-wrapper">
                                <span className="golden-text">
                                    See other Marantz products
                                </span>
                                <div>
                                    {product["old-price"] ? (
                                        <span className="shop-old-price">
                                            £
                                            <span className="shop-editable-old-price">
                                                {product["old-price"]}
                                            </span>
                                        </span>
                                    ) : (
                                        <span></span>
                                    )}
                                    {product.price ? (
                                        <span className="shop-price">
                                            £
                                            <span className="shop-editable-price">
                                                {product.price}
                                            </span>
                                        </span>
                                    ) : (
                                        ""
                                    )}
                                </div>
                            </section>
                            <p className="shop-description shop-editable-description">
                                {!isEmpty(product)
                                    ? product.description
                                    : "Loading..."}
                            </p>
                            <section>
                                <Link className="golden-button" to="">
                                    ASK A QUESTION
                                </Link>
                                <Link className="golden-button" to="">
                                    PART EXCHANGE
                                </Link>
                                <Link className="golden-button" to="">
                                    PAY BY FINANCE
                                </Link>
                                <Link className="golden-button" to="">
                                    SEEN A BETTER PRICE?
                                </Link>
                            </section>
                            <section>
                                <form action="">
                                    <section className="shop-final-changes">
                                        <section>
                                            <p className="required-field">
                                                Finish
                                            </p>

                                            <div className="shop-radio">
                                                <input
                                                    type="radio"
                                                    name="finish"
                                                    id="finish-black"
                                                />
                                                <label htmlFor="finish-black">
                                                    Black
                                                </label>
                                            </div>

                                            <div className="shop-radio">
                                                <input
                                                    type="radio"
                                                    name="finish"
                                                    id="finish-silver"
                                                />
                                                <label htmlFor="finish-silver">
                                                    Silver
                                                </label>
                                            </div>
                                        </section>
                                        <section>
                                            <p className="shop-required-fields">
                                                * Required Fields
                                            </p>
                                        </section>
                                    </section>
                                    <div className="shop-pay">
                                        <section>
                                            <span>Qty:</span>
                                            <input
                                                type="number"
                                                defaultValue="1"
                                                className="shop-cart-amount"
                                            />
                                        </section>
                                        <section className="shop-pay-side">
                                            <button className="golden-button golden-button-large">
                                                ADD TO CART
                                            </button>
                                            <p className="shop-pay-or">-OR-</p>
                                            <button className="shop-paypal-button">
                                                <img
                                                    src="https://fpdbs.paypal.com/dynamicimageweb?cmd=_dynamic-image&buttontype=ecshortcut&locale=en_GB"
                                                    alt=""
                                                />
                                            </button>
                                        </section>
                                    </div>
                                </form>
                            </section>
                            <section>
                                <h2 className="golden-text">
                                    ADDITIONAL INFORMATION
                                </h2>
                                <table className="info-table">
                                    <tbody className="shop-editable-info-table"></tbody>
                                </table>
                            </section>
                        </section>
                    </section>
                    <section>
                        <h2 className="golden-text">DESCRIPTION</h2>
                        <table className="specs-table">
                            <tbody className="shop-editable-specs-table">
                                {!isEmpty(product) ? (
                                    <tr>
                                        <td>{product.make}</td>
                                        <td>{product.model}</td>
                                    </tr>
                                ) : (
                                    <tr></tr>
                                )}
                            </tbody>
                        </table>
                    </section>
                    <Link to="#">
                        <img
                            className="shop-banner"
                            src="/assets/img/placeholder_banner_bottom.png"
                            alt="Banner"
                        />
                    </Link>
                </section>
            </article>
        </div>
    );
};

const styles = css`
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

        & > section {
            width: 100%;
        }
    }

    .shop-banner {
        width: 100%;
    }

    .shop-item-image {
        width: 100%;
        height: 39vw;
        border: 1px solid #e1e1e1;
        background-size: contain;
        background-position: center;
        background-repeat: no-repeat;
    }

    .shop-item-image-options {
        display: grid;
        grid-template-columns: repeat(10, 1fr);
        grid-gap: 10px;

        img {
            max-width: 100%;
            max-height: 100%;
        }
    }

    .golden-button {
        background-color: #a99a6b;
        color: white;
        font-weight: 600;
        font-size: 0.75rem;
        padding: 5px 10px;
        text-decoration: none;
        border: 0;
        display: inline-block;
        margin-bottom: 15px;
        margin-right: 5px;
    }

    .golden-button-large {
        padding: 10px 35px;
        margin-bottom: 0;
    }

    .info-table {
        border: 1px solid #cccccc;
        font-weight: 600;
        border-spacing: 0;
        white-space: nowrap;

        tr {
            td {
                padding: 10px;

                &:not(:last-child) {
                    border-right: 1px solid #cccccc;
                }
            }

            &:not(:last-child) {
                & > td {
                    border-bottom: 1px solid #cccccc;
                }

                td:first-child {
                    background-color: #e1e1e1;
                }

                td:last-child {
                    width: 100%;
                    white-space: pre-wrap;
                }
            }
        }
    }

    .shop-final-changes {
        border: 1px solid #999999;
        border-bottom: 0;
        padding: 15px 20px;
        display: flex;

        & > section {
            width: 100%;
        }
    }

    .shop-required-fields {
        color: #ee0000;
        text-align: right;
    }

    .shop-pay {
        border: 1px solid #999999;
        background-color: #e1e1e1;
        padding: 15px 20px;
        display: flex;
    }

    .specs-table {
        width: 100%;
        margin-bottom: 10px;

        @media screen and (min-width: 768px) {
            width: 50%;
        }

        tr > td:last-child {
            text-align: right;
        }
    }

    .shop-price {
        color: #a99a6b;
        font-size: 1.25rem;
    }

    .shop-old-price {
        color: #999999;
        text-decoration: line-through;
    }

    .shop-radio {
        background-color: #e1e1e1;
        padding: 10px 15px;
        margin: 10px 0;
    }

    .required-field::after {
        content: "*";
        color: #ee0000;
    }

    .shop-price-wrapper {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .shop-cart-amount::-webkit-inner-spin-button,
    .shop-cart-amount::-webkit-outer-spin-button {
        -webkit-appearance: none;
        margin: 0;
    }

    .shop-cart-amount {
        border: 1px solid #999999;
        padding: 10px 15px;
        width: 50px;
        box-sizing: border-box;
        text-align: center;
        font-size: 0.75rem;
    }

    .shop-paypal-button {
        padding: 0;
        background: none;
        border: 0;
    }

    .shop-pay-side {
        text-align: center;
        margin-left: 5px;
    }

    .shop-pay-or {
        color: #a99a6b;
        margin: 5px 0;
    }

    .golden-text {
        color: #a99a6b;
    }

    .shop-description {
        font-size: 0.8rem;
        margin: 25px 0;
    }

    .shop-item-container {
        @media screen and (min-width: 768px) {
            display: flex;
        }

        &-right {
            @media screen and (min-width: 768px) {
                padding-left: 35px;
                box-sizing: border-box;
            }
        }
    }
`;

export default ShopItem;
