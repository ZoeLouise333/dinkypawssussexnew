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
