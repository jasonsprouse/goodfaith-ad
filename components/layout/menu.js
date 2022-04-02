import Link from "next/link";
import { useEffect, useLayoutEffect, useState } from "react";
import NavMenu from "./nav";

const Menu = ({ addClass }) => {
    const [scroll, setScroll] = useState(0);
    const [isToggled, setToggled] = useState(false);
    const [size, setSize] = useState(0);

    const toggleTrueFalse = () => setToggled(!isToggled);
    useEffect(() => {
        document.addEventListener("scroll", () => {
            const scrollCheck = window.scrollY > 100;
            if (scrollCheck !== scroll) {
                setScroll(scrollCheck);
            }
        });
    });

    useLayoutEffect(() => {
        function updateSize() {
            setSize([window.innerWidth]);
        }
        window.addEventListener("resize", updateSize);
    }, []);

    return (
        <>
            <div className={scroll ? "header-sticky sticky-bar" : "header-sticky"}>
                <div className="container align-self-center position-relative">
                    <div className="main-nav float-left ">
                        <nav>
                            <ul className="main-menu d-none d-lg-inline font-small">
                                <li className="menu-item-has-children">
                                    <Link href="/">
                                        <a>
                                            <i className="elegant-icon icon_house_alt mr-5"></i>
                                            Home
                                        </a>
                                    </Link>
                                    <ul className="sub-menu text-muted font-small">
                                        <li>
                                            <Link href="/">
                                                <a>Home default</a>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/home-2">
                                                <a>Homepage 2</a>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/home-3">
                                                <a>Homepage 3</a>
                                            </Link>
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    <Link href="/category-list">
                                        <a>Travel</a>
                                    </Link>
                                </li>
                                <li className="current-item has-mega-menu">
                                    <Link href="#">
                                        <a>Mega Menu</a>
                                    </Link>
                                    <ul className="mega-menu">
                                        <li className="sub-mega-menu sub-mega-menu-width-22">
                                            <Link href="#">
                                                <a>Travel Blog</a>
                                            </Link>
                                            <ul>
                                                <li>
                                                    <Link href="/category-grid">
                                                        <a>Destinations</a>
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link href="/category-grid">
                                                        <a>Tour Guides</a>
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link href="/category-grid">
                                                        <a>Travel Food</a>
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link href="/category-grid">
                                                        <a>Hotels Booking</a>
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link href="/category-grid">
                                                        <a>Transport Review</a>
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link href="/category-grid">
                                                        <a>Travel Healthy</a>
                                                    </Link>
                                                </li>
                                            </ul>
                                        </li>
                                        <li className="sub-mega-menu sub-mega-menu-width-22">
                                            <Link href="#">
                                                <a>Fruit &amp; Vegetables</a>
                                            </Link>
                                            <ul>
                                                <li>
                                                    <Link href="/category-grid">
                                                        <a>Meat &amp; Poultry</a>
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link href="/category-grid">
                                                        <a>Fresh Vegetables</a>
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link href="/category-grid">
                                                        <a>Herbs &amp; Seasonings</a>
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link href="/category-grid">
                                                        <a>Cuts &amp; Sprouts</a>
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link href="/category-grid">
                                                        <a>Exotic Fruits &amp; Veggies</a>
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link href="/category-grid">
                                                        <a>Packaged Produce</a>
                                                    </Link>
                                                </li>
                                            </ul>
                                        </li>
                                        <li className="sub-mega-menu sub-mega-menu-width-22">
                                            <Link href="#">
                                                <a>Breakfast &amp; Dairy</a>
                                            </Link>
                                            <ul>
                                                <li>
                                                    <Link href="/category-grid">
                                                        <a>Milk &amp; Flavoured Milk</a>
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link href="/category-grid">
                                                        <a>Butter and Margarine</a>
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link href="/category-grid">
                                                        <a>Eggs Substitutes</a>
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link href="/category-grid">
                                                        <a>Marmalades</a>
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link href="/category-grid">
                                                        <a>Sour Cream</a>
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link href="/category-grid">
                                                        <a>Cheese</a>
                                                    </Link>
                                                </li>
                                            </ul>
                                        </li>
                                        <li className="sub-mega-menu sub-mega-menu-width-22">
                                            <Link href="#">
                                                <a>Meat &amp; Seafood</a>
                                            </Link>
                                            <ul>
                                                <li>
                                                    <Link href="/category-grid">
                                                        <a>Breakfast Sausage</a>
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link href="/category-grid">
                                                        <a>Dinner Sausage</a>
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link href="/category-grid">
                                                        <a>Chicken</a>
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link href="/category-grid">
                                                        <a>Sliced Deli Meat</a>
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link href="/category-grid">
                                                        <a>Wild Caught Fillets</a>
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link href="/category-grid">
                                                        <a>Crab and Shellfish</a>
                                                    </Link>
                                                </li>
                                            </ul>
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    <Link href="/category-grid">
                                        <a>Guides</a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/category-masonry">
                                        <a>Food</a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/category-big">
                                        <a>Hotels</a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/category">
                                        <a>Review</a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/category">
                                        <a>Healthy </a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/category">
                                        <a>Lifestyle</a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/category">
                                        <a>Blog</a>
                                    </Link>
                                </li>
                            </ul>

                            <div className={size < 991 ? "d-block d-lg-none" : "d-none"}>
                                <button onClick={toggleTrueFalse}>Menu</button>
                                <NavMenu isToggled={isToggled} />
                            </div>
                        </nav>
                    </div>
                    <div className="float-right header-tools text-muted font-small">
                        <ul className="header-social-network d-inline-block list-inline mr-15">
                            <li className="list-inline-item">
                                <Link href="/#">
                                    <a className="social-icon fb text-xs-center" target="_blank" href="#">
                                        <i className="elegant-icon social_facebook"></i>
                                    </a>
                                </Link>
                            </li>
                            <li className="list-inline-item">
                                <Link href="/#">
                                    <a className="social-icon tw text-xs-center" target="_blank" href="#">
                                        <i className="elegant-icon social_twitter "></i>
                                    </a>
                                </Link>
                            </li>
                            <li className="list-inline-item">
                                <Link href="/#">
                                    <a className="social-icon pt text-xs-center" target="_blank" href="#">
                                        <i className="elegant-icon social_pinterest "></i>
                                    </a>
                                </Link>
                            </li>
                        </ul>
                        <div className="off-canvas-toggle-cover d-inline-block">
                            <div className="off-canvas-toggle hidden d-inline-block" id="off-canvas-toggle" onClick={addClass}>
                                <span></span>
                            </div>
                        </div>
                    </div>
                    <div className="clearfix"></div>
                </div>
            </div>
        </>
    );
};

export default Menu;
