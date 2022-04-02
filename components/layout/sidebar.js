import React from "react";
import Link from "next/link";
import PerfectScrollbar from 'react-perfect-scrollbar'
const Sidebar = ({ removeClass }) => {
    return (
        <>
            <aside
                id="sidebar-wrapper"
                className="custom-scrollbar offcanvas-sidebar"
            >
                <PerfectScrollbar>
                    <button className="off-canvas-close" onClick={removeClass}>
                        <i className="elegant-icon icon_close"></i>
                    </button>
                    <div className="sidebar-inner">
                        {/* <!--Categories--> */}
                        <div className="sidebar-widget widget_categories mb-50 mt-30">
                            <div className="widget-header-2 position-relative">
                                <h5 className="mt-5 mb-15">Hot topics</h5>
                            </div>
                            <div className="widget_nav_menu">
                                <ul>
                                    <li className="cat-item cat-item-2">
                                        <Link href="/category">
                                            <a>Travel tips</a>
                                        </Link>
                                        <span className="post-count">30</span>
                                    </li>
                                    <li className="cat-item cat-item-3">
                                        <Link href="/category-grid">
                                            <a>Book review</a>
                                        </Link>
                                        <span className="post-count">25</span>
                                    </li>
                                    <li className="cat-item cat-item-4">
                                        <Link href="/category-list">
                                            <a>Hotel review</a>
                                        </Link>
                                        <span className="post-count">16</span>
                                    </li>
                                    <li className="cat-item cat-item-5">
                                        <Link href="/category-masonry">
                                            <a>Destinations</a>
                                        </Link>
                                        <span className="post-count">22</span>
                                    </li>
                                    <li className="cat-item cat-item-6">
                                        <Link href="/category-big">
                                            <a>Lifestyle</a>
                                        </Link>
                                        <span className="post-count">25</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        {/* <!--Latest--> */}
                        <div className="sidebar-widget widget-latest-posts mb-50">
                            <div className="widget-header-2 position-relative mb-30">
                                <h5 className="mt-5 mb-30">Don't miss</h5>
                            </div>
                            <div className="post-block-list post-module-1 post-module-5">
                                <ul className="list-post">
                                    <li className="mb-30">
                                        <div className="d-flex hover-up-2 transition-normal">
                                            <div className="post-thumb post-thumb-80 d-flex mr-15 border-radius-5 img-hover-scale overflow-hidden">
                                                <Link href="/single">
                                                    <a className="color-white">
                                                        <img
                                                            src="assets/imgs/news/thumb-1.jpg"
                                                            alt=""
                                                        />
                                                    </a>
                                                </Link>
                                            </div>
                                            <div className="post-content media-body">
                                                <h6 className="post-title mb-15 text-limit-2-row font-medium">
                                                    <Link href="/single">
                                                        <a>
                                                            The Life of a Travel
                                                            Writer with David Farley
                                                        </a>
                                                    </Link>
                                                </h6>
                                                <div className="entry-meta meta-1 float-left font-x-small text-uppercase">
                                                    <span className="post-on">
                                                        05 August
                                                    </span>
                                                    <span className="post-by has-dot">
                                                        300 views
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="mb-30">
                                        <div className="d-flex hover-up-2 transition-normal">
                                            <div className="post-thumb post-thumb-80 d-flex mr-15 border-radius-5 img-hover-scale overflow-hidden">
                                                <Link href="/single">
                                                    <a className="color-white">
                                                        <img
                                                            src="assets/imgs/news/thumb-2.jpg"
                                                            alt=""
                                                        />
                                                    </a>
                                                </Link>
                                            </div>
                                            <div className="post-content media-body">
                                                <h6 className="post-title mb-15 text-limit-2-row font-medium">
                                                    <Link href="/single">
                                                        <a>
                                                            Why Don’t More Black
                                                            American Women Travel
                                                            Solo?
                                                        </a>
                                                    </Link>
                                                </h6>
                                                <div className="entry-meta meta-1 float-left font-x-small text-uppercase">
                                                    <span className="post-on">
                                                        12 August
                                                    </span>
                                                    <span className="post-by has-dot">
                                                        23k views
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="mb-30">
                                        <div className="d-flex hover-up-2 transition-normal">
                                            <div className="post-thumb post-thumb-80 d-flex mr-15 border-radius-5 img-hover-scale overflow-hidden">
                                                <Link href="/single">
                                                    <a className="color-white">
                                                        <img
                                                            src="assets/imgs/news/thumb-3.jpg"
                                                            alt=""
                                                        />
                                                    </a>
                                                </Link>
                                            </div>
                                            <div className="post-content media-body">
                                                <h6 className="post-title mb-15 text-limit-2-row font-medium">
                                                    <Link href="/single">
                                                        <a>
                                                            The 22 Best Things to
                                                            See and Do in Bangkok
                                                        </a>
                                                    </Link>
                                                </h6>
                                                <div className="entry-meta meta-1 float-left font-x-small text-uppercase">
                                                    <span className="post-on">
                                                        27 August
                                                    </span>
                                                    <span className="post-by has-dot">
                                                        23k views
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        {/* <!--Ads--> */}
                        <div className="sidebar-widget widget-ads">
                            <div className="widget-header-2 position-relative mb-30">
                                <h5 className="mt-5 mb-30">Advertise banner</h5>
                            </div>

                            <Link href="https://themeforest.net/user/alithemes/portfolio">
                                <a target="_blank">
                                    <img
                                        className="advertise-img border-radius-5"
                                        src="assets/imgs/ads/ads-1.jpg"
                                        alt=""
                                    />
                                </a>
                            </Link>
                        </div>
                    </div>
                </PerfectScrollbar>
            </aside>
        </>
    );
};

export default Sidebar;
