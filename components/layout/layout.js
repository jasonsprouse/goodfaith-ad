import React, { useState } from "react";
import Bottom from "./bottom";
import Search from "../elements/search";
import Footer from "./footer";
import Header from "./header";
import Sidebar from "./sidebar";
import BackToTop from "../elements/backToTop";
import Head from "next/head";

const Layout = ({ children }) => {
    const addClass = () => {
        document.body.classList.add("canvas-opened");
    };

    const removeClass = () => {
        document.body.classList.remove("canvas-opened");
    };

    const openSearch = () => {
        document.body.classList.toggle("open-search-form");
    };

    return (
        <>
            <Head>
                <title>Stories - Personal Blog HTML Template</title>
                <meta property="og:title" content="My page title" key="title" />
                <link href="https://fonts.googleapis.com/css2?family=Crimson+Text:ital,wght@0,400;0,700;1,400&family=Noto+Sans+JP:wght@400;500;700;900&display=swap" rel="stylesheet" />
            </Head>
            <Sidebar removeClass={removeClass} />
            <Header addClass={addClass} openSearch={openSearch} />
            <Search />

            {children}

            <Bottom />
            <Footer removeClass={removeClass} />
            <BackToTop />
        </>
    );
};

export default Layout;
