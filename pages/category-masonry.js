import Link from "next/link";
import Layout from "./../components/layout/layout";
function CaregoryMasonary() {
    return (
        <>
            <Layout>
                <main>
                    {/* <!--archive header--> */}
                    <div className="archive-header pt-50 text-center pb-50">
                        <div className="container">
                            <h2 className="font-weight-900">Hotels Review</h2>
                            <div className="breadcrumb">
                                <Link href="/index">
                                    <a rel="nofollow">
                                        Home
                                    </a>
                                </Link>
                                <span></span> Hotels Review
                            </div>
                        </div>
                    </div>
                    <div className="container">
                        {/* <!--Loop Masonry--> */}
                        <div className="grid row mb-30">
                            <div className="grid-sizer"></div>
                            <article className="grid-item col pb-50 wow fadeIn animated">
                                <div className="post-card-1 border-radius-10 hover-up">
                                    <div
                                        className="post-thumb thumb-overlay img-hover-slide position-relative"
                                        style={{
                                            backgroundImage:
                                                "url(assets/imgs/news/news-1.jpg)",
                                        }}
                                    >
                                        <Link href="/single">
                                            <a
                                                className="img-link"
                                            ></a>
                                        </Link>
                                        <span className="top-right-icon bg-success">
                                            <i className="elegant-icon icon_camera_alt"></i>
                                        </span>
                                        <ul className="social-share">
                                            <li>
                                                <Link href="/#">
                                                    <a>
                                                        <i className="elegant-icon social_share"></i>
                                                    </a>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="/#">
                                                    <a
                                                        className="fb"
                                                        title="Share on Facebook"
                                                        target="_blank"
                                                    >
                                                        <i className="elegant-icon social_facebook"></i>
                                                    </a>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="/#">
                                                    <a
                                                        className="tw"
                                                        target="_blank"
                                                        title="Tweet now"
                                                    >
                                                        <i className="elegant-icon social_twitter"></i>
                                                    </a>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="/#">
                                                    <a
                                                        className="pt"
                                                        target="_blank"
                                                        title="Pin it"
                                                    >
                                                        <i className="elegant-icon social_pinterest"></i>
                                                    </a>
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="post-content p-30">
                                        <div className="entry-meta meta-0 font-small mb-10">
                                            <Link href="/category">
                                                <a>
                                                    <span className="post-cat text-info">
                                                        Travel
                                                    </span>
                                                </a>
                                            </Link>
                                            <Link href="/category">
                                                <a>
                                                    <span className="post-cat text-success">
                                                        Food
                                                    </span>
                                                </a>
                                            </Link>
                                        </div>
                                        <div className="d-flex post-card-content">
                                            <h5 className="post-title mb-20 font-weight-900">
                                                <Link href="/single">
                                                    <a>
                                                        Want fluffy Japanese
                                                        pancakes but can’t fly
                                                        to Tokyo?
                                                    </a>
                                                </Link>
                                            </h5>
                                            <div className="entry-meta meta-1 float-left font-x-small text-uppercase">
                                                <span className="post-on">
                                                    27 August
                                                </span>
                                                <span className="time-reading has-dot">
                                                    12 mins read
                                                </span>
                                                <span className="post-by has-dot">
                                                    23k views
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </article>
                            <article className="grid-item col pb-50 wow fadeIn animated">
                                <div className="post-card-1 border-radius-10 hover-up">
                                    <div
                                        className="post-thumb thumb-overlay img-hover-slide position-relative"
                                        style={{
                                            backgroundImage:
                                                "url(assets/imgs/news/news-2.jpg)",
                                        }}
                                    >
                                        <Link href="/single">
                                            <a
                                                className="img-link"
                                            ></a>
                                        </Link>
                                        <ul className="social-share">
                                            <li>
                                                <Link href="/#">
                                                    <a>
                                                        <i className="elegant-icon social_share"></i>
                                                    </a>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="/#">
                                                    <a
                                                        className="fb"
                                                        title="Share on Facebook"
                                                        target="_blank"
                                                    >
                                                        <i className="elegant-icon social_facebook"></i>
                                                    </a>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="/#">
                                                    <a
                                                        className="tw"
                                                        target="_blank"
                                                        title="Tweet now"
                                                    >
                                                        <i className="elegant-icon social_twitter"></i>
                                                    </a>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="/#">
                                                    <a
                                                        className="pt"
                                                        target="_blank"
                                                        title="Pin it"
                                                    >
                                                        <i className="elegant-icon social_pinterest"></i>
                                                    </a>
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="post-content p-30">
                                        <div className="entry-meta meta-0 font-small mb-10">
                                            <Link href="/category">
                                                <a>
                                                    <span className="post-cat text-warning">
                                                        Fashion
                                                    </span>
                                                </a>
                                            </Link>
                                        </div>
                                        <div className="d-flex post-card-content">
                                            <h5 className="post-title mb-20 font-weight-900">
                                                <Link href="/single">
                                                    <a>
                                                        Put Yourself in Your
                                                        Customers Shoes
                                                    </a>
                                                </Link>
                                            </h5>
                                            <div className="post-excerpt mb-25 font-small text-muted">
                                                <p>
                                                    Graduating from a top
                                                    accelerator or incubator can
                                                    be as career-defining for
                                                    a&nbsp;startup
                                                    founder&nbsp;as an elite
                                                    university diploma. The
                                                    intensive programmes, which…
                                                </p>
                                            </div>
                                            <div className="entry-meta meta-1 float-left font-x-small text-uppercase">
                                                <span className="post-on">
                                                    17 July
                                                </span>
                                                <span className="time-reading has-dot">
                                                    8 mins read
                                                </span>
                                                <span className="post-by has-dot">
                                                    12k views
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </article>
                            <article className="grid-item col pb-50 wow fadeIn animated">
                                <div className="post-card-1 border-radius-10 hover-up">
                                    <div
                                        className="post-thumb thumb-overlay img-hover-slide position-relative"
                                        style={{
                                            backgroundImage:
                                                "url(assets/imgs/news/news-3.jpg)",
                                        }}
                                    >
                                        <Link href="/single">
                                            <a
                                                className="img-link"
                                            ></a>
                                        </Link>
                                        <ul className="social-share">
                                            <li>
                                                <Link href="/#">
                                                    <a>
                                                        <i className="elegant-icon social_share"></i>
                                                    </a>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="/#">
                                                    <a
                                                        className="fb"
                                                        title="Share on Facebook"
                                                        target="_blank"
                                                    >
                                                        <i className="elegant-icon social_facebook"></i>
                                                    </a>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="/#">
                                                    <a
                                                        className="tw"
                                                        target="_blank"
                                                        title="Tweet now"
                                                    >
                                                        <i className="elegant-icon social_twitter"></i>
                                                    </a>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="/#">
                                                    <a
                                                        className="pt"
                                                        target="_blank"
                                                        title="Pin it"
                                                    >
                                                        <i className="elegant-icon social_pinterest"></i>
                                                    </a>
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="post-content p-30">
                                        <div className="entry-meta meta-0 font-small mb-10">
                                            <Link href="/category">
                                                <a>
                                                    <span className="post-cat text-danger">
                                                        Travel
                                                    </span>
                                                </a>
                                            </Link>
                                        </div>
                                        <div className="d-flex post-card-content">
                                            <h5 className="post-title mb-20 font-weight-900">
                                                <Link href="/single">
                                                    <a>
                                                        Life and Death in the
                                                        Empire of the Tiger
                                                    </a>
                                                </Link>
                                            </h5>
                                            <div className="entry-meta meta-1 float-left font-x-small text-uppercase">
                                                <span className="post-on">
                                                    7 August
                                                </span>
                                                <span className="time-reading has-dot">
                                                    15 mins read
                                                </span>
                                                <span className="post-by has-dot">
                                                    500 views
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </article>
                            <article className="grid-item col pb-50 wow fadeIn animated">
                                <div className="post-card-1 border-radius-10 hover-up">
                                    <div
                                        className="post-thumb thumb-overlay img-hover-slide position-relative"
                                        style={{
                                            backgroundImage:
                                                "url(assets/imgs/news/news-4.jpg)",
                                        }}
                                    >
                                        <Link href="/single">
                                            <a
                                                className="img-link"
                                            ></a>
                                        </Link>
                                        <span className="top-right-icon bg-info">
                                            <i className="elegant-icon icon_headphones"></i>
                                        </span>
                                        <ul className="social-share">
                                            <li>
                                                <Link href="/#">
                                                    <a>
                                                        <i className="elegant-icon social_share"></i>
                                                    </a>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="/#">
                                                    <a
                                                        className="fb"
                                                        title="Share on Facebook"
                                                        target="_blank"
                                                    >
                                                        <i className="elegant-icon social_facebook"></i>
                                                    </a>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="/#">
                                                    <a
                                                        className="tw"
                                                        target="_blank"
                                                        title="Tweet now"
                                                    >
                                                        <i className="elegant-icon social_twitter"></i>
                                                    </a>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="/#">
                                                    <a
                                                        className="pt"
                                                        target="_blank"
                                                        title="Pin it"
                                                    >
                                                        <i className="elegant-icon social_pinterest"></i>
                                                    </a>
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="post-content p-30">
                                        <div className="entry-meta meta-0 font-small mb-10">
                                            <Link href="/category">
                                                <a>
                                                    <span className="post-cat text-success">
                                                        Lifestyle
                                                    </span>
                                                </a>
                                            </Link>
                                        </div>
                                        <div className="d-flex post-card-content">
                                            <h5 className="post-title mb-20 font-weight-900">
                                                <Link href="/single">
                                                    <a>
                                                        When Two Wheels Are
                                                        Better Than Four
                                                    </a>
                                                </Link>
                                            </h5>
                                            <div className="entry-meta meta-1 float-left font-x-small text-uppercase">
                                                <span className="post-on">
                                                    15 Jun
                                                </span>
                                                <span className="time-reading has-dot">
                                                    9 mins read
                                                </span>
                                                <span className="post-by has-dot">
                                                    1.2k views
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </article>
                            <article className="grid-item col pb-50 wow fadeIn animated">
                                <div className="post-card-1 border-radius-10 hover-up">
                                    <div
                                        className="post-thumb thumb-overlay img-hover-slide position-relative"
                                        style={{
                                            backgroundImage:
                                                "url(assets/imgs/news/news-5.jpg)",
                                        }}
                                    >
                                        <Link href="/single">
                                            <a
                                                className="img-link"
                                            ></a>
                                        </Link>
                                        <ul className="social-share">
                                            <li>
                                                <Link href="/#">
                                                    <a>
                                                        <i className="elegant-icon social_share"></i>
                                                    </a>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="/#">
                                                    <a
                                                        className="fb"
                                                        title="Share on Facebook"
                                                        target="_blank"
                                                    >
                                                        <i className="elegant-icon social_facebook"></i>
                                                    </a>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="/#">
                                                    <a
                                                        className="tw"
                                                        target="_blank"
                                                        title="Tweet now"
                                                    >
                                                        <i className="elegant-icon social_twitter"></i>
                                                    </a>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="/#">
                                                    <a
                                                        className="pt"
                                                        target="_blank"
                                                        title="Pin it"
                                                    >
                                                        <i className="elegant-icon social_pinterest"></i>
                                                    </a>
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="post-content p-30">
                                        <div className="entry-meta meta-0 font-small mb-10">
                                            <Link href="/category">
                                                <a>
                                                    <span className="post-cat text-warning">
                                                        Fashion
                                                    </span>
                                                </a>
                                            </Link>
                                        </div>
                                        <div className="d-flex post-card-content">
                                            <h5 className="post-title mb-20 font-weight-900">
                                                <Link href="/single">
                                                    <a>
                                                        The Life of a Travel
                                                        Writer with David Farley
                                                    </a>
                                                </Link>
                                            </h5>
                                            <div className="entry-meta meta-1 float-left font-x-small text-uppercase">
                                                <span className="post-on">
                                                    17 July
                                                </span>
                                                <span className="time-reading has-dot">
                                                    8 mins read
                                                </span>
                                                <span className="post-by has-dot">
                                                    12k views
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </article>
                            <article className="grid-item col pb-50 wow fadeIn animated">
                                <div className="post-card-1 border-radius-10 hover-up">
                                    <div
                                        className="post-thumb thumb-overlay img-hover-slide position-relative"
                                        style={{
                                            backgroundImage:
                                                "url(assets/imgs/news/news-6.jpg)",
                                        }}
                                    >
                                        <Link href="/single">
                                            <a
                                                className="img-link"
                                            ></a>
                                        </Link>
                                        <ul className="social-share">
                                            <li>
                                                <Link href="/#">
                                                    <a>
                                                        <i className="elegant-icon social_share"></i>
                                                    </a>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="/#">
                                                    <a
                                                        className="fb"
                                                        title="Share on Facebook"
                                                        target="_blank"
                                                    >
                                                        <i className="elegant-icon social_facebook"></i>
                                                    </a>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="/#">
                                                    <a
                                                        className="tw"
                                                        target="_blank"
                                                        title="Tweet now"
                                                    >
                                                        <i className="elegant-icon social_twitter"></i>
                                                    </a>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="/#">
                                                    <a
                                                        className="pt"
                                                        target="_blank"
                                                        title="Pin it"
                                                    >
                                                        <i className="elegant-icon social_pinterest"></i>
                                                    </a>
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="post-content p-30">
                                        <div className="entry-meta meta-0 font-small mb-10">
                                            <Link href="/category">
                                                <a>
                                                    <span className="post-cat text-danger">
                                                        Travel
                                                    </span>
                                                </a>
                                            </Link>
                                        </div>
                                        <div className="d-flex post-card-content">
                                            <h5 className="post-title mb-20 font-weight-900">
                                                <Link href="/single">
                                                    <a>
                                                        The 22 Best Things to
                                                        See and Do in Bangkok
                                                    </a>
                                                </Link>
                                            </h5>
                                            <div className="entry-meta meta-1 float-left font-x-small text-uppercase">
                                                <span className="post-on">
                                                    7 August
                                                </span>
                                                <span className="time-reading has-dot">
                                                    15 mins read
                                                </span>
                                                <span className="post-by has-dot">
                                                    500 views
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </article>
                            <article className="grid-item col pb-50 wow fadeIn animated">
                                <div className="post-card-1 border-radius-10 hover-up">
                                    <div
                                        className="post-thumb thumb-overlay img-hover-slide position-relative"
                                        style={{
                                            backgroundImage:
                                                "url(assets/imgs/news/news-7.jpg)",
                                        }}
                                    >
                                        <Link href="/single">
                                            <a
                                                className="img-link"
                                            ></a>
                                        </Link>
                                        <ul className="social-share">
                                            <li>
                                                <Link href="/#">
                                                    <a>
                                                        <i className="elegant-icon social_share"></i>
                                                    </a>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="/#">
                                                    <a
                                                        className="fb"
                                                        title="Share on Facebook"
                                                        target="_blank"
                                                    >
                                                        <i className="elegant-icon social_facebook"></i>
                                                    </a>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="/#">
                                                    <a
                                                        className="tw"
                                                        target="_blank"
                                                        title="Tweet now"
                                                    >
                                                        <i className="elegant-icon social_twitter"></i>
                                                    </a>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="/#">
                                                    <a
                                                        className="pt"
                                                        target="_blank"
                                                        title="Pin it"
                                                    >
                                                        <i className="elegant-icon social_pinterest"></i>
                                                    </a>
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="post-content p-30">
                                        <div className="entry-meta meta-0 font-small mb-10">
                                            <Link href="/category">
                                                <a>
                                                    <span className="post-cat text-success">
                                                        Lifestyle
                                                    </span>
                                                </a>
                                            </Link>
                                        </div>
                                        <div className="d-flex post-card-content">
                                            <h5 className="post-title mb-20 font-weight-900">
                                                <Link href="/single">
                                                    <a>
                                                        Why Don’t More Black
                                                        American Women Travel
                                                        Solo?
                                                    </a>
                                                </Link>
                                            </h5>
                                            <div className="post-excerpt mb-25 font-small text-muted">
                                                <p>
                                                    Lorem ipsum dolor sit amet,
                                                    consectetur adipiscing elit.
                                                    Sed tempor condimentum metus
                                                    non tempor. Maecenas non
                                                    augue aliquam, facilisis
                                                    lectus quis, lacinia risus.
                                                </p>
                                            </div>
                                            <div className="entry-meta meta-1 float-left font-x-small text-uppercase">
                                                <span className="post-on">
                                                    15 Jun
                                                </span>
                                                <span className="time-reading has-dot">
                                                    9 mins read
                                                </span>
                                                <span className="post-by has-dot">
                                                    1.2k views
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </article>
                            <article className="grid-item col pb-50 wow fadeIn animated">
                                <div className="post-card-1 border-radius-10 hover-up">
                                    <div
                                        className="post-thumb thumb-overlay img-hover-slide position-relative"
                                        style={{
                                            backgroundImage:
                                                "url(assets/imgs/news/news-8.jpg)",
                                        }}
                                    >
                                        <Link href="/single">
                                            <a
                                                className="img-link"
                                            ></a>
                                        </Link>
                                        <ul className="social-share">
                                            <li>
                                                <Link href="/#">
                                                    <a>
                                                        <i className="elegant-icon social_share"></i>
                                                    </a>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="/#">
                                                    <a
                                                        className="fb"
                                                        title="Share on Facebook"
                                                        target="_blank"
                                                    >
                                                        <i className="elegant-icon social_facebook"></i>
                                                    </a>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="/#">
                                                    <a
                                                        className="tw"
                                                        target="_blank"
                                                        title="Tweet now"
                                                    >
                                                        <i className="elegant-icon social_twitter"></i>
                                                    </a>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="/#">
                                                    <a
                                                        className="pt"
                                                        target="_blank"
                                                        title="Pin it"
                                                    >
                                                        <i className="elegant-icon social_pinterest"></i>
                                                    </a>
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="post-content p-30">
                                        <div className="entry-meta meta-0 font-small mb-10">
                                            <Link href="/category">
                                                <a>
                                                    <span className="post-cat text-warning">
                                                        Fashion
                                                    </span>
                                                </a>
                                            </Link>
                                        </div>
                                        <div className="d-flex post-card-content">
                                            <h5 className="post-title mb-20 font-weight-900">
                                                <Link href="/single">
                                                    <a>
                                                        My 8 Favorite Hostels in
                                                        San José, Costa Rica
                                                    </a>
                                                </Link>
                                            </h5>
                                            <div className="entry-meta meta-1 float-left font-x-small text-uppercase">
                                                <span className="post-on">
                                                    17 July
                                                </span>
                                                <span className="time-reading has-dot">
                                                    8 mins read
                                                </span>
                                                <span className="post-by has-dot">
                                                    12k views
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </article>
                            <article className="grid-item col pb-50 wow fadeIn animated">
                                <div className="post-card-1 border-radius-10 hover-up">
                                    <div
                                        className="post-thumb thumb-overlay img-hover-slide position-relative"
                                        style={{
                                            backgroundImage:
                                                "url(assets/imgs/news/news-9.jpg)",
                                        }}
                                    >
                                        <Link href="/single">
                                            <a
                                                className="img-link"
                                            ></a>
                                        </Link>
                                        <ul className="social-share">
                                            <li>
                                                <Link href="/#">
                                                    <a>
                                                        <i className="elegant-icon social_share"></i>
                                                    </a>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="/#">
                                                    <a
                                                        className="fb"
                                                        title="Share on Facebook"
                                                        target="_blank"
                                                    >
                                                        <i className="elegant-icon social_facebook"></i>
                                                    </a>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="/#">
                                                    <a
                                                        className="tw"
                                                        target="_blank"
                                                        title="Tweet now"
                                                    >
                                                        <i className="elegant-icon social_twitter"></i>
                                                    </a>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="/#">
                                                    <a
                                                        className="pt"
                                                        target="_blank"
                                                        title="Pin it"
                                                    >
                                                        <i className="elegant-icon social_pinterest"></i>
                                                    </a>
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="post-content p-30">
                                        <div className="entry-meta meta-0 font-small mb-10">
                                            <Link href="/category">
                                                <a>
                                                    <span className="post-cat text-danger">
                                                        Travel
                                                    </span>
                                                </a>
                                            </Link>
                                        </div>
                                        <div className="d-flex post-card-content">
                                            <h5 className="post-title mb-20 font-weight-900">
                                                <Link href="/single">
                                                    <a>
                                                        The Nomadic Network: A
                                                        Community Update & More
                                                        Events
                                                    </a>
                                                </Link>
                                            </h5>
                                            <div className="entry-meta meta-1 float-left font-x-small text-uppercase">
                                                <span className="post-on">
                                                    7 August
                                                </span>
                                                <span className="time-reading has-dot">
                                                    15 mins read
                                                </span>
                                                <span className="post-by has-dot">
                                                    500 views
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </article>
                        </div>
                        <div className="row">
                            <div className="col-12">
                                <div className="pagination-area mb-30 wow fadeInUp animated">
                                    <nav aria-label="Page navigation example">
                                        <ul className="pagination justify-content-start">
                                            <li className="page-item">
                                                <Link href="/#">
                                                    <a
                                                        className="page-link"
                                                    >
                                                        <i className="elegant-icon arrow_left"></i>
                                                    </a>
                                                </Link>
                                            </li>
                                            <li className="page-item active">
                                                <Link href="/#">
                                                    <a
                                                        className="page-link"
                                                    >
                                                        01
                                                    </a>
                                                </Link>
                                            </li>
                                            <li className="page-item">
                                                <Link href="/#">
                                                    <a
                                                        className="page-link"
                                                    >
                                                        02
                                                    </a>
                                                </Link>
                                            </li>
                                            <li className="page-item">
                                                <Link href="/#">
                                                    <a
                                                        className="page-link"
                                                    >
                                                        03
                                                    </a>
                                                </Link>
                                            </li>
                                            <li className="page-item">
                                                <Link href="/#">
                                                    <a
                                                        className="page-link"
                                                    >
                                                        04
                                                    </a>
                                                </Link>
                                            </li>
                                            <li className="page-item">
                                                <Link href="/#">
                                                    <a
                                                        className="page-link"
                                                    >
                                                        <i className="elegant-icon arrow_right"></i>
                                                    </a>
                                                </Link>
                                            </li>
                                        </ul>
                                    </nav>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
            </Layout>
        </>
    );
}
export default CaregoryMasonary;
