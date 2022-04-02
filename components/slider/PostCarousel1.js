import Link from "next/link";
import React from "react";
import Slider from "react-slick";

const PostCarousel1 = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        // arrows: true,
    };
    return (
        <div>
            <div className="carausel-post-1 hover-up border-radius-10 overflow-hidden transition-normal position-relative wow fadeInUp animated">
                <div className="arrow-cover"></div>
                <Slider {...settings} className="slide-fade">
                    <div className="position-relative post-thumb">
                        <div
                            className="thumb-overlay img-hover-slide position-relative"
                            style={{
                                backgroundImage:
                                    "url(assets/imgs/news/news-4.jpg)",
                            }}
                        >
                            <Link href="/single">
                                <a className="img-link"></a>
                            </Link>
                            <span className="top-left-icon bg-warning">
                                <i className="elegant-icon icon_star_alt"></i>
                            </span>
                            <div className="post-content-overlay text-white ml-30 mr-30 pb-30">
                                <div className="entry-meta meta-0 font-small mb-20">
                                    <Link href="/category">
                                        <a>
                                            <span className="post-cat text-info text-uppercase">
                                                Travel
                                            </span>
                                        </a>
                                    </Link>
                                    <Link href="/category">
                                        <a>
                                            <span className="post-cat text-success text-uppercase">
                                                Animal
                                            </span>
                                        </a>
                                    </Link>
                                </div>
                                <h3 className="post-title font-weight-900 mb-20">
                                    <Link href="/single">
                                        <a className="text-white">
                                            Beachmaster Elephant Seal Fights off
                                            Rival Male, The match is
                                            uncompromising
                                        </a>
                                    </Link>
                                </h3>
                                <div className="entry-meta meta-1 font-small text-white mt-10 pr-5 pl-5">
                                    <span className="post-on">
                                        20 minutes ago
                                    </span>
                                    <span className="hit-count has-dot">
                                        23k Views
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="position-relative post-thumb">
                        <div
                            className="thumb-overlay img-hover-slide position-relative"
                            style={{
                                backgroundImage:
                                    "url(assets/imgs/news/news-6.jpg)",
                            }}
                        >
                            <Link href="/single">
                                <a className="img-link"></a>
                            </Link>
                            <span className="top-left-icon bg-danger">
                                <i className="elegant-icon icon_image"></i>
                            </span>
                            <div className="post-content-overlay text-white ml-30 mr-30 pb-30">
                                <div className="entry-meta meta-0 font-small mb-20">
                                    <Link href="/category">
                                        <a>
                                            <span className="post-cat text-info text-uppercase">
                                                Lifestyle
                                            </span>
                                        </a>
                                    </Link>
                                </div>
                                <h3 className="post-title font-weight-900 mb-20">
                                    <Link href="/single">
                                        <a
                                            className="text-white"
                                        >
                                            This genius photo experiment shows we
                                            are all just sheeple in the consumer
                                            matrix
                                        </a>
                                    </Link>
                                </h3>
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
                </Slider>
            </div>
        </div>
    );
};

export default PostCarousel1;
