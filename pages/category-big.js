import Link from "next/link";
import Layout from "./../components/layout/layout";
function CaregoryBig() {
    return (
        <>
            <Layout>
                <main>
                    <div className="archive-header pt-50 text-center">
                        <div className="container">
                            <h2 className="font-weight-900">Hotels Review</h2>
                            <div className="breadcrumb">
                                <Link href="/">
                                    <a>Home</a>
                                </Link>
                                <span></span> Hotels Review
                            </div>
                            <div className="bt-1 border-color-1 mt-30 mb-50"></div>
                        </div>
                    </div>
                    <div className="container">
                        <div className="loop-list loop-list-style-1">
                            <div className="row">
                                <article className="col-md-6 mb-40 wow fadeInUp  animated">
                                    <div className="post-card-1 border-radius-10 hover-up">
                                        <div
                                            className="post-thumb thumb-overlay img-hover-slide position-relative"
                                            style={{
                                                backgroundImage:
                                                    "url(assets/imgs/news/news-6.jpg)",
                                            }}
                                        >
                                            <Link href="/single">
                                                <a className="img-link"></a>
                                            </Link>

                                            <ul className="social-share">
                                                <li>
                                                   <Link href="#" passHref={true}>
                                                        <a>
                                                            <i className="elegant-icon social_share"></i>{" "}
                                                        </a>
                                                    </Link>
                                                </li>
                                                <li>
                                                   <Link href="#" passHref={true}>
                                                        <a
                                                            className="fb"
                                                            title="Share on Facebook"
                                                            target="_blank"
                                                        >
                                                            <i className="elegant-icon social_facebook"></i>{" "}
                                                        </a>
                                                    </Link>
                                                </li>
                                                <li>
                                                   <Link href="#" passHref={true}>
                                                        <a
                                                            className="tw"
                                                            target="_blank"
                                                            title="Tweet now"
                                                        >
                                                            <i className="elegant-icon social_twitter"></i>{" "}
                                                        </a>
                                                    </Link>
                                                </li>
                                                <li>
                                                   <Link href="#" passHref={true}>
                                                        <a
                                                            className="pt"
                                                            target="_blank"
                                                            title="Pin it"
                                                        >
                                                            <i className="elegant-icon social_pinterest"></i>{" "}
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
                                                            Artists{" "}
                                                        </span>
                                                    </a>
                                                </Link>
                                                <Link href="/category">
                                                    <a>
                                                        <span className="post-cat text-success">
                                                            Film{" "}
                                                        </span>
                                                    </a>
                                                </Link>
                                            </div>
                                            <div className="d-flex post-card-content">
                                                <h5 className="post-title mb-20 font-weight-900">
                                                    <Link href="/single">
                                                        <a>
                                                            Easy Ways to Use
                                                            Alternatives to
                                                            Plastic{" "}
                                                        </a>
                                                    </Link>
                                                </h5>
                                                <div className="post-excerpt mb-25 font-small text-muted">
                                                    <p>
                                                        Graduating from a top
                                                        accelerator or incubator
                                                        can be as
                                                        career-defining for
                                                        a&nbsp;startup
                                                        founder&nbsp;as an elite
                                                        university diploma. The
                                                        intensive programmes,
                                                        which…
                                                    </p>
                                                </div>
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
                                <article className="col-md-6 mb-40 wow fadeInUp  animated">
                                    <div className="post-card-1 border-radius-10 hover-up">
                                        <div
                                            className="post-thumb thumb-overlay img-hover-slide position-relative"
                                            style={{
                                                backgroundImage:
                                                    "url(assets/imgs/news/news-8.jpg)",
                                            }}
                                        >
                                            <Link href="/single">
                                                <a className="img-link"></a>
                                            </Link>

                                            <ul className="social-share">
                                                <li>
                                                    <Link href="#" passHref={true}>
                                                        <a>
                                                            <i className="elegant-icon social_share"></i>{" "}
                                                        </a>
                                                    </Link>
                                                </li>
                                                <li>
                                                   <Link href="#" passHref={true}>
                                                        <a
                                                            className="fb"
                                                            title="Share on Facebook"
                                                            target="_blank"
                                                        >
                                                            <i className="elegant-icon social_facebook"></i>{" "}
                                                        </a>
                                                    </Link>
                                                </li>
                                                <li>
                                                   <Link href="#" passHref={true}>
                                                        <a
                                                            className="tw"
                                                            target="_blank"
                                                            title="Tweet now"
                                                        >
                                                            <i className="elegant-icon social_twitter"></i>{" "}
                                                        </a>
                                                    </Link>
                                                </li>
                                                <li>
                                                   <Link href="#" passHref={true}>
                                                        <a
                                                            className="pt"
                                                            target="_blank"
                                                            title="Pin it"
                                                        >
                                                            <i className="elegant-icon social_pinterest"></i>{" "}
                                                        </a>
                                                    </Link>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="post-content p-30">
                                            <div className="entry-meta meta-0 font-small mb-10">
                                                <Link href="/category">
                                                    <a>
                                                        <span className="post-cat">
                                                            Fashion{" "}
                                                        </span>
                                                    </a>
                                                </Link>
                                            </div>
                                            <div className="d-flex post-card-content">
                                                <h5 className="post-title mb-20 font-weight-900">
                                                    <Link href="/single">
                                                        <a>
                                                            Tips for Growing
                                                            Healthy, Longer Hair{" "}
                                                        </a>
                                                    </Link>
                                                </h5>
                                                <div className="post-excerpt mb-25 font-small text-muted">
                                                    <p>
                                                        Proin vitae placerat
                                                        quam. Ut sodales
                                                        eleifend urna, in
                                                        condimentum tortor
                                                        ultricies eu. Nunc
                                                        auctor iaculis
                                                        dolorProin vitae
                                                        placerat quam. Proin
                                                        vitae placerat quam.
                                                    </p>
                                                </div>
                                                <div className="entry-meta meta-1 float-left font-x-small text-uppercase">
                                                    <span className="post-on">
                                                        12 August
                                                    </span>
                                                    <span className="time-reading has-dot">
                                                        6 mins read
                                                    </span>
                                                    <span className="post-by has-dot">
                                                        3k views
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </article>
                                <article className="col-md-6 mb-40 wow fadeInUp  animated">
                                    <div className="post-card-1 border-radius-10 hover-up">
                                        <div
                                            className="post-thumb thumb-overlay img-hover-slide position-relative"
                                            style={{
                                                backgroundImage:
                                                    "url(assets/imgs/news/news-10.jpg)",
                                            }}
                                        >
                                            <Link href="/single">
                                                <a className="img-link"></a>
                                            </Link>

                                            <span className="top-right-icon bg-secondary">
                                                <i className="elegant-icon icon_heart_alt"></i>
                                            </span>
                                            <ul className="social-share">
                                                <li>
                                                   <Link href="#" passHref={true}>
                                                        <a>
                                                            <i className="elegant-icon social_share"></i>
                                                        </a>
                                                    </Link>
                                                </li>
                                                <li>
                                                   <Link href="#" passHref={true}>
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
                                                   <Link href="#" passHref={true}>
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
                                                   <Link href="#" passHref={true}>
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
                                                            Project Ideas Around
                                                            the House
                                                        </a>
                                                    </Link>
                                                </h5>
                                                <div className="post-excerpt mb-25 font-small text-muted">
                                                    <p>
                                                        Lorem ipsum dolor sit
                                                        amet, consectetur
                                                        adipiscing elit. Sed
                                                        tempor condimentum metus
                                                        non tempor. Maecenas non
                                                        augue aliquam, facilisis
                                                        lectus quis, lacinia
                                                        risus.
                                                    </p>
                                                </div>
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
                                <article className="col-md-6 mb-40 wow fadeInUp  animated">
                                    <div className="post-card-1 border-radius-10 hover-up">
                                        <div
                                            className="post-thumb thumb-overlay img-hover-slide position-relative"
                                            style={{
                                                backgroundImage:
                                                    "url(assets/imgs/news/news-12.jpg)",
                                            }}
                                        >
                                            <Link href="/single">
                                                <a className="img-link"></a>
                                            </Link>

                                            <ul className="social-share">
                                                <li>
                                                   <Link href="#" passHref={true}>
                                                        <a>
                                                            <i className="elegant-icon social_share"></i>
                                                        </a>
                                                    </Link>
                                                </li>
                                                <li>
                                                   <Link href="#" passHref={true}>
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
                                                   <Link href="#" passHref={true}>
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
                                                   <Link href="#" passHref={true}>
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
                                                            Hotels
                                                        </span>
                                                    </a>
                                                </Link>
                                            </div>
                                            <div className="d-flex post-card-content">
                                                <h5 className="post-title mb-20 font-weight-900">
                                                    <Link href="/single">
                                                        <a>
                                                            How to Give Yourself
                                                            a Spa Day from Home
                                                        </a>
                                                    </Link>
                                                </h5>
                                                <div className="post-excerpt mb-25 font-small text-muted">
                                                    <p>
                                                        Graduating from a top
                                                        accelerator or incubator
                                                        can be as
                                                        career-defining for
                                                        a&nbsp;startup
                                                        founder&nbsp;as an elite
                                                        university diploma. The
                                                        intensive programmes,
                                                        which…
                                                    </p>
                                                </div>
                                                <div className="entry-meta meta-1 float-left font-x-small text-uppercase">
                                                    <span className="post-on">
                                                        18 August
                                                    </span>
                                                    <span className="time-reading has-dot">
                                                        14 mins read
                                                    </span>
                                                    <span className="post-by has-dot">
                                                        25k views
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </article>
                                <article className="col-md-6 mb-40 wow fadeInUp  animated">
                                    <div className="post-card-1 border-radius-10 hover-up">
                                        <div
                                            className="post-thumb thumb-overlay img-hover-slide position-relative"
                                            style={{
                                                backgroundImage:
                                                    "url(assets/imgs/news/news-7.jpg)",
                                            }}
                                        >
                                            <Link href="/single">
                                                <a className="img-link"></a>
                                            </Link>

                                            <span className="top-right-icon bg-secondary">
                                                <i className="elegant-icon icon_heart_alt"></i>
                                            </span>
                                            <ul className="social-share">
                                                <li>
                                                   <Link href="#" passHref={true}>
                                                        <a>
                                                            <i className="elegant-icon social_share"></i>
                                                        </a>
                                                    </Link>
                                                </li>
                                                <li>
                                                   <Link href="#" passHref={true}>
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
                                                   <Link href="#" passHref={true}>
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
                                                   <Link href="#" passHref={true}>
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
                                                            How to See Alberta:
                                                            A 10-Day Suggested
                                                            Driving Itinerary
                                                        </a>
                                                    </Link>
                                                </h5>
                                                <div className="post-excerpt mb-25 font-small text-muted">
                                                    <p>
                                                        Lorem ipsum dolor sit
                                                        amet, consectetur
                                                        adipiscing elit. Sed
                                                        tempor condimentum metus
                                                        non tempor. Maecenas non
                                                        augue aliquam, facilisis
                                                        lectus quis, lacinia
                                                        risus.
                                                    </p>
                                                </div>
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
                                <article className="col-md-6 mb-40 wow fadeInUp  animated">
                                    <div className="post-card-1 border-radius-10 hover-up">
                                        <div
                                            className="post-thumb thumb-overlay img-hover-slide position-relative"
                                            style={{
                                                backgroundImage:
                                                    "url(assets/imgs/news/news-13.jpg)",
                                            }}
                                        >
                                            <Link href="/single">
                                                <a className="img-link"></a>
                                            </Link>

                                            <ul className="social-share">
                                                <li>
                                                   <Link href="#" passHref={true}>
                                                        <a>
                                                            <i className="elegant-icon social_share"></i>
                                                        </a>
                                                    </Link>
                                                </li>
                                                <li>
                                                   <Link href="#" passHref={true}>
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
                                                   <Link href="#" passHref={true}>
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
                                                   <Link href="#" passHref={true}>
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
                                                            Hotels
                                                        </span>
                                                    </a>
                                                </Link>
                                            </div>
                                            <div className="d-flex post-card-content">
                                                <h5 className="post-title mb-20 font-weight-900">
                                                    <Link href="/single">
                                                        <a>
                                                            My 6 Favorite
                                                            Hostels in Panama
                                                            City, Panama
                                                        </a>
                                                    </Link>
                                                </h5>
                                                <div className="post-excerpt mb-25 font-small text-muted">
                                                    <p>
                                                        Graduating from a top
                                                        accelerator or incubator
                                                        can be as
                                                        career-defining for
                                                        a&nbsp;startup
                                                        founder&nbsp;as an elite
                                                        university diploma. The
                                                        intensive programmes,
                                                        which…
                                                    </p>
                                                </div>
                                                <div className="entry-meta meta-1 float-left font-x-small text-uppercase">
                                                    <span className="post-on">
                                                        18 August
                                                    </span>
                                                    <span className="time-reading has-dot">
                                                        14 mins read
                                                    </span>
                                                    <span className="post-by has-dot">
                                                        25k views
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </article>
                            </div>
                        </div>
                        <div className="row mt-50">
                            <div className="col-12">
                                <div className="pagination-area mb-30 wow fadeInUp animated">
                                    <nav aria-label="Page navigation example">
                                        <ul className="pagination justify-content-start">
                                            <li className="page-item">
                                               <Link href="#" passHref={true}>
                                                    <a className="page-link">
                                                        <i className="elegant-icon arrow_left"></i>
                                                    </a>
                                                </Link>
                                            </li>
                                            <li className="page-item active">
                                               <Link href="#" passHref={true}>
                                                    <a className="page-link">
                                                        01
                                                    </a>
                                                </Link>
                                            </li>
                                            <li className="page-item">
                                               <Link href="#" passHref={true}>
                                                    <a className="page-link">
                                                        02
                                                    </a>
                                                </Link>
                                            </li>
                                            <li className="page-item">
                                               <Link href="#" passHref={true}>
                                                    <a className="page-link">
                                                        03
                                                    </a>
                                                </Link>
                                            </li>
                                            <li className="page-item">
                                               <Link href="#" passHref={true}>
                                                    <a className="page-link">
                                                        04
                                                    </a>
                                                </Link>
                                            </li>
                                            <li className="page-item">
                                               <Link href="#" passHref={true}>
                                                    <a className="page-link">
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
export default CaregoryBig;
