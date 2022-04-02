import React, { useState } from "react";
import Slider from "react-slick";

export default function VerticalCarousel() {
    const [nav1, setNav1] = useState();
    const [nav2, setNav2] = useState();

    return (
        <>
            <div className="featured-slider-2">
                <div className="featured-slider-2-items" style={{ overflow: "hidden" }}>
                    <Slider asNavFor={nav2} ref={(slider1) => setNav1(slider1)}>
                        <div className="slider-single">
                            <div className="post-thumb position-relative">
                                <div
                                    className="thumb-overlay position-relative"
                                    style={{
                                        backgroundImage:
                                            "url(assets/imgs/news/news-16.jpg)",
                                    }}
                                >
                                    <div className="post-content-overlay">
                                        <div className="container">
                                            <div className="entry-meta meta-0 font-small mb-20">
                                                <a
                                                    href="/category"
                                                    tabIndex="0"
                                                >
                                                    <span className="post-cat text-info text-uppercase">
                                                        Travel
                                                    </span>
                                                </a>
                                                <a
                                                    href="/category"
                                                    tabIndex="0"
                                                >
                                                    <span className="post-cat text-warning text-uppercase">
                                                        Animal
                                                    </span>
                                                </a>
                                            </div>
                                            <h1 className="post-title mb-20 font-weight-900 text-white">
                                                <a
                                                    className="text-white"
                                                    href="/single"
                                                    tabIndex="0"
                                                >
                                                    How to Visit Bali's Monkey
                                                    Forest
                                                </a>
                                            </h1>
                                            <div className="entry-meta meta-1 font-small text-white mt-10 pr-5 pl-5">
                                                <span className="post-on">
                                                    26 August 2020
                                                </span>
                                                <span className="hit-count has-dot">
                                                    18k Views
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="slider-single">
                            <div className="post-thumb position-relative">
                                <div
                                    className="thumb-overlay position-relative"
                                    style={{
                                        backgroundImage:
                                            "url(assets/imgs/news/news-17.jpg)",
                                    }}
                                >
                                    <div className="post-content-overlay">
                                        <div className="container">
                                            <div className="entry-meta meta-0 font-small mb-20">
                                                <a
                                                    href="/category"
                                                    tabIndex="0"
                                                >
                                                    <span className="post-cat text-info text-uppercase">
                                                        Lifestyle
                                                    </span>
                                                </a>
                                                <a
                                                    href="/category"
                                                    tabIndex="0"
                                                >
                                                    <span className="post-cat text-warning text-uppercase">
                                                        Destinations
                                                    </span>
                                                </a>
                                            </div>
                                            <h1 className="post-title mb-20 font-weight-900 text-white">
                                                <a
                                                    className="text-white"
                                                    href="/single"
                                                    tabIndex="0"
                                                >
                                                    Abstract Australia from
                                                    Above
                                                </a>
                                            </h1>
                                            <div className="entry-meta meta-1 font-small text-white mt-10 pr-5 pl-5">
                                                <span className="post-on">
                                                    15 September 2020
                                                </span>
                                                <span className="hit-count has-dot">
                                                    23k Views
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="slider-single">
                            <div className="post-thumb position-relative">
                                <div
                                    className="thumb-overlay position-relative"
                                    style={{
                                        backgroundImage:
                                            "url(assets/imgs/news/news-18.jpg)",
                                    }}
                                >
                                    <div className="post-content-overlay">
                                        <div className="container">
                                            <div className="entry-meta meta-0 font-small mb-20">
                                                <a
                                                    href="/category"
                                                    tabIndex="0"
                                                >
                                                    <span className="post-cat text-warning text-uppercase">
                                                        Travel Tips
                                                    </span>
                                                </a>
                                            </div>
                                            <h1 className="post-title mb-20 font-weight-900 text-white">
                                                <a
                                                    className="text-white"
                                                    href="/single"
                                                    tabIndex="0"
                                                >
                                                    Tips for Scuba Diving the
                                                    Great Barrier Reef
                                                </a>
                                            </h1>
                                            <div className="entry-meta meta-1 font-small text-white mt-10 pr-5 pl-5">
                                                <span className="post-on">
                                                    15 September 2020
                                                </span>
                                                <span className="hit-count has-dot">
                                                    17k Views
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="slider-single">
                            <div className="post-thumb position-relative">
                                <div
                                    className="thumb-overlay position-relative"
                                    style={{
                                        backgroundImage:
                                            "url(assets/imgs/news/news-19.jpg)",
                                    }}
                                >
                                    <div className="post-content-overlay">
                                        <div className="container">
                                            <div className="entry-meta meta-0 font-small mb-20">
                                                <a
                                                    href="/category"
                                                    tabIndex="0"
                                                >
                                                    <span className="post-cat text-info text-uppercase">
                                                        Hotel
                                                    </span>
                                                </a>
                                                <a
                                                    href="/category"
                                                    tabIndex="0"
                                                >
                                                    <span className="post-cat text-warning text-uppercase">
                                                        Healthy
                                                    </span>
                                                </a>
                                            </div>
                                            <h1 className="post-title mb-20 font-weight-900 text-white">
                                                <a
                                                    className="text-white"
                                                    href="/single"
                                                    tabIndex="0"
                                                >
                                                    Staying at the Hilton
                                                    Seychelles Northolme Resort
                                                    & Spa
                                                </a>
                                            </h1>
                                            <div className="entry-meta meta-1 font-small text-white mt-10 pr-5 pl-5">
                                                <span className="post-on">
                                                    22 September 2020
                                                </span>
                                                <span className="hit-count has-dot">
                                                    16k Views
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Slider>
                </div>

                <div className="container position-relative">
                    <div className="arrow-cover color-white"></div>
                    <div className="featured-slider-2-nav-cover">
                        <Slider
                            asNavFor={nav1}
                            ref={(slider2) => setNav2(slider2)}
                            slidesToShow={3}
                            swipeToSlide={true}
                            focusOnSelect={true}
                            vertical={true}
                            className="featured-slider-2-nav"
                        >
                            <div className="slider-post-thumb mr-15 mt-20 position-relative">
                                <div className="d-flex hover-up-2 transition-normal">
                                    <div className="post-thumb post-thumb-80 d-flex mr-15 border-radius-5">
                                        <img
                                            className="border-radius-5"
                                            src="assets/imgs/news/thumb-16.jpg"
                                            alt=""
                                        />
                                    </div>
                                    <div className="post-content media-body text-white">
                                        <h5 className="post-title mb-15 text-limit-2-row">
                                            How to Visit Bali's Monkey Forest
                                        </h5>
                                        <div className="entry-meta meta-1 float-left font-x-small text-uppercase">
                                            <span className="post-on text-white">
                                                26 Aug
                                            </span>
                                            <span className="post-by has-dot text-white">
                                                18k views
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="slider-post-thumb mr-15 mt-20 position-relative">
                                <div className="d-flex hover-up-2 transition-normal">
                                    <div className="post-thumb post-thumb-80 d-flex mr-15 border-radius-5">
                                        <img
                                            className="border-radius-5"
                                            src="assets/imgs/news/thumb-17.jpg"
                                            alt=""
                                        />
                                    </div>
                                    <div className="post-content media-body text-white">
                                        <h5 className="post-title mb-15 text-limit-2-row">
                                            Abstract Australia from Above
                                        </h5>
                                        <div className="entry-meta meta-1 float-left font-x-small text-uppercase">
                                            <span className="post-on text-white">
                                                15 Sep
                                            </span>
                                            <span className="post-by has-dot text-white">
                                                23k views
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="slider-post-thumb mr-15 mt-20 position-relative">
                                <div className="d-flex hover-up-2 transition-normal">
                                    <div className="post-thumb post-thumb-80 d-flex mr-15 border-radius-5">
                                        <img
                                            className="border-radius-5"
                                            src="assets/imgs/news/thumb-18.jpg"
                                            alt=""
                                        />
                                    </div>
                                    <div className="post-content media-body text-white">
                                        <h5 className="post-title mb-15 text-limit-2-row">
                                            Tips for Scuba Diving the Great
                                            Barrier Reef
                                        </h5>
                                        <div className="entry-meta meta-1 float-left font-x-small text-uppercase">
                                            <span className="post-on text-white">
                                                18 Sep
                                            </span>
                                            <span className="post-by has-dot text-white">
                                                17k views
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="slider-post-thumb mr-15 mt-20 position-relative">
                                <div className="d-flex hover-up-2 transition-normal">
                                    <div className="post-thumb post-thumb-80 d-flex mr-15 border-radius-5">
                                        <img
                                            className="border-radius-5"
                                            src="assets/imgs/news/thumb-19.jpg"
                                            alt=""
                                        />
                                    </div>
                                    <div className="post-content media-body text-white">
                                        <h5 className="post-title mb-15 text-limit-2-row">
                                            Staying at the Hilton Seychelles
                                            Northolme Resort & Spa
                                        </h5>
                                        <div className="entry-meta meta-1 float-left font-x-small text-uppercase">
                                            <span className="post-on text-white">
                                                22 Sep
                                            </span>
                                            <span className="post-by has-dot text-white">
                                                16k views
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Slider>
                    </div>
                </div>
            </div>
        </>
    );
}
