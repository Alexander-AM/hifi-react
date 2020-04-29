import React from "react";
import { Link } from "@reach/router";
import { css } from "emotion";

const Footer = () => {
    return (
        <footer id="footer" className={styles}>
            <section id="footer-left">
                <address>
                    <p> Hi - Fi Corner </p>
                    <p> Edinburgh 2 Joppa Roa EH15 2 EU </p>
                    <p> Falkirk 44 Cow Wynd FK1 1 PU </p>
                </address>
                <p id="footer-returns">
                    <Link to="#"> Returns &amp; Refunds </Link> |
                    <Link to="#"> Privacy Policy </Link>
                </p>
            </section>
            <section id="footer-right">
                <ul id="footer-payment">
                    <li>
                        <i className="fab fa-cc-visa"> </i>
                    </li>
                    <li>
                        <i className="fab fa-cc-mastercard"> </i>
                    </li>
                    <li>
                        <i className="fab fa-cc-jcb"> </i>
                    </li>
                    <li>
                        <i className="fab fa-cc-paypal"> </i>
                    </li>
                </ul>
                <ul id="footer-socials">
                    <li>
                        <Link to="https://www.facebook.com/">
                            <i className="fab fa-facebook-f"> </i>
                        </Link>
                    </li>
                    <li>
                        <Link to="https://www.youtube.com/">
                            <i className="fab fa-youtube"> </i>
                        </Link>
                    </li>
                    <li>
                        <Link to="https://www.twitter.com/">
                            <i className="fab fa-twitter"> </i>
                        </Link>
                    </li>
                    <li>
                        <Link to="https://www.instagram.com/">
                            <i className="fab fa-instagram"> </i>
                        </Link>
                    </li>
                </ul>
            </section>
        </footer>
    );
};

const styles = css`
    background-color: #a39161;
    box-sizing: border-box;
    width: 100%;
    padding: 10px 20px;
    font-size: 0.8rem;
    color: white;

    a {
        color: white;
    }

    address {
        color: black;
        padding: 10px;
    }

    ul {
        list-style: none;
        margin: 0;
        display: flex;
        padding: 5px;
    }

    #footer-payment {
        font-size: 2rem;
    }

    #footer-socials a {
        text-decoration: none;
    }

    #footer-socials i {
        border-radius: 50px;
        border: 1px solid white;
        width: 2em;
        height: 2em;
        display: flex;
        align-items: center;
        justify-content: center;
        margin-right: 5px;
    }

    #footer-payment i {
        margin-right: 10px;
        vertical-align: top;
    }

    #footer-returns {
        padding: 10px;
    }

    @media screen and (min-width: 768px) {
        display: flex;
        justify-content: space-between;
        padding: 20px 40px;

        address {
            padding: 0 50px 0 0;
        }

        ul {
            padding: 0;
            margin-right: 20px;
        }

        #footer-returns {
            padding: 0;
        }

        #footer-left {
            display: flex;
        }

        #footer-right {
            display: flex;
        }
    }
`;

export default Footer;
