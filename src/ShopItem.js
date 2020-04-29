import React from "react";
import { css } from "emotion";

import Header from "./Header";

const ShopItem = (props) => {
    return (
        <div className={styles}>
            <Header classNames="header-shop header-sticky" />
        </div>
    );
};

const styles = css``;

export default ShopItem;
