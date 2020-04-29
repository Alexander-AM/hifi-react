import React, { useState, useLayoutEffect } from "react";
import { Link } from "@reach/router";
import { css } from "emotion";

import Header from "./Header";

const Shop = () => {
    const [categories, setCategories] = useState([]);

    async function loadCategories() {
        // Data fetch
        fetch("https://hifi-corner.herokuapp.com/api/v1/categories", {
            method: "GET",
        })
            .then((response) => {
                return response.json();
            })
            .then((json) => {
                setCategories(json);
            });
    }

    const showCategories = () => {
        let curImage = 1;

        // Categories
        let output = categories.map((category, i) => {
            const out = (
                <section
                    key={`shop-${i}`}
                    style={{
                        backgroundImage: `url('/assets/img/img0${curImage}.jpg')`,
                    }}
                >
                    <Link to={`/shop-category-list/?cate=${category}`}>
                        {category}
                    </Link>
                </section>
            );

            curImage++;

            if (curImage > 5) {
                curImage = 1;
            }

            return out;
        });

        // "Shop By Brand" button
        output.splice(
            0,
            0,
            <section
                key={"shop-brand"}
                style={{ backgroundImage: "url('/assets/img/img01.jpg')" }}
            >
                <Link to="#">Shop by brand</Link>
            </section>
        );

        // "Shop Now" button
        output.push(
            <section key={"shop-now"} className="shop-button">
                <Link to="#">Shop Now</Link>
            </section>
        );

        return output;
    };

    useLayoutEffect(() => {
        loadCategories();
    }, []);

    return (
        <div className={styles}>
            <Header classNames="header-standard header-sticky" />

            <article className="shop-grid">
                {!categories.length ? <h1>Loading...</h1> : showCategories()}
            </article>
        </div>
    );
};

const styles = css`
    .shop-grid {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        margin: 0 auto;
        width: 100vw;

        .shop-button {
            background-color: #a39161;
            display: flex;
            align-items: center;
            justify-content: center;

            & > a {
                background-color: #685225;
                text-decoration: none;
                width: auto;
                height: auto;
                position: static;
                padding: 10px 15px;
                font-weight: 600;
            }
        }

        & > section {
            position: relative;
            width: 50vw;
            height: 50vw;
            background-size: cover;
            background-position: center;

            & > a {
                position: absolute;
                width: 100%;
                height: 100%;
                color: white;
                font-size: 1rem;
                display: flex;
                align-items: center;
                justify-content: center;
                text-transform: uppercase;
                padding: 20px;
                box-sizing: border-box;
                text-align: center;
            }

            @media screen and (min-width: 768px) {
                width: 15vw;
                height: 15vw;
            }
        }

        @media screen and (min-width: 768px) {
            grid-template-columns: repeat(4, 1fr);
            width: 60vw;
        }
    }
`;

export default Shop;
