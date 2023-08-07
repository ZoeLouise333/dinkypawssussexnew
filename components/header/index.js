import Link from "next/link";
import { useState } from "react";

import HamburgerMenu from "../hamburger/index.js";
export default function Header() {
  const [shouldShowMobileNav, setShouldShowMobileNav] = useState(false);

  const onMobileMenuClick = () => {
    setShouldShowMobileNav(!shouldShowMobileNav);
  };

  return (
    <>
      <div className="max-w-full h-12 flex justify-start items-center bg-black mb-4 text-white rounded-md ">
        <div className="flex md:hidden">
          <HamburgerMenu />
        </div>
        <div className="hidden md:flex"></div>
      </div>
      <div className="navigationbar">
        <div className="navigationbar__mobile">
          <div className="logo__mobile"></div>
        </div>
        <div className="navigationbar__position">
          <Link href="/" className="navigationbar__text">
            HOME
          </Link>
          <Link href="/about" className="navigationbar__text">
            ABOUT ME
          </Link>
          <Link href="/services" className="navigationbar__text">
            SERVICES
          </Link>
          <Link href="/portfolio" className="navigationbar__text">
            THE DINKY PAWS
          </Link>
          <Link href="/reviews" className="navigationbar__text">
            REVIEWS
          </Link>
          <Link href="/contact" className="navigationbar__text">
            CONTACT
          </Link>
        </div>
      </div>

      <div className="logobar">
        <div className="logoname">DINKY PAWS</div>
        <div className="paw-container">
          <div className="paw a"></div>
          <div className="paw b up"></div>
          <div className="paw c"></div>
          <div className="paw d up"></div>
          <div className="paw e"></div>
          <div className="paw f up"></div>
          <div className="paw g"></div>
          <div className="paw h up"></div>
          <div className="paw i"></div>
          <div className="paw j up"></div>
          <div className="paw k"></div>
          <div className="paw l up"></div>
          <div className="paw m"></div>
          <div className="paw n up"></div>
          <div className="paw o"></div>
          <div className="paw p up"></div>
          <div className="paw q"></div>
          <div className="paw r up"></div>
          <div className="paw s"></div>
        </div>
      </div>
      <div className="title"></div>
      <div
        className={
          shouldShowMobileNav ? "mobile-nav mobile-nav--show" : "mobile-nav"
        }
      >
        <div className="navBar">
          <div className="navBarLinks">
            <Link href="/">HOME</Link>
            <Link href="/about">ABOUT ME</Link>
            <Link href="/services">SERVICES</Link>
            <Link href="/portfolio">THE DINKY PAWS</Link>
            <Link href="/reviews">REVIEWS</Link>
            <Link href="/contact">CONTACT</Link>
          </div>
        </div>
      </div>
    </>
  );
}
