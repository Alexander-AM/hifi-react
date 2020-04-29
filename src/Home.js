import React from "react";
import { Link } from "@reach/router";
import { css } from "emotion";

import Header from "./Header";

const Home = () => {
    return (
        <div className={styles}>
            <Header classNames="header-frontpage" />

            <section id="top-banner">
                <img
                    id="top-banner-logo"
                    src="/assets/img/hifi-logo.png"
                    alt="Hi-Fi Logo"
                />
            </section>
            <section id="top-2-banner">
                <h1>
                    OUR EDINBURGH SHOWROOM HAS NOW MOVED TO STUNNING NEW
                    PREMISES ON JOPPA ROAD
                </h1>
            </section>
            <article className="product-scroller">
                <h2 className="product-scroller-title"> PRIMALUNA SOUNDS </h2>
                <button className="product-scroller-arrow product-scroller-arrow-left">
                    <i className="fa fa-chevron-left"> </i>
                </button>
                <img
                    className="product-scroller-product"
                    src="/assets/img/scrolly-img01.jpg"
                    alt=""
                />
                <button className="product-scroller-arrow product-scroller-arrow-right">
                    <i className="fa fa-chevron-right"> </i>
                </button>
            </article>
            <article className="triple-sides">
                <section
                    style={{
                        backgroundImage: "url('/assets/img/img03.jpg')",
                    }}
                >
                    <i className="fab fa-facebook"> </i>
                </section>
                <section
                    style={{
                        backgroundImage: "url('/assets/img/img02.jpg')",
                    }}
                >
                    <i className="fab fa-facebook"> </i>
                </section>
                <section
                    style={{
                        backgroundImage: "url('/assets/img/img01.jpg')",
                    }}
                >
                    <i className="fab fa-facebook"> </i>
                </section>
            </article>
            <article className="info-sides">
                <div className="info-sides-inner">
                    <section className="info-sides-item">
                        <Link className="info-sides-item-title" to="#">
                            HISTORY
                        </Link>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit.Ducimus, autem velit.Quod obcaecati quo
                            debitis.
                        </p>
                    </section>
                    <section className="info-sides-item">
                        <Link className="info-sides-item-title" to="#">
                            NEWS
                        </Link>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit.Ducimus, autem velit.Quod obcaecati quo
                            debitis.
                        </p>
                    </section>
                    <section className="info-sides-item">
                        <Link className="info-sides-item-title" to="#">
                            SHOP
                        </Link>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit.Ducimus, autem velit.Quod obcaecati quo
                            debitis.
                        </p>
                    </section>
                </div>
            </article>
        </div>
    );
};

const styles = css`
    #top-banner {
        background: url(/assets/img/img01.jpg);
        background-size: cover;
        background-position: center;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 180px 50px 100px 50px;
    }

    #top-2-banner {
        background: url(/assets/img/img05.jpg);
        background-size: cover;
        background-position: center;
        padding: 100px 50px 100px 50px;
        text-align: center;
        color: white;
    }

    #top-banner-logo {
        max-width: 227px;
        width: 50vw;
    }

    .triple-sides > section {
        height: 100vw;
        width: 100%;
        display: flex;
        color: white;
        justify-content: center;
        align-items: center;
        font-size: 10rem;
        background-size: cover;
        background-position: center;
    }

    .info-sides {
        background-color: #101010;
        color: white;
        justify-content: center;
        padding: 60px 10px 120px 10px;
    }

    .info-sides-inner {
        width: 900px;
        max-width: 100%;
    }

    .info-sides-item {
        box-sizing: border-box;
        text-align: center;
        text-transform: uppercase;
        padding: 20px 10px;
    }

    .info-sides-item-title {
        color: #a39161;
        padding: 5px 15px;
        border: 1px solid white;
        display: inline-block;
        text-decoration: none;
        margin-bottom: 10px;
        font-weight: 600;
    }

    .product-scroller {
        width: 100%;
        background-color: white;
        position: relative;
        display: block;
        padding: 30px;
        box-sizing: border-box;
        height: 150vw;
    }

    .product-scroller-title {
        position: static;
        line-height: 1em;
        font-weight: normal;
        color: #a09167;
        margin: 0;
        font-size: 10vw;
        text-align: center;
    }

    .product-scroller-arrow {
        background: none;
        border: 0;
        font-size: 4rem;
        padding: 0 0.25em;
        color: #c0ab9f;
        position: absolute;
        top: 40px;
    }

    .product-scroller-arrow-left {
        left: 5px;
    }

    .product-scroller-arrow-right {
        right: 5px;
    }

    .product-scroller-product {
        width: 100%;
    }

    @media screen and (min-width: 768px) {
        #top-banner-logo {
            width: 7.5vw;
        }

        .product-scroller-title {
            font-size: 2.5rem;
            position: absolute;
            top: 75px;
            left: 70px;
            max-width: 100%;
            width: 400px;
            text-align: left;
        }

        .product-scroller {
            display: flex;
            justify-content: space-between;
            align-items: center;
            height: 450px;
        }

        .product-scroller-arrow {
            position: static;
        }

        .info-sides {
            display: flex;
        }

        .info-sides-inner {
            display: flex;
        }

        .info-sides-item {
            padding: 10px;
        }

        .triple-sides {
            display: flex;
        }

        .triple-sides > section {
            height: 25vw;
        }

        .product-scroller-product {
            height: 100%;
            width: auto;
        }
    }
`;

export default Home;
