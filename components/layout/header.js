import Link from "next/link";
import React from "react";
import Menu from "./menu";

const Header = ({ addClass, openSearch }) => {
    return (
        <>
            <header className="main-header header-style-1 font-heading">
                <div className="header-top">
                    <div className="container">
                        <div className="row pt-20 pb-20">
                            <div className="col-md-3 col-xs-6">
                                <Link href="/">
                                    <a>
                                        <img
                                            className="logo"
                                            src="assets/imgs/theme/logo.png"
                                            alt=""
                                        />
                                    </a>
                                </Link>
                            </div>
                            <div className="col-md-9 col-xs-6 text-right header-top-right ">
                                <ul className="list-inline nav-topbar d-none d-md-inline">
                                    <li className="list-inline-item menu-item-has-children">
                                        <Link href="/#">
                                            <a>Layouts</a>
                                        </Link>
                                        <ul className="sub-menu font-small">
                                            <li className="menu-item-has-children">
                                                <Link href="/#">
                                                    <a>Pages</a>
                                                </Link>
                                                <ul className="sub-menu font-small">
                                                    <li>
                                                        <Link href="/page-about">
                                                            <a>About</a>
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link href="/page-contact">
                                                            <a>Contact</a>
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link href="/page-typography">
                                                            <a>Typography</a>
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link href="/page-register">
                                                            <a>Register</a>
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link href="/page-login">
                                                            <a>Login</a>
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link href="/page-search">
                                                            <a>Search</a>
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link href="/page-author">
                                                            <a>Author</a>
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link href="/page-404">
                                                            <a>404 page</a>
                                                        </Link>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li className="menu-item-has-children">
                                                <Link href="/#">
                                                    <a>Category</a>
                                                </Link>
                                                <ul className="sub-menu font-small">
                                                    <li>
                                                        <Link href="/category-list">
                                                            <a>List layout</a>
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link href="/category-grid">
                                                            <a>Grid layout</a>
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link href="/category-masonry">
                                                            <a>
                                                                Masonry layout
                                                            </a>
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link href="/category-big">
                                                            <a>Big layout</a>
                                                        </Link>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li className="menu-item-has-children">
                                                <Link href="/#">
                                                    <a>Single post</a>
                                                </Link>
                                                <ul className="sub-menu font-small">
                                                    <li>
                                                        <Link href="/single">
                                                            <a>Default</a>
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link href="/single-2">
                                                            <a>Big image</a>
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link href="/single-3">
                                                            <a>Left image</a>
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link href="/single-4">
                                                            <a>With sidebar</a>
                                                        </Link>
                                                    </li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </li>
                                    <li className="list-inline-item">
                                        <Link href="http://demos.alithemes.com/html/stories/docs/">
                                            <a>
                                                <i className="elegant-icon icon_document_alt mr-5"></i>
                                                Document
                                            </a>
                                        </Link>
                                    </li>
                                </ul>
                                <span className="vertical-divider mr-20 ml-20 d-none d-md-inline"></span>
                                <button className="search-icon d-none d-md-inline" onClick={openSearch}>
                                    <span className="mr-15 text-muted font-small">
                                        <i className="elegant-icon icon_search mr-5"></i>
                                        Search
                                    </span>
                                </button>
                                {/* <button className="btn btn-radius bg-primary text-white ml-15 font-small box-shadow">
                                    Buy Now
                                </button> */}
                            </div>
                        </div>
                    </div>
                </div>
                <Menu addClass={addClass} />
            </header>
        </>
    );
};

export default Header;
