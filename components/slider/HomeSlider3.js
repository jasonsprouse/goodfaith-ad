import Link from "next/link";
import React from "react";
import Slider from "react-slick";

const HomeSlider3 = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoPlay: true,
    };
    return (
        <div>
            <Slider {...settings} className="featured-slider-3-items">
                <div className="slider-single overflow-hidden border-radius-10">
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
                                        <Link href="/category"><a tabIndex="0">
                                            <span className="post-cat text-info text-uppercase">
                                                Travel
                                            </span>
                                        </a></Link>
                                        <Link href="/category"><a tabIndex="0">
                                            <span className="post-cat text-warning text-uppercase">
                                                Animal
                                            </span>
                                        </a></Link>
                                    </div>
                                    <h1 className="post-title mb-20 font-weight-900 text-white">
                                        <Link href="/single"><a
                                            className="text-white"

                                            tabIndex="0"
                                        >
                                            How to Visit Bali's Monkey Forest
                                        </a></Link>
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
                <div className="slider-single overflow-hidden border-radius-10">
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
                                        <Link href="/category"><a tabIndex="0">
                                            <span className="post-cat text-info text-uppercase">
                                                Lifestyle
                                            </span>
                                        </a></Link>
                                        <Link href="/category"><a tabIndex="0">
                                            <span className="post-cat text-warning text-uppercase">
                                                Destinations
                                            </span>
                                        </a></Link>
                                    </div>
                                    <h1 className="post-title mb-20 font-weight-900 text-white">
                                        <Link href="/single"><a
                                            className="text-white"

                                            tabIndex="0"
                                        >
                                            Abstract Australia from Above
                                        </a></Link>
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
                <div className="slider-single overflow-hidden border-radius-10">
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
                                        <Link href="/category"><a tabIndex="0">
                                            <span className="post-cat text-warning text-uppercase">
                                                Travel Tips
                                            </span>
                                        </a></Link>
                                    </div>
                                    <h1 className="post-title mb-20 font-weight-900 text-white">
                                        <Link href="/single"><a
                                            className="text-white"

                                            tabIndex="0"
                                        >
                                            Tips for Scuba Diving the Great
                                            Barrier Reef
                                        </a></Link>
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
                <div className="slider-single overflow-hidden border-radius-10">
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
                                        <Link href="/category"><a tabIndex="0">
                                            <span className="post-cat text-info text-uppercase">
                                                Hotel
                                            </span>
                                        </a></Link>
                                        <Link href="/category"><a tabIndex="0">
                                            <span className="post-cat text-warning text-uppercase">
                                                Healthy
                                            </span>
                                        </a></Link>
                                    </div>
                                    <h1 className="post-title mb-20 font-weight-900 text-white">
                                        <Link href="/single"><a
                                            className="text-white"

                                            tabIndex="0"
                                        >
                                            Staying at the Hilton Seychelles
                                            Northolme Resort & Spa
                                        </a></Link>
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
    );
};

export default HomeSlider3;
