import React from "react";
import { Link } from "@reach/router";
import { css } from "emotion";

import Header from "./Header";

const Brands = () => {
    return (
        <div className={styles}>
            <Header classNames="header-standard header-sticky" />

            <section className="brand-banner">
                <section className="brand-container">
                    <h3 className="brand-title">TOP BRANDS</h3>
                    <img
                        className="brand-logo"
                        src="/assets/img/hifi-logo.png"
                        alt="Hi-Fi Logo"
                    />
                </section>
            </section>
            <section className="brand-container">
                <section className="brand-wrapper">
                    <section className="brand-left">
                        <p className="brand-colour">
                            Here are just a few of the brands we stock:
                        </p>
                        <img
                            className="brand-brands"
                            src="/assets/img/brands.png"
                            alt="Brands"
                        />
                    </section>
                    <section className="brand-right">
                        <h3 className="brand-colour">BRANDS</h3>
                        <span className="brand-small">
                            <p>
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Laboriosam, minus.
                            </p>
                            <p>
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Corporis tenetur nemo ex iusto
                                magnam voluptatum voluptatem harum laborum
                                temporibus quia.
                            </p>
                            <p>
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Perspiciatis, ducimus?
                            </p>
                        </span>
                        <Link className="brand-colour" to="/shop">
                            VISIT OUR SHOP TO FIND MORE BRANDS&gt;
                        </Link>
                    </section>
                </section>
            </section>
        </div>
    );
};

const styles = css`
    .brand-banner {
        background-image: url("/assets/img/img05.jpg");
        background-size: cover;
        background-position: center;
    }

    .brand-banner > .brand-container {
        color: white;
        box-sizing: border-box;
        padding: 50px 15px;
        text-align: center;
    }

    .brand-wrapper {
        background-color: white;
        padding: 25px;
        box-sizing: border-box;
    }

    .brand-logo {
        height: 175px;
    }

    .brand-title {
        font-weight: 400;
        font-size: 1.5rem;
    }

    .brand-wrapper > section {
        width: 100%;
        box-sizing: border-box;
        padding: 20px;
        color: white;
    }

    .brand-wrapper > section p {
        margin: 1em 0;
    }

    .brand-colour {
        color: #a39161;
    }

    .brand-left {
        background-image: url("/assets/img/img01.jpg");
        background-position: top left;
    }

    .brand-right {
        background-image: url("/assets/img/img01.jpg");
        background-position: right;
    }

    .brand-container {
        max-width: 100%;
        width: 1280px;
        margin: 0 auto;
        box-sizing: border-box;
        padding: 0 20px;
    }

    .brand-small {
        font-size: 0.8rem;
    }

    .brand-brands {
        max-width: 100%;
    }

    @media screen and (min-width: 768px) {
        .brand-banner > .brand-container {
            display: flex;
            justify-content: space-between;
            align-items: center;
            text-align: left;
        }

        .brand-wrapper {
            display: flex;
        }
    }
`;

export default Brands;
